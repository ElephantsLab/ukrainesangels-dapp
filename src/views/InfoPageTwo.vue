<template>
    <div>
        <header-component />
        <div class="main-wrapper info-page-wrapper">
            <div class="container">
                <a class="to-main" v-on:click="toMain">
                    <div>
                        <i class="i-arrow-drop-left-line"></i>
                    </div>
                    <p class="body3">{{ lang.get("GO_TO_HOME") }}</p>
                </a>
                <div class="section-block-container">
                    <div class="section-block section-block-content">
                        <p class="heading1">
                            {{ lang.get("DONATE") }} <span>{{ lang.get("TO") }}</span> <br />{{ lang.get("CHARITY_ORGS") }}
                        </p>
                        <p class="body2">
                            {{ lang.get("CHARITY_ORGS_DESC") }}
                        </p>
                        <div class="organization">
                            <a v-for="link in links" v-bind:key="link" v-bind:href="link[3]" target="_blank" rel="nofollow" class="organization-block">
                                <div class="organization-logo" v-bind:style="{ 'background-image': parseUrl(link[1]) }"></div>
                                <div class="organization-disc">
                                    <p class="body3">{{ link[0] }}</p>
                                    <p class="short-descr">{{ link[2] }}</p>
                                </div>
                                <div class="organization-link">
                                    <i class="i-share-box-fill"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="section-block section-block-card">
                        <p class="heading2">{{ lang.get("DONATE_VIA_PLATFORM") }}</p>
                        <p class="body2">
                            {{ lang.get("DONATE_VIA_PLATFORM_DESC") }}
                        </p>
                        <div class="card card-donate">
                            <div class="title1">{{ lang.get("MAKE_A_DONATION") }}</div>
                            <div class="card-input">
                                <div class="input-label">{{ lang.get("MAKE_A_DONATION_DESC") }}</div>
                                <div class="address">
                                    BSC:
                                    <a href="https://bscscan.com/address/0x1cee20367ebda61500dd037a0ba2a9a2b733d391#code" target="_blank" rel="nofollow">
                                        <span>0x1CEe20367eBdA61500dD037A0ba2a9a2b733D391</span>
                                    </a>
                                    <!-- <i class="i-checkbox-multiple-blank-line"></i>   -->
                                </div>
                                <div class="input-wrapper input-amount">
                                    <input
                                        class="input"
                                        type="number"
                                        min="1"
                                        onkeypress="return (event.charCode !== 45 && event.charCode !== 43 && event.charCode !== 101)"
                                        v-model="donationAmount"
                                    />
                                    <span class="input-token">BNB</span>
                                </div>
                                <div class="speed-amount-container">
                                    <button class="btn btn-speed-amount" v-on:click="(donationAmount = 0.1), (isMaxVal = false)">0.1 BNB</button>
                                    <button class="btn btn-speed-amount" v-on:click="(donationAmount = 1), (isMaxVal = false)">1 BNB</button>
                                    <button class="btn btn-speed-amount" v-on:click="(donationAmount = 5), (isMaxVal = false)">5 BNB</button>
                                    <button class="btn btn-speed-amount" v-on:click="getAllBalance">{{ lang.get("MAX") }}</button>
                                </div>
                                <button class="btn btn-submit" v-on:click="makeDonation">{{ lang.get("DONATE") }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from "vuex";
    import HeaderComponent from "@/components/HeaderComponent";
    import MultiLang from "../core/multilang";
    export default {
        components: {
            HeaderComponent,
        },
        data() {
            return {
                donationAmount: 0.1,
                isMaxVal: false,
                links: [],
                lang: new MultiLang(this),
            };
        },
        methods: {
            ...mapActions(["fetchHelpCenters"]),
            ...mapMutations(["updateWalletChooseModal"]),

            toMain() {
                this.$router.push("/");
            },
            async makeDonation() {
                if (this.userAddressGetter) {
                    if (this.donationAmount > 0) {
                        await this.$root.core.donate(parseFloat(this.donationAmount), this.isMaxVal);
                    } else {
                        alert("enter positive amount only");
                    }
                } else {
                    this.updateWalletChooseModal(true);
                }
            },
            async getAllBalance() {
                const userAddress = localStorage.getItem("address");
                if (userAddress) {
                    const balance = await this.$root.core.getUserBalance(userAddress);
                    if (balance) {
                        this.donationAmount = parseFloat(balance);
                        this.isMaxVal = true;
                    }
                }
            },
            parseLinks(data) {
                if (data.length) {
                    this.links = data;
                }
            },
            parseUrl(url) {
                return `url('${url}')`;
            },
        },
        async mounted() {
            this.lang.init();
            this.parseLinks(await this.fetchHelpCenters("Donate"));
        },
        computed: {
            shouldBeDisabled() {
                const selectedWallet = window.localStorage.getItem("selectedWallet");
                console.log(selectedWallet);
                if (selectedWallet) {
                    return true;
                }
                return false;
            },
            ...mapGetters(["userAddressGetter"]),
        },
    };
</script>
