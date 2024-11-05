<template>
  <div class="detail-container">
    <div class="landing-container">
      <div class="artist-landing">
        <div class="avatar">
          <img :src="data.avatar" :alt="data.name" />
        </div>
        <div class="content-item">
          <h3>{{ data.name }}</h3>
          <div class="job-list">
            <p
              v-for="item in data.job"
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
              v-for="(item, index) in data.type"
              :key="index"
            >
              {{ item.name }}
            </p>
          </div>
          <div class="social-link">
            <a
              v-for="item in data.social_url"
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
          :href="data.link_music"
          target="_blank"
          class="img-container-artist"
          rel="noopener noreferrer"
        >
          <img
            id="image-play"
            src="@/assets/DataAPIComponent/Group.png"
            alt=""
          />
        </a>
      </div>
    </div>

    <div class="info-artist">
      <h2 class="title-info">Tiểu sử {{ data.name }}</h2>

      <ul class="list-info">
        <li class="item-info">
          <div>
            <i class="fa-solid fa-user" style="color: #b6ff52"></i>
            Tên đầy đủ:&nbsp;<span>{{ data.full_name }}</span>
          </div>
        </li>
        <li class="item-info">
          <div>
            <i class="fa-solid fa-cake-candles" style="color: #b6ff52"></i>
            Ngày sinh:&nbsp;<span>{{ data.birth_day }} </span>
          </div>
        </li>
        <li class="item-info">
          <div>
            <i class="fa-solid fa-venus-mars" style="color: #b6ff52"></i>
            Giới tính:&nbsp;<span>{{ data.gender ? "Nam" : "Nữ" }} </span>
          </div>
        </li>
        <li class="item-info">
          <div>
            <i class="fa-solid fa-phone" style="color: #b6ff52"></i>
            Số điện thoại:&nbsp;<span>{{ data.phone }} </span>
          </div>
        </li>
        <li class="item-info" v-if="data.description">
          <div v-html="data.description"></div>
        </li>
      </ul>
    </div>

    <div class="list-song" v-if="data.music_info?.length">
      <h2 class="title-list-song">Danh sách bài hát</h2>
      <ul class="song-container">
        <li class="item-song" v-for="item in data.music_info" :key="item.id">
          <div class="thumbnail-song">
            <router-link
              :to="{ name: 'detailProduct', params: { slug: item.slug } }"
            >
              <img :src="item.thumbnail" :alt="item.name" />
            </router-link>
          </div>
          <div class="info-song">
            <router-link
              class="song-name"
              :to="{ name: 'detailProduct', params: { slug: item.slug } }"
            >
              <p>
                {{ item.name }}
              </p>
            </router-link>

            <div class="song-type">
              <p v-for="(type, index) in item.type" :key="index">
                {{ type.name }}
              </p>
            </div>

            <div class="artist-name">
              <p v-for="(artist, index) in item.artist" :key="index">
                <router-link
                  :to="{ name: 'detailArtist', params: { slug: artist.slug } }"
                >
                  {{ artist.name }}
                </router-link>
              </p>
            </div>
          </div>
          <div class="song-url">
            <a :href="item.url" target="_blank">
              <figure class="image-hover">
                <img src="@/assets/play.png" alt="Play" />
              </figure>
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div class="album-list" v-if="data.album_info?.length">
      <h2 class="title-list-album">Album</h2>
      <div class="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
        <div
          class="col"
          v-for="(album, index) in data.album_info.slice(0, 4)"
          :key="index"
        >
          <a
            class="item-album"
            :href="album.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="carousel-img">
              <img :src="album.thumbnail" alt="" />
            </div>
            <div class="carousel-content">
              <h4>{{ album.name }}</h4>
              <p>{{ data.name }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="key-word">
      <p>Từ khóa:&nbsp;</p>
      <h5>{{ data.name }}</h5>
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
        <div class="share-count">{{ data.share }} lượt chia sẻ</div>
      </div>
    </div>

    <div class="line">
      <img src="@/assets/Divider.png" alt="" />
    </div>

    <div class="same-artist">
      <div class="title-same-artist">
        <h2>Nghệ sĩ tương tự</h2>

        <span @click="pushToArtistPage" class="SMN_effect-4">
          Xem tất cả &nbsp; >
        </span>
      </div>
      <div
        v-if="sameArtist.data?.length"
        class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3"
      >
        <div
          class="col"
          v-for="value in sameArtist.data.slice(0, 4)"
          :key="value.id"
          @mouseenter="enterButton"
          @mouseleave="leaveButton"
        >
          <router-link
            :to="{ name: 'detailArtist', params: { slug: value.slug } }"
          >
            <div class="card item-artist">
              <img
                :src="value.avatar"
                class="card-img-top avatar-artist"
                :alt="value.name"
              />
              <div class="card-body content-artist">
                <h5 class="card-title">
                  {{ value.name }}
                </h5>
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
  data() {
    return {
      data: [],
      sameArtist: [],
    };
  },
  methods: {
    getArtistBySlug() {
      axios
        .get(`artist/slug?slug=${this.$route.params.slug}`)
        .then((result) => {
          this.data = result.data.data.artist;
          this.sameArtist = result.data.data.same_data;
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

    pushToArtistPage() {
      let job = this.data.job.map((item) => item.id);
      let type = this.data.type.map((item) => item.slug);
      this.$store.dispatch("typeArtist", type);
      this.$store.dispatch("jobArtist", job);
      this.$router.push(`/nghe-si`).catch(() => {});
    },
  },
  async mounted() {
    await this.getArtistBySlug();
    this.$anime({
      targets: "#image-play",
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
        this.getArtistBySlug();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-container {
  max-width: 1140px;
  margin: 0 auto;
  .landing-container {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 60px 0;
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
          font-size: 36px;
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
            font-size: 16px;
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
          gap: 10px;
          a {
            display: block;
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
  }

  .info-artist {
    padding: 60px;
    background: linear-gradient(
      92.98deg,
      rgba(255, 255, 255, 0.042) 0%,
      rgba(255, 255, 255, 0.024) 100%
    );
    border-radius: 32px;
    color: #ffff;
    .title-info {
      font-size: 32px;
      font-weight: 800;
      color: #b6ff52;
      padding: 0 0 32px 0;
    }
    .list-info {
      .item-info {
        div {
          padding: 0 0 20px 0;
          i {
            width: 25px;
          }
          span {
            font-weight: 700;
          }
        }
      }
      .item-info:last-child {
        div {
          padding: unset;
        }
      }
    }
  }

  .list-song {
    padding: 80px 0;
    .title-list-song {
      font-size: 32px;
      font-weight: 800;
      color: #b6ff52;
      padding-bottom: 24px;
    }

    .song-container {
      display: flex;
      flex-direction: column;
      color: #ffff;
      border-radius: 16px;
      margin: 0;
      padding: 5px;
      background: linear-gradient(
        92.98deg,
        rgba(255, 255, 255, 0.042) 0%,
        rgba(255, 255, 255, 0.024) 100%
      );
      .item-song {
        display: flex;
        padding: 12px;
        align-items: center;
        height: fit-content;
        .thumbnail-song {
          max-width: 80px;
          max-height: 80px;
          img {
            width: 100%;
            object-fit: fill;
            cursor: pointer;
          }
        }
        .info-song {
          padding: 0 60px 0 20px;
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffff;
          p {
            margin: 0;
            padding: 0;
            display: inline-block;
          }

          .song-name {
            font-weight: 800;
            color: #ffff;
            flex: 1;
          }

          .song-name:hover p {
            cursor: pointer;
            text-decoration: underline;
          }

          .song-type {
            flex: 1;
            p::after {
              content: ",";
              padding: 0 4px 0 0;
            }

            p:last-child::after {
              content: unset;
            }
          }

          .artist-name {
            p {
              a {
                color: #ffff;
              }
              a:hover {
                cursor: pointer;
                text-decoration: underline;
              }
            }
            p::after {
              content: ",";
              padding: 0 4px 0 0;
            }

            p:last-child::after {
              content: unset;
            }
          }
        }
        .song-url {
          width: 40px;
          height: 40px;
          .image-hover {
            margin: 0;
          }
          img {
            object-fit: fill;
          }
        }
      }
    }
  }

  .album-list {
    .title-list-album {
      font-size: 32px;
      font-weight: 800;
      color: #b6ff52;
      padding-bottom: 24px;
    }

    .item-album {
      width: fit-content;
      display: block;
      border: 1px solid #ffffff;
      border-radius: 32px;
      .carousel-img {
        width: fit-content;
        height: fit-content;
        img {
          max-width: 255px;
          aspect-ratio: 1;
          object-fit: fill;
          border-radius: 32px 32px 0px 0px;
        }
      }
      .carousel-content {
        min-height: 86px;
        border-radius: 0px 0px 32px 32px;
        background: linear-gradient(
          180deg,
          rgba(250, 250, 250, 0.08) 0%,
          rgba(250, 250, 250, 0.08) 100%
        );
        max-width: 255px;
        color: #ffff;

        padding: 12px 32px;
        h4 {
          color: #ffff;
          font-size: 20px;
          font-weight: 700;
          height: fit-content;
          overflow: hidden;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        p {
          font-size: 16px;
          color: #ffff;
        }
      }
    }
  }

  .key-word {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    padding: 30px 0;

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

    h5:hover {
      text-decoration: underline;
      cursor: pointer;
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

.item-artist {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #071e42;
  border: unset;
  cursor: pointer;
  .avatar-artist {
    width: 100%;
    max-height: 240px;
    object-fit: fill;
  }
  .content-artist {
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(250, 250, 250, 0.08) 0%,
      rgba(250, 250, 250, 0.08) 100%
    );
    border-end-end-radius: var(--bs-card-inner-border-radius);
    border-end-start-radius: var(--bs-card-inner-border-radius);
    h5 {
      color: #ffff;
    }
    .job-list {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      height: 75px;
      .job-item {
        border-radius: 100px;
        padding: 4px 16px;
        margin: unset;
        color: #ffff;
      }
    }
  }
}

// Effect
.image-hover img {
  width: 36px;
  height: auto;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.image-hover:hover img {
  width: 40px;
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
.line {
  width: 100%;
  img {
    width: 100%;
  }
}

@media screen and (max-width: 820px) {
  .detail-container {
    .landing-container {
      align-items: unset;
      flex-direction: column;
      padding: 30px;
      .artist-landing {
        flex-direction: column;
        justify-content: center;
        .avatar {
          margin: 0 auto;
          img {
            border-radius: 20px;
          }
        }
        .content-item {
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          h3 {
            font-size: 25px;
          }

          .job-list {
            align-items: center;
            justify-content: center;
            gap: 5px;
            .job-item {
              padding: 4px 10px;
            }
          }

          .style-music-list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            padding-top: 10px;
            .style-music-item {
              font-size: 14px;
            }
          }

          .social-link {
            color: #fff;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }

    .info-artist {
      padding: 30px;
      background: linear-gradient(
        92.98deg,
        rgba(255, 255, 255, 0.042) 0%,
        rgba(255, 255, 255, 0.024) 100%
      );
      border-radius: unset;
      color: #ffff;
      .title-info {
        font-size: 25px;
        font-weight: 700;
        color: #b6ff52;
        padding: 0 0 32px 0;
      }
      .list-info {
        margin: unset;
        padding: unset;
        .item-info {
          div {
            padding: 0 0 20px 0;
            i {
              width: 25px;
            }
            span {
              font-weight: 700;
            }
          }
        }
        .item-info:last-child {
          div {
            padding: unset;
          }
        }
      }
    }

    .list-song {
      padding: 30px 0;
      .title-list-song {
        font-size: 25px;
        font-weight: 700;
        padding: 0 0 10px 30px;
      }

      .song-container {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        color: #ffff;
        border-radius: unset;
        .item-song {
          align-items: center;
          .info-song {
            padding: unset;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            p {
              margin: 0;
              padding: 0;
              display: inline-block;
            }

            .song-name {
              font-weight: 800;
            }

            .song-type {
              p::after {
                content: ",";
                padding: 0 4px 0 0;
              }

              p:last-child::after {
                content: unset;
              }
            }

            .song-url {
              width: 40px;
              height: 40px;
              img {
                object-fit: fill;
              }
            }
          }
        }
      }
    }

    .album-list {
      .title-list-album {
        font-size: 25px;
        font-weight: 700;
        padding-bottom: 20px;
        padding: 0 30px 30px 30px;
      }

      .item-album {
        margin: 0 auto;
        .carousel-content {
          h4 {
            font-size: 16px;
            font-weight: 600;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }

    .key-word {
      padding: 30px;
    }

    .product-social {
      padding: 30px;
      .title h5 {
        font-size: 16px;
        font-weight: 600;
      }
    }

    .same-artist {
      padding: 20px;
      .title-same-artist {
        color: #b6ff52;
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding-bottom: 30px;
        h2 {
          font-weight: 700;
          font-size: 25px;
        }
        span {
          font-weight: 700;
          font-size: 14px;
        }
      }
    }
  }
  .item-artist {
    .content-artist {
      .job-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        height: 75px;
        .job-item {
          border-radius: 100px;
          padding: 4px;
          margin: unset;
          color: #ffff;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
