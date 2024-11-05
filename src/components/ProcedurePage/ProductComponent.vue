<template>
  <div class="product-container">
    <div class="product-item left">
      <h1 class="title-product">
        Quy trình phát hành sản phẩm âm nhạc lên các nền tảng số
      </h1>
      <p class="text-product">
        Terrace Media là một đơn vị chuyên cung cấp dịch vụ phát hành sản phẩm
        âm nhạc trên các nền tảng kỹ thuật số hàng đầu như Spotify, Apple Music,
        Itunes, Amazon Music, Youtube Music,... Với nhiều nghệ sĩ Việt Nam, việc
        phát hành sản phẩm âm nhạc trên các nền tảng này vẫn còn khó khăn. Tuy
        nhiên, với sự hỗ trợ đầy đủ và chuyên nghiệp của Terrace Media, các nghệ
        sĩ có thể dễ dàng hiểu rõ hơn về quy trình và các bước cần thiết để phát
        hành sản phẩm âm nhạc của mình lên các nền tảng nhạc số. Hãy để chúng
        tôi giúp bạn đưa sản phẩm âm nhạc của bạn đến với hàng triệu khán giả
        trên toàn thế giới.
      </p>
      <router-link to="/lien-he">
        <button type="button" class="btn btn-product">Liên hệ ngay</button>
      </router-link>
    </div>
    <div class="product-item right">
      <div class="product-img">
        <v-lazy-image :src="banner" alt="Terrace Media" />
      </div>
    </div>
  </div>
</template>

<script>
import vLazyImage from "v-lazy-image";
import banner from "@/assets/ProductComponent/Musician Photo.png";
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
.product-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  column-gap: 8%;
  .left {
    flex-basis: 50%;
  }
  .right {
    flex-basis: 50%;
  }
}
.product-item {
  align-self: center;
  .title-product {
    color: #b6ff52;
    font-weight: 800;
    font-size: 36px;
  }
  .text-product {
    color: #bdbdbd;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 24px;
  }

  .btn-product {
    background: #b6ff52;
    font-weight: 800;
    padding: 12px 16px;
  }
  .product-img {
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 820px) {
  .product-container {
    max-width: unset;
    padding: 30px;
    flex-direction: column;
    .left {
      flex-basis: unset;
      flex: 1;
      width: 100%;
      padding-bottom: 30px;
    }
    .right {
      flex-basis: unset;
      flex: 1;
      width: 100%;
    }
    .product-item {
      align-self: center;
      .title-product {
        font-weight: 700;
        font-size: 25px;
      }
      .text-product {
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
}
</style>
