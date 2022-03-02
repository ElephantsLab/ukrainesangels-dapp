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
            <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow"  class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
              </div>
              <div class="organization__link">
                <i class="i-share-box-fill"></i>
              </div>
           </a>
           <a href="" target="_blank" rel="nofollow" class="organization__block">
              <div class="organization__logo"></div>
              <div class="organization__disc">
                <p class="organization__disc__title">Name of organization</p>
                <p class="organization__disc__about"
                >Short description what this organization doing and what kind of help can it be. Maybe 3rd row
                </p>
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
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {
    HeaderComponent
  },
  methods: {
    toMain() {
      this.$router.push("/");
    }
  }
}
</script>