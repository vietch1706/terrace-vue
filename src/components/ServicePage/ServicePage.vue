<template>
  <div class="service-page">
    <ourservice-component />
    <service-component />
    <platform-component />
    <partner-component />
    <div class="container-line">
      <img src="./../../assets/Vector.png" alt="" />
    </div>
    <contact-component />
  </div>
</template>

<script>
import OurserviceComponent from "./OurserviceComponent.vue";
import ServiceComponent from "./ServiceComponent.vue";
import PlatformComponent from "../HomePage/PlatformComponent.vue";
import PartnerComponent from "../HomePage/PartnerComponent.vue";
import ContactComponent from "../HomePage/ContactComponent.vue";
export default {
  components: {
    OurserviceComponent,
    ServiceComponent,
    PlatformComponent,
    PartnerComponent,
    ContactComponent,
  },
};
</script>

<style lang="scss" scoped>
.service-page {
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
