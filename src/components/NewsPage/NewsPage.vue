<template>
  <div class="newspage-container">
    <slider-component />
    <all-news-component />
    <platform-component />
    <partner-component />
    <contact-component />
  </div>
</template>

<script>
import ContactComponent from "../HomePage/ContactComponent.vue";
import PartnerComponent from "../HomePage/PartnerComponent.vue";
import PlatformComponent from "../HomePage/PlatformComponent.vue";
import AllNewsComponent from "./AllNewsComponent.vue";
import SliderComponent from "./SliderComponent.vue";
export default {
  components: {
    AllNewsComponent,
    PlatformComponent,
    PartnerComponent,
    ContactComponent,
    SliderComponent,
  },
};
</script>

<style lang="scss" scoped>
.procedurepage-container {
  background: #071e42;
  .container-line {
    max-width: 1140px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
</style>
