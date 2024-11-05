<template>
  <div class="supportive-container">
    <h1>{{ data.title }}</h1>
    <div v-html="data.content"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getSupportivePage() {
      axios
        .get("general/supportive/get")
        .then((result) => {
          result.data.data.forEach((element) => {
            if (element.slug == "privacy-policy") {
              this.data = element;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getSupportivePage();
  },
};
</script>

<style lang="scss" scoped>
.supportive-container {
  max-width: 1140px;
  color: #ffff;
  margin: 0 auto;
  padding: 60px 0;
}
</style>
