<template>
  <div class="mission-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="mission-flex">
      <div class="mission-item">
        <h2 class="title">Sứ mệnh</h2>
        <p class="content">
          Đồng hành cùng các đối tác đưa các sản phẩm chinh phục những đỉnh cao
          mới trong ngành âm nhạc. Tạo ra một cộng đồng âm nhạc đa dạng, phong
          phú và chất lượng.
          <br />
          <br />
          Terrace Media cũng hỗ trợ các ban nhạc, nhạc sĩ, nghệ sĩ trẻ mới bước
          chân vào con đường âm nhạc, giúp họ phát triển tài năng và đưa các sản
          phẩm âm nhạc tiếp cận với công chúng.
          <br />
          <br />
          Chúng tôi cũng tôn trọng giá trị của các ban nhạc, nhạc sĩ và nghệ sĩ,
          đảm bảo tính công bằng, minh bạch trong việc phân phối sản phẩm âm
          nhạc, đáp ứng quy định pháp luật liên quan đến bản quyền và sở hữu trí
          tuệ; Sử dụng các công nghệ và tiện ích để chi trả tiền bản quyền một
          cách đầy đủ và rõ ràng nhất, giúp các đối tác có niềm tin và động lực
          hơn để phát triển sự nghiệp.
        </p>
      </div>

      <div class="mission-item">
        <v-lazy-image :src="banner" alt="Terrace Media" />
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import banner from "@/assets/MissionComponent/Photo.png";
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
.mission-container {
  max-width: 1140px;
  margin: 0 auto;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .mission-flex {
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .mission-item {
      img {
        width: 100%;
      }
      .title {
        padding: 20px 0;
        padding-right: 60px;
        display: block;
        color: #b6ff52;
        font-size: 36px;
        font-weight: 800;
      }

      .content {
        padding-right: 60px;
        display: block;
        color: #e0e0e0;
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .mission-container {
    .line {
      img {
        height: 1px;
      }
    }

    .mission-flex {
      padding: 30px;
      flex-direction: column;
      .mission-item {
        .title {
          padding: 10px 0;
          font-size: 25px;
          font-weight: 700;
        }

        .content {
          padding-right: unset;
          font-weight: 400;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
