<template>
  <div>
    <detail-news-component />
    <partner-component />
    <contact-component />
  </div>
</template>

<script>
import DetailNewsComponent from "./DetailNewsComponent.vue";
import PartnerComponent from "@/components/HomePage/PartnerComponent.vue";
import ContactComponent from "@/components/HomePage/ContactComponent.vue";
export default {
  components: {
    DetailNewsComponent,
    PartnerComponent,
    ContactComponent,
  },
};
</script>

<style lang="scss" scoped></style>
