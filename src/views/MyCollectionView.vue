<template>
  <div>
    <header-component/>
    <div class="main-wrapper my-page-wrapper">
      <div class="container">
      <a class="to-main" v-on:click="toMain">
        <div >
          <i class="i-arrow-drop-left-line"></i>
        </div>
        <p class="body3">Go to Home Page</p>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
export default {
  components: {
    HeaderComponent,
  }
}
</script>