<template>
    <div class="modal">
        <div class="modal-wrapper">
            <button class="btn-modal-close">
                <i class="i-close-fill"></i>
            </button>
            <div class="modal-content">
                <div class="modal-center">
                    <div class="modal-main-icon modal-icon-cancel">
                        <i class="i-close-circle-fill"></i>
                    </div>
                    <div class="modal-name">
                        Transaction Failed
                    </div>
                    <p class="modal-p">
                        Something went worng.
                        <br>
                        Most likely, you don’t have enough BNB in your wallet.
                    </p>
                    <a class="btn modal-main-btn">Try again</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SocialLinks from '@/components/SocialLinks.vue'

export default ({
    components: {
        SocialLinks,
    },

})
</script>
