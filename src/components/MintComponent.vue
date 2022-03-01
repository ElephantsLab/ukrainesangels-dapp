<template>
  <div class="main-wrapper">
    <section class="section-main">
      <div class="container">
        <div class="section-block section-block-content">
          <div class="subtitle">Our mission</div>
          <h1 class="heading1"> 
            <span>help to SAVE </span>
            <span>UKRAINian people</span>
          </h1>
          <h4 class="body1">
            Our primary mission is to help the people of Ukraine in these difficult times together with the crypto community.
            <br>
            <br>
            Each sold NFT from the collection will be sent to help wounded soldiers, refugees, doctors and other war-affected residents of Ukraine, as well
            as to rehabilitation of settlements, infrastructure, roads, houses damaged by shells and military equipment.
          </h4>
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
              <div class="input-label">
                Count of NFT’s
              </div>
              <div class="input-container">                              
                <div class="input-wrapper input-count">
                  <button class="btn btn-minus">
                    <i class="i-subtract-line"></i>
                  </button>
                  <input class="input" type="number" v-model="mintVal">
                  <button class="btn btn-plus">
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
    <!-- <div class="container">
    <div class="title">Mint</div>
    <form v-on:submit.prevent>
      <input type="number" v-model="mintVal">
      <button v-on:click="mint">mint</button>
    </form>
    </div> -->
    <section class="section section-buy">
      <div class="container">
        <div class="section-content">
          <h2 class="heading2">If you don't want to buy NFT</h2>
          <p class="body2">Donate to Official Ukrainian Funds or volunteer organizations below</p>
        </div>
        <div class="cards-buy-wrapper">
          <a href="" class="card card-buy">
            <div class="card-label">
              <span class="tiny-text">
                <i class="i-checkbox-circle-fill "></i>  Vereficated
              </span>
              <i class="share-box-fill"></i>
            </div>
          </a>
          <a href="" class="card card-buy">
            <div class="card-label">
              <p class="tiny-text">
                <i class="i-checkbox-circle-fill "></i>  Vereficated
              </p>
              <i class="share-box-fill"></i>
            </div>
          </a>
          <a href="" class="card card-buy">
            <div class="card-label">
              <p class="tiny-text">
                <i class="i-checkbox-circle-fill "></i>  Vereficated
              </p>
              <i class="share-box-fill"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
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