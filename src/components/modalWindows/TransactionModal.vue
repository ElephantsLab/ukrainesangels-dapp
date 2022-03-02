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
                        Your Transaction Is Being Processed 
                    </div>
                    <p class="modal-p">
                        We’re grateful for your involvement.
                        <br>
                        Your transaction won’t take longer than half a minute.
                    </p>
                    <a v-on:click="openTx" class="btn modal-main-btn">Transaction</a>
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
    ...mapMutations(["updateTxModal"]),
    openTx() {
      window.open(conf.SCAN_TX + this.statusTxGetter);
    }
  },
  computed: mapGetters(["statusTxGetter"])
}
</script>