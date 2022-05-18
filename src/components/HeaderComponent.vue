<template>
    <div class="header-wrapper">
        <header class="container">
            <a v-on:click="this.$router.push('/')" class="header-logo logo"></a>
            <nav class="header-nav">
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#our-mission">{{ lang.get("OUR_MISSION") }}</a>
                </li>
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#situation">{{ lang.get("SITUATION_IN_UKRAINE") }}</a>
                </li>
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#angel-collection">{{ lang.get("COLLECTION") }}</a>
                </li>
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#your-donate">{{ lang.get("DONATION") }}</a>
                </li>
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#need-help">{{ lang.get("HELP_DESK") }}</a>
                </li>
                <li>
                    <router-link tag="a" :to="{ name: 'MyCollection' }" class="header-link">
                        <a>{{ lang.get("MY_COLLECTION") }}</a>
                    </router-link>
                </li>
                <!--        <li>-->
                <!--          <a class="header-link"-->
                <!--              v-on:click="this.$router.push('/')"-->
                <!--              href="#our-goal"-->
                <!--              >Our goal</a-->
                <!--          >-->
                <!--        </li>-->
            </nav>
            <button @click="setLang('en')"><span>ENG</span></button>
            <br />
            &sbquo;
            <button @click="setLang('ua')">UA</button>

            <div class="header-main-buttons">
                <button v-if="!userAddressGetter" class="btn btn-connect" v-on:click="connectWallet">
                    <span>{{ lang.get("CONNECT_WALLET") }}</span>
                </button>
                <div v-else class="btn btn-connect connected" @click="updateWalletChooseModal(true)">
                    <span
                        >{{ userAddressGetter[0] + userAddressGetter[1] + userAddressGetter[2] + userAddressGetter[3] + userAddressGetter[4] }}...{{
                            userAddressGetter[39] + userAddressGetter[40] + userAddressGetter[41]
                        }}</span
                    >
                    <span class="icon" :class="getWalletImg"></span>
                </div>
                <div v-if="userAddressGetter" class="dropdown-content">
                    <div class="dropdown-content-inner">
                        <div>
                            <a class="drop-link" v-on:click="logOut">
                                <i class="i-logout-circle-line"></i>
                                <p class="dropdown-text">{{ lang.get("LOG_OUT") }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mobile-menu-status">
                <!-- TODO: если нажимаем сюда <div class="mobile-menu"> показать -->
                <button v-on:click="mobileMenu = true" class="btn-mob-menu">
                    <i class="i-menu-3-fill"></i>
                </button>
            </div>
        </header>

        <!-- ----------mobile-menu---------- -->
        <div v-if="mobileMenu" class="mobile-menu">
            <header class="header-mobile">
                <div class="container">
                    <a href="" class="header-logo logo"></a>
                    <div class="mobile-menu-status">
                        <!-- TODO: если нажимаем сюда <div class="mobile-menu"> спрятать -->
                        <button v-on:click="mobileMenu = false" class="btn-mobile-close">
                            <i class="i-close-fill"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="menu-wrapper">
                <div class="container">
                    <ul class="ul-flex-column">
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#our-mission">{{
                                lang.get("OUR_MISSION")
                            }}</a>
                        </li>
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#situation">{{
                                lang.get("SITUATION_IN_UKRAINE")
                            }}</a>
                        </li>
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#angel-collection">{{
                                lange.get("COLLECTION")
                            }}</a>
                        </li>
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#your-donate">{{ lang.get("DONATION") }}</a>
                        </li>
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#need-help">{{ lang.get("HELP_DESK") }}</a>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ name: 'MyCollection' }" class="header-link">
                                <p class="dropdown-text">{{ lang.get("MY_COLLECTION") }}</p>
                            </router-link>
                        </li>
                    </ul>
                    <div class="ul-flex-column menu-btn-wrapper">
                        <button v-if="!userAddressGetter" class="btn btn-connect connected" v-on:click="connectWallet">
                            <span>{{ lang.get("CONNECT_WALLET") }}</span>
                        </button>
                        <div v-else class="btn btn-connect connected" v-on:click="updateWalletChooseModal(true)">
                            <span
                                >{{ userAddressGetter[0] + userAddressGetter[1] + userAddressGetter[2] + userAddressGetter[3] + userAddressGetter[4] }}...{{
                                    userAddressGetter[39] + userAddressGetter[40] + userAddressGetter[41]
                                }}</span
                            >
                            <span class="icon" :class="getWalletImg"></span>
                        </div>
                        <button v-if="userAddressGetter" class="disconnect" v-on:click="logOut">
                            <i class="i-logout-circle-line"></i>{{ lang.get("DISCONNECT") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from "vuex";
    import MultiLang from "../core/multilang.js";
    export default {
        data() {
            return {
                mobileMenu: false,
                lang: new MultiLang(this),
                selectedLang: "",
            };
        },
        methods: {
            ...mapMutations(["updateWalletChooseModal"]),
            connectWallet() {
                this.$store.dispatch("connectWallet");
            },
            async logOut() {
                const selectedWallet = window.localStorage.getItem("selectedWallet");

                if (selectedWallet === "metamask") {
                    localStorage.removeItem("address");
                    localStorage.removeItem("selectedWallet");
                    location.reload();
                } else if (selectedWallet === "walletconnect") {
                    await this.$root.core.killSession();
                }
            },
            setLang(lang, event) {
                this.selectedLang = lang;
                this.$store.dispatch("updateLanguage", lang);
                // this.$root.core.setLangForAddress(lang);
            },
            setActiveLang(inputLang) {
                return inputLang === this.selectedLang;
            },
            setFlagImg() {
                let lang = localStorage.getItem("lang");
                return lang ? `${lang}Icon` : "enIcon";
            },
            getLang() {
                return localStorage.getItem("lang");
            },
        },
        mounted() {
            this.lang.init();
            this.selectedLang = localStorage.getItem("lang");
            const navLinks = document.getElementsByClassName("header-link");
            console.log(navLinks);
            for (let link of navLinks) {
                link.addEventListener("click", function () {
                    for (let neigbors of navLinks) {
                        neigbors.classList.remove("active");
                    }
                    link.classList.add("active");
                });
            }
        },
        computed: {
            ...mapGetters(["userAddressGetter"]),
            getWalletImg() {
                const selectedWallet = window.localStorage.getItem("selectedWallet");
                return selectedWallet && selectedWallet === "metamask" ? "icon-mt" : selectedWallet && selectedWallet === "walletconnect" ? "icon-wtc" : "";
            },
        },
    };
</script>
