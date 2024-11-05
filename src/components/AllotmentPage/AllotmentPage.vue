<template>
  <div>
    <landing-component />
    <platform-component />
    <map-component />
    <process-component />
    <partner-component />
    <contact-component />
  </div>
</template>

<script>
import LandingComponent from "./LandingComponent.vue";
import MapComponent from "./MapComponent.vue";
import PlatformComponent from "@/components/HomePage/PlatformComponent.vue";
import ProcessComponent from "@/components/HomePage/ProcessComponent.vue";
import PartnerComponent from "@/components/HomePage/PartnerComponent.vue";
import ContactComponent from "@/components/HomePage/ContactComponent.vue";
export default {
  components: {
    LandingComponent,
    MapComponent,
    PlatformComponent,
    ProcessComponent,
    PartnerComponent,
    ContactComponent,
  },
};
</script>

<style lang="scss" scoped></style>
