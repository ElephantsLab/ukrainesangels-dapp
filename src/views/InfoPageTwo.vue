<template>
  <div>
    <header-component/>
    <div  class="main-wrapper info-page-wrapper">
      <div class="container">
        <a class="to-main" v-on:click="toMain">
          <div>
          <i class="i-arrow-drop-left-line"></i>
          </div>
          <p class="body3">Go to Home Page</p>
        </a>
        <div class="section-block-container">
          <div class="section-block section-block-content">
            <p class="heading1">Donate to<br>Charitable Organization</p>
            <p class="body2">
              Help the people of Ukraine get through by donating to one of Ukraine’s or the world’s frontline charities directing aid right into the country. Here`s the list of the certified ones you can choose. Don’t hesitate, Ukraine needs our involvement now! 
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
          <div class="section-block section-block-card">
          <p class="heading2">Donate Crypto Via the Platform</p>
          <p class="body2">
            Your donation will be sent only to trusted crypto charities that sustain Ukraine’s people and army
          </p>
          <div class="card card-donate">
            <div class="title1">make a donation</div>
              <div class="card-input">
                <div class="input-label">
                  You Will Save Lives No Matter the Amount
                </div>                           
                <div class="input-wrapper input-amount">
                  <input class="input" type="number" min="1" onkeypress="return (event.charCode !== 45 && event.charCode !== 43 && event.charCode !== 101)" v-model="donationAmount">
                  <span class="input-token">BNB</span>
                </div>
                <div class="speed-amount-container">
                  <button class="btn btn-speed-amount" v-on:click="donationAmount = 0.1, isMaxVal = false">
                    0.1 BNB
                  </button>
                  <button class="btn btn-speed-amount" v-on:click="donationAmount = 1, isMaxVal = false">
                    1 BNB
                  </button>
                  <button class="btn btn-speed-amount" v-on:click="donationAmount = 5, isMaxVal = false">
                    5 BNB
                  </button>
                  <button class="btn btn-speed-amount" v-on:click="getAllBalance">
                    MAX
                  </button>
                </div>
                <button class="btn btn-submit" v-on:click="makeDonation">Donate</button>
              </div>
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
  components: {
    HeaderComponent
  },
  data() {
    return {
      donationAmount: 0.1,
      isMaxVal: false,
      links: []
    }
  },
  methods: {
    ...mapActions(["fetchHelpCenters"]),
    toMain() {
      this.$router.push("/");
    },
    async makeDonation() {
      if (this.donationAmount > 0) {
        await this.$root.core.donate(parseFloat(this.donationAmount), this.isMaxVal);
      } else {
        alert("enter positive amount only");
      }
    },
    async getAllBalance() {
      const userAddress = localStorage.getItem("address");
      if (userAddress) {
        const balance = await this.$root.core.getUserBalance(userAddress);
        if (balance) {
          this.donationAmount = parseFloat(balance).toFixed(3);
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
    }
  },
  async mounted() {
    this.parseLinks(await this.fetchHelpCenters("Donate"));
  }
}
</script>