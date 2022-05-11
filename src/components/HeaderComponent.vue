<template>
    <div class="header-wrapper">
        <header class="container">
            <a v-on:click="this.$router.push('/')" class="header-logo logo"></a>
            <nav class="header-nav">
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#our-mission">Our Mission</a>
                </li>
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#situation">Situation in Ukraine</a>
                </li>
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#angel-collection">Collection</a>
                </li>
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#your-donate">Donation</a>
                </li>
                <li>
                    <a class="header-link" v-on:click="this.$router.push('/')" href="#need-help">Help Desk</a>
                </li>
                <li>
                    <a class="header-link" href="/MyCollection">
                        <p class="dropdown-text">My Angels</p>
                    </a>
                </li>
                <!--        <li>-->
                <!--          <a class="header-link"-->
                <!--              v-on:click="this.$router.push('/')"-->
                <!--              href="#our-goal"-->
                <!--              >Our goal</a-->
                <!--          >-->
                <!--        </li>-->
            </nav>
            <div class="header-main-buttons">
                <button v-if="!userAddressGetter" class="btn btn-connect" v-on:click="connectWallet">
                    <span>Connect Wallet</span>
                    <span class="icon" :class="getWalletImg"></span>
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
                                <p class="dropdown-text">Log Out</p>
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
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#our-mission">Our Mission</a>
                        </li>
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#situation">Situation in Ukraine</a>
                        </li>
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#angel-collection">Collection</a>
                        </li>
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#your-donate">Donation</a>
                        </li>
                        <li>
                            <a class="nav-mob-link" v-on:click="this.$router.push('/'), (mobileMenu = false)" href="#need-help">Help Desk</a>
                        </li>
                    </ul>
                    <div class="ul-flex-column menu-btn-wrapper">
                        <button v-if="!userAddressGetter" class="btn btn-connect connected" v-on:click="connectWallet">
                            <span>Connect Wallet</span>
                            <span class="icon metamask-img"></span>
                        </button>
                        <div v-else class="btn btn-connect connected" v-on:click="logOut">
                            <span
                                >{{ userAddressGetter[0] + userAddressGetter[1] + userAddressGetter[2] + userAddressGetter[3] + userAddressGetter[4] }}...{{
                                    userAddressGetter[39] + userAddressGetter[40] + userAddressGetter[41]
                                }}</span
                            >
                            <span class="icon metamask-img"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from "vuex";

    export default {
        data() {
            return {
                mobileMenu: false,
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
