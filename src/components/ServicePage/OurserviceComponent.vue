<template>
  <div class="our-service-container">
    <div class="ourservice-item left">
      <h1 class="title">Dịch vụ của chúng tôi</h1>
      <br />
      <p class="text">
        Hiện nay, chúng tôi đang cung cấp các dịch vụ, giải pháp 360 cho các đối
        tác gồm: sản xuất, phân phối, tiếp thị, khai thác và thương mại, tối ưu
        hóa, quản lý và định hướng nghề nghiệp (phong cách âm nhạc, hình ảnh).
        Khi hợp tác với chúng tôi, quý đối tác sẽ nhận được các chính sách và
        quyền lợi dưới đây.
      </p>
      <button type="button" class="btn btn-service">
        <img
          src="./../../assets/OurserviceComponent/Group 39292.png"
          alt=""
        />Scroll down
      </button>
      <div>
        <img
          class="wave-line"
          src="./../../assets/LandingComponent/Vector.png"
          alt=""
        />
      </div>
    </div>
    <div class="ourservice-item right">
      <div>
        <v-lazy-image :src="banner" alt="" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import vLazyImage from "v-lazy-image";
import banner from "@/assets/OurserviceComponent/Girl listens to music.png";
export default {
  components: {
    vLazyImage,
  },
  data() {
    return {
      banner: banner,
    };
  },
};
</script>

<style lang="scss" scoped>
.our-service-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  align-items: center;
  .left {
    flex-basis: 60%;
  }
  .right {
    flex-basis: 40%;
  }
}

.ourservice-item {
  align-self: center;
  .title {
    color: #b6ff52;
    font-size: 36px;
    font-weight: 800;
  }
  .text {
    color: #bdbdbd;
    width: 70%;
    font-size: 16px;
    font-weight: 500;
  }

  .btn-service {
    width: fit-content;
    background: none;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    img {
      margin-right: 10px;
      width: 36px;
      height: 36px;
    }
  }
  div {
    .image {
      width: 100%;
    }
    .wave-line {
      width: 100%;
    }
  }
}

@media screen and (max-width: 820px) {
  .our-service-container {
    max-width: unset;
    padding: 30px;
    flex-direction: column;
    .title {
      font-size: 25px;
      font-weight: 700;
    }
    .text {
      font-size: 14px;
      font-weight: 500;
    }
    .left {
      flex: 1;
      flex-basis: unset;
      width: 100%;
      br {
        display: none;
      }
    }
    .right {
      flex: 1;
      flex-basis: unset;
      width: 100%;
    }
  }
  .ourservice-item {
    .text {
      width: 100%;
    }
  }
}
</style>
