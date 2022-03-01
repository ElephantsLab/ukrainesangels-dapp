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
            We’re here to help Ukrainian people fight off the plague of war afflicting their communities right now. This is the world’s crypto family’s contribution to #StopTheWar.
            <br>
            <br>
           Buying an NFT from this collection, you save lives. The funds will reinforce Ukraine’s army selflessly defending their home. Your financial aid will help sustain those who need it most: the injured, the refugees, and all other Ukrainians affected by indiscriminate Russian aggression.
            <br>
            <br>
            Once the hostilities are quenched, the donations will then be used to rebuild the vital infrastructure: roads, bridges, hospitals, educational facilities, etc., ruined by Russian war criminals.
          </h4>
          <div class="btn-wrapper">
            <button class="btn btn-yellow">Explore Collection</button>
            <button class="btn btn-blue">Make donation</button>
          </div>
        </div>
        <div class="section-block section-block-card">
          <div class="card card-main">
            <div class="card-section">
              <div class="card-main-img"></div>
              <p class="supply-label">Total Supply</p>
              <div class="total-supply">10 000 nft’s</div>

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
                  <input class="input" min="1" max="10" step="1" type="number" oninput="this.value = Math.round(this.value);" v-model="mintVal">
                  <button class="btn btn-plus" v-on:click="incrementVal">
                    <i class="i-add-line"></i>
                  </button>
                </div>
                <button class="btn btn-submit" v-on:click="mint">Mint</button>
              </div>
              <div class="input-total">
                Mint 1 NFT for
                <span>1 BNB</span>
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
          <h2 class="heading2">More Options to Save the Life of Ukraine</h2>
          <p class="body2">You Can Donate to Ukraine’s Leading Charitable Foundations and<br> Volunteer Organizations</p>
        </div>
        <div class="cards-buy-wrapper">
          <a href="https://savelife.in.ua/donate/" target="_blank" rel="nofollow" class="card card-buy">
            <div class="card-label">
              <p class="tiny-text">
                <i class="i-checkbox-circle-fill "></i>  Verified
              </p>
              <i class="i-share-box-fill"></i>
            </div>
            <div class="card-insert savelife"><div></div></div>
            <div class="card-content">
              <p class="body3">Savelife</p>
              <p class="short-descr">
                The foundation works to make the Ukrainian Army effective, strengthening it with millions of contributions.
              </p>
            </div>
          </a>
          <a href="https://nowarua.com/" target="_blank" rel="nofollow" class="card card-buy">
            <div class="card-label">
              <p class="tiny-text">
                <i class="i-checkbox-circle-fill "></i> Verified
              </p>
              <i class="i-share-box-fill"></i>
            </div>
            <div class="card-insert btc-alpha"><div></div></div>
            <div class="card-content">
              <p class="body3">BTC-Alpha</p>
              <p class="short-descr">
                A European cryptocurrency exchange. Accepts crypto-donations to protect against the war in Ukraine.
              </p>
            </div>
          </a>
          <a href="https://unchain.fund/" target="_blank" rel="nofollow" class="card card-buy">
            <div class="card-label">
              <span class="tiny-text">
                <i class="i-checkbox-circle-fill "></i> Verified
              </span>
              <i class="i-share-box-fill"></i>
            </div>
            <div class="card-insert unchain"><div></div></div>
            <div class="card-content">
              <p class="body3">Unchain</p>
              <p class="short-descr">
                A charity project created by blockchain activists to support Ukrainian people in these crisis times.
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
          <h2 class="heading2">You Can Donate Crypto Via the Platform</h2>
          <p class="body2">
           We will make sure each bit of your donation is accounted for and<br>ends up supporting Ukraine’s people and army </p>
        </div>
        <div class="card card-donate">
          <div class="title1">make a donation</div>
          <div class="card-input">
            <div class="input-label">
              You Will Save Lives No Matter the Amount
            </div>                           
            <div class="input-wrapper input-amount">
              <input class="input" type="number" min="1" oninput="this.value = Math.round(this.value);" v-model="donationAmount">
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
          <div class="title-date heading1">Feb. 24, 2022</div>
            <h4 class="body1">        
              The date Ukraine was stripped of its peaceful existence by Russia-Belarus joint military invasion. At 4:00 AM, without a declaration.
              <br>
              <br>
              The two repressive governments have long been plotting an offensive intended to conquer and coerce the free people of Ukraine back into the atrocities of autocracy and corruption, depriving Ukrainians of European values that they hold so close to their hearts.
              <br>
              <br>
              For that, the two aggressors are now determined to soak Ukraine in the blood of its own people. Invaders kill and maim civilians, women and children, cowardly shelling their communities, destroying dwellings, hospitals, schools and everything that humanity considers normal life. They torchure Ukraine.
            </h4>
        </div>
        <div class="section-block section-block-card">
          <!-- <video src=""></video> -->

          <!-- https://youtu.be/FYlg-7AsGlY -->
          <iframe src="https://www.youtube.com/embed/FYlg-7AsGlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <iframe width="1280" height="720" src="https://www.youtube.com/embed/FYlg-7AsGlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

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
            Each NFT portrays a character of Ukraine’s heroic defender: either a man or a woman in front of one of the world’s most celebrated landmarks. The character can hold any paraphernalia pertaining to victory achievement, from a rifle to the Dove of Peace.
            <br>
            <br>
            Buying one of the collection’s NFTs you become an Angel of Ukraine. You do your part to shield the peace and prosperity of Ukraine and Europe on the whole. </h4>
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
                  <input class="input" min="1" max="10" step="1" type="number" v-model="mintVal">
                  <button class="btn btn-plus" v-on:click="incrementVal">
                    <i class="i-add-line"></i>
                  </button>
                </div>
                <button class="btn btn-submit" v-on:click="mint">Mint</button>
              </div>
              <div class="input-total">
                Mint 1 NFT using
                <span>1 BNB</span>
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
        </div>
      </div>      
    </section>
    <section class="section section-angels">
      <div class="container">
        <div class="section-content">
          <h2 class="subtitle">help in numbers</h2>
          <p class="heading1">our angels</p>
        </div>
        <div class="cards-angels-wrapper">
          <div class="card card-angel">
            <div class="icon intersect"></div>
            <div class="title1">1 874 nft’s</div>
            <div class="short-descr">
              Have been bought by people from around the<br> world to make their solidarity palpable
            </div>
            <button class="btn btn-yellow">View collection</button>
          </div>
          <div class="card card-angel">
            <div class="icon uk-angels"></div>
            <div class="title1">3 000 angels</div>
            <div class="short-descr">
              Have contributed to turn the Ukrainian sky<br> clear and blue again
            </div>
            <button class="btn btn-yellow">Become an Angel</button>
          </div>
          <div class="card card-angel">
            <div class="icon bnb"></div>
            <div class="title1">2.945 BNB</div>
            <div class="short-descr">
              This much funds have already been sent to the persevering people of Ukraine
            </div>
            <button class="btn btn-blue">Donate</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-team">
      <div class="container">
        <div class="section-block-container">
          <div class="section-block section-block-content">
            <div class="subtitle">our team</div>
            <a href="https://elephantslab.com/" class="link-team" target="_blank" rel="nofollow"></a>
            <p class="body1">        
              We are a blockchain research and product development company based in Ukraine.
              <br>
              <br>
              Our site states our mission is to seamlessly integrate cryptotechnologies into the world. It’s true. Yet today we are up against a life-threatening challenge. And it’s our duty to deal with it, applying blockchain technology, of course.
              <br>
              <br>
              This project is part of a swift response pack our team undertook to save Ukraine, ease our people’s suffering and protect Europe’s easternmost borders. We are Ukraine’s vigilant cyber force, we’re its reliable home front. Today, we’re fighting for its digital freedom. Today, Ukraine needs our involvement most.<br>And we deliver.
            </p>
                    <social-links/>

          </div>
          <div class="section-block section-block-card">
            <div class="photo-team"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-help">
      <div class="container">
        <div class="cards-help-wrapper">
          <div class="card card-help card-help-1">
            <p class="title">If you need help</p>
            <a href="" class="btn btn-yellow">Information for Asylum-Seekers</a>
          </div>
          <div class="card card-help card-help-2">
            <p class="title">If you want help</p>
            <a href="" class="btn btn-yellow">Become an angel</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const conf = require("../core/Config.json");
import SocialLinks from "@/components/SocialLinks";

export default {
  components:{
    SocialLinks
  },
  data() {
    return {
      mintVal: 1,
      donationAmount: 0.1,
      isMaxVal: false
    }
  },
  methods: {
    async mint() {
      if (this.mintVal < 1) {
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
      if (this.mintVal > 1) {
        this.mintVal--;
      }
    },
    async makeDonation() {
      if (this.donationAmount > 0) {
        await this.$root.core.donate(parseFloat(this.donationAmount), this.isMaxVal);
      } else {
        alert("enter positive amount only");
      }
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