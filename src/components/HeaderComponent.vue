<template>
  <div class="header-wrapper">
    <header class="container">
      <a v-on:click="this.$router.push('/')" class="header-logo logo"></a>
      <nav class="header-nav">
        <li><a class="header-link" v-on:click="this.$router.push('/')" href="#our-mission">Our Mission</a></li>
        <li><a class="header-link" v-on:click="this.$router.push('/')" href="#situation">Situation in Ukraine</a></li>
        <li><a class="header-link" v-on:click="this.$router.push('/')" href="#angel-collection">Collection</a></li>
        <li><a class="header-link" v-on:click="this.$router.push('/')" href="#your-donate">Donation</a></li>
        <li><a class="header-link" v-on:click="this.$router.push('/')" href="#our-team">Our Team</a></li>
      </nav>
      <div class="header-main-buttons">
        <button v-if="!userAddressGetter" class="btn btn-connect" v-on:click="connectWallet">
          <span >Connect Wallet</span>
          <span class="icon metamask-img"></span>
        </button>
        <div v-else class="btn btn-connect connected" v-on:click="logOut">
          <span >{{ userAddressGetter[0] + userAddressGetter[1] + userAddressGetter[2] + userAddressGetter[3] + userAddressGetter[4] }}...{{ userAddressGetter[39] + userAddressGetter[40] + userAddressGetter[41] }}</span>
          <span class="icon metamask-img"></span>
        </div>
      </div>
      <div class="mobile-menu-status">
        <!-- TODO: если нажимаем сюда <div class="mobile-menu"> показать -->
        <button class="btn-mob-menu">
          <i class="i-menu-3-fill"></i>
        </button>
      </div>
    </header>
      
      <!-- ----------mobile-menu---------- -->
    <div class="mobile-menu">
      <header class="header-mobile">
        <div class="container">
          <a href="" class="header-logo logo"></a>  
          <div class="mobile-menu-status">            
            <!-- TODO: если нажимаем сюда <div class="mobile-menu"> спрятать -->
            <button class="btn-mobile-close">
              <i class="i-close-fill"></i>
            </button>
          </div>
        </div>
      </header>
      <div class="menu-wrapper">
        <div class="container">
          
      <ul class="ul-flex-column">
        <li class=""></li>
        <button class="btn btn-connect connected" v-on:click="connectWallet" v-if="!userAddressGetter">Connect Wallet</button>
        <button class="btn btn-connect connected" v-on:click="connectWallet" v-else>{{ userAddressGetter[0] + userAddressGetter[1] + userAddressGetter[2] + userAddressGetter[3] + userAddressGetter[4] }}...{{ userAddressGetter[39] + userAddressGetter[40] + userAddressGetter[41] }}</button>
      </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["connectWallet"]),
    logOut() {
      localStorage.removeItem("address");
      localStorage.removeItem("selectedWallet");
      location.reload();
    }
  },
  computed: mapGetters(["userAddressGetter"])
}
</script>