<template>
  <div class="homepage-container">
    <landing-component />
    <platform-component />
    <vision-component />
    <mission-component />
    <process-component />
    <technology-component />
    <partner-component />
    <div class="container-line">
      <img src="./../../assets/Vector.png" alt="" />
    </div>
    <data-a-p-i-component />
    <contact-component />
  </div>
</template>

<script>
import LandingComponent from "./LandingComponent.vue";
import PlatformComponent from "./PlatformComponent.vue";
import VisionComponent from "./VisionComponent.vue";
import MissionComponent from "./MissionComponent.vue";
import ProcessComponent from "./ProcessComponent.vue";
import TechnologyComponent from "./TechnologyComponent.vue";
import PartnerComponent from "./PartnerComponent.vue";
import DataAPIComponent from "./DataAPIComponent.vue";
import ContactComponent from "./ContactComponent.vue";
export default {
  components: {
    LandingComponent,
    PlatformComponent,
    VisionComponent,
    MissionComponent,
    ProcessComponent,
    TechnologyComponent,
    PartnerComponent,
    DataAPIComponent,
    ContactComponent,
  },
};
</script>

<style lang="scss" scoped>
.homepage-container {
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
