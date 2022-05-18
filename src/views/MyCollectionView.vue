<template>
    <div>
        <header-component />
        <div class="main-wrapper my-page-wrapper">
            <div class="container">
                <a class="to-main" v-on:click="toMain">
                    <div>
                        <i class="i-arrow-drop-left-line"></i>
                    </div>
                    <p class="body3">{{ lang.get("GO_TO_HOME") }}</p>
                </a>
                <div class="status-block">
                    <section class="screen-my-collection" v-if="userNFTsGetter && userNFTsGetter.length">
                        <p class="heading1">{{ lang.get("MY_ANGELS") }}</p>
                        <div class="my-collection-wrapper">
                            <div class="set-part">
                                <div class="set-card-wrapper">
                                    <div v-for="(nft, index) in userNFTsGetter" v-bind:key="nft" v-on:click="goToSelected(index, nft)" class="card card-of-set">
                                        <div class="img-wrapper">
                                            <img v-bind:src="nft.image" alt="" />
                                        </div>
                                    </div>
                                    <a href="#add-angel" class="card card-of-set card-of-set-add">
                                        <div class="add">
                                            <a>
                                                <i class="i-add-line"></i>
                                            </a>
                                        </div>
                                    </a>
                                    <!--                  <button disabled class="card card-of-set card-of-set-add">-->
                                    <!--                    <div class="add">-->
                                    <!--                      <a href="#add-angel">-->
                                    <!--                        <i class="i-add-line"></i>-->
                                    <!--                      </a>-->
                                    <!--                    </div>-->
                                    <!--                  </button>-->
                                    <!--                  <button disabled class="card card-of-set card-of-set-add">-->
                                    <!--                    <div class="add">-->
                                    <!--                      <a href="#add-angel">-->
                                    <!--                        <i class="i-add-line"></i>-->
                                    <!--                      </a>-->
                                    <!--                    </div>-->
                                    <!--                  </button>-->
                                </div>
                            </div>
                            <div class="main-part">
                                <div class="card card-slider">
                                    <div class="card-slider-container">
                                        <button v-on:click="swipe(false)" class="btn-arrow">
                                            <i class="i-arrow-drop-left-line"></i>
                                        </button>
                                        <swiper :slidesPerView="1" :spaceBetween="30" :modules="modules" class="mySwiper">
                                            <swiper-slide v-for="(nft, index) in userNFTsGetter" v-bind:key="index">
                                                <img v-bind:src="nft.image" alt="" />
                                            </swiper-slide>
                                        </swiper>
                                        <button v-on:click="swipe(true)" class="btn-arrow">
                                            <i class="i-arrow-drop-right-line"></i>
                                        </button>
                                        <!--<div class="card-slider-img">-->
                                        <!--<img src="@/assets/images/set_nft/14.png" alt="">-->
                                        <!--</div>-->
                                    </div>
                                </div>
                                <div class="info-about-angel">
                                    <div class="info-about-name">
                                        <p>{{ lang.get("ANGEL") }} #{{ selectedNft }}</p>
                                    </div>
                                    <div class="info-about-angel-disc" v-if="nftParam.name">
                                        <ul>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("CONTRACT_ADDRESS") }}</p>
                                                <p class="disc-name-info">
                                                    <span
                                                        >{{
                                                            contractAddressGetter[0] +
                                                            contractAddressGetter[1] +
                                                            contractAddressGetter[2] +
                                                            contractAddressGetter[3] +
                                                            contractAddressGetter[4]
                                                        }}...{{ contractAddressGetter[39] + contractAddressGetter[40] + contractAddressGetter[41] }}</span
                                                    >
                                                </p>
                                            </li>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("BLOCKCHAIN") }}</p>
                                                <p class="disc-name-info">{{ lang.get("BSC") }}</p>
                                            </li>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("TOKEN_ID") }}</p>
                                                <p class="disc-name-info">{{ tokenId }}</p>
                                            </li>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("TOKEN_STANDART") }}</p>
                                                <p class="disc-name-info">ERC-721</p>
                                            </li>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("NAME") }}</p>
                                                <p class="disc-name-info">{{ nftParam.name }}</p>
                                            </li>
                                            <li class="stroke">
                                                <p class="disc-name colum">{{ lang.get("DESC") }}</p>
                                                <p class="disc-name-info">{{ nftParam.desc }}</p>
                                            </li>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("EDITION") }}</p>
                                                <p class="disc-name-info">{{ nftParam.edition }}</p>
                                            </li>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("DATE") }}</p>
                                                <p class="disc-name-info">{{ nftParam.date }}</p>
                                            </li>
                                            <li class="stroke">
                                                <p class="disc-name colum-two">{{ lang.get("COMPILER") }}</p>
                                                <p class="disc-name-info">{{ nftParam.compiler }}</p>
                                            </li>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("SEX") }}</p>
                                                <p class="disc-name-info">{{ nftParam.sex }}</p>
                                            </li>
                                            <li>
                                                <p class="disc-name width">{{ lang.get("COUNTRY") }}</p>
                                                <p class="disc-name-info">{{ nftParam.country }}</p>
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
                                <p v-if="userNFTsGetter && userNFTsGetter.length" class="heading2">{{ lang.get("UPGRADE_COLLECTION") }}</p>
                                <!--                heading-angel-status-->
                                <p v-else class="heading2">
                                    {{ lang.get("NO_NFT") }}<br />
                                    {{ lang.get("UPGRADE_COLLECTION") }}
                                </p>
                                <p class="body2">{{ lang.get("NFT_DESC_CAB") }}</p>
                            </div>
                            <div class="section-card">
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
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MultiLang from "../core/multilang";
    import HeaderComponent from "@/components/HeaderComponent";
    import { mapGetters, mapActions, mapMutations } from "vuex";
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
                lang: new MultiLang(this),
                mintVal: 1,
                NFTs: [],
                selectedNft: 0,
                tokenId: 0,
                nftParam: {
                    name: undefined,
                    desc: undefined,
                    edition: undefined,
                    date: undefined,
                    compiler: undefined,
                    sex: undefined,
                    country: undefined,
                },
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
            ...mapMutations(["updateWalletChooseModal"]),
            async mint() {
                if (this.userAddressGetter) {
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
                } else {
                    this.updateWalletChooseModal(true);
                }
            },
            formatTime(timestamp) {
                if (!timestamp) return;
                let a = new Date(timestamp * 1000);
                let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                let year = a.getFullYear();
                let month = months[a.getMonth()];
                let date = a.getDate();
                let hour = a.getHours();
                let min = a.getMinutes();
                let sec = a.getSeconds();
                if (hour.toString().length === 1) {
                    hour = "0" + hour;
                }
                if (min.toString().length === 1) {
                    min = "0" + min;
                }
                if (sec.toString().length === 1) {
                    sec = "0" + sec;
                }
                return year + " " + date + " " + month + " " + hour + ":" + min + ":" + sec;
            },
            swipe(dirrection) {
                const swiper = document.querySelector(".mySwiper").swiper;
                if (dirrection) {
                    swiper.slideNext();
                } else {
                    swiper.slidePrev();
                }
                this.goToSelected(swiper.activeIndex, this.userNFTsGetter[swiper.activeIndex]);
            },
            goToSelected(index, nft) {
                const swiper = document.querySelector(".mySwiper").swiper;
                if (nft.tokenId.toString().length == 1) {
                    this.selectedNft = `000${nft.tokenId}`;
                } else if (nft.tokenId.toString().length == 2) {
                    this.selectedNft = `00${nft.tokenId}`;
                } else if (nft.tokenId.toString().length == 3) {
                    this.selectedNft = `0${nft.tokenId}`;
                } else {
                    this.selectedNft = nft.tokenId;
                }
                this.tokenId = nft.tokenId;
                this.nftParam.name = nft.name;
                this.nftParam.desc = nft.description;
                this.nftParam.edition = nft.custom_fields.edition;
                this.nftParam.date = this.formatTime(nft.custom_fields.date);
                this.nftParam.compiler = nft.custom_fields.compiler;
                this.nftParam.sex = nft.sex;
                this.nftParam.country = nft.country;
                swiper.slideTo(index);
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
        async mounted() {
            this.lang.init();
            if (this.userAddressGetter) {
                await this.fetchNFTByUser(this.userAddressGetter);
            }

            setTimeout(() => {
                if (!this.userNFTsGetter[0]) return;
                if (this.userNFTsGetter[0].tokenId.toString().length == 1) {
                    this.selectedNft = `000${this.userNFTsGetter[0].tokenId}`;
                } else if (this.userNFTsGetter[0].tokenId.toString().length == 2) {
                    this.selectedNft = `00${this.userNFTsGetter[0].tokenId}`;
                } else if (this.userNFTsGetter[0].tokenId.toString().length == 3) {
                    this.selectedNft = `0${this.userNFTsGetter[0].tokenId}`;
                } else {
                    this.selectedNft = this.userNFTsGetter[0].tokenId;
                }
                this.tokenId = this.userNFTsGetter[0].tokenId;
                this.nftParam.name = this.userNFTsGetter[0].name;
                this.nftParam.desc = this.userNFTsGetter[0].description;
                this.nftParam.edition = this.userNFTsGetter[0].custom_fields.edition;
                this.nftParam.date = this.formatTime(this.userNFTsGetter[0].custom_fields.date);
                this.nftParam.compiler = this.userNFTsGetter[0].custom_fields.compiler;
                this.nftParam.sex = this.userNFTsGetter[0].sex;
                this.nftParam.country = this.userNFTsGetter[0].country;
            }, 1500);
        },
        watch: {
            async userAddressGetter(newVal) {
                console.log(newVal);
                if (newVal) {
                    await this.fetchNFTByUser(newVal);
                }
            },
        },
        computed: mapGetters(["bnbPriceGetter", "userAddressGetter", "userNFTsGetter", "contractAddressGetter"]),
    };
</script>
