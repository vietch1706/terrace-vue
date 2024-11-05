<template>
  <div class="landing-container">
    <div class="landing-item left">
      <h1 class="title-landing">
        Lan tỏa những giai điệu âm nhạc của bạn dễ dàng hơn với
        <span class="mark-up">Terrace Media</span>
      </h1>
      <br />
      <p class="text-landing">
        Đồng hành và hỗ trợ cho các nhạc sĩ, nghệ sĩ, ban nhạc và hãng thu âm
        đạt nhiều mục tiêu và thành tựu lớn hơn với các sản phẩm của mình trên
        nền tảng nhạc số.
      </p>
      <a v-scroll-to="'#contact'">
        <button type="button" class="btn btn-landing">Liên hệ ngay</button></a
      >
      <div>
        <img
          class="wave-line"
          src="./../../assets/LandingComponent/Vector.png"
          alt=""
        />
      </div>
    </div>
    <div class="landing-item right">
      <div>
        <v-lazy-image :src="banner" alt="Terrace Media" class="landing-img" />
      </div>
      <div class="embed-link">
        <el-carousel
          :interval="5000"
          arrow="hover"
          height="150px"
          indicator-position="none"
        >
          <el-carousel-item v-for="value in data" :key="value.id">
            <div v-html="value.link"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VLazyImage from "v-lazy-image";
import banner from "@/assets/LandingComponent/Hero Image.png";

export default {
  components: {
    VLazyImage,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getAllSpotify() {
      axios
        .get("general/spotify/get")
        .then((result) => {
          this.data = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    this.getAllSpotify();
  },
  computed: {
    banner() {
      return banner;
    },
  },
};
</script>

<style lang="scss" scoped>
.landing-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  .left {
    flex-basis: 60%;
  }
  .right {
    flex-basis: 40%;
  }
}

.landing-item {
  align-self: center;
  .title-landing {
    color: #ffff;
    font-weight: 800;
    font-size: 52px;
    line-height: 70px;
    .mark-up {
      color: #b6ff52;
    }
  }
  .text-landing {
    color: #bdbdbd;
    width: 70%;
    line-height: 29px;
    font-size: 16px;
  }

  .btn-landing {
    background: #b6ff52;
    font-weight: 800;
    padding: 12px 16px;
    margin-bottom: 50px;
  }
  div {
    .landing-img {
      width: 100%;
    }
    .wave-line {
      width: 100%;
    }
  }
  .embed-link {
    margin: 0 auto;
  }
}
.set-effect:hover {
  color: unset;
}

@media screen and (max-width: 820px) {
  .landing-container {
    flex-direction: column;
    padding: 30px;
    .left {
      flex-basis: 50%;
    }
    .right {
      flex-basis: 50%;
    }
  }
  .landing-item {
    .title-landing {
      font-size: 32px;
      line-height: 40px;
    }
    .text-landing {
      width: 100%;
      line-height: 29px;
      font-size: 14px;
    }

    .btn-landing {
      margin-bottom: unset;
    }
    div {
      .landing-img {
        width: 100%;
        padding-top: 20px;
      }
      .wave-line {
        display: none;
      }
    }
  }
}
</style>
