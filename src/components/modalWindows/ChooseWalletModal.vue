<template>
    <div class="modal">
        <div class="modal-wrapper">
            <button class="btn-modal-close" v-on:click="updateWalletChooseModal(false)">
                <i class="i-close-fill"></i>
            </button>
            <div class="modal-content">
                <div class="modal-center">
                    <div class="modal-main-icon modal-icon-trans-proces"></div>
                    <div class="modal-name">Please choose a wallet</div>
                    <p class="modal-p">
                        Choose either MetaMask wallet extension or WalletConnect to connect the desired wallet application
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
    import { mapMutations, mapGetters } from "vuex";
    import conf from "../../core/Config.json";

    export default {
        methods: {
            ...mapMutations(["updateWalletChooseModal"]),
            openTx() {
                window.open(conf.SCAN_TX + this.statusTxGetter);
            },
            async setupDesiredWallet(walletOption) {
                console.log(this.$attrs);
                const previousSelection = window.localStorage.getItem("selectedWallet");
                if (walletOption && previousSelection && walletOption.toLowerCase() === previousSelection.toLowerCase()) {
                    this.$emit("close");
                }
                if (walletOption) {
                    if (previousSelection === "walletconnect" && walletOption === "metamask") {
                        window.localStorage.setItem("selectedWallet", walletOption);
                        await this.$parent.core.killSession();
                    }
                    window.localStorage.setItem("selectedWallet", walletOption);
                }
            },
        },
        computed: mapGetters(["statusWalletChooseGetter"]),
    };
</script>
