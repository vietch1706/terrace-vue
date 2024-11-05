<template>
  <div class="platform-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="platform-content">
      <h2>Hãy để những sản phẩm âm nhạc của bạn tràn ngập trên các nền tảng</h2>
    </div>
    <div class="platform-data">
      <div class="container">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2 g-lg-3">
          <div class="col" v-for="value in data" :key="value.id">
            <div class="p-3">
              <img :src="value.image" :alt="value.name" />
            </div>
          </div>
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
    getAllPlatforms() {
      axios
        .get("platforms/get")
        .then((result) => {
          this.data = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    this.getAllPlatforms();
  },
};
</script>

<style lang="scss" scoped>
.platform-container {
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 60px;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .platform-content {
    padding: 60px 0;
    text-align: center;
    h2 {
      display: inline-block;
      width: 70%;
      font-weight: 800;
      font-size: 36px;
      color: #b6ff52;
    }
  }
  .platform-data {
    text-align: center;
    .data-row {
      margin: 25px 0;
    }
    img {
      max-height: 40px;
    }
  }
}

@media screen and (max-width: 820px) {
  .platform-container {
    padding-bottom: 30px;
    .line {
      img {
        height: 1px;
      }
    }
    .platform-content {
      padding: 30px;
      h2 {
        width: 100%;
        font-weight: 700;
        font-size: 25px;
      }
    }
    .platform-data {
      img {
        max-width: 110px;
      }
    }
  }
}
</style>
