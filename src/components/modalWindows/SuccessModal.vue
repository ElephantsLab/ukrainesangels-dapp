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
                        Transaction Successful
                    </div>
                    <!-- <p class="modal-p">
                        1234
                    </p> -->
                    <a v-on:click="openTx" class="btn modal-main-btn">Check my NFT</a>
                </div>
            </div>
            <div class="modal-footer">
                <div class="modal-center">
                    <p class="modal-p">
                        Share theTell your friends about us
                    </p>
                    <social-links/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SocialLinks from '@/components/SocialLinks.vue'
import { mapMutations, mapGetters } from "vuex";
import conf from "../../core/Config.json";

export default ({
  data() {
    return {
      conf: conf
    }
  },
  components: {
    SocialLinks,
  },
  methods: {
      ...mapMutations(["updatetxStatusModal"]),
    openTx() {
        window.open(conf.SCAN_TX + this.statusTxGetter);
    }
  },
  computed: mapGetters(["statusTxGetter"])
})
</script>
