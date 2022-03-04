<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-block">
                    <a v-on:click="this.$router.push('/')" class="header-logo logo"></a>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">Navigation</span>
                    <ul class="ul-flex-column">
                        <li><a class="footer-link" v-on:click="this.$router.push('/')"  href="#our-mission">Our mission</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')"  href="#situation">Situation in Ukraine</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')"  href="#angel-collection">Collection</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')"  href="#your-donate">Donation</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')" href="#need-help">Help desc</a></li>
                    </ul>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">useful links</span>
                    <ul class="ul-flex-column">
                        <li><a class="footer-link" v-on:click="this.$router.push('/')" href="https://ukrainesangels.com/InfoCenter">If you need help</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')" href="https://ukrainesangels.com/Donate">If you want help</a></li>
                    </ul>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">Social links</span>
                    <social-links/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
  components: {
    SocialLinks,
  }
}
</script>