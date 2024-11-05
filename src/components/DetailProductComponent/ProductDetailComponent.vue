<template>
  <div class="product-container">
    <div class="youtube-container" v-html="productDetail.youtube"></div>

    <div class="info-music">
      <div class="title">
        <h1>
          {{ productDetail.name }}

          <span v-if="productDetail.kind">
            &nbsp;({{ productDetail.kind }})
          </span>
        </h1>

        <span class="play-url" id="heart">
          <a :href="productDetail.url" target="_blank">
            <img src="./../../assets/play.png" alt="" />
          </a>
        </span>
      </div>

      <div class="detail">
        <div v-if="artist" class="item-detail">
          <div class="artist-sing">
            <p>Thể hiện: &nbsp;</p>

            <span
              v-for="(item, index) in artist"
              :key="index"
              class="artist-name-container"
            >
              <router-link
                class="artist-name"
                :to="{ name: 'detailArtist', params: { slug: item.slug } }"
              >
                {{ item.name }}
              </router-link>
            </span>
          </div>
        </div>
        <div class="item-detail">
          <p>Sáng tác:&nbsp;<span>{{ productDetail.composed }}</span></p>
        </div>
        <div class="item-detail">
          <p>
            Thể loại nhạc:&nbsp;
            <span
              v-for="(item, index) in productDetail.type"
              :key="index"
              class="type"
            >
              {{ item.name }}
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="lyrist-container">
      <h2 class="title-lyrist">
        Lời bài hát
        <span>
          <img
            class=""
            src="@/assets/ProductComponent/Single_note.png"
            alt="single-note"
        /></span>
      </h2>
      <div class="lyrist-content" v-html="productDetail.lyric"></div>
    </div>

    <div class="landing-container" v-if="artist">
      <div class="artist-item" v-for="(value, index) in artist" :key="index">
        <div class="artist-landing">
          <div class="avatar">
            <router-link
              :to="{ name: 'detailArtist', params: { slug: value.slug } }"
            >
              <img :src="value.avatar" :alt="value.name" />
            </router-link>
          </div>
          <div class="content-item">
            <router-link
              :to="{ name: 'detailArtist', params: { slug: value.slug } }"
            >
              <h3>{{ value.name }}</h3>
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
        </div>
        <div class="url-artist">
          <a
            :href="value.link_music"
            target="_blank"
            class="img-container-artist"
            rel="noopener noreferrer"
          >
            <img
              id="image-play1"
              src="@/assets/DataAPIComponent/Group.png"
              alt=""
            />
          </a>
        </div>
        <div class="see-detail">
          <router-link
            :to="{ name: 'detailArtist', params: { slug: value.slug } }"
          >
            <p>
              Xem chi tiết &nbsp;
              <i class="fa-solid fa-chevron-right" style="color: #b6ff52"></i>
            </p>
          </router-link>
        </div>
      </div>
    </div>

    <div class="key-word">
      <p>Từ khóa:&nbsp;</p>
      <h5>{{ productDetail.name }}</h5>,
      <router-link
        class="key-word-artist"
        v-for="(item, index) in artist"
        :key="index"
        :to="{ name: 'detailArtist', params: { slug: item.slug } }"
      >
        <h5 v-if="artist">{{ item.name }}</h5>
      </router-link>
    </div>

    <div class="line" v-show="false">
      <img src="@/assets/Divider.png" alt="" />
    </div>

    <div class="product-social" v-show="false">
      <div class="title">
        <h5>Chia sẻ sản phẩm</h5>
      </div>
      <div class="social">
        <div class="social-flex">
          <div class="social-icon">
            <figure class="image-hover">
              <img
                src="@/assets/MiniIcon/bordered-icon-facebook.png"
                alt="facebook"
              />
            </figure>
          </div>
          <div class="social-icon">
            <figure class="image-hover">
              <img
                src="@/assets/MiniIcon/bordered-icon-linkedin.png"
                alt="instagram"
              />
            </figure>
          </div>
          <div class="social-icon">
            <figure class="image-hover">
              <img
                src="@/assets/MiniIcon/bordered-icon-zalo.png"
                alt="tiktok"
              />
            </figure>
          </div>
          <div class="social-icon">
            <figure class="image-hover">
              <img
                src="@/assets/MiniIcon/bordered-icon-twitter.png"
                alt="twitter"
              />
            </figure>
          </div>
        </div>
        <div class="share-count">{{ productDetail.share }} lượt chia sẻ</div>
      </div>
    </div>

    <div class="line">
      <img src="@/assets/Divider.png" alt="" />
    </div>

    <div class="same-artist">
      <div class="title-same-artist">
        <h2>Sản phẩm tương tự</h2>

        <span @click="pushToProductPage" class="SMN_effect-4">
          Xem tất cả &nbsp; >
        </span>
      </div>
      <div
        v-if="sameProduct.data?.length"
        class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3"
      >
        <div
          class="col"
          v-for="value in sameProduct.data.slice(0, 4)"
          :key="value.id"
          @mouseenter="enterButton"
          @mouseleave="leaveButton"
        >
          <router-link
            :to="{ name: 'detailProduct', params: { slug: value.slug } }"
          >
            <div class="card item-product">
              <img
                :src="value.thumbnail"
                class="card-img-top avatar-product"
                :alt="value.name"
              />
              <div class="card-body content-product">
                <div class="content-product-left">
                  <h5 class="card-title">
                    {{ value.name }}
                  </h5>
                  <p>
                    {{ value.artist.name }}
                  </p>
                </div>
                <div class="content-product-right">
                  <img src="@/assets/play.png" alt="" />
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetail",

  data() {
    return {
      productDetail: [],
      sameProduct: [],
      artist: [],
    };
  },
  methods: {
    async getProductDetail() {
      await axios
        .get(`artist/music/slug?slug=${this.$route.params.slug}`)
        .then((result) => {
          this.productDetail = result.data.data.music;
          this.artist = result.data.data.music.artist;
          this.sameProduct = result.data.data.same_data;
        })
        .catch(() => {
          this.$router.push({ name: "404Page" }).catch(()=>{});
        });
    },

    animateButton(el, scale, duration, elasticity) {
      this.$anime.remove(el);
      this.$anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
      });
    },

    enterButton(el) {
      this.animateButton(el.target, 1.1, 800, 400);
    },

    leaveButton(el) {
      this.animateButton(el.target, 1.0, 600, 300);
    },

    pushToProductPage() {
      let type = this.productDetail.type.map((item) => item.slug);
      this.$store.dispatch("typeMusic", type);
      this.$router.push(`/san-pham`).catch(() => {});
    },
  },
  async mounted() {
    await this.getProductDetail();
    this.$anime({
      targets: "#image-play1",
      rotate: {
        value: 360,
        duration: 3000,
      },
      easing: "linear",
      elasticity: 0,
      loop: true,
    });
  },
  watch: {
    $route(to, from) {
      if (to.params.slug !== from.params.slug) {
        this.getProductDetail();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.line {
  width: 100%;
  img {
    width: 100%;
  }
}
.product-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  color: #ffff;

  .info-music {
    .title {
      display: flex;
      gap: 20px;
      align-items: center;
      h1 {
        font-size: 36px;
        font-weight: 800px;
        color: #b6ff52;
        padding: 20px 0;
        margin: 0;
      }

      .play-url {
        display: block;
        a {
          display: inline-block;
          img {
            max-width: 50px;
            -o-object-fit: fill;
            object-fit: fill;
            aspect-ratio: 1;
          }
        }
      }
    }
    .detail {
      display: flex;
      padding-bottom: 20px;
      justify-content: space-between;
      .item-detail {
        .artist-sing {
          .artist-name-container {
            .artist-name {
              font-weight: 700;
              color: #ffff;
              display: inline-block;
            }
            .artist-name:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
          .artist-name-container:not(:last-child):after {
            content: ", ";
          }
        }

        p {
          font-size: 16px;
          font-weight: 500;
          display: inline-block;
          span {
            font-weight: 700;
            color: #ffff;
            display: inline-block;
          }

          .type:not(:first-child):before {
            content: ",\00a0";
          }
        }
      }
    }
  }

  .lyrist-container {
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(
      92.98deg,
      rgba(255, 255, 255, 0.112) 0%,
      rgba(255, 255, 255, 0.064) 100%
    );

    .title-lyrist {
      font-size: 24px;
      font-weight: 700;
      color: #b6ff52;
      margin: 0;
      padding-bottom: 20px;
      display: block;
      span {
        max-width: 20px;
        display: inline-block;
        img {
          object-fit: fill;
          width: 100%;
        }
      }
    }
  }

  .landing-container {
    background: linear-gradient(
      92.98deg,
      rgba(255, 255, 255, 0.112) 0%,
      rgba(255, 255, 255, 0.064) 100%
    );
    border-radius: 24px;
    margin: 60px 0 0 0;
    padding: 40px;
    .artist-item {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .artist-landing {
        flex: 1;
        display: flex;
        .avatar {
          max-width: 240px;
          max-height: 240px;
          margin-right: 30px;
          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: fill;
          }
        }
        .content-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h3 {
            font-weight: 700;
            line-height: 140%;
            color: var(--white, #fff);
            font-size: 30px;
          }

          h3:hover {
            cursor: pointer;
            text-decoration: underline;
          }

          .job-list {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            flex-wrap: wrap;
            color: #fff;
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
              color: var(--white, #fff);
              font-size: 18px;
              font-family: Manrope;
              line-height: 160%;
              margin: unset;
              border: 1px solid var(--white, #fff);
              border-radius: 100px;
              padding: 4px 8px;
              margin: 0 12px 8px 0;
            }
          }

          .social-link {
            color: #fff;
            display: flex;
            gap: 20px;
            a {
              display: inline-block;
              img {
                max-width: 40px;
                max-height: 40px;
              }
            }
          }
        }
      }
      .url-artist {
        flex: 1;
        .img-container-artist {
          max-width: 112px;
          max-height: 112px;
          display: block;
          padding: 0;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .see-detail {
        p {
          display: block;
          color: #b6ff52;
          margin: 0;
          padding: 0;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        }
        p:hover {
          text-decoration: underline;
        }
      }
    }

    .artist-item:last-child {
      margin-bottom: 0;
    }
  }
  .key-word {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    padding: 36px 0;

    p {
      display: inherit;
      font: inherit;
      color: #ffff;
    }
    h5 {
      display: inherit;
      font: inherit;
      color: #b6ff52;
    }

    h5:hover,
    .key-word-artist:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .key-word-artist {
      display: inline-block;
      font: inherit;
      color: #b6ff52;
    }

    .key-word-artist:not(:last-child):after {
      content: ",\00a0";
      display: inline-block;
      color: #ffff;
    }
  }

  .product-social {
    padding: 0 0 30px 0;
    display: flex;
    justify-content: space-between;
    color: #ffff;
    .title h5 {
      font-size: 18px;
      font-weight: 700;
    }
    .social {
      align-self: end;
      text-align: end;
      .social-flex {
        display: flex;
        .social-icon {
          width: 50px;
          height: 50px;
        }
      }
      .share-count {
        text-align: right;
      }
    }
  }
  .same-artist {
    .title-same-artist {
      color: #b6ff52;
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding-bottom: 36px;
      h2 {
        font-weight: 800;
        font-size: 32px;
      }
      span {
        font-weight: 700;
        font-size: 16px;
        display: block;
        align-self: center;
        cursor: pointer;
      }
    }
  }
}

.item-product {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #071e42;
  border: unset;
  .avatar-product {
    width: 100%;
    max-height: 240px;
    object-fit: fill;
  }
  .content-product {
    text-align: left;
    background: linear-gradient(
      180deg,
      rgba(250, 250, 250, 0.08) 0%,
      rgba(250, 250, 250, 0.08) 100%
    );
    border-end-end-radius: var(--bs-card-inner-border-radius);
    border-end-start-radius: var(--bs-card-inner-border-radius);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content-product-left {
      h5 {
        font-size: 20px;
        font-weight: 600;
        color: #ffff;
        height: fit-content;
        overflow: hidden;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      p {
        color: #ffff;
        font-size: 16px;
        font-weight: 500;
      }
    }
    .content-product-right {
      img {
        max-width: 32px;
        object-fit: fill;
        aspect-ratio: 1;
      }
    }
  }
}

.SMN_effect-4 {
  position: relative;
}
.SMN_effect-4:after {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: 3px;
  background: #b6ff52;
  content: "";
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;
  -moz-transition: opacity 0.2s, -moz-transform 0.2s;
  transition: opacity 0.2s, transform 0.2s;
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  transform: translateY(10px);
}

.SMN_effect-4:hover:after,
.SMN_effect-4:focus:after {
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  transform: translateY(0px);
}

.image-hover img {
  width: 36px;
  height: auto;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.image-hover:hover img {
  width: 40px;
}

#heart {
  height: 100%;
  animation: 1.5s ease 0s infinite beat;
}

@keyframes beat {
  0%,
  50%,
  100% {
    transform: scale(1, 1);
  }
  30%,
  80% {
    transform: scale(0.92, 0.95);
  }
}

@media screen and (max-width: 900px) {
  .product-container {
    .info-music {
      padding: 30px;
      .title {
        h1 {
          font-size: 25px;
          font-weight: 700px;
        }
      }
      .detail {
        flex-direction: column;
        width: 100%;
        .item-detail {
          p {
            font-size: 14px;
            font-weight: 500;
            span {
              font-weight: 700;
            }
          }

          .artist-sing {
            .artist-name-container {
              .artist-name {
                font-weight: 700;
                color: #ffff;
                display: inline-block;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .lyrist-container {
      padding: 30px;
      border-radius: unset;
    }

    .landing-container {
      border-radius: unset;
      margin: 120px 0 0 0;
      padding: 30px;
      text-align: center;
      .artist-item {
        flex-direction: column;
        .artist-landing {
          flex-direction: column;
        }
        .content-item {
          .job-list {
            justify-content: center;
          }
          .style-music-list {
            justify-content: center;
          }
          .social-link {
            justify-content: center;
          }
        }
        .see-detail {
          display: none;
        }
      }
    }

    .key-word {
      padding: 30px;
      font-size: 14px;
    }

    .product-social {
      padding: 30px;
      .title h5 {
        font-size: 16px;
        font-weight: 700;
      }
    }

    .same-artist {
      padding: 20px;
      .title-same-artist {
        padding-bottom: 30px;
        align-items: center;
        h2 {
          font-weight: 700;
          font-size: 25px;
          display: inline-block;
          margin: unset;
          padding: unset;
        }
        span {
          font-weight: 700;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
