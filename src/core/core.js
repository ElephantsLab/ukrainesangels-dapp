import { ethers } from "ethers";
import conf from "./Config.json";
// import axios from "axios";
// import { abi } from "../assets/abi/bridge.js";
import { tokenAbi } from "../assets/abi/tokenAbi";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default class Core {
    constructor(vueContext, blockchain = conf.PRIMARY_BLOCKCHAIN.chainId) {
        this.context = vueContext;
        this.Config = conf[blockchain];
        this.baseURL = conf.baseUrl;
        this.init();
    }

    async init() {
        if (window.localStorage.getItem("selectedWallet") === "metamask" && window.ethereum) {
            const blockchain = Number(window.ethereum.chainId);
            this.primaryPovider = new ethers.providers.Web3Provider(window.ethereum);
            for (let chainId of conf.SUPPORTED_BLOCKCHAINS) {
                this[`provider_${chainId}`] = new ethers.providers.JsonRpcProvider(`${conf[chainId].NODE}`);
                this.context.updateContractAddress(conf[chainId].TOKEN_ADDRESS);
                this[`token_${chainId}`] = new ethers.Contract(conf[chainId].TOKEN_ADDRESS, tokenAbi, this[`provider_${chainId}`]).connect(
                    this[`provider_${chainId}`]
                );

                if (blockchain === Number(chainId)) {
                    this.provider = this.primaryPovider;
                    this.signer = this.provider.getSigner();
                    this.context.$store.commit("setChainId", chainId);
                    this.currentBlockchain = Number(blockchain);
                    this[`token_${chainId}`] = new ethers.Contract(conf[chainId].TOKEN_ADDRESS, tokenAbi, this.provider).connect(this.signer);
                } else {
                    this[`token_${chainId}`].connect(this[`provider_${chainId}`]);
                }
            }
        } else if (window.localStorage.getItem("selectedWallet") === "walletconnect") {
            const rpc = {};
            for (let chainId of conf.SUPPORTED_BLOCKCHAINS) {
                const url = conf.NETWORK_PARAMS.find((el) => Number(el.chainId) === Number(chainId))?.params.rpcUrls[0];
                rpc[chainId] = url;
            }
            this.providerInstance = new WalletConnectProvider({
                rpc: rpc,
            });
            if (!this.providerInstance.connected) {
                try {
                    // Create a dialogue
                    await this.providerInstance.enable();
                } catch (error) {
                    if (error.message === "User closed modal") {
                        window.localStorage.removeItem("address");
                        window.localStorage.removeItem("walletconnect");
                        window.localStorage.removeItem("selectedWallet");
                    }
                }
            }
            await this.subscribeToEvents();
            const WC_Obj = JSON.parse(window.localStorage.getItem("walletconnect"));
            const blockchain = Number(WC_Obj?.chainId);

            this.primaryPovider = new ethers.providers.Web3Provider(this.providerInstance, "any");

            for (let chainId of conf.SUPPORTED_BLOCKCHAINS) {
                this[`provider_${chainId}`] = new ethers.providers.JsonRpcProvider(`${conf[chainId].NODE}`);
                this[`token_${chainId}`] = new ethers.Contract(conf[chainId].BRNG_TOKEN_ADDRESS, tokenAbi, this[`provider_${chainId}`]).connect(
                    this[`provider_${chainId}`]
                );

                if (blockchain === Number(chainId)) {
                    this.provider = this.primaryPovider;
                    this.signer = this.provider.getSigner();
                    this.context.$store.commit("setChainId", chainId);
                    this.currentBlockchain = Number(blockchain);
                    this[`token_${chainId}`] = new ethers.Contract(conf[chainId].BRNG_TOKEN_ADDRESS, tokenAbi, this.provider).connect(this.signer);
                } else {
                    this[`token_${chainId}`].connect(this[`provider_${chainId}`]);
                }
            }
            // else {
            //     let provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");;
            //     this.provider = provider;
            //     // this.signer = provider.getSigner();
            //     return true
            // }
            return true;
        } else if (!window.localStorage.getItem("selectedWallet")) {
            let provider = new ethers.providers.JsonRpcProvider("https://bscnode.cloud/");
            this.provider = provider;
            for (let chainId of conf.SUPPORTED_BLOCKCHAINS) {
                this[`token_${chainId}`] = new ethers.Contract(conf[chainId].TOKEN_ADDRESS, tokenAbi, provider).connect(provider);
            }
            // this.signer = provider.getSigner();
        }
        // console.log(this);
        return true;
    }

    async subscribeToEvents() {
        try {
            if (!this.providerInstance) {
                return;
            }

            this.providerInstance.on("accountsChanged", async (accounts) => {
                let currentAccount = window.localStorage.getItem("address");
                console.log(`connector.on("accountsChanged")`);

                const address = accounts[0];

                if (!currentAccount || address.toLowerCase() !== currentAccount.toLowerCase()) {
                    currentAccount = address;
                    localStorage.setItem("address", currentAccount);

                    // _this.$root.core.setLangForAddress(localStorage.getItem("lang"), localStorage.getItem('address'));
                    location.reload();
                } else if (address.toLowerCase() === currentAccount.toLowerCase()) {
                    this.context.$store.commit("setCurrentAddress", address);
                }
            });
            if (this.providerInstance.connected) {
                const { chainId, accounts } = this.providerInstance;

                this.onSessionUpdate(accounts, chainId);
            }
        } catch (error) {
            console.log(error);
        }
    }
    async killSession() {
        await this.providerInstance.disconnect();
    }

    async onDisconnect() {
        window.localStorage.removeItem("address");
        window.localStorage.removeItem("walletconnect");
        window.location.reload();
    }

    async onSessionUpdate(accounts, chainId) {
        let currentAccount = localStorage.getItem("address");
        const address = accounts[0];
        if (!currentAccount || address.toLowerCase() !== currentAccount.toLowerCase()) {
            currentAccount = address;
            localStorage.setItem("address", currentAccount);

            // _this.$root.core.setLangForAddress(localStorage.getItem("lang"), localStorage.getItem('address'));
            location.reload();
        } else if (address.toLowerCase() === currentAccount.toLowerCase()) {
            this.currentBlockchain = Number(chainId);
            this.context.$store.commit("setCurrentBlockchain", this.currentBlockchain);
            this.context.$store.commit("setCurrentAddress", address);
        }
    }

    async changeNetwork(context, blockchain) {
        const selectedWallet = window.localStorage.getItem("selectedWallet");
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

        if (selectedWallet && selectedWallet === "metamask") {
            if (window.ethereum) {
                try {
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: switchParams,
                    });

                    const highestId = window.setTimeout(() => {
                        for (let i = highestId; i >= 0; i--) {
                            // console.log(i);
                            window.clearInterval(i);
                        }
                    }, 0);
                    console.log("chain changed");
                } catch (switchError) {
                    // This error code indicates that the chain has not been added to MetaMask.
                    if (switchError.code === 4902 || switchError?.code?.toString() === "-32603") {
                        try {
                            await window.ethereum.request({
                                method: "wallet_addEthereumChain",
                                params: params,
                            });

                            const highestId = window.setTimeout(() => {
                                for (let i = highestId; i >= 0; i--) {
                                    // console.log(i);
                                    window.clearInterval(i);
                                }
                            }, 0);
                        } catch (addError) {
                            console.log(addError);
                        }
                    }

                    // handle other "switch" errors
                }
            } else {
                alert("Please install metamask wallet extension");
            }
        } else if (selectedWallet && selectedWallet === "walletconnect") {
            try {
                await this.provider.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: switchParams,
                });

                const highestId = window.setTimeout(() => {
                    for (let i = highestId; i >= 0; i--) {
                        // console.log(i);
                        window.clearInterval(i);
                    }
                }, 0);
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902 || switchError?.code?.toString() === "-32603" || switchError.toString().includes("Unrecognized chain")) {
                    try {
                        await this.provider.provider.request({
                            method: "wallet_addEthereumChain",
                            params: params,
                        });

                        const highestId = window.setTimeout(() => {
                            for (let i = highestId; i >= 0; i--) {
                                // console.log(i);
                                window.clearInterval(i);
                            }
                        }, 0);
                    } catch (addError) {
                        console.log(addError);
                    }
                }
                console.log(switchError);

                // handle other "switch" errors
            }
        }
    }

    connectWallet() {
        const _this = this;
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
                    _this.context.setCurrentAddress(undefined);
                    // _this.$store.commit("setCurrentAddress", "");

                    // MetaMask is locked or the user has not connected any accounts
                    // alert('Please connect to MetaMask.');
                } else if (accounts[0] !== currentAccount) {
                    currentAccount = accounts[0];
                    localStorage.setItem("address", currentAccount);
                    localStorage.setItem("selectedWallet", "metamask");
                    _this.context.setCurrentAddress(currentAccount);

                    // _this.$root.core.setLangForAddress(localStorage.getItem("lang"), localStorage.getItem('address'));
                    location.reload();
                } else if (accounts.length > 0) {
                    _this.walletUnlocked = true;
                    _this.context.setCurrentAddress(accounts[0]);
                    localStorage.setItem("selectedWallet", "metamask");
                }
            }
        }
    }

    async mint(mintVal) {
        try {
            const txResponse = await this[`token_${this.currentBlockchain}`].buy({ value: ethers.utils.parseEther(mintVal.toString()) });
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
            const txResponse = await this[`token_${this.currentBlockchain}`].buyMore(amountOfNFT, { value: ethers.utils.parseEther(bnbVal.toString()) });
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
                value: ethers.utils.parseEther(amount.toString()),
            };
            if (isMax) {
                tx.value = ethers.utils.parseEther(amount.toString()).sub(ethers.BigNumber.from("300000").mul(await this.provider.getGasPrice(tx)));
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
            const balance = await this.provider.getBalance(address);
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
