<template>
<div class="container">
    <div class="need__help">
      <div class="need__help__inner">
        <div class="to__main">
          <div>
            <i class="i-arrow-drop-left-line"></i>
          </div>
          <p class="title__nav">To main page</p>
        </div>
        <p class="need__help_title">If you want help</p>
        <p class="need__help__disc">
          Elit nisl, maecenas hac sit ut. Blandit orci urna netus sit neque sit laoreet eget urna. Commodo massa eros, molestie fermentum posuere sed. Sit vel, ultrices sed est malesuada suspendisse. 
        </p>
          <div class="organization">
            <div class="organization__block">
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
           </div>
           <div class="organization__block">
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
           </div>
           <div class="organization__block">
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
           </div>
           <div class="organization__block">
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
           </div>
           <div class="organization__block">
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
           </div>
           <div class="organization__block">
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
           </div>
                      <div class="organization__block">
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
           </div>
           <div class="organization__block">
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
           </div>
           <div class="organization__block">
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
           </div>
           <div class="organization__block">
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
           </div>
        </div>
      </div>
      <div class="want__help">
        <p class="card__title">Or donate trough<br> our platform</p>
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
</template>

<script>
export default {
  mounted() {
    console.log(true)
  }
}
</script>