<template>
  <div class="solution-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <h2 class="solution-title">Giải pháp sản xuất, định hướng sản phẩm</h2>
    <div class="solution-flex">
      <div class="solution-item left">
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="solution-text">
              Cung cấp giải pháp sản xuất sản phẩm gồm studio sản xuất
              <br />nhạc, thu âm, ekip quay dựng MV âm nhạc, hình ảnh chuyên
              <br />nghiệp được trang bị các trang thiết bị hiện đại.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="solution-text">
              Đội ngũ chuyên gia nhiều lĩnh vực như Composer, Songwriter, <br />
              Producer,...hỗ trợ tư vấn và hoàn thiện sản phẩm giúp nâng cao
              <br />
              chất lượng sản phẩm.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="solution-text">
              Tìm kiếm nhà tài trợ, đơn vị đồng hành hợp tác với các sản phẩm
              <br />
              tiềm năng.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="solution-text">
              Tư vấn và định hướng sản phẩm, lựa chọn các yếu tố và phong <br />
              cách phù hợp, đưa ra ý tưởng giúp đối tác nâng cao chất lượng
              <br />
              sản phẩm phù hợp với các chiến lược phát triển.
            </p>
          </li>
        </ul>
      </div>
      <div class="solution-item right">
        <v-lazy-image class="solution-img" :src="sideImage" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import vLazyImage from "v-lazy-image";
import sideImage from "@/assets/SolutionComponent/illustration newsletter.png";
export default {
  components: {
    vLazyImage,
  },
  data() {
    return {
      sideImage: sideImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.solution-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  align-items: center;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .solution-title {
    text-align: center;
    color: #b6ff52;
    font-size: 36px;
    padding: 30px 0;
    font-weight: 800;
  }
  .solution-flex {
    display: flex;
    padding: 80px 0;
    column-gap: 2%;
    .left {
      flex-basis: 60%;
    }
    .right {
      flex-basis: 40%;
    }
    .solution-item {
      .solution-text {
        margin: 0;
        padding: 10px 0;
        color: #ffffff;
        width: 100%;
        font-weight: 500;
        font-size: 16px;
      }
      .item-col {
        padding: 0;
        margin: 0;
        .item-row {
          display: flex;
          flex-wrap: nowrap;
          width: 90%;
          .music-note {
            padding: 10px 10px;
            margin-right: 6px;
            flex-basis: 36px;
            img {
              width: 100%;
            }
          }
        }
      }

      .solution-img {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 820px) {
  .solution-container {
    max-width: unset;
    padding: 30px;
    .solution-title {
      font-size: 25px;
      font-weight: 700;
    }
    .solution-flex {
      all: unset;
      flex-direction: column;
      .left {
        flex: 1;
        flex-basis: unset;
        width: 100%;
        padding-bottom: 50px;
        br {
          display: none;
        }
      }
      .right {
        flex: 1;
        flex-basis: unset;
        width: 100%;
        padding: 50px 0;
      }
      .solution-item {
        .solution-text {
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
