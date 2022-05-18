<template>
    <div class="modal">
        <div class="modal-wrapper">
            <button class="btn-modal-close" v-on:click="closeModal">
                <i class="i-close-fill"></i>
            </button>
            <div class="modal-content">
                <div class="modal-center">
                    <div class="modal-main-icon modal-icon-cancel">
                        <i class="i-close-circle-fill"></i>
                    </div>
                    <div class="modal-name">
                        {{ lang.get("TRANS_FAILED") }}
                    </div>
                    <p class="modal-p" v-if="!revertReasonGetter">
                        {{ lang.get("TRANS_OOPS") }}
                        <br />
                        {{ lang.get("NOT_ENOUGH_BALANCE") }}
                    </p>
                    <p class="modal-p" v-else>{{ revertReasonGetter }}</p>
                    <a v-if="statusTxGetter" v-on:click="openTx" class="btn modal-main-btn">{{ lang.get("TRY_AGAIN") }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MultiLang from "../../core/multilang.js";
    import SocialLinks from "@/components/SocialLinks.vue";
    import { mapGetters, mapMutations } from "vuex";
    import conf from "../../core/Config.json";

    export default {
        data: function () {
            return {
                lang: new MultiLang(this),
            };
        },
        components: {
            SocialLinks,
        },
        mounted() {
            this.lang.init();
        },
        methods: {
            ...mapMutations(["updateTxFailed", "updateRevertReason"]),
            openTx() {
                window.open(conf.SCAN_TX + this.statusTxGetter);
            },
            closeModal() {
                this.updateTxFailed(false);
                this.updateRevertReason(undefined);
            },
        },
        computed: mapGetters(["statusTxGetter", "revertReasonGetter"]),
    };
</script>
