<template>
  <div class="information-container">
    <div class="information-item left">
      <h2 class="info-title">Giới thiệu về Terrace Media</h2>
      <p class="info-text">
        Chúng tôi là công ty truyền thông, sản xuất và phân phối âm nhạc Terrace
        Media và là 1 nhà phân phối âm nhạc (Music Distribution).
        <br />
        <br />
        Hiện nay, chúng tôi đang cung cấp các sản phẩm và dịch vụ, các giải pháp
        360 cho các đối tác của chúng tôi gồm: sản xuất, phân phối, tiếp thị,
        khai thác và thương mại, tối ưu hóa, quản lý và định hướng nghề nghiệp
        (phong cách âm nhạc và hình ảnh), giúp tạo ra 1 cộng đồng âm nhạc bình
        đẳng đầy tiềm năng và cơ hội.
        <br />
        <br />
        Sứ mệnh của chúng tôi là “giúp sản phẩm âm nhạc của tất cả mọi người dễ
        dàng lan tỏa và tiếp cận tới khán giả”, và chúng tôi xây dựng những giá
        trị của mình xoay quanh tuyên bố này.
      </p>
    </div>
    <div class="information-item right">
      <v-lazy-image :src="banner" alt="" class="info-img" />
    </div>
  </div>
</template>

<script>
import vLazyImage from "v-lazy-image";
import banner from "@/assets/InfoComponent/image1.png";
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
.information-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  align-items: center;
  .left {
    flex-basis: 50%;
  }
  .right {
    flex-basis: 50%;
  }
}

.information-item {
  align-items: center;
  .info-title {
    color: #b6ff52;
    font-size: 36px;
    font-weight: 800;
  }
  .info-text {
    color: White;
    font-size: 16px;
    font-weight: 500;
  }
  .info-img {
    width: 100%;
  }
}

@media screen and (max-width: 820px) {
  .information-container {
    max-width: unset;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    .left {
      flex: 1;
      flex-basis: unset;
      width: 100%;
      padding-bottom: 50px;
    }
    .right {
      flex: 1;
      flex-basis: unset;
      width: 100%;
    }
  }
  .information-item {
    .info-title {
      font-size: 25px;
      font-weight: 700;
    }
    .info-text {
      font-size: 14px;
      font-weight: 500;
    }
    .info-img {
      width: 100%;
    }
  }
}
</style>
