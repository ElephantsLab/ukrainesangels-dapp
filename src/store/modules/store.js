import axios from "axios";
const SHEET_ID = "1pRrgE6HXQViRbRqR_iU97qLYcHnMCZ4RUD89WUPnIK0";
const API_KEY = "AIzaSyAajyuUom9NqV741oJjvAtS0xUgmwEyV4o";
const BASE_URL = "https://ukrainesangels.com/api/";

async function fetchNFT(url) {
    try {
        const respNFTData = await axios.get(url);
        return respNFTData.data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    state: {
        address: undefined,
        chainId: undefined,
        bnbPrice: 0.25,
        userNFTs: []
    },
    mutations: {
        setCurrentAddress(state, val) {
            state.address = val;
        },
        setChainId(state, val) {
            state.chainId = val;
        },
        updateBNBPrice(state, val) {
            state.bnbPrice = val;
        },
        updateUserNFTs(state, val) {
            state.userNFTs = val;
        }
    },
    actions: {
        connectWallet() {
            window.ethereum
                .request({method: 'eth_requestAccounts'})
                .then(handleAccountsChanged)
                .catch((err) => {console.log(err)});

            function handleAccountsChanged(accounts) {
                if (accounts.length > 0) {
                    localStorage.setItem("selectedWallet", "metamask");
                    localStorage.setItem("address", accounts[0]);
                    location.reload();
                }
            }
        },
        async fetchHelpCenters({ commit }, type) {
            try {
                let response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${type}!A1%3AL400?key=${API_KEY}`
                );
                return response.data.values;
            } catch (error) {
                console.log(error);
            }
        },
        async fetchNFTByUser({ commit }, address) {
            try {
                const responseNFTs = await axios.get(BASE_URL + "getNFTByAddress?address=" + address.toLowerCase());
                if (responseNFTs.data) {
                    // const NFTsFetchedData = [JSON.parse('{"name":"0","description":"This collection is a charitable act by the crypto community to help Ukraine save its people, communities and culture, strengthen Ukrainian army.","file_url":"https://metadata.ukrainesangels.com/0","image":"https://metadata.ukrainesangels.com/img/0.png","tokenId":0,"custom_fields":{"edition":1,"date":"1646414167","compiler":"This collection was designed and composed by ElephantsLab, a Ukrainian blockchain research and development company."},"extrernal_url":"https://ukrainesangels.com/","sex":"woman","country":"Belgium"}'),
                    // JSON.parse('{"name":"1","description":"This collection is a charitable act by the crypto community to help Ukraine save its people, communities and culture, strengthen Ukrainian army.","file_url":"https://metadata.ukrainesangels.com/1","image":"https://metadata.ukrainesangels.com/img/1.png","tokenId":1,"custom_fields":{"edition":1,"date":"1646242564","compiler":"This collection was designed and composed by ElephantsLab, a Ukrainian blockchain research and development company."},"extrernal_url":"https://ukrainesangels.com/","sex":"woman","country":""}')];
                    const NFTsFetchedData = [];
                    for (const nft of Object.values(responseNFTs.data.NFTs)) {
                        NFTsFetchedData.push(await fetchNFT(nft));
                    }
                    commit("updateUserNFTs", NFTsFetchedData);
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        userAddressGetter(state) {
            return state.address;
        },
        bnbPriceGetter(state) {
            return state.bnbPrice;
        },
        userNFTsGetter(state) {
            return state.userNFTs;
        }
    }
}