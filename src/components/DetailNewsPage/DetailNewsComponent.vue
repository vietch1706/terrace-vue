<template>
  <div class="detail-news-container">
    <div class="title">
      <h2>
        {{ data.title }}
      </h2>
      <div class="info-blog">
        <ul class="container-info-blog">
          <li class="item-info-blog">
            <span
              ><img src="@/assets/AllNewsComponent/ic-profile.png" alt=""
            /></span>
            <p>{{ data.writer }}</p>
          </li>
          <li class="item-info-blog">
            <span
              ><img src="@/assets/AllNewsComponent/ic-clock.png" alt=""
            /></span>
            <p>{{ data.created_at }}</p>
          </li>
          <li class="item-info-blog">
            <span><img src="@/assets/AllNewsComponent/eye.png" alt="" /></span>
            <p>{{ data.view }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="content-blog" v-html="data.description"></div>

    <div class="artist-info">
      <div class="title-artist-info">
        <h2>Tác giả</h2>
      </div>

      <div class="container-artist-info" v-if="artist">
        <div class="avatar-artist">
          <img :src="artist.avatar" :alt="artist.name" @click="pushToArtist" />
        </div>
        <div class="info">
          <h2 @click="pushToArtist">{{ artist.name }}</h2>
          <div class="social-link">
            <a
              v-for="item in artist.social_url"
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

        <div class="see-detail">
          <p @click="pushToArtistDetailPage">
            Xem chi tiết &nbsp;
            <i class="fa-solid fa-chevron-right" style="color: #b6ff52"></i>
          </p>
        </div>
      </div>
    </div>

    <div class="key-word" v-if="artist">
      <p>Từ khóa:&nbsp;</p>
      <h5 @click="pushToArtist">{{ artist.name }}</h5>
      <h5
        v-for="(value, index) in data.category"
        :key="index"
        @click="pushToBlogPage(value.id)"
      >
        {{ value.name }}
      </h5>
    </div>

    <div class="line">
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
        <div class="share-count">{{ data.share || 0 }} lượt chia sẻ</div>
      </div>
    </div>

    <div class="same-blog">
      <div class="title-same-blog">
        <h2>Tin tức liên quan</h2>

        <span @click="pushToBlogPage('all')" class="SMN_effect-4">
          Xem tất cả &nbsp; >
        </span>
      </div>
      <div class="news-grid">
        <div
          class="grid-item"
          v-for="(value, index) in sameBlog.data"
          :key="index"
          @click="pushToDetailPage(value.slug)"
        >
          <div class="new-img">
            <v-lazy-image :src="value.thumbnail" />
          </div>
          <div class="new-description">
            <div class="new-author">
              <div class="author-info">
                <div class="profile-img">
                  <img
                    src="../../assets/AllNewsComponent/ic-profile.png"
                    alt=""
                  />
                </div>
                <p class="author-name">{{ value.writer }}</p>
              </div>
              <div class="new-date">
                <div class="clock-img">
                  <img src="@/assets/AllNewsComponent/ic-clock.png" alt="" />
                </div>
                <p class="upload-date">{{ value.created_at }}</p>
              </div>
            </div>
            <p class="new-text">
              {{ value.title }}
            </p>
          </div>
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
      sameBlog: [],
      artist: null,
    };
  },
  methods: {
    async getBlogBySlug() {
      await axios
        .get(`blog/get-slug?slug=${this.$route.params.slug}`)
        .then((result) => {
          this.data = result.data.data.blog;
          this.artist = result.data.data.blog.artist_info;
          this.sameBlog = result.data.data.same_data;
        })
        .catch(() => {
          this.$router.push({ name: "404Page" }).catch(() => {});
        });
    },
    pushToBlogPage(slug) {
      let category = [];
      if (slug === "all") {
        this.data.category.forEach((element) => {
          category.push(element.id);
        });
      } else {
        category.push(slug);
      }
      this.$store.dispatch("categoryBlog", category);
      this.$router.push(`/tin-tuc`).catch(() => {});
    },

    async pushToDetailPage(value) {
      await this.$router.push(`/tin-tuc/${value}`).catch(() => {});
      await this.getBlogBySlug();
    },

    async pushToArtist() {
      await this.$router.push(`/nghe-si/${this.artist.slug}`).catch(() => {});
    },

    pushToArtistDetailPage() {
      let artistSlug = this.artist.slug;
      this.$router.push(`/nghe-si/${artistSlug}`).catch(() => {});
    },
  },
  async mounted() {
    await this.getBlogBySlug();
  },
};
</script>

<style lang="scss" scoped>
.detail-news-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  color: #ffff;
  .title {
    h2 {
      font-size: 36px;
      font-weight: 800;
      color: #b6ff52;
      display: block;
      margin: unset;
      padding: unset;
    }

    .info-blog {
      .container-info-blog {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        .item-info-blog {
          span {
            max-width: 25px;
            display: inline-block;
            padding-right: 5px;
            img {
              width: 100%;
              object-fit: fill;
            }
          }
          p {
            display: inline-block;
            margin: unset;
            padding: unset;
          }
        }
      }
    }
  }

  .artist-info {
    .title-artist-info {
      h2 {
        font-size: 36px;
        font-weight: 800;
        color: #b6ff52;
        display: block;
        margin: unset;
        padding: unset;
        padding-bottom: 16px;
      }
    }
    .container-artist-info {
      background: linear-gradient(
        92.98deg,
        rgba(255, 255, 255, 0.112) 0%,
        rgba(255, 255, 255, 0.064) 100%
      );
      display: flex;
      padding: 24px;
      border-radius: 24px;

      .avatar-artist {
        max-width: 100px;
        cursor: pointer;
        padding-right: 20px;
        img {
          object-fit: fill;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 50%;
        }
      }
      .info {
        h2:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        .social-link {
          color: #fff;
          display: flex;
          gap: 15px;
          a {
            display: inline-block;
            img {
              max-width: 40px;
              max-height: 40px;
            }
          }
        }
      }

      .see-detail {
        align-self: center;
        margin-left: auto;
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
    h5,
    span {
      display: inherit;
      font: inherit;
      color: #b6ff52;
    }

    h5:not(:last-child):after {
      content: ",\00a0";
      display: inline-block;
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
        .social-icon:last-child {
          padding-right: unset;
        }
      }
      .share-count {
        text-align: right;
      }
    }
  }

  .same-blog {
    .title-same-blog {
      color: #b6ff52;
      display: flex;
      justify-content: space-between;
      align-content: center;
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
    .news-grid {
      display: grid;
      grid-template-rows: repeat(1, 1fr);
      grid-template-columns: repeat(3, 1fr);
      gap: 64px;
      justify-content: center;
      padding-top: 20px;
      .grid-item {
        .new-img {
          max-width: 330px;
          img {
            object-fit: fill;
            width: 100%;
            aspect-ratio: 1;
            border-radius: 16px;
          }
        }
        .new-description {
          .new-author {
            padding: 24px 0 8px 0;
            display: flex;
            justify-content: space-between;
            .author-info {
              display: flex;
              column-gap: 8px;
              .profile-img {
                max-width: 16px;
                img {
                  width: 100%;
                }
              }
              .author-name {
                margin: 0;
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #f1f1f1;
                align-self: flex-end;
              }
            }
            .new-date {
              display: flex;
              column-gap: 8px;
              .clock-img {
                max-width: 16px;
                img {
                  width: 100%;
                }
              }
              .upload-date {
                margin: 0;
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #f1f1f1;
                align-self: flex-end;
              }
            }
          }
          .new-text {
            font-size: 20px;
            font-weight: 700;
            line-height: 32px;
            color: #ffffff;
            width: 1fr;
            margin-bottom: 0;
            height: fit-content;
            overflow: hidden;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            flex: 1 1;
          }
        }
      }
    }
  }
}

.line {
  width: 100%;
  img {
    width: 100%;
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

@media screen and (max-width: 820px) {
  .detail-news-container {
    padding: 30px;
    .title {
      h2 {
        font-size: 25px;
        font-weight: 700;
      }

      .info-blog {
        .container-info-blog {
          .item-info-blog {
            p {
              font-size: 14px;
            }
          }
        }
      }
    }

    .artist-info {
      .title-artist-info {
        h2 {
          font-size: 25px;
          font-weight: 700;
          padding-bottom: 16px;
        }
      }
      .container-artist-info {
        display: flex;
        align-items: center;
        padding: 15px;

        .see-detail {
          display: none;
        }
      }
    }

    .key-word {
      display: inline-block;
      font-size: 14px;
      font-weight: 700;
      padding: 20px 0;
    }

    .product-social {
      padding: 30px 0;
      .title h5 {
        font-size: 16px;
        font-weight: 700;
      }
    }

    .same-blog {
      .title-same-blog {
        h2 {
          font-weight: 700;
          font-size: 25px;
        }
        span {
          font-weight: 700;
          font-size: 14px;
          display: block;
          align-self: center;
          cursor: pointer;
        }
      }
      .news-grid {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        justify-content: center;
        padding-top: 60px;
        .grid-item {
          .new-img {
            max-width: 330px;
            img {
              object-fit: fill;
              width: 100%;
              aspect-ratio: 1;
              border-radius: 16px;
            }
          }
          .new-description {
            display: flex;
            flex-direction: column-reverse;
            .new-author {
              padding: 10px 0;
              display: flex;
              flex-direction: column;
              .author-info {
                .author-name {
                  margin: 0;
                  font-size: 14px;
                  font-weight: 500;
                  color: #f1f1f1;
                  align-self: flex-end;
                }
              }
              .new-date {
                .upload-date {
                  margin: 0;
                  font-size: 14px;
                  font-weight: 500;
                  color: #f1f1f1;
                  align-self: flex-end;
                }
              }
            }
            .new-text {
              font-size: 16px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
