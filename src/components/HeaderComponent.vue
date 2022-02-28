<template>
  <div class="header-wrapper">
    <header class="container">
    <a href="" class="header-logo logo"></a>
    <nav class="header-nav">
      <li><a class="header-link" href="">Our mission</a></li>
      <li><a class="header-link" href="">Situation in Ukraine</a></li>
      <li><a class="header-link" href="">Collection</a></li>
      <li><a class="header-link" href="">Donation</a></li>
      <li><a class="header-link" href="">Our team</a></li>
    </nav>
    <div class="header-main-buttons">
      <button class="btn btn-connect" v-on:click="connectWallet">
        <span>Connect Wallet</span>
        <span class="icon metamask-img"></span>
      </button>
    </div>
    
    <!-- ----------mobile-menu---------- -->
    <div class="mobile-menu-status">
          <button class="btn btn-mob-menu">
      mob-men
    </button>
    </div>
    </header>
    <div class="mobile-menu">
      <ul class="ul-flex-column">
        <li class=""></li>
        <button v-on:click="connectWallet">Connect Wallet</button>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["connectWallet"])
  }
}
</script>