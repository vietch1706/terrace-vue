<template>
  <div>
    <contact-component />
    <address-component />
    <platform-component />
    <partner-component />
  </div>
</template>

<script>
import ContactComponent from "./../HomePage/ContactComponent.vue";
import AddressComponent from "./AddressComponent.vue";
import PlatformComponent from "./../HomePage/PlatformComponent.vue";
import PartnerComponent from "./../HomePage/PartnerComponent.vue";
export default {
  components: {
    AddressComponent,
    ContactComponent,
    PlatformComponent,
    PartnerComponent,
  },
};
</script>

<style></style>
