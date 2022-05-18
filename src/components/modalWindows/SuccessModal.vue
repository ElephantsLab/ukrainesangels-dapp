<template>
    <div class="modal">
        <div class="modal-wrapper">
            <button class="btn-modal-close" v-on:click="updatetxStatusModal(false)">
                <i class="i-close-fill"></i>
            </button>
            <div class="modal-content">
                <div class="modal-center">
                    <div class="modal-main-icon modal-icon-success">
                        <i class="i-checkbox-circle-fill"></i>
                    </div>
                    <div class="modal-name">
                        {{ lang.get("TRANS_SUCCESS") }}
                    </div>
                    <p class="modal-p" v-html="lang.get('TRANS_SUCCESS_DESC')"></p>
                    <!--                  v-on:click="openTx"-->
                    <a href="/MyCollection" class="btn modal-main-btn">{{ lang.get("SEE_MY_ANGELS") }}</a>
                </div>
            </div>
            <div class="modal-footer">
                <div class="modal-center">
                    <p class="modal-p">
                        {{ lang.get("TELL_EVERYBODY") }}
                    </p>
                    <social-links />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MultiLang from "../../core/multilang.js";
    import SocialLinks from "@/components/SocialLinks.vue";
    import { mapMutations, mapGetters } from "vuex";
    import conf from "../../core/Config.json";

    export default {
        data() {
            return {
                conf: conf,
                lang: new MultiLang(this),
            };
        },
        components: {
            SocialLinks,
        },
        methods: {
            ...mapMutations(["updatetxStatusModal"]),
            openTx() {
                window.open(conf.SCAN_TX + this.statusTxGetter);
            },
        },
        mounted() {
            this.lang.init();
        },
        computed: mapGetters(["statusTxGetter"]),
    };
</script>
