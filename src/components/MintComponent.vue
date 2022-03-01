<template>
  <div class="main-wrapper">
    <section class="section-main">
      <div class="container">
        <div class="section-block-container">
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
              <p class="supply-label">Total supply</p>
              <div class="total-supply">10 000 nft’s</div>

            </div>
            <div class="card-footer">
              <div class="input-label">
                Count of NFT’s
              </div>
              <div class="input-container">                              
                <div class="input-wrapper input-count">
                  <button class="btn btn-minus" v-on:click="decrementVal">
                    <i class="i-subtract-line"></i>
                  </button>
                  <input class="input" min="0" max="10" step="1" type="number" oninput="this.value = Math.round(this.value);" v-model="mintVal">
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
          <a href="https://unchain.fund/" target="_blank" rel="nofollow" class="card card-buy">
            <div class="card-label">
              <span class="tiny-text">
                <i class="i-checkbox-circle-fill "></i>  Vereficated
              </span>
              <i class="i-share-box-fill"></i>
            </div>
            <div class="card-insert unchain"><div></div></div>
            <div class="card-content">
              <p class="body3">UNCHAIN</p>
              <p class="short-descr">
                Short description what this organization doing
              </p>
            </div>
          </a>
          <a href="https://savelife.in.ua/donate/" target="_blank" rel="nofollow" class="card card-buy">
            <div class="card-label">
              <p class="tiny-text">
                <i class="i-checkbox-circle-fill "></i>  Vereficated
              </p>
              <i class="i-share-box-fill"></i>
            </div>
            <div class="card-insert savelife"><div></div></div>
            <div class="card-content">
              <p class="body3">savelife</p>
              <p class="short-descr">
                and what kind of help can it be.
              </p>
            </div>
          </a>
          <a href="https://btc-alpha.com/en/news/dear-crypto-community-around-the-world-1" target="_blank" rel="nofollow" class="card card-buy">
            <div class="card-label">
              <p class="tiny-text">
                <i class="i-checkbox-circle-fill "></i>  Vereficated
              </p>
              <i class="i-share-box-fill"></i>
            </div>
            <div class="card-insert"><div></div></div>
            <div class="card-content">
              <p class="body3">btc-alpha</p>
              <p class="short-descr">
                Maybe 3rd row
              </p>
            </div>
          </a>
        </div>
        <button class="btn btn-see-all">
          See all resources
        </button>
      </div>
    </section>
    <section class="section section-donate">
      <div class="container">
        <div class="section-content">
          <h2 class="heading2">Or donate trough our platform</h2>
          <p class="body2">
            If Funds and volunteer organization sites not work 
            you can make donation trough our service</p>
        </div>
        <div class="card card-donate">
          <div class="title1">make donation</div>
          <div class="card-input">
            <div class="input-label">
              Your donation
            </div>                           
            <div class="input-wrapper input-amount">
              <input class="input" type="number" v-model="donationAmount">
              <span class="input-token">BNB</span>
            </div>
            <div class="speed-amount-container">
              <button class="btn btn-speed-amount" v-on:click="donationAmount = 0.1, isMaxVal = false">
                0.1 BNB
              </button>
              <button class="btn btn-speed-amount" v-on:click="donationAmount = 1, isMaxVal = false">
                1 BNB
              </button>
              <button class="btn btn-speed-amount" v-on:click="donationAmount = 5, isMaxVal = false">
                5 BNB
              </button>
              <button class="btn btn-speed-amount" v-on:click="getAllBalance">
                MAX
              </button>
            </div>
            <button class="btn btn-submit" v-on:click="makeDonation">Donate</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-situation">
      <div class="container">
        <div class="section-block-container">
        <div class="section-block section-block-content">
          <div class="subtitle">Situation in Ukraine</div>
          <div class="title-date heading1">24.02.2022</div>
            <h4 class="body1">        
              Elit nisl, maecenas hac sit ut. Blandit orci urna netus sit neque sit laoreet eget urna. Commodo massa eros, molestie fermentum posuere sed. Sit vel, ultrices sed est malesuada suspendisse. Tellus at quam pellentesque lorem sapien, elementum.
              <br>
              <br>
              Phasellus id lectus aliquam aliquet viverra ut pellentesque integer neque. Tempor eu non elit amet. Mauris amet imperdiet tincidunt fames tincidunt. Id tempor leo mauris, et suspendisse. Elit iaculis amet quis faucibus etiam purus. 
            </h4>
        </div>
        <div class="section-block section-block-card">
          <!-- <video src=""></video> -->
        <img src="@/assets/images/set_war/4.png" alt="">

        </div>
        </div>
      </div>
    </section>
    <section class="section-stop-war">
      <div class="container-img">
        <img src="@/assets/images/set_war/1.png" alt="">
        <img src="@/assets/images/set_war/2.png" alt="">
        <img src="@/assets/images/set_war/4.png" alt="">
        <img src="@/assets/images/set_war/5.png" alt="">
        <img src="@/assets/images/set_war/6.png" alt="">        
        <img src="@/assets/images/set_war/7.png" alt="">        
        <img src="@/assets/images/set_war/8.png" alt="">
        <!-- src="@/assets/src/images/image-card.svg"  -->
      </div>
      <div class="container-stop-war">
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
        <span>STOP WAR</span>
      </div>
    </section>
    <section class="section section-collection">
      <div class="container">
        <div class="section-block-container">
          <div class="section-block section-block-content">
          <div class="subtitle">Collection</div>
          <h1 class="heading1"> 10 000 nft’s
          </h1>
          <h4 class="body1">
            Elit nisl, maecenas hac sit ut. Blandit orci urna netus sit neque sit laoreet eget urna. Commodo massa eros, molestie fermentum posuere sed. Sit vel, ultrices sed est malesuada suspendisse. Tellus at quam pellentesque lorem sapien, elementum.
            <br>
            <br>
            Phasellus id lectus aliquam aliquet viverra ut pellentesque integer neque. Tempor eu non elit amet. Mauris amet imperdiet tincidunt fames tincidunt. Id tempor leo mauris, et suspendisse. Elit iaculis amet quis faucibus etiam purus. </h4>
          </div>
          <div class="section-block section-block-card">
          <div class="card card-collection">
            <div class="card-section">
              <p class="supply-label">Total supply</p>
              <div class="total-supply">10 000 nft’s</div>
            </div>
            <div class="card-footer">
              <div class="input-label">
                Count of NFT’s
              </div>
              <div class="input-container">                              
                <div class="input-wrapper input-count">
                  <button class="btn btn-minus" v-on:click="decrementVal">
                    <i class="i-subtract-line"></i>
                  </button>
                  <input class="input" min="0" max="10" step="1" type="number">
                  <button class="btn btn-plus" >
                    <i class="i-add-line"></i>
                  </button>
                </div>
                <button class="btn btn-submit">Mint</button>
              </div>
              <div class="input-total">
                Mint 1 NFT using
                <span>0.5 BNB</span>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="section-block-nft">
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask">
              <img src="@/assets/images/mask-nft.png" alt="">
            </div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask">
              <img src="@/assets/images/mask-nft.png" alt="">
            </div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask">
              <img src="@/assets/images/mask-nft.png" alt="">
            </div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask">
              <img src="@/assets/images/mask-nft.png" alt="">
            </div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask">
              <img src="@/assets/images/mask-nft.png" alt="">
            </div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask">
              <img src="@/assets/images/mask-nft.png" alt="">
            </div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask">
              <img src="@/assets/images/mask-nft.png" alt="">
            </div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask">
              <img src="@/assets/images/mask-nft.png" alt="">
            </div>
          </div>
        </div>
      </div>      
    </section>
    <section class="section section-angels">
        <div class="container">
        <div class="section-content">
          <h2 class="subtitle">Donation</h2>
          <p class="heading1">our angels</p>
        </div>
        <div class="cards-angels-wrapper">
          <div class="card card-angel">
            <div class="icon"></div>
          </div>
        </div>
        </div>
    </section>
  </div>
</template>

<script>
const conf = require("../core/Config.json");

export default {
  data() {
    return {
      mintVal: 1,
      donationAmount: 0.1,
      isMaxVal: false
    }
  },
  methods: {
    async mint() {
      if (this.mintVal < 0) {
        alert("enter positive amount only");
        return;
      }
      if (this.mintVal <= 1) {
        await this.$root.core.mint(conf.BNBVal);
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
      if (this.mintVal > 0) {
        this.mintVal--;
      }
    },
    async makeDonation() {
      await this.$root.core.donate(parseFloat(this.donationAmount), this.isMaxVal);
    },
    async getAllBalance() {
      const userAddress = localStorage.getItem("address");
      if (userAddress) {
        const balance = await this.$root.core.getUserBalance(userAddress);
        if (balance) {
          this.donationAmount = parseFloat(balance).toFixed(3);
          this.isMaxVal = true;
        }
      }
    }
  }
}
</script>