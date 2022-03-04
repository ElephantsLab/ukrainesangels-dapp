<template>
  <div class="main-wrapper" id="our-mission">
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
            We`re here to help Ukrainian people fight off the plague of war afflicting their communities right now. This is the world`s crypto family`s contribution to #StopTheWar.
            <br>
            <br>
           Buying an NFT from this collection, you save lives. The funds will reinforce Ukraine`s army selflessly defending their home. Your financial aid will help sustain those who need it most: the injured, the refugees, and all other Ukrainians affected by indiscriminate Russian aggression.
            <br>
            <br>
            Once the hostilities are quenched, the donations will then be used to rebuild the vital infrastructure: roads, bridges, hospitals, educational facilities, etc., ruined by Russian war criminals.
          </h4>
          <div class="btn-wrapper">
            <a href="#angel-collection" class="btn btn-yellow">Explore Collection</a>
            <a href="#your-donate" class="btn btn-blue">Make donation</a>
          </div>
        </div>
        <div class="section-block section-block-card">
          <div class="card card-main">
            <div class="card-section">
              <div class="card-main-img">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p class="supply-label">Total Supply</p>
              <div class="total-supply">10 000 nft`s</div>

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
    <section class="section section-buy" id="buy">
      <div class="container">
        <div class="section-content">
          <h2 class="heading2">More Options to Save the Life of Ukraine</h2>
          <p class="body2">You Can Donate to the World`s Leading Charitable Foundations and Volunteer Organizations</p>
        </div>
        <div class="cards-buy-wrapper">
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
          <a href="https://nowarua.com/" target="_blank" rel="nofollow" class="card card-buy">
            <div class="card-label">
              <p class="tiny-text">
                <i class="i-checkbox-circle-fill "></i> Verified
              </p>
              <i class="i-share-box-fill"></i>
            </div>
            <div class="card-insert btc-alpha"><div></div></div>
            <div class="card-content">
              <p class="body3">#nowarua</p>
              <p class="short-descr">
                A European cryptocurrency exchange. Accepts crypto-donations to protect against the war in Ukraine.
              </p>
            </div>
          </a>
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
        </div>
        <button class="btn btn-see-all">
          See all resources
        </button>
      </div>
    </section>
    <section class="section section-donate" id="your-donate">
      <div class="container">
        <div class="section-content">
          <h2 class="heading2">You Can Donate Crypto Via the Platform</h2>
          <p class="body2">
           We will make sure each bit of your donation is accounted for and ends up supporting Ukraine`s people and army </p>
        </div>
        <div class="card card-donate">
          <div class="title1">make a donation</div>
          <div class="card-input">
            <div class="input-label">
              You Will Save Lives No Matter the Amount
            </div>                           
            <div class="input-wrapper input-amount">
              <input class="input" type="number" min="1" onkeypress="return (event.charCode !== 45 && event.charCode !== 43 && event.charCode !== 101)" v-model="donationAmount">
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
    <section class="section section-situation"  id="situation">
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
        </div>
      </div>
    </section>
    <section class="section-stop-war"  id="stop-war">
      <div class="stop-war-wrapper">
        <marquee behavior="scroll"    class="container-img">
          <a rel="nofollow" target="_blank" href="https://edition.cnn.com/2022/02/14/world/gallery/ukraine-russia-crisis/index.html">
            <img src="@/assets/images/set_war/1.webp" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.bbc.com/news/world-60525350">
            <img src="@/assets/images/set_war/2.webp" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
            <img src="@/assets/images/set_war/4.webp" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.nytimes.com/news-event/ukraine-russia">
            <img src="@/assets/images/set_war/5.webp" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
            <img src="@/assets/images/set_war/6.webp" alt="">
          </a> 
          <a rel="nofollow" target="_blank" href="https://www.wsj.com/articles/at-ukrainian-border-overwhelmed-guards-volunteers-confront-exodus-of-refugees-fleeing-war-11646320646">
            <img src="@/assets/images/set_war/7.webp" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://edition.cnn.com/2022/02/14/world/gallery/ukraine-russia-crisis/index.html">
            <img src="@/assets/images/set_war/8.webp" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.bbc.com/news/world-60525350">
            <img src="@/assets/images/set_war/9.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
            <img src="@/assets/images/set_war/10.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
            <img src="@/assets/images/set_war/11.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.wsj.com/articles/at-ukrainian-border-overwhelmed-guards-volunteers-confront-exodus-of-refugees-fleeing-war-11646320646">
            <img src="@/assets/images/set_war/12.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
            <img src="@/assets/images/set_war/13.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://edition.cnn.com/2022/02/14/world/gallery/ukraine-russia-crisis/index.html">
            <img src="@/assets/images/set_war/14.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
            <img src="@/assets/images/set_war/15.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.wsj.com/articles/at-ukrainian-border-overwhelmed-guards-volunteers-confront-exodus-of-refugees-fleeing-war-11646320646">
            <img src="@/assets/images/set_war/16.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
            <img src="@/assets/images/set_war/17.png" alt="">
          </a>
          <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
            <img src="@/assets/images/set_war/18.png" alt="">
          </a>
      </marquee>
      <marquee behavior="scroll" class="container-stop-war">
        <div class="container-stop-war-flex">       
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
      </marquee>
      </div>
    </section>
    <section class="section section-collection"  id="angel-collection">
      <div class="container">
        <div class="section-block-container">
          <div class="section-block section-block-content">
            <div class="subtitle">Collection</div>
            <h1 class="heading1"> 10 000 nft`s
            </h1>
            <h4 class="body1">
              Each NFT portrays a character of Ukraine`s heroic defender: either a man or a woman in front of one of the world`s most celebrated landmarks. The character can hold any paraphernalia pertaining to victory achievement, from a rifle to the Dove of Peace.
              <br>
              <br>
              Buying one of the collection`s NFTs you become a true Angel of Ukraine. You do your part to shield the peace and prosperity of Ukraine and Europe on the whole.
            </h4>            
            <div class="section-block-nft">
              <div class="block-nft">
                <div class="body3">
                  Angel #0001
                </div>
                <div class="nft-img-mask nft-img-mask-1"></div>
              </div>
              <div class="block-nft">
                <div class="body3">
                  Angel #0002
                </div>
                <div class="nft-img-mask nft-img-mask-2"></div>
              </div>
              <div class="block-nft">
                <div class="body3">
                  Angel #0003
                </div>
                <div class="nft-img-mask nft-img-mask-3"></div>
              </div>
              <div class="block-nft">
                <div class="body3">
                  Angel #0004
                </div>
                <div class="nft-img-mask nft-img-mask-4"></div>
              </div>
              <div class="block-nft">
                <div class="body3">
                  Angel #0005
                </div>
                <div class="nft-img-mask nft-img-mask-5"></div>
              </div>          
              <div class="block-nft">
                <div class="body3">
                  Angel #0006
                </div>
                <div class="nft-img-mask nft-img-mask-6"></div>
              </div>
            </div>
          </div>
          <div class="section-block section-block-card">
          <div class="card card-collection">
            <div class="card-section">
              <p class="supply-label">Total supply</p>
              <div class="total-supply">10 000 nft`s</div>
            </div>
            <div class="card-footer">
              <div class="input-label">
                Count of NFT`s
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
        <div class="section-block-nft section-block-nft-desktop">
          <div class="block-nft">
            <div class="body3">
              Angel #0001
            </div>
            <div class="nft-img-mask nft-img-mask-1"></div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0002
            </div>
            <div class="nft-img-mask nft-img-mask-2"></div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0003
            </div>
            <div class="nft-img-mask nft-img-mask-3"></div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0004
            </div>
            <div class="nft-img-mask nft-img-mask-4"></div>
          </div>
          <div class="block-nft">
            <div class="body3">
              Angel #0005
            </div>
            <div class="nft-img-mask nft-img-mask-5"></div>
          </div>          
          <div class="block-nft">
            <div class="body3">
              Angel #0006
            </div>
            <div class="nft-img-mask nft-img-mask-6"></div>
          </div>
        </div>
      </div>      
    </section>
    <section class="section section-angels"  id="help-in-numbers">
      <div class="container">
        <div class="section-content">
          <h2 class="subtitle">help in numbers</h2>
          <p class="heading1">our angels</p>
        </div>
        <div class="cards-angels-wrapper">
          <div class="card card-angel">
            <div class="icon intersect"></div>
            <div class="title1">{{ totalSupply }} nft`s</div>
            <div class="short-descr">
              Have been bought by people from around the world to make their solidarity palpable
            </div>
            <button class="btn btn-yellow">View collection</button>
          </div>
          <div class="card card-angel">
            <div class="icon uk-angels"></div>
            <div class="title1">{{ nftOwnersCount }} angels</div>
            <div class="short-descr">
              Have contributed to turn the Ukrainian sky clear and blue again
            </div>
            <button class="btn btn-yellow">Become an Angel</button>
          </div>
          <div class="card card-angel">
            <div class="icon bnb"></div>
            <div class="title1">{{ totalDonated }} BNB</div>
            <div class="short-descr">
              This much funds have already been sent to the persevering people of Ukraine
            </div>
            <button class="btn btn-blue">Donate</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-team" id="our-team">
      <div class="container">
        <div class="section-block-container">
          <div class="section-block section-block-content">
            <div class="subtitle">our team</div>
            <a href="https://elephantslab.com/" class="link-team" target="_blank" rel="nofollow"></a>
             <div class="photo-team photo-team-mobile"></div>
            <p class="body1">        
              We are a blockchain research and product development company based in Ukraine.
              <br>
              <br>
              Our site states our mission is to seamlessly integrate cryptotechnologies into the world. It`s true. Yet today we are up against a life-threatening challenge. And it`s our duty to deal with it, applying blockchain technology, of course.
              <br>
              <br>
              This project is part of a swift response pack our team undertook to save Ukraine, ease our people`s suffering and protect Europe`s easternmost borders. We are Ukraine`s vigilant cyber force, we`re its reliable home front. Today, we`re fighting for its digital freedom. Today, Ukraine needs our involvement most.And we deliver.
            </p>
            <ul class="ul-social-list">
                <li>
                    <a class="twitter" href="https://twitter.com/ElephantsLab" rel="nofollow" target="_blank">
                        <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2812 5.50789L11.3316 6.33835L10.4922 6.23666C7.43686 5.84685 4.76765 4.52491 2.50134 2.30471L1.39336 1.20309L1.10798 2.01659C0.503625 3.83004 0.889738 5.74516 2.1488 7.03322C2.8203 7.74503 2.66921 7.84672 1.51088 7.42302C1.10798 7.28744 0.755438 7.18575 0.721863 7.23659C0.60435 7.35523 1.00725 8.8975 1.32621 9.50763C1.76269 10.355 2.65243 11.1855 3.6261 11.677L4.44869 12.0668L3.47501 12.0837C2.53491 12.0837 2.50134 12.1007 2.60206 12.4566C2.93781 13.5582 4.26403 14.7276 5.74133 15.2361L6.78215 15.592L5.87563 16.1343C4.53263 16.9139 2.9546 17.3546 1.37658 17.3885C0.621138 17.4054 0 17.4732 0 17.5241C0 17.6935 2.04808 18.6426 3.23999 19.0155C6.81573 20.1171 11.063 19.6426 14.2526 17.7613C16.5189 16.4224 18.7852 13.7616 19.8428 11.1855C20.4136 9.8127 20.9844 7.30439 20.9844 6.10107C20.9844 5.32146 21.0347 5.21978 21.9748 4.28763C22.5288 3.7453 23.0492 3.15211 23.15 2.98263C23.3178 2.66062 23.3011 2.66062 22.4449 2.94874C21.018 3.45718 20.8165 3.38939 21.5216 2.62672C22.042 2.08439 22.6631 1.1014 22.6631 0.813283C22.6631 0.762439 22.4113 0.847179 22.1259 0.999712C21.8238 1.16919 21.1523 1.42341 20.6486 1.57595L19.7421 1.86406L18.9195 1.30478C18.4663 0.999712 17.8283 0.660751 17.4926 0.559063C16.6364 0.32179 15.327 0.355686 14.5548 0.626855C12.4563 1.38952 11.1301 3.35549 11.2812 5.50789Z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a class="facebook" href="https://www.facebook.com/ElephantsLab/" rel="nofollow" target="_blank">
                        <svg width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.50195 26.1115V13.0542H12.1063L12.584 8.5546H8.50195L8.50807 6.30251C8.50807 5.12894 8.61958 4.50012 10.3052 4.50012H12.5585V0H8.95358C4.62353 0 3.09946 2.18279 3.09946 5.85357V8.55511H0.400391V13.0547H3.09946V26.1115H8.50195Z" />
                        </svg>
                    </a>
                </li>
            </ul>
          </div>
          <div class="section-block section-block-card">
            <div class="photo-team"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-help" id="need-help">
      <div class="container">
        <div class="cards-help-wrapper">
          <a href="https://ukrainesangels.com/InfoCenter" class="card card-help card-help-1">
            <p class="title">If you need help</p>
            <div class="btn btn-yellow">Information desc</div>
          </a>
          <a href="https://ukrainesangels.com/Donate" class="card card-help card-help-2">
            <p class="title">If you want help</p>
            <div class="btn btn-yellow">Donate</div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const conf = require("../core/Config.json");
import SocialLinks from "@/components/SocialLinks.vue";

export default {
  components: {
    SocialLinks,
  },
  data() {
    return {
      mintVal: 1,
      donationAmount: 0.1,
      isMaxVal: false,
      totalSupply: 0,
      nftOwnersCount: 0,
      totalDonated: 0
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
          this.donationAmount = parseFloat(balance);
          this.isMaxVal = true;
        }
      }
    }
  },
  mounted() {
    const savedTotalSupply = localStorage.getItem("totalSupply");
    const savedNftOwnersCount = localStorage.getItem("nftOwnersCount");
    const savedTotalDonated = localStorage.getItem("totalDonated");
    if (savedTotalSupply) {
      this.totalSupply = savedTotalSupply;
    }
    if (savedNftOwnersCount) {
      this.nftOwnersCount = savedNftOwnersCount;
    }
    if (savedTotalDonated) {
      this.totalDonated = savedTotalDonated;
    }
    setTimeout(async () => {
      this.totalSupply = await this.$root.core.getTotalSupply();
      this.nftOwnersCount = await this.$root.core.getNftOwnersCount();
      this.totalDonated = await this.$root.core.getTotalDonated();
    }, 1500);
  }
}
</script>