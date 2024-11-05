<template>
  <div class="slider-container">
    <!-- Slider main container -->
    <div ref="swiper" class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="value in data.blog" :key="value.id">
          <router-link
            class="blog-item"
            :to="{ name: 'detailNews', params: { slug: value.slug } }"
          >
            <div class="content-blog">
              <span
                class="category-blog"
                v-for="(item, index) in value.category"
                :key="index"
                :style="{
                  background: item.background,
                }"
              >
                {{ item.name }}
              </span>
              <h3 class="title-blog">
                {{ value.title }}
              </h3>
              <div class="info-blog">
                <span class="writer-blog">
                  <img
                    src="./../../assets/AllNewsComponent/ic-profile.png"
                    alt=""
                  />
                  {{ value.writer }}
                </span>
                <span class="create-blog">
                  <img
                    src="./../../assets/AllNewsComponent/ic-clock.png"
                    alt=""
                  />
                  {{ value.created_at }}
                </span>
              </div>
            </div>
            <div class="thumbnail-blog">
              <img :src="value.thumbnail" alt="" /></div
          ></router-link>
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
        blog: [],
      },
    };
  },
  methods: {
    async getAllBlog() {
      let url = "blog/get-homepage?limit=1000";
      await axios
        .get(url)
        .then((result) => {
          this.data.blog = result.data.data;
          console.log(this.data.blog);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pushToDetailBlogPage(value) {
      this.$router.push(`/tin-tuc/${value}`).catch(() => {});
    },
  },
  async mounted() {
    await this.getAllBlog();
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

<style lang="scss" scoped>
.slider-container {
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 60px;
}

.blog-item {
  background: linear-gradient(90deg, #6684be 0%, #aa8cf0 100%);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  .content-blog {
    flex-basis: 50%;
    .category-blog {
      display: inline-block;
      color: #ffff;
      padding: 4px 8px;
      border-radius: 100px;
      font-size: 16px;
      font-weight: 800;
      margin-bottom: 20px;
      margin-right: 5px;
    }

    .title-blog {
      color: #ffff;
      line-height: 50px;
      font-size: 36px;
      font-weight: 700;
      height: fit-content;
      overflow: hidden;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }

    .info-blog {
      display: flex;
      justify-content: space-between;
      .writer-blog,
      .create-blog {
        font-size: 16px;
        font-weight: 500;
        color: #ffff;

        img {
          max-width: 25px;
          object-fit: fill;
          aspect-ratio: 1;
        }
      }
    }
  }
  .thumbnail-blog {
    max-width: 300px;
    img {
      width: 100%;
      object-fit: fill;
      aspect-ratio: 1;
      border-radius: 16px;
    }
  }
}

@media screen and (max-width: 820px) {
  .slider-container {
    padding-top: 30px;
  }
  .blog-item {
    flex-direction: column-reverse;
    .content-blog {
      flex-basis: 100%;
      .category-blog {
        margin: 20px 0 0 0;
      }

      .title-blog {
        font-size: 25px;
        font-weight: 700;
        line-height: unset;
      }

      .info-blog {
        .writer-blog,
        .create-blog {
          font-size: 14px;
          font-weight: 500;
          color: #ffff;

          img {
            max-width: 25px;
            object-fit: fill;
            aspect-ratio: 1;
          }
        }
      }
    }
    .thumbnail-blog {
      max-width: 300px;
      img {
        width: 100%;
        object-fit: fill;
        aspect-ratio: 1;
        border-radius: 16px;
      }
    }
  }
}
</style>
