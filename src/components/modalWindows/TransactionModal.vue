<template>
    <div class="modal">
        <div class="modal-wrapper">
            <button class="btn-modal-close" v-on:click="updateTxModal(false)">
                <i class="i-close-fill"></i>
            </button>
            <div class="modal-content">
                <div class="modal-center">
                    <div class="modal-main-icon modal-icon-trans-proces"></div>
                    <div class="modal-name">
                        {{ lang.get("PENDING_TRANS") }}
                    </div>
                    <p class="modal-p" v-html="lang.get('PENDING_TRANS_DESC')"></p>
                    <a v-on:click="openTx" class="btn modal-main-btn">{{ lang.get("TRANSACTION") }}</a>
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
        data() {
            return {
                lang: new MultiLang(this),
            };
        },
        mounted() {
            this.lang.init();
        },
        methods: {
            ...mapMutations(["updateTxModal"]),
            openTx() {
                window.open(conf.SCAN_TX + this.statusTxGetter);
            },
        },
        computed: mapGetters(["statusTxGetter"]),
    };
</script>
