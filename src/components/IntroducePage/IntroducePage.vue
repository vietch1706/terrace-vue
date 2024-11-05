<template>
  <div class="introduce-container">
    <info-component />
    <release-component />
    <media-component />
    <solution-component />
    <platform-component />
    <partner-component />
    <div class="container-line">
      <img src="./../../assets/Vector.png" alt="" />
    </div>
    <contact-component />
  </div>
</template>

<script>
import InfoComponent from "./InfoComponent.vue";
import ReleaseComponent from "./ReleaseComponent.vue";
import MediaComponent from "./MediaComponent.vue";
import SolutionComponent from "./SolutionComponent.vue";
import PlatformComponent from "./../HomePage/PlatformComponent.vue";
import PartnerComponent from "./../HomePage/PartnerComponent.vue";
import ContactComponent from "./../HomePage/ContactComponent.vue";

export default {
  components: {
    InfoComponent,
    ReleaseComponent,
    MediaComponent,
    SolutionComponent,
    PlatformComponent,
    PartnerComponent,
    ContactComponent,
  },
};
</script>

<style lang="scss" scoped>
.introduce-container {
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
