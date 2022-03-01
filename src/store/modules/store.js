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
                    localStorage.setItem("account", accounts[0]);
                }
            }
        }
    },
    getters: {
        userAddressGetter(state) {
            return state.address;
        }
    }
}