<template>
  <div class="allnews-container">
    <div class="search-container">
      <input type="text" placeholder="Tìm kiếm tin tức" v-model="searchName" />
      <button class="search-button" @click="searchByName">
        <img src="@/assets/Search.png" alt="" />
      </button>
    </div>
    <div class="chip-container">
      <div>
        <input
          type="checkbox"
          class="btn-check"
          v-model="searchSlug"
          autocomplete="off"
          value="all"
          id="tat-ca-tin"
          @change="getBlogBySearch"
        />
        <label class="btn btn-secondary chip-item" for="tat-ca-tin"
          >Tất cả tin tức</label
        >
      </div>
      <div v-for="value in data.category" :key="value.id">
        <input
          type="checkbox"
          class="btn-check"
          v-model="searchSlug"
          :value="value.id"
          autocomplete="off"
          :id="value.slug"
          @change="getBlogBySearch"
        />
        <label class="btn btn-secondary chip-item" :for="value.slug">{{
          value.name
        }}</label>
      </div>
    </div>
    <div class="news-grid" v-if="data.blog.data?.length">
      <div
        class="grid-item"
        v-for="(value, index) in data.blog.data"
        :key="index"
      >
        <router-link
          class="blog-item"
          :to="{ name: 'detailNews', params: { slug: value.slug } }"
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
        </router-link>
      </div>
    </div>
    <div v-else class="empty-content">
      <div class="image-empty">
        <img src="@/assets/Empty.png" alt="" />
      </div>
      <p class="text-empty">Tìm thấy 0 kết quả</p>
    </div>
    <div class="paging">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="limit"
        layout="total, prev, pager, next"
        :total="data.blog.total"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VLazyImage from "v-lazy-image";
export default {
  data() {
    return {
      searchName: "",
      searchSlug: ["all"],

      data: {
        category: [],
        blog: [],
      },
      limit: 9,
      page: 1,
    };
  },
  components: {
    VLazyImage,
  },
  methods: {
    getAllCategory() {
      axios
        .get("blog/category")
        .then((result) => {
          this.data.category = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllBlog() {
      let url = "blog/list?" + "limit=" + this.limit + "&page=" + this.page;
      axios
        .get(url)
        .then((result) => {
          this.data.blog = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBlogBySearch() {
      let searchData = {};

      if (this.searchName) {
        searchData.search = "&search=" + this.searchName;
      } else {
        searchData.search = "";
      }

      console.log(this.searchSlug);

      if (this.searchSlug) {
        searchData.slug = this.searchSlug;
      } else {
        searchData.slug = [];
      }
      let url =
        "blog/get-search?" + "limit=" + this.limit + "&page=" + this.page;
      axios
        .post(url, searchData)
        .then((result) => {
          this.data.blog = result.data.data;
        })
        .catch((res) => {
          console.log(res);
          this.$notify({
            title: "Lỗi",
            type: "error",
          });
        });
    },
    searchByName() {
      this.page = 1;
      if (!this.searchName) {
        this.$router.push(`/tin-tuc`).catch(() => {});
        this.getAllBlog();
      } else {
        this.$router
          .push(`/tin-tuc?search=${encodeURIComponent(this.searchName)}`)
          .catch(() => {});
        this.checkSearch();
      }
    },
    handleCurrentChange(val) {
      this.page = val;
      this.checkSearch();
    },
    async checkSearch() {
      let queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const dataSearch = urlParams.get("search");
      const categoryBlog = this.$store.getters.categoryBlog;
      if (dataSearch || categoryBlog) {
        if (categoryBlog) {
          this.searchSlug = categoryBlog;
        }
        this.searchName = dataSearch;
        await this.getBlogBySearch();
      } else {
        await this.getAllBlog();
      }
    },
    pushToDetailPage(value) {
      this.$router.push(`/tin-tuc/${value}`).catch(() => {});
    },
  },
  async mounted() {
    await this.getAllCategory();
    await this.checkSearch();
  },
  beforeRouteUpdate(to, next) {
    next();
    if (to.path.indexOf("/tin-tuc") == 0) {
      this.checkSearch();
    }
  },
  destroyed() {
    this.$store.dispatch("categoryBlog", "");
  },
};
</script>

<style lang="scss">
.allnews-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  .search-container {
    max-width: 100%;
    padding: 5px;
    box-shadow: 0px 40px 64px 32px #0f0f0f1a;
    background: linear-gradient(
      92.98deg,
      rgba(255, 255, 255, 0.112) 0%,
      rgba(255, 255, 255, 0.064) 100%
    );
    border: 1px solid;
    border-image-source: linear-gradient(
      92.98deg,
      rgba(255, 255, 255, 0.112) 0%,
      rgba(255, 255, 255, 0.064) 100%
    );
    border-radius: 100px;
    display: flex;
    justify-content: space-between;

    input {
      width: 90%;
      outline: unset;
      background: transparent;
      color: #ffffff99;
      padding: 0px 20px;
    }
    img {
      max-height: 56px;
      max-width: 56px;
    }
  }
  .chip-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding-top: 50px;

    .btn-check:checked + .chip-item,
    .chip-item:hover {
      background: #e97ff1;
      color: black;
    }
    .chip-item {
      padding: 9px 25px;
      background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.3) 0%,
          rgba(255, 255, 255, 0.3) 100%
        ),
        linear-gradient(
          92.98deg,
          rgba(255, 255, 255, 0.35) 0%,
          rgba(255, 255, 255, 0.2) 100%
        );
      border-radius: 60px;
      font-size: 16px;
      font-weight: 500;
    }
  }
  .news-grid {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 64px;
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
        .new-author {
          padding: 24px 0 8px 0;
          display: flex;
          justify-content: space-between;
          .author-info {
            display: flex;
            column-gap: 8px;
            .profile-img {
              max-width: 25px;
              img {
                width: 100%;
              }
            }
            .author-name {
              margin: 0;
              font-size: 16px;
              font-weight: 500;
              color: #f1f1f1;
              align-self: flex-end;
            }
          }
          .new-date {
            display: flex;
            column-gap: 8px;
            .clock-img {
              max-width: 25px;
              img {
                width: 100%;
              }
            }
            .upload-date {
              margin: 0;
              font-size: 16px;
              font-weight: 500;
              color: #f1f1f1;
              align-self: flex-end;
            }
          }
        }
        .new-text {
          font-size: 20px;
          font-weight: 700;
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
  .paging {
    padding: 60px 0;
    text-align: right;

    .el-pagination.is-background .btn-next,
    .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .el-pager li {
      margin: 0 5px;
      background-color: transparent;
      color: #f1f1f1;
      min-width: 30px;
      border-radius: 50%;
      border: 1px solid #f1f1f1;
    }

    .el-pagination.is-background .el-pager li:not(.disabled).active {
      background: #b6ff52;
      color: black;
      border: unset;
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover {
      color: #b6ff52;
    }
  }
}

.empty-content {
  width: 100%;
  padding: 60px 0;
  text-align: center;

  .image-empty {
    max-width: 235px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .text-empty {
    color: #ffffff99;
    font-size: 18px;
  }
}

@media screen and (max-width: 820px) {
  .allnews-container {
    padding: 30px;

    .chip-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding-top: 30px;
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

  .empty-content {
    padding: 30px 0;
    width: 100%;
    text-align: center;

    .image-empty {
      max-width: 235px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .text-empty {
      color: #ffffff99;
      font-size: 18px;
    }
  }
}
</style>
