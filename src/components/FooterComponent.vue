<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-block">
                    <a v-on:click="this.$router.push('/')" class="header-logo logo"></a>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">{{ lang.get("NAVIGATION") }}</span>
                    <ul class="ul-flex-column">
                        <li>
                            <a class="footer-link" v-on:click="this.$router.push('/')" href="#help-in-numbers" id="our-mission">{{ lang.get("OUR_ANGELS") }}</a>
                        </li>
                        <!-- <li>
                            <a class="footer-link" v-on:click="this.$router.push('/')" href="#situation" id="situation">{{
                                lang.get("SITUATION_IN_UKRAINE")
                            }}</a>
                        </li> -->
                        <li>
                            <a class="footer-link" v-on:click="this.$router.push('/')" href="#angel-collection" id="angel-collection">{{
                                lang.get("COLLECTION")
                            }}</a>
                        </li>
                        <li>
                            <a class="footer-link" v-on:click="this.$router.push('/')" href="#your-donate" id="your-donate">{{ lang.get("DONATION") }}</a>
                        </li>
                        <li>
                            <a class="footer-link" v-on:click="this.$router.push('/')" href="#need-help" id="need-help">{{ lang.get("HELP_DESK") }}</a>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ name: 'MyCollection' }" class="footer-link">
                                <a>{{ lang.get("MY_COLLECTION") }}</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">{{ lang.get("USEFULL_LINKS") }}</span>
                    <ul class="ul-flex-column">
                        <li>
                            <a class="footer-link" v-on:click="this.$router.push('/InfoCenter')">{{ lang.get("NEED_HELP") }}</a>
                        </li>
                        <li>
                            <a class="footer-link" v-on:click="this.$router.push('/Donate')">{{ lang.get("WANT_HELP") }}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-block">
                    <span class="footer-block-name">{{ lang.get("SOCIAL_NETWORKS") }}</span>
                    <social-links />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import SocialLinks from "@/components/SocialLinks";
    import MultiLang from "../core/multilang.js";
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    export default {
        components: {
            SocialLinks,
        },
        data() {
            return {
                lang: new MultiLang(this),
            };
        },
        async mounted() {
            this.lang.init();
            await timer(300);
            const navLinks = Array.from(window.document.getElementsByClassName("header-link"));
            const footerLinks = window.document.getElementsByClassName("footer-link");

            for (let footerLink of footerLinks) {
                footerLink.addEventListener("click", function (e) {
                    for (let neigbors of navLinks) {
                        neigbors.classList.remove("active");
                    }

                    const navLink = navLinks.find((el) => el.href === e.target.href);

                    navLink.classList.add("active");
                });
            }
        },
    };
</script>
