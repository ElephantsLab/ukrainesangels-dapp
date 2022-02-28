<template>
  <div class="main-wrapper">
    <div class="container">
    <div class="title">Mint</div>
    <button v-on:click="mint">mint</button>

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["mintNFT"]),
    mint() {
      const userAddress = localStorage.getItem("account");
      if (userAddress) {
        this.mintNFT(userAddress);
      }
    }
  }
}
</script>