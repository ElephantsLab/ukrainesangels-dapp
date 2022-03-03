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
          <p class="title__nav">Go to Home Page</p>
        </a>
        <p class="need__help_title">Get Help From<br>Charitable Organization</p>
        <p class="need__help__disc">
          First of all, stay strong, we are here to get you the help you need.<br> Click any charity link to receive aid your situation requires.<br>
          Never give up, together we’ll surmount any obstacle. 
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