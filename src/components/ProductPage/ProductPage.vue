<template>
  <div class="product-container">
    <slider-music-component class="slider" />
    <product-component />
    <platform-component />
    <partner-component />
    <contact-component />
  </div>
</template>

<script>
import ProductComponent from "./ProductComponent.vue";
import SliderMusicComponent from "@/components/HomePage/SliderMusicComponent.vue";
import PlatformComponent from "../HomePage/PlatformComponent.vue";
import PartnerComponent from "../HomePage/PartnerComponent.vue";
import ContactComponent from "../HomePage/ContactComponent.vue";
export default {
  data() {
    return {};
  },

  components: {
    ProductComponent,
    SliderMusicComponent,
    PlatformComponent,
    PartnerComponent,
    ContactComponent,
  },
};
</script>
<style lang="scss" scoped>
.artist-container {
  margin: 0 auto;
  max-width: 1140px;
  .slider {
    padding-top: 60px;
  }
}
</style>
