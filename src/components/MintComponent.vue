<template>
  <div class="main-wrapper">
    <div class="container">
    <div class="title">Mint</div>
    <form v-on:submit.prevent>
      <input type="number" v-model="mintVal">
      <button v-on:click="mint">mint</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mintVal: 0
    }
  },
  methods: {
    async mint() {
      const userAddress = localStorage.getItem("account");
      if (userAddress) {
        await this.$root.core.mint(this.mintVal);
      }
    }
  }
}
</script>