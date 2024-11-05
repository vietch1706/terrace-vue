<template>
  <div class="release-containter">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <h2 class="release-title">Chính sách phân phối, phát hành sản phẩm</h2>
    <div class="item-container">
      <div class="release-item text-item">
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/ReleaseComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="release-text">
              Phân phối sản phẩm tới hơn
              <span class="mark-up"
                >200 nền tảng âm nhạc <br />
                kĩ thuật số</span
              >
              trên toàn thế giới như: Spotify, Apple <br />
              Music, Itunes, Facebook, Tiktok, Youtube Music, <br />
              Zing Mp3, Nhaccuatui,...
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/ReleaseComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="release-text">
              Tốc độ phát hành <span class="mark-up">nhanh</span>, xuất hiện
              trên các nền <br />
              tảng <span class="mark-up">trong vòng 48h</span>.
            </p>
          </li>
        </ul>
        <router-link to="/lien-he" class="set-effect">
          <button type="button" class="btn btn-release">
            Liên hệ ngay
          </button></router-link
        >
      </div>
      <div class="release-item img-item">
        <div>
          <v-lazy-image :src="image1" alt="" class="release-img" />
        </div>
        class="release-img"
        <flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell" v-for="value in data" :key="value.id">
            <div class="carousel-img">
              <img :src="value.image" alt="" />
            </div>
          </div>
        </flickity>
      </div>
    </div>
    <div class="item-container row-reverse-container">
      <div class="release-item text-item">
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/ReleaseComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="release-text">Dịch vụ Youtube Content ID miễn phí.</p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/ReleaseComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="release-text">
              Cung cấp bảng điều khiển cho đối tác quản lý danh <br />
              mục phát hành, phân tích dữ liệu hàng ngày và báo <br />
              cáo doanh thu.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/ReleaseComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="release-text">
              Cung cấp tài khoản quản lý từng nghệ sĩ cho các <br />
              ban nhạc, hãng thu âm, công ty phát hành.
            </p>
          </li>
        </ul>
        <router-link to="/lien-he" class="set-effect">
          <button type="button" class="btn btn-release">
            Liên hệ ngay
          </button></router-link
        >
      </div>
      <div class="release-item img-item">
        <div>
          <v-lazy-image :src="image2" alt="" class="release-img" />
        </div>
      </div>
    </div>
    <div class="item-container">
      <div class="release-item text-item">
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/ReleaseComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="release-text">Thanh toán doanh thu hàng tháng.</p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/ReleaseComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="release-text">
              Hỗ trợ ứng trước doanh thu với các sản phẩm tiềm <br />
              năng.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/ReleaseComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="release-text">
              Hỗ trợ tích nghệ sĩ trên 1 số nền tảng như: Spotify, <br />
              Apple Music Youtube, Amazon Music.
            </p>
          </li>
        </ul>
        <router-link to="/lien-he" class="set-effect">
          <button type="button" class="btn btn-release">
            Liên hệ ngay
          </button></router-link
        >
      </div>
      <div class="release-item img-item">
        <div>
          <v-lazy-image :src="image3" alt="" class="release-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Flickity from "vue-flickity";
import vLazyImage from "v-lazy-image";
import image1 from "@/assets/ReleaseComponent/Group 1.png";
import image2 from "@/assets/ReleaseComponent/Frame 1261152795.png";
import image3 from "@/assets/ReleaseComponent/Frame 1261152802.png";
export default {
  components: {
    Flickity,
    vLazyImage,
  },
  data() {
    return {
      flickityOptions: {
        wrapAround: true,
        freeScroll: true,
        autoPlay: 1500,
        pauseAutoPlayOnHover: false,
        prevNextButtons: false,
        pageDots: false,
      },
      data: [],
    };
  },
  methods: {
    async getAllPlatforms() {
      await axios
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
    await this.getAllPlatforms();
    await this.$refs.flickity.rerender();
  },
  computed: {
    image1() {
      return image1;
    },
    image2() {
      return image2;
    },
    image3() {
      return image3;
    },
  },
};
</script>

<style lang="scss" scoped>
.release-containter {
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
  .release-title {
    text-align: center;
    font-size: 36px;
    color: #b6ff52;
    padding-top: 60px;
    font-weight: 800;
  }
}
.item-container {
  display: flex;
  padding: 80px 0;
  column-gap: 2%;
  .text-item {
    flex-basis: 50%;
  }
  .img-item {
    flex-basis: 50%;
  }
  .release-item {
    .release-text {
      margin: 0;
      padding: 10px 0;
      color: #ffffff;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      .mark-up {
        font-weight: 700;
      }
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
    .btn-release {
      background: #b6ff52;
      font-weight: 800;
      padding: 12px 16px;
      margin: 14px 46px;
    }
    .release-img {
      text-align: start;
      width: 100%;
      img {
        width: 100%;
      }
    }

    .carousel-cell {
      .carousel-img {
        padding-right: 20px;
        img {
          max-height: 30px;
        }
      }
    }
  }
  .set-effect:hover {
    color: unset;
  }
}
.item-container.row-reverse-container {
  flex-direction: row-reverse;
}
@media screen and (max-width: 820px) {
  .release-containter {
    max-width: unset;
    padding: 30px;
    .release-title {
      font-size: 25px;
      font-weight: 700;
    }
  }

  .item-container.row-reverse-container {
    flex-direction: column;
  }
  .item-container {
    flex-direction: column;
    padding: 30px 0;
    .text-item {
      flex: 1;
      flex-basis: unset;
      width: 100%;
      br {
        display: none;
      }
    }
    .img-item {
      flex: 1;
      flex-basis: unset;
      width: 100%;
      padding-top: 30px;
    }
    .release-item {
      .release-text {
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
}
</style>
