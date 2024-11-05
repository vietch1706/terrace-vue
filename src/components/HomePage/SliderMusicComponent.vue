<template>
  <div>
    <!-- Slider main container -->
    <div ref="swiper" class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          class="swiper-slide carousel-cell"
          v-for="value in data.music"
          :key="value.id"
        >
          <div class="item-music">
            <div class="carousel-img">
              <router-link
                :to="{ name: 'detailProduct', params: { slug: value.slug } }"
              >
                <img :src="value.thumbnail" />
              </router-link>
            </div>
            <div class="carousel-content">
              <div class="content">
                <router-link
                  :to="{ name: 'detailProduct', params: { slug: value.slug } }"
                >
                  <h4>
                    {{ value.name }}
                  </h4>
                </router-link>

                <p
                  class="name-artist"
                  v-for="item in value.artist"
                  :key="item.id"
                >
                  <router-link
                    :to="{
                      name: 'detailArtist',
                      params: { slug: item.slug },
                    }"
                  >
                    {{ item.name }}
                  </router-link>
                </p>
              </div>

              <div class="link">
                <a :href="value.url" target="_blank" rel="noopener noreferrer">
                  <img src="@/assets/play.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper, { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
export default {
  data() {
    return {
      data: {
        music: [],
      },
    };
  },
  methods: {
    async getAllMusicHomePage() {
      await axios
        .get("artist/music/get-homepage")
        .then((result) => {
          this.data.music = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    await this.getAllMusicHomePage();
    new Swiper(this.$refs.swiper, {
      modules: [Autoplay, EffectCoverflow],
      loop: true,
      autoplay: { delay: 1500, disableOnInteraction: false },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        1140: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        912: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        820: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: false,
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.carousel-cell {
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  .item-music {
    display: block;
    width: fit-content;
    border-radius: 32px;
    margin: 0 auto;
    .carousel-img {
      width: fit-content;
      height: fit-content;
      img {
        max-width: 360px;
        object-fit: fill;
        aspect-ratio: 1;
        border-radius: 32px 32px 0px 0px;
      }
    }
    .carousel-img:hover {
      cursor: pointer;
    }
    .carousel-content {
      min-height: 86px;
      border-radius: 0px 0px 32px 32px;
      background: linear-gradient(
        180deg,
        rgba(250, 250, 250, 0.08) 0%,
        rgba(250, 250, 250, 0.08) 100%
      );
      max-width: 360px;
      color: #ffff;
      padding: 12px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .content {
        h4 {
          color: #ffff;
          font-size: 16px;
          font-family: Manrope;
          font-weight: 600;
          line-height: 140%;
        }
        p {
          font-size: 14px;
          line-height: 140%;
          color: #ffff;
        }

        .name-artist {
          display: inline-block;
          a {
            color: #ffff;
          }
        }
        .name-artist:not(:last-child)::after {
          content: ",\00a0";
        }
      }
      .link {
        a {
          display: inline-block;
          img {
            max-width: 32px;
            object-fit: fill;
          }
        }
      }
    }
  }
}
</style>
