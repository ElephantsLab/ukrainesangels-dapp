import axios from "axios";
const SHEET_ID = "1pRrgE6HXQViRbRqR_iU97qLYcHnMCZ4RUD89WUPnIK0";
const API_KEY = "AIzaSyAajyuUom9NqV741oJjvAtS0xUgmwEyV4o";

export default {
    state: {
        address: undefined,
        chainId: undefined
    },
    mutations: {
        setCurrentAddress(state, val) {
            state.address = val;
        },
        setChainId(state, val) {
            state.chainId = val;
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
        }
    },
    getters: {
        userAddressGetter(state) {
            return state.address;
        }
    }
}