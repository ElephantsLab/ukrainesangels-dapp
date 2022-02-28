import abi from "../abi/nftAbi.json";
import ethers from "ethers";
const contractAddress = "0xa5215e3Ac1F3263A224D9CD3e31056294F054fD9";

export default class Core {

    async mint(value) {
        console.log(abi, ethers, contractAddress, value);
    }
}
