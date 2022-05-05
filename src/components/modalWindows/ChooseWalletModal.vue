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
                    <a v-on:click="" class="btn modal-main-btn">MetaMask</a>
                    <br />
                    <a v-on:click="" class="btn modal-main-btn">WalletConnect</a>
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
        },
        computed: mapGetters(["statusWalletChooseGetter"]),
    };
</script>
