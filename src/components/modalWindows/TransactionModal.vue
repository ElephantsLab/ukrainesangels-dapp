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
                        Your transaction is being processed 
                    </div>
                    <p class="modal-p">
                        Don’t worry, it doesn’t take too long.
                        Typically, it’s less than half a minute 
                        till you’re there
                    </p>
                    <a v-if="currentAddress" v-on:click="openWallet" class="btn modal-main-btn">{{ currentAddress[0] + currentAddress[1] + currentAddress[2] + currentAddress[3] + currentAddress[4] }}...{{ currentAddress[39] + currentAddress[40] + currentAddress[41] }}</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import conf from "../../core/Config.json";

export default {
  data() {
    return {
      currentAddress: undefined
    }
  },
  methods: {
    ...mapMutations(["updateTxModal"]),
    openWallet() {
      const userAddress = localStorage.getItem("address");
      if (userAddress) {
        window.open(conf.SCAN_ADDRESS + userAddress);
      }
    }
  },
  mounted() {
    this.currentAddress = localStorage.getItem("address");
  }
}
</script>