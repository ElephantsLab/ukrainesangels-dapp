<template>
  <div>
    <header-component />
    <div class="main-wrapper my-page-wrapper">
      <div class="container">
        <a class="to-main" v-on:click="toMain">
          <div>
            <i class="i-arrow-drop-left-line"></i>
          </div>
          <p class="body3">Go to Home Page</p>
        </a>
        <div class="status-block">
          <section class="screen-my-collection">
            <p class="heading1">My collection</p>
            <div class="my-collection-wrapper">
              <div class="set-part">
                <div class="set-card-wrapper">
                  <div class="card card-of-set">
                    <div class="img-wrapper">
                      <img src="@/assets/images/set_nft/14.png" alt="" />
                    </div>
                  </div>
                  <button class="card card-of-set card-of-set-add">
                    <div class="add">
                      <a href="#add-angel">
                        <i class="i-add-line"></i>
                      </a>
                    </div>
                  </button>
                  <button disabled class="card card-of-set card-of-set-add">
                    <div class="add">
                      <a href="#add-angel">
                        <i class="i-add-line"></i>
                      </a>
                    </div>
                  </button>
                  <button disabled class="card card-of-set card-of-set-add">
                    <div class="add">
                      <a href="#add-angel">
                        <i class="i-add-line"></i>
                      </a>
                    </div>
                  </button>
                </div>
              </div>
              <div class="main-part">
                <div class="card card-slider">
                  <div class="card-slider-container">
                    <swiper
                      :slidesPerView="1"
                      :spaceBetween="30"
                      :navigation="true"
                      :modules="modules"
                      class="mySwiper"
                    >
                      <swiper-slide
                        ><img src="@/assets/images/set_nft/14.png" alt=""
                      /></swiper-slide>
                      <swiper-slide
                        ><img src="@/assets/images/set_nft/14.png" alt=""
                      /></swiper-slide>
                    </swiper>
                    <!--<div class="card-slider-img">-->
                    <!--<img src="@/assets/images/set_nft/14.png" alt="">-->
                    <!--</div>-->
                  </div>
                </div>
                <div class="info-about-angel">
                  <div class="info-about-name">
                    <p>Angel #0001</p>
                  </div>
                  <div class="info-about-angel-disc">
                    <ul>
                      <li>
                        <p class="disc-name">Contract Address</p>
                        <p class="disc-name-info"><span>0x5ef...9459c</span></p>
                      </li>
                      <li>
                        <p class="disc-name">Blockchain</p>
                        <p class="disc-name-info">Binance Smart Chain</p>
                      </li>
                      <li>
                        <p class="disc-name">Token ID</p>
                        <p class="disc-name-info">1</p>
                      </li>
                      <li>
                        <p class="disc-name">Token Standard</p>
                        <p class="disc-name-info">ERC-721</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section section-get-more" id="add-angel">
            <div class="get-more-container">
              <div class="section-content true">
                <p class="heading2">Upgrade your collection</p>
                <p class="heading-angel-status">
                  You don’t have any NFT.<br />
                  Upgrade your collection
                </p>
                <p class="body2">
                  Each Angel makes somebody’s situation a little more hopeful
                </p>
              </div>
              <div class="section-card">
                <div class="card card-collection">
                  <div class="card-section">
                    <p class="supply-label">Total Supply</p>
                    <div class="total-supply">10 000 nfts</div>
                  </div>
                  <div class="card-footer">
                    <div class="input-label">Count of NFT’s</div>
                    <div class="input-container">
                      <div class="input-wrapper input-count">
                        <button class="btn btn-minus" v-on:click="decrementVal">
                          <i class="i-subtract-line"></i>
                        </button>
                        <input
                          class="input"
                          min="1"
                          max="10"
                          step="1"
                          type="number"
                          v-model="mintVal"
                        />
                        <button class="btn btn-plus" v-on:click="incrementVal">
                          <i class="i-add-line"></i>
                        </button>
                      </div>
                      <button class="btn btn-submit" v-on:click="mint">
                        Mint
                      </button>
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
  </div>
</template>


<script>
import HeaderComponent from "@/components/HeaderComponent";
import { mapGetters, mapActions } from "vuex";
import "vue3-carousel/dist/carousel.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  data() {
    return {
      mintVal: 1,
      NFTs: [],
    };
  },
  components: {
    HeaderComponent,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    ...mapActions(["fetchNFTByUser"]),
    async mint() {
      if (this.mintVal < 1) {
        alert("enter positive amount only");
        return;
      }
      if (this.mintVal <= 1) {
        console.log(this.bnbPriceGetter);
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
    },
  },
  watch: {
    async userAddressGetter(newVal) {
      if (newVal) {
        await this.fetchNFTByUser(newVal);
      }
    },
  },
  computed: mapGetters([
    "bnbPriceGetter",
    "userAddressGetter",
    "userNFTsGetter",
  ]),
};
</script>
