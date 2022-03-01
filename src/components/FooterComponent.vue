<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-block">
                    <a class="logo" href="#"></a>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">Navigation</span>
                    <ul class="ul-flex-column">
                        <li><a class="footer-link" href="#our-mission">Our mission</a></li>
                        <li><a class="footer-link" href="#situation">Situation in Ukraine</a></li>
                        <li><a class="footer-link" href="#angel-collection">Collection</a></li>
                        <li><a class="footer-link" href="#your-donate">Donation</a></li>
                    </ul>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">useful links</span>
                    <ul class="ul-flex-column">
                        <li><a class="footer-link" href="#need-help">If you need help</a></li>
                        <li><a class="footer-link" href="#need-help">If you want help</a></li>
                        <li><a class="footer-link" href="">Name 1</a></li>
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