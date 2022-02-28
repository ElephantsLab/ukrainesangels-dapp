<template>
  <div>
    <h2>Mint</h2>
    <button v-on:click="mint">mint</button>
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