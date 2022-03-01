<template>
  <div class="main-wrapper">
    <section class="section-main">
      <div class="container">
        <div class="section-block section-block-content">
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
        <div class="section-block section-block-card">
          <div class="card card-main">
            <div class="card-section">
              <div class="card-main-img"></div>
            </div>
            <div class="card-footer">
              <div class="input-title">
                Count of NFT’s
              </div>
              <div class="input-container">                              
                <div class="input-wrapper input-count">
                  <button class="btn btn-minus" v-on:click="decrementVal">
                    <i class="i-subtract-line"></i>
                  </button>
                  <input class="input" type="number" v-model="mintVal">
                  <button class="btn btn-plus" v-on:click="incrementVal">
                    <i class="i-add-line"></i>
                  </button>
                </div>
                <button class="btn btn-submit" v-on:click="mint">Mint</button>
              </div>
              <div class="input-total">
                Mint 1 NFT using
                <span>0.5 BNB</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    <div class="container">-->
<!--    <div class="title">Mint</div>-->
<!--    <form v-on:submit.prevent>-->
<!--      <input type="number" v-model="mintVal">-->
<!--      <button v-on:click="mint">mint</button>-->
<!--    </form>-->
<!--    </div>-->
  </div>
</template>

<script>
const conf = require("../core/Config.json");

export default {
  data() {
    return {
      mintVal: 1
    }
  },
  methods: {
    async mint() {
      const userAddress = localStorage.getItem("account");
      if (userAddress) {
        if (this.mintVal <= 1) {
          await this.$root.core.mint(conf.BNBVal);
        } else {
          await this.$root.core.buyMore(this.mintVal);
        }
      }
    },
    incrementVal() {
      this.mintVal++;
    },
    decrementVal() {
      if (this.mintVal > 0) {
        this.mintVal--;
      }
    }
  }
}
</script>