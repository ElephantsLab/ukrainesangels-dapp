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
        }
    },
    getters: {

    }
}