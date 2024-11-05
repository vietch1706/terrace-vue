<template>
  <div class="content-container">
    <div ref="swiper" class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="value in data.artist" :key="value.id">
          <div class="artist_item">
            <div class="container-carousel-item">
              <div class="content-item">
                <router-link
                  :to="{ name: 'detailArtist', params: { slug: value.slug } }"
                >
                  <h3>
                    {{ value.name }}
                  </h3>
                </router-link>
                <div class="job-list">
                  <p
                    v-for="item in value.job"
                    :key="item.id"
                    class="job-item"
                    :style="{
                      background: item.background,
                    }"
                  >
                    {{ item.name }}
                  </p>
                </div>
                <div class="style-music-list">
                  <p
                    class="style-music-item"
                    v-for="(item, index) in value.type"
                    :key="index"
                  >
                    {{ item.name }}
                  </p>
                </div>
                <div class="social-link">
                  <a
                    v-for="item in value.social_url"
                    :key="item.social_url"
                    :href="item.social_url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      v-if="item.type == 'facebook'"
                      src="@/assets/MiniIcon/bordered-icon-facebook.png"
                      :alt="item.type"
                    />
                    <img
                      v-else-if="item.type == 'yotube'"
                      src="@/assets/MiniIcon/bordered-icon-youtube.png"
                      :alt="item.type"
                    />
                    <img
                      v-else-if="item.type == 'instagram'"
                      src="@/assets/MiniIcon/bordered-icon-insta.png"
                      :alt="item.type"
                    />
                    <img
                      v-else-if="item.type == 'tiktok'"
                      src="@/assets/MiniIcon/bordered-icon-tiktok.png"
                      :alt="item.type"
                    />
                    <img
                      v-else-if="item.type == 'twitter'"
                      src="@/assets/MiniIcon/bordered-icon-twitter.png"
                      :alt="item.type"
                    />
                  </a>
                </div>
              </div>

              <div class="img-item">
                <a
                  :href="value.link_music"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./../../assets/DataAPIComponent/Group.png" alt="" />
                </a>
              </div>

              <div class="avatar-item">
                <router-link
                  :to="{ name: 'detailArtist', params: { slug: value.slug } }"
                >
                  <img :src="value.avatar" />
                </router-link>
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
import Swiper, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export default {
  data() {
    return {
      data: {
        artist: [],
      },
    };
  },
  methods: {
    async getArtistHomePage() {
      await axios
        .get("artist/get-homepage")
        .then((result) => {
          this.data.artist = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    await this.getArtistHomePage();
    new Swiper(this.$refs.swiper, {
      modules: [Autoplay],
      loop: true,
      autoplay: { delay: 1500, disableOnInteraction: false },
      breakpoints: {
        1140: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        912: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        820: {
          slidesPerView: 1,
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

<style lang="scss">
.artist_item {
  background: linear-gradient(90deg, #6684be 0%, #aa8cf0 100%);
  border-radius: 32px;
  width: 100%;
  padding: 40px 100px;
  .container-carousel-item {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    .content-item {
      flex: 1;
      h3 {
        font-weight: 700;
        color: var(--white, #fff);
        font-size: 30px;
      }

      h3:hover {
        text-decoration: underline;
      }

      .job-list {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        flex-wrap: wrap;
        color: #ffff;
        .job-item {
          border-radius: 100px;
          padding: 4px 16px;
          margin: unset;
        }
      }

      .style-music-list {
        display: flex;
        flex-wrap: wrap;
        padding-top: 10px;
        .style-music-item {
          display: inline-block;
          max-width: max-content;
          color: var(--white, #fff);
          font-size: 16px;
          font-family: Manrope;
          border: 1px solid var(--white, #fff);
          border-radius: 100px;
          padding: 4px 8px;
          margin: 0 12px 8px 0;
        }
      }

      .social-link {
        color: #fff;
        a {
          display: inline-block;
          margin: 0 16px;
          img {
            max-width: 40px;
            max-height: 40px;
          }
        }

        a:first-child {
          margin-left: unset;
        }
      }
    }
    .img-item {
      cursor: pointer;
      flex: 1;
      width: 100%;
      text-align: center;
      img {
        max-height: 85px;
        max-width: 85px;
      }
    }

    .avatar-item {
      cursor: pointer;
      flex: 1;
      width: 100%;
      text-align: right;
      img {
        max-height: 264px;
        max-width: 264px;
        border-radius: 20px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .artist_item {
    width: 100%;
    height: inherit;
    padding: 30px;
    .container-carousel-item {
      align-items: center;
      flex-direction: column-reverse;
      padding: unset;
      height: inherit;
      .content-item {
        flex: 1;
        padding: unset;
        text-align: center;
        h3 {
          font-weight: 700;
          font-size: 25px;
        }

        .style-music-list {
          display: flex;
          flex-wrap: wrap;
          padding-top: 10px;
          justify-content: center;
          .style-music-item {
            display: inline-block;
            max-width: max-content;
            font-size: 14px;
            border: unset;
            margin: 0 12px 4px 0;
          }
        }
        .social-link {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          a {
            display: inline-block;
            margin: unset;
          }
        }
      }
      .img-item {
        padding: 20px 0;
      }

      .avatar-item {
        flex: 1;
        width: 100%;
        text-align: center;
        img {
          max-width: 264px;
          object-fit: fill;
          aspect-ratio: 1;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
