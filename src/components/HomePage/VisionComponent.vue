<template>
  <div class="vision-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="vision-flex">
      <div class="vision-item">
        <v-lazy-image :src="banner" alt="Terrace Media" />
      </div>
      <div class="vision-item">
        <h2 class="title">Tầm nhìn</h2>
        <p class="content">
          Trở thành công ty truyền thông và phân phối âm nhạc hàng đầu khu vực,
          là đối tác tin cậy của các ban nhạc, hãng thu âm, nhạc sĩ, nghệ sĩ.
          Cung cấp các giải pháp tiếp thị và phát hành sản phẩm âm nhạc trên các
          nền tảng nhạc số một cách nhanh chóng và hiệu quả nhất.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import banner from "@/assets/VisionComponent/Photo.png";
export default {
  components: {
    VLazyImage,
  },
  computed: {
    banner() {
      return banner;
    },
  },
};
</script>

<style lang="scss" scoped>
.vision-container {
  max-width: 1140px;
  margin: 0 auto;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .vision-flex {
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .vision-item {
      img {
        width: 100%;
      }
      .title {
        padding: 20px 0;
        padding-left: 60px;
        display: block;
        color: #b6ff52;
        font-size: 36px;
        font-weight: 800;
      }

      .content {
        padding-left: 60px;
        display: block;
        color: #e0e0e0;
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .vision-container {
    .line {
      img {
        height: 1px;
      }
    }
    .vision-flex {
      padding: 30px;
      flex-direction: column;
      .vision-item {
        .title {
          padding: 10px 0;
          font-size: 25px;
          font-weight: 700;
        }

        .content {
          padding-left: unset;
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
