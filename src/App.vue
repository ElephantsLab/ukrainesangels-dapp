<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
   <cancel-modal v-if="txFailedGetter" />
   <success-modal v-if="txModalStatusGetter" />
   <transaction-modal v-if="txModalGetter" />
  <router-view/>
  <footer-component />
</template>

<script>
import MainView from "@/views/MainView";
import Core from "../src/core/core.js";
import FooterComponent from "@/components/FooterComponent";
import TransactionModal from "@/components/modalWindows/TransactionModal";
import SuccessModal from "@/components/modalWindows/SuccessModal";
import CancelModal from "@/components/modalWindows/CancelModal";
import conf from "./core/Config.json";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    MainView,
    FooterComponent,
    TransactionModal,
    SuccessModal,
    CancelModal,
  },
  methods: {
    ...mapActions(["fetchHelpCenters"]),
    ...mapMutations(["updateTxModal", "updatetxStatusModal", "updateTx", "updateTxFailed", "updateRevertReason"]),
    checkWalletOption(wallet) {
      let _this = this;

      if (wallet === "metamask") {
        window.ethereum
            .request({ method: "eth_accounts" })
            .then(handleAccountsChanged)
            .catch((err) => {
              localStorage.removeItem("address");
            });

        window.ethereum.on("accountsChanged", handleAccountsChanged);

        function handleAccountsChanged(accounts) {
          if (accounts.length > 0) {
            _this.walletUnlocked = true;
          }
        }
      }
    },

    setWalletOption(wallet) {
      let _this = this;

      this.selectedWallet = wallet;

      if (wallet) {
        localStorage.setItem("selectedWallet", wallet);
      }
      if (window.ethereum && this.selectedWallet === "metamask") {
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then(handleAccountsChanged)
            .catch((err) => {
              console.log(err);
              localStorage.removeItem("address");
            });

        // Note that this event is emitted on page load.
        // If the array of accounts is non-empty, you're already
        // connected.
        window.ethereum.on("accountsChanged", handleAccountsChanged);

        // For now, 'eth_accounts' will continue to always return an array
        function handleAccountsChanged(accounts) {
          if (!accounts.length) {
            localStorage.removeItem("account");
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(handleAccountsChanged)
                .catch((err) => {
                  console.log(err);
                  localStorage.removeItem("address");
                });
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
      } else {
        _this.noWallet = true;
      }
    },

    getWalletOption() {
      const selWallet = localStorage.getItem("selectedWallet");
      if (!selWallet) {
        return "metamask";
      } else {
        return selWallet;
      }
    },

    handleChainChanged(_chainId) {
      // We recommend reloading the page, unless you must do otherwise

      window.location.reload();
    },
    async changeNetwork(blockchain) {
      await this.$root.core.changeNetwork(this, blockchain);
    },
  },
  computed: mapGetters(["txModalGetter", "txModalStatusGetter", "txFailedGetter"]),
  async mounted() {
    setTimeout(async () => {
      if (window.ethereum.networkVersion && conf.NETWORK !== parseInt(window.ethereum.networkVersion)) {
        alert("Change your wallet extension to Binance Smart Chain network");
        await window.ethereum.request({ method: 'wallet_addEthereumChain', params: conf.NETWORK_PARAMS_ASK_TO_CONNECT.params });
        location.reload();
      }
    }, 1000);
    // this.lang.init();

    window.addEventListener("message", async function (e) {
      if (e.data && e.data.data && e.data.data.data && e.data.data.data.method === "metamask_unlockStateChanged") {
        this.walletUnlocked = e.data.data.data.params.isUnlocked;
      }
    });

    // let connected = await window.ethereum.isConnected();
    // const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    // if(connected && chainId !== "0x61") {

    // }

    let tronConnectAttemptsCounter = 0;
    let _this = this;
    // const walletOpiton = _this.getWalletOption();
    const walletOpiton = localStorage.getItem("selectedWallet");
    setTimeout(async function initContract() {
      try {
        // _this.$root.core = new Core(_this, )

        if (walletOpiton) {
          if (walletOpiton === "metamask" && !window.ethereum) {
            throw Error("No Metamask extension found");
          }

          if (window.ethereum) {
            //won't commit address without these checks
            if (window.ethereum) {
              window.ethereum.on("chainChanged", async (_chainId) => {
                if (conf.NETWORK !== parseInt(_chainId)) {
                  alert("Change your wallet extension to Binance Smart Chain network");
                  await window.ethereum.request({ method: 'wallet_addEthereumChain', params: conf.NETWORK_PARAMS_ASK_TO_CONNECT.params });
                  location.reload();
                }
                _this.$root.core = null;
                _this.$root.core = new Core(_this, Number(_chainId));

                // _this.$root.core.fetchActiveClaims(currentAccount, 10000);
                // _this.$root.core.fetchContractsReserves(10000);
                _this.startAutoClaim = true;
              });
              window.ethereum.on("isConnected", () => window.location.reload());
            }
            if (!window.ethereum.chainId) {
              throw new Error("no chainId");
            }

            let currentAccount = localStorage.getItem("address");
            _this.$store.commit("setCurrentAddress", currentAccount);

            _this.setWalletOption(_this.getWalletOption());

            // _this.$root.core.updateSiteStats(50000);
            // _this.$root.core.getCurrentRate();
            _this.$root.core = new Core(_this, Number(window.ethereum.chainId));

            if (_this.$root.core === undefined) {
              throw Error();
            }
            if (currentAccount) {
              // _this.$root.core.fetchActiveClaims(currentAccount, 10000);
              // _this.$root.core.fetchContractsReserves(10000);
            } else {
              // _this.$root.core.fetchContractsReserves(10000);
            }
          } else {
            _this.noWallet = true;
            _this.$root.core = new Core(_this);
            // _this.$root.core.fetchContractsReserves();
          }
        } else {
          // _this.showWalletOptions = true;
          _this.$root.core = new Core(_this);
        }
      } catch (ex) {
        if (ex.message === "no chainId") {
          setTimeout(initContract, 300);
          return;
        }
        console.log(ex);
        tronConnectAttemptsCounter++;
        if (tronConnectAttemptsCounter > 5 && ex.message == "No Metamask extension found") {
          _this.noWallet = true;
          _this.$root.core = new Core(_this);
          return;
        }
      }
    }, 400);
  },
  watch: {
    walletUnlocked: function () {
      let _this = this;
      setTimeout(function check() {
        if (_this.walletUnlocked === false) {
          _this.checkWalletOption(_this.selectedWallet);
          setTimeout(check, 1000);
          return;
        } else if (_this.walletUnlocked === true) {
        }
      }, 0);
    },
  },
};
</script>

<style>
#app {
  font-family: 'e-Ukraine Head', Helvetica, Arial,  sans-serif; 
  /* font-family: 'e-Ukraine Head', Helvetica, Arial,  sans-serif; */
  font-style: 'bold';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(225,225, 225, 0.5);
  background-color: #131313;
}
</style>