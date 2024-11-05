<template>
  <div class="landing-container">
    <div class="landing-flex">
      <div class="item-left">
        <h2 class="title-landing">Phân bổ</h2>
        <p class="text-landing">
          Chúng tôi sử dụng các công nghệ tốt nhất, cung cấp dịch vụ phân phối
          và phát hành âm nhạc của bạn tới khắp các nền tảng trên toàn thế giới.
          Cùng với đó, chúng tôi liên tục cập nhật các nền tảng mới và cung cấp
          công cụ quản lý, phân tích hiệu suất, báo cáo doanh thu cho các nghệ
          sĩ, người quản lý và hãng thu âm. Bạn chỉ cần tập trung vào việc tạo
          ra các sản phẩm chất lượng còn chúng tôi sẽ đảm nhận các vấn đề xung
          quanh việc phát triển âm nhạc kỹ thuật số của bạn.
        </p>
        <a v-scroll-to="'#contact'">
          <button type="button" class="btn btn-landing">Liên hệ ngay</button>
        </a>
      </div>
      <div class="item-right">
        <div class="img-container">
          <img src="@/assets/AllotmentComponent/Map.png" alt="" />
        </div>
        <div class="platform-container">
          <flickity class="flickity" ref="flickity" :options="flickityOptions">
            <div class="carousel-cell" v-for="value in data" :key="value.id">
              <div class="carousel-img">
                <img :src="value.image" alt="" />
              </div>
            </div>
          </flickity>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
import axios from "axios";
export default {
  components: {
    Flickity,
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
};
</script>

<style lang="scss" scoped>
.landing-container {
  max-width: 1140px;
  margin: 0 auto;
  .landing-flex {
    display: flex;
    padding: 100px 0;
    align-items: center;
    .item-left {
      flex: 1;
      .title-landing {
        color: #b6ff52;
        font-weight: 800;
        font-size: 36px;
      }
      .text-landing {
        color: #bdbdbd;
        width: 90%;
        font-weight: 500;
        font-size: 16px;
      }

      .btn-landing {
        background: #b6ff52;
        font-weight: 800;
        padding: 12px 16px;
      }
    }
    .item-right {
      flex: 1;
      width: 100%;
      .img-container {
        img {
          width: 100%;
        }
      }
      .platform-container {
        .carousel-cell {
          .carousel-img {
            padding-right: 20px;
            img {
              max-height: 30px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .landing-container {
    padding: 0 30px;
    .landing-flex {
      flex-direction: column;
      .item-left {
        .title-landing {
          font-weight: 700;
          font-size: 25px;
        }
        .text-landing {
          width: 100%;
          font-weight: 500;
          font-size: 14px;
        }
        .btn-landing {
          font-weight: 700;
          padding: 7px 5px;
        }
      }
      .item-right {
        margin: 30px 0 0 0;
      }
    }
  }
}
</style>
