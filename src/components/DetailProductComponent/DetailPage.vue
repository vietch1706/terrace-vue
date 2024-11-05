<template>
  <div>
    <product-detail-component />
    <partner-component />
    <contact-component />
  </div>
</template>

<script>
import ContactComponent from "../HomePage/ContactComponent.vue";
import PartnerComponent from "../HomePage/PartnerComponent.vue";
import ProductDetailComponent from "./ProductDetailComponent.vue";
export default {
  components: { ProductDetailComponent, PartnerComponent, ContactComponent },
};
</script>

<style></style>
