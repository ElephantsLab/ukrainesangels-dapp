<template>
  <div>
    <div>Header</div>
    <button v-on:click="connectWallet">Connect Wallet</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["connectWallet"])
  }
}
</script>