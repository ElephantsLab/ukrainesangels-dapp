<template>
<div>
  <header-component/>
  <div  class="main-wrapper info-page-wrapper">
  <div class="container">     
    <a class="to-main" v-on:click="toMain">
      <div >
        <i class="i-arrow-drop-left-line"></i>
      </div>
      <p class="body3">Go to Home Page</p>
    </a>
    <div class="section-block-container">   
      <div class="section-block section-block-content">
        <p class="heading1">Благодійні організації та достовірна інформація</p>
        <p class="body2">
          Наша компанія зібрала для васнеобхідну інформацію яка може бути корисною в умовах війни. Ми постійно доповнюємо та актуалізовуємо список ресурсів які включають благодійні фонди,контакти волонтерів. та організації яким ми довіряємо. 
        </p>
          <div class="organization">
            <a v-for="link in links" v-bind:key="link" v-bind:href="link[3]" target="_blank" rel="nofollow" class="organization-block">
              <div class="organization-logo" v-bind:style="{ 'background-image': parseUrl(link[1]) }"></div>
              <div class="organization-disc">
                <p class="body3">{{ link[0] }}</p>
                <p class="short-descr"
                >{{ link[2] }}</p>
              </div>
              <div class="organization-link">
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