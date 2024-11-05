<template>
  <div class="procedurepage-container">
    <product-component />
    <steps-component />
    <platform-component />
    <partner-component />
    <div class="container-line">
      <img src="./../../assets/Vector.png" alt="" />
    </div>
    <contact-component />
  </div>
</template>

<script>
import ProductComponent from "./ProductComponent.vue";
import StepsComponent from "./StepsComponent.vue";
import PlatformComponent from "../HomePage/PlatformComponent.vue";
import PartnerComponent from "../HomePage/PartnerComponent.vue";
import ContactComponent from "../HomePage/ContactComponent.vue";

export default {
  components: {
    ProductComponent,
    StepsComponent,
    PlatformComponent,
    PartnerComponent,
    ContactComponent,
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
