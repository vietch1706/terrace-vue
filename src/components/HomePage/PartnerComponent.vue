<template>
  <div class="partner-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="partner-content">
      <h2>Đối tác của chúng tôi</h2>
    </div>
    <div class="container">
      <div
        class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3 justify-content-center"
      >
        <div class="col" v-for="value in data" :key="value.id">
          <a :href="value.url">
            <img :src="value.image" :alt="value.name" />
          </a>
        </div>
      </div>
    </div>
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
    getAllPartner() {
      axios
        .get("general/partner/get")
        .then((result) => {
          this.data = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    this.getAllPartner();
  },
};
</script>

<style lang="scss" scoped>
.partner-container {
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 60px;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .partner-content {
    padding: 60px 0;
    text-align: center;
    h2 {
      display: inline-block;
      font-weight: 800;
      font-size: 36px;
      color: #b6ff52;
    }
  }

  .col {
    text-align: center;
    img {
      max-width: 140px;
    }
  }
}

@media screen and (max-width: 820px) {
  .partner-container {
    padding-bottom: 30px;
    .line {
      height: 1px;
    }

    .partner-content {
      padding: 30px;
      text-align: center;
      h2 {
        font-weight: 700;
        font-size: 25px;
      }
    }
  }
}
</style>
