<template>
  <div>
    <header-component/>
    <div class="main-wrapper my-page-wrapper">
      <div class="container">
        <a class="to-main" v-on:click="toMain">
          <div >
            <i class="i-arrow-drop-left-line"></i>
          </div>
          <p class="body3">Go to Home Page</p>
        </a>
        <section class="screen-my-collection">
          <p class="heading1">
            My Angels
          </p>
          <div class="my-collection-wrapper">
            <div class="main-part">
              <div class="card card-slider">
                <div class="card-slider-container">
                  <button class="btn-arrow" >
                    <i class="i-arrow-drop-left-line"></i>
                  </button>
                  <div class="card-slider-img">
                   <img src="@/assets/images/set_nft/14.png" alt="">                  
                  </div>
                  <button class="btn-arrow" >
                    <i class="i-arrow-drop-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="set-part">
              <div class="set-card-wrapper">
                <div class="card card-of-set">
                  <div class="img-wrapper">
                    <img src="@/assets/images/set_nft/14.png" alt="">  
                  </div>                
                </div>
                <button class="card card-of-set card-of-set-add">
                    <div class="add">
                      <i class="i-add-line"></i>
                    </div>
                </button>
                <button disabled class="card card-of-set card-of-set-add">
                    <div class="add">
                      <i class="i-add-line"></i>
                    </div>
                </button>
                <button disabled class="card card-of-set card-of-set-add">
                    <div class="add">
                      <i class="i-add-line"></i>
                    </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-get-more">
          <div class="get-more-container">
            <div class="section-content">
              <p class="heading2">Get More Angels</p>
              <p class="body2">
                Each Angel makes somebody’s situation a little more hopeful
              </p>
            </div>
            <div class="section-card">
              <div class="card card-collection">
                <div class="card-section">
                  <p class="supply-label">Total Supply</p>
                  <div class="total-supply">1000 nfts</div>
                </div>
                <div class="card-footer">
                  <div class="input-label">
                    NFT Quantity 
                  </div>
                  <div class="input-container">                              
                    <div class="input-wrapper input-count">
                      <button class="btn btn-minus" v-on:click="decrementVal">
                        <i class="i-subtract-line"></i>
                      </button>
                      <input class="input" min="1" max="10" step="1" type="number" v-model="mintVal">
                      <button class="btn btn-plus" v-on:click="incrementVal">
                        <i class="i-add-line"></i>
                      </button>
                    </div>
                    <button class="btn btn-submit" v-on:click="mint">Mint</button>
                  </div>
                  <div class="input-total">
                    Mint 1 NFT for
                    <span>{{ bnbPriceGetter }} BNB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mintVal: 1,
    }
  },
  components: {
    HeaderComponent,
  },
  methods: {
    async mint() {
      if (this.mintVal < 1) {
        alert("enter positive amount only");
        return;
      }
      if (this.mintVal <= 1) {
        console.log(this.bnbPriceGetter)
        await this.$root.core.mint(this.bnbPriceGetter);
      } else {
        await this.$root.core.buyMore(this.mintVal);
      }
    },
    incrementVal() {
      if (this.mintVal < 10) {
        this.mintVal++;
      }
    },
    decrementVal() {
      if (this.mintVal > 1) {
        this.mintVal--;
      }
    },
    toMain() {
      this.$router.push("/");
    }
  },
  computed: mapGetters(["bnbPriceGetter"]),
}
</script>