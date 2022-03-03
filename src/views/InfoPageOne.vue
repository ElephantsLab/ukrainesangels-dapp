<template>
<div>
  <header-component/>
  <div  class="main-wrapper info-page-wrapper">
  <div class="container">
    <div class="need__help">
      <div class="need__help__inner">
        <a class="to__main" v-on:click="toMain">
          <div >
            <i class="i-arrow-drop-left-line"></i>
          </div>
          <p class="title__nav">To main page</p>
        </a>
        <p class="need__help_title">If you need help</p>
        <p class="need__help__disc">
          Elit nisl, maecenas hac sit ut. Blandit orci urna netus sit neque sit laoreet eget urna. Commodo massa eros, molestie fermentum posuere sed. Sit vel, ultrices sed est malesuada suspendisse. 
        </p>
          <div class="organization">
            <a v-for="link in links" v-bind:key="link" v-bind:href="link[3]" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo" v-bind:style="{ 'background-image': parseUrl(link[1]) }"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">{{ link[0] }}</p>
                <p class="organization__disc__about"
                >{{ link[2] }}</p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
import HeaderComponent from "@/components/HeaderComponent";

export default {
  data() {
    return {
      links: []
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    ...mapActions(["fetchHelpCenters"]),
    toMain() {
      this.$router.push("/");
    },
    parseLinks(data) {
      if (data.length) {
        this.links = data;
      }
    },
    parseUrl(url) {
      return `url('${url}')`;
    }
  },
  async mounted() {
    this.parseLinks(await this.fetchHelpCenters("infoCenter"));
  }
}
</script>