<template>
    <div class="modal">
        <div class="modal-wrapper">
            <button class="btn-modal-close" v-on:click="closeModal">
                <i class="i-close-fill"></i>
            </button>
            <div class="modal-content">
                <div class="modal-center">
                    <div class="modal-main-icon modal-icon-cancel">
                        <i class="i-alarm-warning-line"></i>
                    </div>
                    <div class="modal-name">{{ lang.get("PENDING_WALLET_REQUEST") }}</div>

                    <p class="modal-p">{{ revertReasonGetter }}</p>
                    <a v-if="warningModalGetter" v-on:click="closeModal" class="btn modal-main-btn">{{ lang.get("GOT_IT") }}</a>
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
        components: {
            SocialLinks,
        },
        data() {
            return {
                lang: new MultiLang(this),
            };
        },
        methods: {
            ...mapMutations(["updateWarningModal", "updateRevertReason"]),
            openTx() {
                window.open(conf.SCAN_TX + this.warningModalGetter);
            },
            closeModal() {
                this.updateWarningModal(false);
                this.updateRevertReason(undefined);
            },
        },
        computed: mapGetters(["warningModalGetter", "revertReasonGetter"]),
    };
</script>
