<template>
  <div>
    <detail-component />
    <partner-component />
    <contact-component />
  </div>
</template>

<script>
import DetailComponent from "./DetailComponent.vue";
import PartnerComponent from "@/components/HomePage/PartnerComponent.vue";
import ContactComponent from "@/components/HomePage/ContactComponent.vue";
export default {
  components: {
    DetailComponent,
    PartnerComponent,
    ContactComponent,
  },
};
</script>

<style lang="scss" scoped></style>
