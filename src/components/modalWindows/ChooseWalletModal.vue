<template>
    <div class="modal">
        <div class="modal-wrapper">
            <button class="btn-modal-close" v-on:click="updateWalletChooseModal(false)">
                <i class="i-close-fill"></i>
            </button>
            <div class="modal-content">
                <div class="modal-center">
                    <div class="modal-main-icon modal-icon-trans-proces"></div>
                    <div class="modal-name">{{ lang.get("PLEASE_CHOOSE_WALLET") }}</div>
                    <p class="modal-p">
                        {{ lang.get("CHOOSE_WALLET_DESC") }}
                        <br />
                    </p>
                    <a v-on:click="setupDesiredWallet('metamask'), $emit('setWalletAndAddress')" class="btn connect-meta">
                        <span class="icon-mt"></span>
                        MetaMask</a
                    >
                    <br />
                    <a v-on:click="setupDesiredWallet('walletconnect'), $emit('setWalletAndAddress')" class="btn connect-wallet">
                        <span class="icon-wtc"></span>
                        WalletConnect</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MultiLang from "../../core/multilang.js";
    import { mapMutations, mapGetters } from "vuex";
    import conf from "../../core/Config.json";

    export default {
        name: "ChooseWalletModal",
        mounted() {
            this.lang.init();
        },
        data: function () {
            return {
                lang: new MultiLang(this),
            };
        },
        methods: {
            ...mapMutations(["updateWalletChooseModal"]),
            openTx() {
                window.open(conf.SCAN_TX + this.statusTxGetter);
            },
            async setupDesiredWallet(walletOption) {
                if (walletOption === "metamask" && !window.ethereum) {
                    window.open(`https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn`, "_blank");
                }
                const previousSelection = window.localStorage.getItem("selectedWallet");
                if (walletOption && previousSelection && walletOption.toLowerCase() === previousSelection.toLowerCase()) {
                    this.$emit("close");
                }
                if (walletOption) {
                    if (previousSelection === "walletconnect" && walletOption === "metamask") {
                        window.localStorage.setItem("selectedWallet", walletOption);
                        await this.$root.core.killSession();
                    }
                    window.localStorage.setItem("selectedWallet", walletOption);
                }
            },
        },
        computed: mapGetters(["statusWalletChooseGetter"]),
    };
</script>
