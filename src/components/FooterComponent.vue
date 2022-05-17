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
                        <li><a class="footer-link" v-on:click="this.$router.push('/')" href="#our-mission">Our Mission</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')" href="#situation">Situation in Ukraine</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')" href="#angel-collection">Collection</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')" href="#your-donate">Donation</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/')" href="#need-help">Help Desk</a></li>
                        <li>
                          <router-link tag="a" :to="{ name: 'MyCollection' }" class="footer-link">
                            <a>My Collection</a>
                          </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">useful links</span>
                    <ul class="ul-flex-column">
                        <li><a class="footer-link" v-on:click="this.$router.push('/InfoCenter')">If You Need Help</a></li>
                        <li><a class="footer-link" v-on:click="this.$router.push('/Donate')">If You Want to Help</a></li>
                    </ul>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">Social media</span>
                    <social-links />
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
        },
    };
</script>
