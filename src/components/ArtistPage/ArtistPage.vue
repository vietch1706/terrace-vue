<template>
  <div class="artist-container">
    <slider-artist-component class="slider" />
    <artist-component />
    <platform-component />
    <partner-component />
    <contact-component />
  </div>
</template>

<script>
import ArtistComponent from "./ArtistComponent.vue";
import SliderArtistComponent from "@/components/HomePage/SliderArtistComponent.vue";
import PlatformComponent from "@/components/HomePage/PlatformComponent.vue";
import PartnerComponent from "@/components/HomePage/PartnerComponent.vue";
import ContactComponent from "@/components/HomePage/ContactComponent.vue";
export default {
  data() {
    return {};
  },
  components: {
    ArtistComponent,
    SliderArtistComponent,
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
