<template>
    <div class="main-wrapper" id="our-mission">
        <section class="section-main">
            <div class="container">
                <div class="section-block-container">
                    <div class="section-block section-block-content">
                        <div class="subtitle">{{ lang.get("OUR_MISSION") }}</div>
                        <h1 class="heading1">
                            <span>{{ lang.get("HELP") }} {{ lang.get("SAVE") }}</span>
                            <span>{{ lang.get("UKRAINIAN_NATION") }}</span>
                        </h1>
                        <h4 class="body1 body-disc">
                            {{ lang.get("HELP_DESC") }}
                        </h4>
                        <div class="btn-wrapper">
                            <a href="#angel-collection" class="btn btn-yellow">{{ lang.get("EXPLORE_COLLECTION") }}</a>
                            <a href="#your-donate" class="btn btn-blue">{{ lang.get("MAKE_A_DONATION") }}</a>
                        </div>
                        <div class="audit-vidma">
                            <a target="_blank" href="https://www.vidma.io/" class="audit-logo"></a>
                            <div class="audit-content">
                                <div class="audit-link">
                                    <p class="audit-by">{{ lang.get("AUDITED_BY") }}</p>
                                    <div class="audit-link-wrapper">
                                        <div class="audit-open-doc">
                                            <a
                                                target="_blank"
                                                href="https://drive.google.com/file/d/1IBn-_GvrDMW3PGosO383GqFe9mCUmWwi/view  "
                                                class="audit-open"
                                                >{{ lang.get("OPEN_AUDIT") }}
                                                <i class="i-download-fill"></i>
                                            </a>
                                        </div>
                                        <div class="audit-sait">
                                            <a href="https://www.vidma.io/" target="_blank"
                                                >{{ lang.get("SITE") }}
                                                <i class="i-share-box-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-block section-block-card">
                        <div class="card card-main">
                            <div class="card-section info-status">
                                <div class="card-main-img">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div class="card-main-result">
                                    <div class="card-main-result-inner">
                                        <p class="supply-label">{{ lang.get("TOTAL_SUPPLY") }}</p>
                                        <div class="total-supply">1000</div>
                                    </div>
                                    <div class="supply-line"></div>
                                    <div class="card-main-sold">
                                        <p class="supply-label">{{ lang.get("NFT_SOLD") }}</p>
                                        <div class="total-supply">{{ totalSupply }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="input-label">{{ lang.get("NFT_QUANTITY") }}</div>
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
                                            oninput="this.value = Math.round(this.value);"
                                            v-model="mintVal"
                                        />
                                        <button class="btn btn-plus" v-on:click="incrementVal">
                                            <i class="i-add-line"></i>
                                        </button>
                                    </div>
                                    <button class="btn btn-submit" v-on:click="mint">{{ lang.get("MINT") }}</button>
                                </div>
                                <div class="input-total">
                                    {{ lang.get("MINT_FOR") }}
                                    <span>{{ bnbPriceGetter }} BNB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-goal" id="our-goal">
            <div class="container">
                <div class="section-goal-wrapper">
                    <div class="goal-info-left">
                        <div class="goal-info-left-title">
                            <p class="goal-title">{{ lang.get("OUR_GOAL") }}</p>
                            <div class="goal-team">
                                <a href="https://elephantslab.com/" class="link-team goal-team-link" target="_blank" rel="nofollow"></a>
                                <a class="link-second-team goal-team-link" target="_blank" rel="nofollow"></a>
                            </div>
                        </div>
                        <div class="goal-info-left-disc">
                            <p>
                                {{ lang.get("OUR_GOAL_DESC") }}
                            </p>
                        </div>
                    </div>
                    <div class="goal-info-right">
                        <img src="../assets/images/bus.png" class="img-btn" />
                        <div class="centered"> <p>{{ lang.get("BUSES") }}</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-buy" id="buy">
            <div class="container">
                <div class="section-content">
                    <h2 class="heading2">{{ lang.get("MORE_OPTION_1") }}</h2>
                    <p class="body2">{{ lang.get("MORE_OPTION_2") }}</p>
                </div>
                <div class="cards-buy-wrapper">
                    <a href="https://unchain.fund/" target="_blank" rel="nofollow" class="card card-buy">
                        <div class="card-label">
                            <span class="tiny-text"> <i class="i-checkbox-circle-fill"></i> {{ lang.get("VERIFIED") }} </span>
                            <i class="i-share-box-fill"></i>
                        </div>
                        <div class="card-insert unchain"><div></div></div>
                        <div class="card-content">
                            <p class="body3">{{ lang.get("UNCHAIN") }}</p>
                            <p class="short-Deskr">{{ lang.get("UNCHAIN_DESC") }}</p>
                        </div>
                    </a>
                    <a href="https://nowarua.com/" target="_blank" rel="nofollow" class="card card-buy">
                        <div class="card-label">
                            <p class="tiny-text"><i class="i-checkbox-circle-fill"></i> {{ lang.get("VERIFIED") }}</p>
                            <i class="i-share-box-fill"></i>
                        </div>
                        <div class="card-insert btc-alpha"><div></div></div>
                        <div class="card-content">
                            <p class="body3">#nowarua</p>
                            <p class="short-descr">{{ lang.get("NOWARUA") }}</p>
                        </div>
                    </a>
                    <a href="https://www.comebackalive.in.ua/" target="_blank" rel="nofollow" class="card card-buy">
                        <div class="card-label">
                            <p class="tiny-text"><i class="i-checkbox-circle-fill"></i> {{ lang.get("VERIFIED") }}</p>
                            <i class="i-share-box-fill"></i>
                        </div>
                        <div class="card-insert savelife"><div></div></div>
                        <div class="card-content">
                            <p class="body3">{{ lang.get("COME_BACK_ALIVE") }}</p>
                            <p class="short-descr">
                                {{ lang.get("COME_BACK_ALIVE_DESC") }}
                            </p>
                        </div>
                    </a>
                </div>
                <div id="your-donate"></div>
                <router-link tag="a" :to="{ name: 'Donate' }" class="btn btn-see-all"> {{ lang.get("SEE_ALL") }} </router-link>
            </div>
        </section>
        <section class="section section-donate">
            <div class="container">
                <div class="section-content center">
                    <h2 class="heading2">{{ lang.get("DONATE_VIA_PLATFORM") }}</h2>
                    <p class="body2" v-html="lang.get('DONATION_OPTIONS')"></p>
                </div>
                <div class="card card-donate">
                    <div class="title1">{{ lang.get("MAKE_A_DONATION") }}</div>
                    <div class="card-input">
                        <div class="input-label">{{ lang.get("AMOUNT_DOES_NOT_MATTER") }}</div>
                        <div class="address">
                            BSC:
                            <a href="https://bscscan.com/address/0x1cee20367ebda61500dd037a0ba2a9a2b733d391#code" target="_blank" rel="nofollow">
                                <span>0x1CEe20367eBdA61500dD037A0ba2a9a2b733D391</span>
                            </a>
                            <!-- <i class="i-checkbox-multiple-blank-line"></i>   -->
                        </div>
                        <div class="input-wrapper input-amount">
                            <input
                                class="input"
                                type="number"
                                min="1"
                                onkeypress="return (event.charCode !== 45 && event.charCode !== 43 && event.charCode !== 101)"
                                v-model="donationAmount"
                            />
                            <span class="input-token">BNB</span>
                        </div>
                        <div class="speed-amount-container">
                            <button
                                class="btn btn-speed-amount"
                                :class="{ active: donationAmount === 0.1 }"
                                v-on:click="(donationAmount = 0.1), (isMaxVal = false)"
                            >
                                0.1 BNB
                            </button>
                            <button
                                class="btn btn-speed-amount"
                                :class="{ active: donationAmount === 1 }"
                                v-on:click="(donationAmount = 1), (isMaxVal = false)"
                            >
                                1 BNB
                            </button>
                            <button
                                class="btn btn-speed-amount"
                                :class="{ active: donationAmount === 5 }"
                                v-on:click="(donationAmount = 5), (isMaxVal = false)"
                            >
                                5 BNB
                            </button>
                            <button class="btn btn-speed-amount" v-on:click="getAllBalance" :class="{ active: isMaxVal }">{{ lang.get("MAX") }}</button>
                        </div>
                        <button class="btn btn-submit" v-on:click="makeDonation">{{ lang.get("DONATE") }}</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-situation" id="situation">
            <div class="container">
                <div class="section-block-container">
                    <div class="section-block section-block-content">
                        <div class="subtitle situation">{{ lang.get("SITUATION_IN_UKRAINE") }}</div>
                        <h4 class="body1" v-html="lang.get('SITUATION_IN_UKRAINE_DESC_1')"></h4>
                    </div>
                    <div class="section-block section-block-card">
                        <iframe
                            src="https://www.youtube.com/embed/Dk7KHT9lBKc"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer;
                              autoplay; clipboard-write;
                              encrypted-media; gyroscope;
                              picture-in-picture"
                            allowfullscreen
                        >
                        </iframe>
                        <h4 class="body1" v-html="lang.get('SITUATION_IN_UKRAINE_DESC_2')"></h4>
                    </div>
                </div>
            </div>
        </section>
      <section>
        <div class="card card-slider">
          <div class="card-slider-container">
            <swiper :resizeObserver="false" :slidesPerView="5" :spaceBetween="10" class="mySwiper">
              <swiper-slide >
                  <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>
              <swiper-slide >
                <div class="cards-help-wrapper-photo"></div>
              </swiper-slide>

            </swiper>
          </div>
        </div>
      </section>
        <section class="section-stop-war" id="stop-war">
            <div class="stop-war-wrapper">
                <div class="container-img">
                      <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/3.jpg" alt="" />
                      </a>
                      <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/принтер.jpg" alt="" />
                      </a>
                      <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/photo_2022-07-12_12-00-24.jpg" alt="" />
                      </a>
                    <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/action/action-1.jpeg" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/action/action-2.jpg" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/action/action-3.jpg" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/action/action-4.jpg" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/action/action-5.jpg" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/action/action-6.jpg" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://twitter.com/UKRAINESANGELS">
                        <img src="@/assets/images/action/action-7.jpg" alt="" />
                    </a>
                    <!-- <a rel="nofollow" target="_blank" href="https://www.bbc.com/news/world-60525350">
                        <img src="@/assets/images/set_war/9.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
                        <img src="@/assets/images/set_war/10.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
                        <img src="@/assets/images/set_war/11.png" alt="" />
                    </a>
                    <a
                        rel="nofollow"
                        target="_blank"
                        href="https://www.wsj.com/articles/at-ukrainian-border-overwhelmed-guards-volunteers-confront-exodus-of-refugees-fleeing-war-11646320646"
                    >
                        <img src="@/assets/images/set_war/12.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
                        <img src="@/assets/images/set_war/13.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://edition.cnn.com/2022/02/14/world/gallery/ukraine-russia-crisis/index.html">
                        <img src="@/assets/images/set_war/14.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
                        <img src="@/assets/images/set_war/15.png" alt="" />
                    </a>
                    <a
                        rel="nofollow"
                        target="_blank"
                        href="https://www.wsj.com/articles/at-ukrainian-border-overwhelmed-guards-volunteers-confront-exodus-of-refugees-fleeing-war-11646320646"
                    >
                        <img src="@/assets/images/set_war/16.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
                        <img src="@/assets/images/set_war/17.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
                        <img src="@/assets/images/set_war/18.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://edition.cnn.com/2022/02/14/world/gallery/ukraine-russia-crisis/index.html">
                        <img src="@/assets/images/set_war/1.webp" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.bbc.com/news/world-60525350">
                        <img src="@/assets/images/set_war/2.webp" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
                        <img src="@/assets/images/set_war/4.webp" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.nytimes.com/news-event/ukraine-russia">
                        <img src="@/assets/images/set_war/5.webp" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
                        <img src="@/assets/images/set_war/6.webp" alt="" />
                    </a>
                    <a
                        rel="nofollow"
                        target="_blank"
                        href="https://www.wsj.com/articles/at-ukrainian-border-overwhelmed-guards-volunteers-confront-exodus-of-refugees-fleeing-war-11646320646"
                    >
                        <img src="@/assets/images/set_war/7.webp" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://edition.cnn.com/2022/02/14/world/gallery/ukraine-russia-crisis/index.html">
                        <img src="@/assets/images/set_war/8.webp" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.bbc.com/news/world-60525350">
                        <img src="@/assets/images/set_war/9.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
                        <img src="@/assets/images/set_war/10.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
                        <img src="@/assets/images/set_war/11.png" alt="" />
                    </a>
                    <a
                        rel="nofollow"
                        target="_blank"
                        href="https://www.wsj.com/articles/at-ukrainian-border-overwhelmed-guards-volunteers-confront-exodus-of-refugees-fleeing-war-11646320646"
                    >
                        <img src="@/assets/images/set_war/12.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
                        <img src="@/assets/images/set_war/13.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://edition.cnn.com/2022/02/14/world/gallery/ukraine-russia-crisis/index.html">
                        <img src="@/assets/images/set_war/14.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
                        <img src="@/assets/images/set_war/15.png" alt="" />
                    </a>
                    <a
                        rel="nofollow"
                        target="_blank"
                        href="https://www.wsj.com/articles/at-ukrainian-border-overwhelmed-guards-volunteers-confront-exodus-of-refugees-fleeing-war-11646320646"
                    >
                        <img src="@/assets/images/set_war/16.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.washingtonpost.com/world/ukraine-russia/">
                        <img src="@/assets/images/set_war/17.png" alt="" />
                    </a>
                    <a rel="nofollow" target="_blank" href="https://www.thetimes.co.uk/">
                        <img src="@/assets/images/set_war/18.png" alt="" />
                    </a> -->
                </div>
            </div>
        </section>
        <section class="section section-collection" id="angel-collection">
            <div class="container">
                <div class="section-block-container">
                    <div class="section-block section-block-content">
                        <div class="subtitle">{{ lang.get("COLLECTION") }}</div>
                        <h1 class="heading1">1000 {{ lang.get("NFTS") }}</h1>
                        <h4 class="body1" v-html="lang.get('ABOUT_NFT_COLLECTION')"></h4>
                        <div class="section-block-nft">
                            <div class="block-nft">
                                <div class="body3">{{ lang.get("ANGEL") }} #0001</div>
                                <div class="nft-img-mask nft-img-mask-1"></div>
                            </div>
                            <div class="block-nft">
                                <div class="body3">{{ lang.get("ANGEL") }} #0002</div>
                                <div class="nft-img-mask nft-img-mask-2"></div>
                            </div>
                            <div class="block-nft">
                                <div class="body3">{{ lang.get("ANGEL") }} #0003</div>
                                <div class="nft-img-mask nft-img-mask-3"></div>
                            </div>
                            <div class="block-nft">
                                <div class="body3">{{ lang.get("ANGEL") }} #0004</div>
                                <div class="nft-img-mask nft-img-mask-4"></div>
                            </div>
                            <div class="block-nft">
                                <div class="body3">{{ lang.get("ANGEL") }} #0005</div>
                                <div class="nft-img-mask nft-img-mask-5"></div>
                            </div>
                            <div class="block-nft">
                                <div class="body3">{{ lang.get("ANGEL") }} #0006</div>
                                <div class="nft-img-mask nft-img-mask-6"></div>
                            </div>
                        </div>
                    </div>
                    <div class="section-block section-block-card">
                        <div class="card card-collection">
                            <div class="card-section">
                                <p class="supply-label">{{ lang.get("TOTAL_SUPPLY") }}</p>
                                <div class="total-supply">1000 {{ lang.get("NFTS") }}</div>
                            </div>
                            <div class="card-footer">
                                <div class="input-label">{{ lang.get("NFT_QUANTITY") }}</div>
                                <div class="input-container">
                                    <div class="input-wrapper input-count">
                                        <button class="btn btn-minus" v-on:click="decrementVal">
                                            <i class="i-subtract-line"></i>
                                        </button>
                                        <input class="input" min="1" max="10" step="1" type="number" v-model="mintVal" />
                                        <button class="btn btn-plus" v-on:click="incrementVal">
                                            <i class="i-add-line"></i>
                                        </button>
                                    </div>
                                    <button class="btn btn-submit" v-on:click="mint">{{ lang.get("MINT") }}</button>
                                </div>
                                <div class="input-total">
                                    {{ lang.get("MINT_FOR") }}
                                    <span>{{ bnbPriceGetter }} BNB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-block-nft section-block-nft-desktop">
                    <div class="block-nft">
                        <div class="body3">{{ lang.get("ANGEL") }} #0001</div>
                        <div class="nft-img-mask nft-img-mask-1"></div>
                    </div>
                    <div class="block-nft">
                        <div class="body3">{{ lang.get("ANGEL") }} #0002</div>
                        <div class="nft-img-mask nft-img-mask-2"></div>
                    </div>
                    <div class="block-nft">
                        <div class="body3">{{ lang.get("ANGEL") }} #0003</div>
                        <div class="nft-img-mask nft-img-mask-3"></div>
                    </div>
                    <div class="block-nft">
                        <div class="body3">{{ lang.get("ANGEL") }} #0004</div>
                        <div class="nft-img-mask nft-img-mask-4"></div>
                    </div>
                    <div class="block-nft">
                        <div class="body3">{{ lang.get("ANGEL") }} #0005</div>
                        <div class="nft-img-mask nft-img-mask-5"></div>
                    </div>
                    <div class="block-nft">
                        <div class="body3">{{ lang.get("ANGEL") }} #0006</div>
                        <div class="nft-img-mask nft-img-mask-6"></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-angels" id="help-in-numbers">
            <div class="container">
                <div class="section-content">
                    <h2 class="subtitle">{{ lang.get("HELP_IN_NUMBERS") }}</h2>
                    <p class="heading1">{{ lang.get("OUR_ANGELS") }}</p>
                </div>
                <div class="cards-angels-wrapper">
                    <div class="card card-angel">
                        <div class="icon intersect"></div>
                        <div class="title1">{{ totalSupply }} {{ lang.get("NFTS") }}</div>
                        <div class="short-descr">{{ lang.get("ABOUT_ANGELS_PARTISIPANTS_1") }}</div>
                        <a class="btn btn-yellow" href="#angel-collection">{{ lang.get("VIEW_COLLECTION") }}</a>
                    </div>
                    <div class="card card-angel">
                        <div class="icon uk-angels"></div>
                        <div class="title1">{{ nftOwnersCount }} {{ lang.get("ANGELS") }}</div>
                        <div class="short-descr">{{ lang.get("ABOUT_ANGELS_PARTISIPANTS_2") }}</div>
                        <a href="#our-mission" class="btn btn-yellow">{{ lang.get("BECOME_AN_ANGEL") }}</a>
                    </div>
                    <div class="card card-angel">
                        <div class="icon bnb"></div>
                        <div class="title1">{{ totalDonated }} BNB</div>
                        <div class="short-descr">{{ lang.get("DONATE_PROMO") }}</div>
                        <a href="#your-donate" class="btn btn-blue">{{ lang.get("DONATE") }}</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="collection-card-nft">
            <div class="container">
                <div class="card-angel-collections">
                    <div v-for="(nft, index) in mediaNFT" class="card-nft">
                        <a @click.stop class="bg-card" :href="nft.mainUrl" target="_blank">
                            <img class="bg-card-nft" :src="nft.imgLink" />
                            <div class="blur-nft">
                                <button class="by-nft">Buy NFT</button>
                            </div>
                        </a>
                        <p class="name-card-nft">
                            {{ nft.name }}
                        </p>
                        <p class="card-disc">
                            {{ nft.desc }}
                        </p>
                        <div class="card-link">
                            <a :href="nft.socLink1" target="_blank" class="twitter">
                                <i class="i-twitter-fill"></i>
                                Twitter
                            </a>
                            <a :href="nft.socLink2" target="_blank" class="telegram">
                                <i class="i-telegram-fill"></i>
                                Telegram
                            </a>
                        </div>
                        <button class="mobile-buy">
                            Buy NFT
                        </button>
                    </div>
                </div>
            </div>
        </section> -->
        <section class="section section-team" id="our-team">
            <div class="container">
                <div class="section-block-container">
                    <div class="section-block section-block-content">
                        <div class="subtitle">{{ lang.get("OUR_TEAM") }}</div>
                        <a href="https://elephantslab.com/" class="link-team our-tm" target="_blank" rel="nofollow"></a>
                        <div class="photo-team photo-team-mobile"></div>
                        <p class="body1" v-html="lang.get('OUR_DESC')"></p>
                        <ul class="ul-social-list">
                            <li>
                                <a class="twitter link" href="https://twitter.com/ElephantsLab" rel="nofollow" target="_blank">
                                    <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.2812 5.50789L11.3316 6.33835L10.4922 6.23666C7.43686 5.84685 4.76765 4.52491 2.50134 2.30471L1.39336 1.20309L1.10798 2.01659C0.503625 3.83004 0.889738 5.74516 2.1488 7.03322C2.8203 7.74503 2.66921 7.84672 1.51088 7.42302C1.10798 7.28744 0.755438 7.18575 0.721863 7.23659C0.60435 7.35523 1.00725 8.8975 1.32621 9.50763C1.76269 10.355 2.65243 11.1855 3.6261 11.677L4.44869 12.0668L3.47501 12.0837C2.53491 12.0837 2.50134 12.1007 2.60206 12.4566C2.93781 13.5582 4.26403 14.7276 5.74133 15.2361L6.78215 15.592L5.87563 16.1343C4.53263 16.9139 2.9546 17.3546 1.37658 17.3885C0.621138 17.4054 0 17.4732 0 17.5241C0 17.6935 2.04808 18.6426 3.23999 19.0155C6.81573 20.1171 11.063 19.6426 14.2526 17.7613C16.5189 16.4224 18.7852 13.7616 19.8428 11.1855C20.4136 9.8127 20.9844 7.30439 20.9844 6.10107C20.9844 5.32146 21.0347 5.21978 21.9748 4.28763C22.5288 3.7453 23.0492 3.15211 23.15 2.98263C23.3178 2.66062 23.3011 2.66062 22.4449 2.94874C21.018 3.45718 20.8165 3.38939 21.5216 2.62672C22.042 2.08439 22.6631 1.1014 22.6631 0.813283C22.6631 0.762439 22.4113 0.847179 22.1259 0.999712C21.8238 1.16919 21.1523 1.42341 20.6486 1.57595L19.7421 1.86406L18.9195 1.30478C18.4663 0.999712 17.8283 0.660751 17.4926 0.559063C16.6364 0.32179 15.327 0.355686 14.5548 0.626855C12.4563 1.38952 11.1301 3.35549 11.2812 5.50789Z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a class="facebook link" href="https://www.facebook.com/ElephantsLab/" rel="nofollow" target="_blank">
                                    <svg width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.50195 26.1115V13.0542H12.1063L12.584 8.5546H8.50195L8.50807 6.30251C8.50807 5.12894 8.61958 4.50012 10.3052 4.50012H12.5585V0H8.95358C4.62353 0 3.09946 2.18279 3.09946 5.85357V8.55511H0.400391V13.0547H3.09946V26.1115H8.50195Z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a class="telegram link" href="https://t.me/ukrainesangels" rel="nofollow" target="_blank">
                                    <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.362483 9.24577C2.81774 7.89334 5.55848 6.76459 8.1193 5.63007C12.5249 3.77181 16.948 1.94576 21.4157 0.245724C22.285 -0.0439451 23.8469 -0.327226 24 0.960971C23.9162 2.7844 23.5712 4.59715 23.3345 6.4099C22.7339 10.3963 22.0398 14.3691 21.3629 18.3423C21.1297 19.6658 19.4717 20.351 18.4109 19.504C15.8614 17.7819 13.2924 16.0766 10.7755 14.3146C9.95104 13.4769 10.7156 12.2738 11.4519 11.6756C13.5517 9.60624 15.7786 7.8481 17.7686 5.67181C18.3054 4.37548 16.7193 5.468 16.1962 5.80273C13.3215 7.78369 10.5173 9.88558 7.48649 11.6266C5.93838 12.4788 4.13403 11.7505 2.58662 11.2749C1.19916 10.7005 -0.833964 10.1218 0.362343 9.24586L0.362483 9.24577Z"
                                        />
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

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    const conf = require("../core/Config.json");
    import SocialLinks from "@/components/SocialLinks.vue";
    import { mapGetters, mapMutations, mapActions } from "vuex";
    import MultiLang from "../core/multilang.js";
    import "swiper/css";
    import "vue3-carousel/dist/carousel.css";

    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Pagination, Navigation } from "swiper";
    export default {
        components: {
            SocialLinks,
            Navigation,
            Pagination,
            SwiperSlide,
            Swiper,
        },
        data() {
            return {
                lang: new MultiLang(this),
                conf: conf,
                mintVal: 1,
                donationAmount: 0.1,
                isMaxVal: false,
                totalSupply: 0,
                nftOwnersCount: 0,
                totalDonated: 0,
                ricedPercentage: 0,
                mediaNFT: [],
                customSwiper: undefined
            };
        },
        methods: {
            ...mapMutations(["updateWalletChooseModal"]),
            ...mapActions(["fetchMediaNFT"]),
            async mint() {
                if (this.userAddressGetter) {
                    if (this.mintVal < 1) {
                        alert("enter positive amount only");
                        return;
                    }
                    if (this.mintVal <= 1) {
                        await this.$root.core.mint(this.bnbPriceGetter);
                    } else {
                        await this.$root.core.buyMore(this.mintVal);
                    }
                } else {
                    this.updateWalletChooseModal(true);
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
                if (this.userAddressGetter) {
                    if (this.donationAmount > 0) {
                        await this.$root.core.donate(parseFloat(this.donationAmount), this.isMaxVal);
                    } else {
                        alert("enter positive amount only");
                    }
                } else {
                    this.updateWalletChooseModal(true);
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
            },
        },
        computed: {
            ...mapGetters(["bnbPriceGetter", "userAddressGetter"]),
            shouldBeDisabled() {
                const selectedWallet = window.localStorage.getItem("selectedWallet");
                console.log(selectedWallet);

                if (selectedWallet) {
                    return false;
                }
                return true;
            },
        },
        async mounted() {
            let _this = this;
            this.lang.init();
            console.log(this);
            const savedTotalSupply = localStorage.getItem("totalSupply");
            const savedNftOwnersCount = localStorage.getItem("nftOwnersCount");
            const savedTotalDonated = localStorage.getItem("totalDonated");
            this.mediaNFT = await this.fetchMediaNFT("MediaNFT");

            if (savedTotalSupply) {
                this.totalSupply = savedTotalSupply;
            }
            if (savedNftOwnersCount) {
                this.nftOwnersCount = savedNftOwnersCount;
            }
            if (savedTotalDonated) {
                this.totalDonated = savedTotalDonated;
            }
            setTimeout(async function init() {
                if (!_this.$root?.core) {
                    setTimeout(init, 1000);
                    return;
                }
                _this.totalSupply = await _this.$root.core.getTotalSupply();
                _this.nftOwnersCount = await _this.$root.core.getNftOwnersCount();
                _this.totalDonated = await _this.$root.core.getTotalDonated();
                _this.ricedPercentage = Number((100 - ((conf.GOAL - _this.totalDonated) / conf.GOAL) * 100).toFixed(1));
            }, 1500);
        },
    };
</script>
