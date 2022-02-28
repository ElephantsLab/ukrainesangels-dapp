<template>
  <div>
    <h2>Mint</h2>
    <button v-on:click="mint">mint</button>
  </div>
</template>

<script>
export default {
  methods: {
    mint() {
      const userAddress = localStorage.getItem("account");
      if (userAddress) {
      }
    }
  }
}
</script>