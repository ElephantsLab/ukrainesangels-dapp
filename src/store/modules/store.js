export default {
    state: {

    },
    mutations: {

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
        },
        mintNFT({ commit }, address) {
            console.log(commit);
            console.log(address);
        }
    },
    getters: {

    }
}