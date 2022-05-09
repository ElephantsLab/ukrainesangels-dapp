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
                    <div class="modal-name">Looks like you already have a pending request in your wallet.</div>

                    <p class="modal-p">{{ revertReasonGetter }}</p>
                    <a v-if="warningModalGetter" v-on:click="closeModal" class="btn modal-main-btn">Got it!</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SocialLinks from "@/components/SocialLinks.vue";
    import { mapGetters, mapMutations } from "vuex";
    import conf from "../../core/Config.json";

    export default {
        components: {
            SocialLinks,
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
