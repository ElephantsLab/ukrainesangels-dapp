import { Contract, ethers } from "ethers";
import conf from "../Config.json";
import axios from "axios";
import { abi } from "../assets/abi/bridge.js";
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
                    this[`bridge_${chainId}`] = new ethers.Contract(conf[chainId].CONTRACT_ADDRESS, abi, this[`provider_${chainId}`]).connect(
                        this[`provider_${chainId}`]
                    );
                    this[`token_${chainId}`] = new ethers.Contract(conf[chainId].TOKEN_ADDRESS, tokenAbi, this[`provider_${chainId}`]).connect(
                        this[`provider_${chainId}`]
                    );

                    if (blockchain === Number(chainId)) {
                        this.providerAddress = this.primaryPovider;
                        this.signer = this.providerAddress.getSigner();
                        this.context.$store.commit("setChainId", chainId);
                        this.currentBlockchain = Number(blockchain);
                        this[`contract_${chainId}`] = new ethers.Contract(conf[chainId].CONTRACT_ADDRESS, abi, this.providerAddress).connect(this.signer);
                        this[`token_${chainId}`] = new ethers.Contract(conf[chainId].TOKEN_ADDRESS, tokenAbi, this.providerAddress).connect(this.signer);
                        // const sign = async (lockIdx, recipient, amount, source, destination) => {
                        //     lockIdx = "0x0000000000000000000000000000000000000000000000000000000000000000";
                        //     amount = "0x0000000000000000000000000000000000000000000000000de0b6b3a7640000";
                        //     recipient = "0xa465316987d0508bf252b8d0676b82b2278c08af";
                        //     source = "0x4253430000000000000000000000000000000000000000000000000000000000";
                        //     destination = "0x4b41524d00000000000000000000000000000000000000000000000000000000";
                        //     let hash = ethers.utils.solidityKeccak256(
                        //         ["uint256", "address", "uint256", "bytes32", "bytes32"],
                        //         [lockIdx, recipient, amount, source, destination]
                        //     );

                        //     return await this.signer.signMessage(ethers.utils.arrayify(hash));
                        // };
                        // const ress = await sign(1, 2, 3, 4, 5);
                        // console.log(ress);
                        const res = ethers.utils.parseBytes32String("0x6273630000000000000000000000000000000000000000000000000000000000");
                        // console.log(res);
                    } else {
                        this[`contract_${chainId}`].connect(this[`provider_${chainId}`]);
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
}
