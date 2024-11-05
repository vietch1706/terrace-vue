<template>
  <div class="data-api-container">
    <div class="artist-container">
      <div class="title-container">
        <h2>Nghệ sĩ nổi bật</h2>
      </div>
      <slider-artist-component />
    </div>
    <div class="music-container">
      <div class="title-container">
        <h2>Sản phẩm nổi bật</h2>
      </div>
      <slider-music-component />
    </div>
    <div class="blog-container">
      <div class="title-container">
        <h2>Các tin tức mới nhất</h2>
      </div>
      <div class="content-container">
        <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div class="col" v-for="value in data.blog" :key="value.id">
            <router-link
              class="blog-item"
              :to="{ name: 'detailNews', params: { slug: value.slug } }"
            >
              <div class="content-item">
                <div class="img-item">
                  <img :src="value.thumbnail" alt="" />
                </div>
                <div class="data-item">
                  <h4>{{ value.title }}</h4>
                  <p>
                    {{ value.short_desription }}
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SliderArtistComponent from "./SliderArtistComponent.vue";
import SliderMusicComponent from "./SliderMusicComponent.vue";
export default {
  components: {
    SliderArtistComponent,
    SliderMusicComponent,
  },
  data() {
    return {
      data: {
        blog: [],
      },
    };
  },
  methods: {
    async getAllBlogHomePage() {
      await axios
        .get("blog/get-homepage")
        .then((result) => {
          this.data.blog = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    await this.getAllBlogHomePage();
  },
};
</script>

<style lang="scss">
.data-api-container {
  max-width: 1140px;
  margin: 0 auto;
}

.title-container {
  padding: 60px 0;
  text-align: center;
  h2 {
    display: inline-block;
    font-weight: 800;
    font-size: 36px;
    color: #b6ff52;
  }
}

.music-container {
}

.content-container {
  .content-item {
    cursor: pointer;
    .img-item {
      max-width: 330px;
      img {
        object-fit: fill;
        width: 100%;
        aspect-ratio: 1;
        border-radius: 16px;
      }
    }

    .data-item {
      max-width: 345px;
      h4 {
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        height: fit-content;
        overflow: hidden;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      p {
        color: var(--gray-5, #e0e0e0);
        font-size: 16px;
        height: fit-content;
        overflow: hidden;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .title-container {
    padding: 30px;
    h2 {
      display: inline-block;
      font-weight: 700;
      font-size: 25px;
    }
  }

  .content-container {
    .content-item {
      padding: 0 30px;
      .data-item {
        h4 {
          font-size: 22px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .data-api-container {
    .line {
      img {
        height: 1px;
      }
    }
  }
}
</style>
