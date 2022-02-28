<template>
  <div class="header-wrapper">
    <header>
    <a href="" class="header-logo">
      logo
    </a>
    <nav class="header-nav">
    
    </nav>
    <div class="header-main-buttons">
      
    </div>
    <button v-on:click="connectWallet">Connect Wallet</button>
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