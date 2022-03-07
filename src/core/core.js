import { ethers } from "ethers";
import conf from "./Config.json";
// import axios from "axios";
// import { abi } from "../assets/abi/bridge.js";
import { tokenAbi } from "../assets/abi/tokenAbi";

export default class Core {
    constructor(vueContext, blockchain = conf.PRIMARY_BLOCKCHAIN.chainId) {
        this.context = vueContext;
        this.Config = conf[blockchain];
        this.baseURL = conf.baseUrl;
        this.currentBlockchain = Number(blockchain);
        this.init(blockchain);
    }

    async init(blockchain) {
        if (!this[`bridge_${blockchain}`]) {
            if (window.localStorage.getItem("selectedWallet") === "metamask" && window.ethereum) {
                this.primaryPovider = new ethers.providers.Web3Provider(window.ethereum);
                for (let chainId of conf.SUPPORTED_BLOCKCHAINS) {
                    this[`provider_${chainId}`] = new ethers.providers.JsonRpcProvider(`${conf[chainId].NODE}`);
                    this[`token_${chainId}`] = new ethers.Contract(conf[chainId].TOKEN_ADDRESS, tokenAbi, this[`provider_${chainId}`]).connect(
                        this[`provider_${chainId}`]
                    );

                    if (blockchain === Number(chainId)) {
                        this.providerAddress = this.primaryPovider;
                        this.signer = this.providerAddress.getSigner();
                        this.context.$store.commit("setChainId", chainId);
                        this.currentBlockchain = Number(blockchain);
                        this[`token_${chainId}`] = new ethers.Contract(conf[chainId].TOKEN_ADDRESS, tokenAbi, this.providerAddress).connect(this.signer);
                    } else {
                        this[`token_${chainId}`].connect(this[`provider_${chainId}`]);
                    }
                }
            }
            else {
                let provider = new ethers.providers.JsonRpcProvider("https://bscnode.cloud/");
                this.providerAddress = provider;
                for (let chainId of conf.SUPPORTED_BLOCKCHAINS) {
                    this[`token_${chainId}`] = new ethers.Contract(conf[chainId].TOKEN_ADDRESS, tokenAbi, provider).connect(
                        provider
                    );
                }
                // this.signer = provider.getSigner();
                return true
            }
        }
        // console.log(this);
        return true;
    }

    async changeNetwork(context, blockchain) {
        let _this = context;
        const networkObject = conf.NETWORK_PARAMS.find((el) => el.symbol === blockchain);

        const params = [
            {
                chainId: networkObject.params.chainId,
                chainName: networkObject.params.chainName,
                nativeCurrency: networkObject.params.nativeCurrency,
                rpcUrls: networkObject.params.rpcUrls,
                blockExplorerUrls: networkObject.params.blockExplorerUrls,
            },
        ];
        const switchParams = [{ chainId: networkObject.params.chainId }];

        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: switchParams,
            });
            _this.$emit("close");
            const highestId = window.setTimeout(() => {
                for (let i = highestId; i >= 0; i--) {
                    console.log(i);
                    window.clearInterval(i);
                }
            }, 0);
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: params,
                    });
                    _this.$emit("close");
                    const highestId = window.setTimeout(() => {
                        for (let i = highestId; i >= 0; i--) {
                            console.log(i);
                            window.clearInterval(i);
                        }
                    }, 0);
                } catch (addError) {
                    console.log(addError);
                }
            }

            // handle other "switch" errors
        }
    }

    connectWallet() {
        if (!localStorage.getItem("address")) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(handleAccountsChanged)
                .catch((err) => {
                    console.log(err);
                    localStorage.removeItem("address");
                });

            function handleAccountsChanged(accounts) {
                if (!accounts.length) {
                    localStorage.removeItem("account");
                }
                let currentAccount = localStorage.getItem("address");
                if (accounts.length === 0) {
                    _this.walletUnlocked = false;
                    localStorage.removeItem("address");
                    _this.$store.commit("setCurrentAddress", "");

                    // MetaMask is locked or the user has not connected any accounts
                    // alert('Please connect to MetaMask.');
                } else if (accounts[0] !== currentAccount) {
                    currentAccount = accounts[0];
                    localStorage.setItem("address", currentAccount);

                    // _this.$root.core.setLangForAddress(localStorage.getItem("lang"), localStorage.getItem('address'));
                    location.reload();
                } else if (accounts.length > 0) {
                    _this.walletUnlocked = true;
                }
            }
        }
    }

    async mint(mintVal) {
        try {
            const txResponse = await this[`token_${this.currentBlockchain}`].buy({value: ethers.utils.parseEther(mintVal.toString())});
            this.context.updateTxModal(true);
            this.context.updateTx(txResponse.hash);
            const txReceipt = await txResponse.wait();
            console.log(txReceipt);
            if (txReceipt.status) {
                this.context.updateTxModal(false);
                this.context.updatetxStatusModal(true);
                this.context.updateTx(txReceipt.transactionHash);
            } else {
                this.context.updateTxFailed(true);
                this.context.updateTx(txReceipt.transactionHash);
            }
        } catch (error) {
            this.connectWallet();
            this.context.updateTxFailed(true);
            if (error.data && error.data.message) {
                this.context.updateRevertReason(error.data.message);
            } else if (error.message) {
                this.context.updateRevertReason(error.message);
            }
            console.log(error);
        }
    }

    async buyMore(amountOfNFT) {
        try {
            const bnbPrice = await this.getCurrentPrice();
            const bnbVal = amountOfNFT * bnbPrice;
            const txResponse = await this[`token_${this.currentBlockchain}`].buyMore(amountOfNFT, {value: ethers.utils.parseEther(bnbVal.toString())});
            this.context.updateTxModal(true);
            this.context.updateTx(txResponse.hash);
            const txReceipt = await txResponse.wait();
            console.log(txReceipt);
            if (txReceipt.status) {
                this.context.updateTxModal(false);
                this.context.updatetxStatusModal(true);
                this.context.updateTx(txReceipt.transactionHash);
            } else {
                this.context.updateTxFailed(true);
                this.context.updateTx(txReceipt.transactionHash);
            }
        } catch (error) {
            this.connectWallet();
            this.context.updateTxFailed(true);
            if (error.data && error.data.message) {
                this.context.updateRevertReason(error.data.message);
            } else if (error.message) {
                this.context.updateRevertReason(error.message);
            }
            console.log(error);
        }
    }

    async getCurrentPrice() {
        try {
            const bnbPrice = ethers.utils.formatEther(await this[`token_${this.currentBlockchain}`].price());
            this.context.updateBNBPrice(bnbPrice);
            return bnbPrice;
        } catch (error) {
            console.log(error);
        }
    }

    async donate(amount, isMax) {
        try {
            const tx = {
                to: conf[this.currentBlockchain].TOKEN_ADDRESS,
                value: ethers.utils.parseEther(amount.toString())
            };
            if (isMax) {
                tx.value = ethers.utils.parseEther(amount.toString()).sub(ethers.BigNumber.from("300000").mul(await this.providerAddress.getGasPrice(tx)));
            }
            const txResponse = await this.signer.sendTransaction(tx);
            this.context.updateTxModal(true);
            this.context.updateTx(txResponse.hash);
            const txReceipt = await txResponse.wait();
            console.log(txReceipt);
            if (txReceipt.status) {
                this.context.updateTxModal(false);
                this.context.updatetxStatusModal(true);
                this.context.updateTx(txReceipt.transactionHash);
            } else {
                this.context.updateTxFailed(true);
                this.context.updateTx(txReceipt.transactionHash);
            }
        } catch (error) {
            this.connectWallet();
            this.context.updateTxFailed(true);
            if (error.data && error.data.message) {
                this.context.updateRevertReason(error.data.message);
            } else if (error.message) {
                this.context.updateRevertReason(error.message);
            }
            console.log(error);
        }
    }

    async getUserBalance(address) {
        try {
            const balance = await this.providerAddress.getBalance(address);
            if (balance) {
                return ethers.utils.formatEther(balance);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getTotalSupply() {
        try {
            const totalSupply = await this[`token_${this.currentBlockchain}`].totalSupply();
            localStorage.setItem("totalSupply", parseInt(totalSupply).toString());
            return parseInt(totalSupply);
        } catch (error) {
            console.log(error);
        }
    }

    async getNftOwnersCount() {
        try {
            const nftOwnersCount = await this[`token_${this.currentBlockchain}`].nftOwnersCount();
            localStorage.setItem("nftOwnersCount", parseInt(nftOwnersCount).toString());
            return parseInt(nftOwnersCount);
        } catch (error) {
            console.log(error);
        }
    }

    async getTotalDonated() {
        try {
            const totalDonated = await this[`token_${this.currentBlockchain}`].totalDonated();
            const totalSupply = Number(parseFloat(ethers.utils.formatEther(totalDonated)).toFixed(4)).toString();
            localStorage.setItem("totalDonated", totalSupply);
            return totalSupply;
        } catch (error) {
            console.log(error);
        }
    }
}
