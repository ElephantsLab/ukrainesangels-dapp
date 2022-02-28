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
            // else {
            //     let provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");;
            //     this.providerAddress = provider;
            //     // this.signer = provider.getSigner();
            //     return true
            // }
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
}
