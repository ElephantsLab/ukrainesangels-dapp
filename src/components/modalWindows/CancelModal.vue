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
                        Transaction Failed
                    </div>
                    <p class="modal-p" v-if="!revertReasonGetter" >
                        Oops! Something went wrong.
                        <br>                     
                        Most likely, you don`t have enough BNB in your wallet.
                    </p>
                  <p class="modal-p" v-else>{{ revertReasonGetter }}</p>
                    <a v-if="statusTxGetter" v-on:click="openTx" class="btn modal-main-btn">Try Again</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SocialLinks from '@/components/SocialLinks.vue'
import {mapGetters, mapMutations} from "vuex";
import conf from "../../core/Config.json";

export default ({
  components: {
    SocialLinks,
  },
  methods: {
    ...mapMutations(["updateTxFailed", "updateRevertReason"]),
    openTx() {
      window.open(conf.SCAN_TX + this.statusTxGetter);
    },
    closeModal() {
      this.updateTxFailed(false);
      this.updateRevertReason(undefined);
    }
  },
  computed: mapGetters(["statusTxGetter", "revertReasonGetter"])
})
</script>
