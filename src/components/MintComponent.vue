<template>
  <div class="main-wrapper">
    <section class="section-main">
      <div class="container">
        <div class="title0">Our mission</div>
        <div class="title1"> 
          <span>help to SAVE </span>
          <span>UKRAINian people</span>
        </div>
        <div class="describe">
          Our primary mission is to help the people of Ukraine in these difficult times together with the crypto community.
          <br>
          <br>
          Each sold NFT from the collection will be sent to help wounded soldiers, refugees, doctors and other war-affected residents of Ukraine, as well
          as to rehabilitation of settlements, infrastructure, roads, houses damaged by shells and military equipment.
        </div>
        <div class="btn-wrapper">
          <button class="btn btn-yellow">Watch Collection</button>
          <button class="btn btn-blue">Make donation</button>
        </div>
      </div>
    </section>
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
        await this.$root.core.mint(this.mintVal, userAddress);
      }
    }
  }
}
</script>