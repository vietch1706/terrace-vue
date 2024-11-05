<template>
  <div class="product-container">
    <div class="search-bar">
      <div class="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm âm nhạc"
          v-model="search"
        />
        <button @click="searchData">
          <img src="@/assets/Search.png" alt="" />
        </button>
      </div>
      <div class="checkbox-select">
        <div
          class="checkbox-select__trigger"
          :class="{ isActive: activeTriggerType }"
          @click="showDropdown"
        >
          <span class="checkbox-select__title"
            >Thể loại nhạc ({{ checkedFilters.length }})</span
          >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                fill="#ffff"
              ></path>
            </g>
          </svg>
        </div>
        <div
          id="dropdown"
          class="checkbox-select__dropdown"
          :class="{ activeSearch: showLoader }"
        >
          <ul
            class="checkbox-select__filters-wrapp"
            data-simplebar-auto-hide="false"
          >
            <li v-for="(filter, index) in filteredList" :key="index">
              <div class="checkbox-select__check-wrapp">
                <input
                  :id="filter.slug"
                  v-model="checkedFilters"
                  :value="filter.slug"
                  type="checkbox"
                />
                <label :for="filter.slug">{{ filter.name }}</label>
              </div>
            </li>
          </ul>
          <div class="overwrite-btn">
            <el-button class="reset-btn" @click="removeAll">Đặt lại</el-button>
            <el-button
              class="submit-btn"
              type="success"
              @click="searchByDropDown()"
              >Lưu</el-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="product-content">
      <div
        v-if="data.data?.length"
        class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3"
      >
        <div
          class="col"
          v-for="value in data.data"
          :key="value.id"
          @mouseenter="enterButton"
          @mouseleave="leaveButton"
        >
          <div class="card item-product">
            <router-link
              :to="{ name: 'detailProduct', params: { slug: value.slug } }"
            >
              <img
                :src="value.thumbnail"
                class="card-img-top avatar-product"
                :alt="value.name"
              />
            </router-link>
            <div class="card-body content-product">
              <div class="content-product-left">
                <router-link
                  :to="{ name: 'detailProduct', params: { slug: value.slug } }"
                >
                  <h5 class="card-title">
                    {{ value.name }}
                  </h5>
                </router-link>

                <p v-for="item in value.artist" :key="item.id">
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
              <div class="content-product-right">
                <a :href="value.url" target="_blank">
                  <img src="@/assets/play.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="empty-content">
        <div class="image-empty">
          <img src="@/assets/Empty.png" alt="" />
        </div>
        <p class="text-empty">Tìm thấy 0 kết quả</p>
      </div>
    </div>

    <div class="paging">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="limit"
        layout="total, prev, pager, next"
        :total="data.total"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { TweenMax, Power2 } from "gsap";
export default {
  name: "ProductPage",
  data() {
    return {
      //filter list music type
      filtersType: [],
      checkedFilters: [],
      activeTriggerType: false,
      dropdown: false,
      showLoader: false,

      //search bar
      search: "",

      //pagingantion
      data: [],
      limit: 16,
      page: 1,
    };
  },

  computed: {
    filteredList() {
      return this.filtersType;
    },
  },

  methods: {
    getAllTypeMusic() {
      axios
        .get("artist/type-music/get")
        .then((result) => {
          this.filtersType = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    showDropdown: function () {
      if (this.dropdown == false) {
        this.dropdown = true;
        this.activeTriggerType = true;
        TweenMax.fromTo(
          "#dropdown",
          0.55,
          {
            autoAlpha: 0,
            y: -10,
          },
          {
            autoAlpha: 1,
            y: 0,
            ease: Power2.easeOut,
          }
        );
      } else {
        this.dropdown = false;
        this.activeTriggerType = false;
        TweenMax.to("#dropdown", 0.2, {
          autoAlpha: 0,
          y: -10,
          ease: Power2.easeOut,
        });
      }
    },
    removeAll: function () {
      this.checkedFilters = [];
    },

    getAllProduct() {
      let url =
        "artist/music/list?" + "limit=" + this.limit + "&page=" + this.page;
      axios
        .get(url)
        .then((result) => {
          this.data = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleCurrentChange(val) {
      this.page = val;
      this.checkSearch();
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

    getProductBySearch() {
      let searchData = {};

      if (this.checkedFilters) {
        searchData.type = this.checkedFilters;
      } else {
        searchData.type = [];
      }

      if (this.search) {
        searchData.search = this.search;
      } else {
        searchData.search = "";
      }

      let url =
        "artist/music/search?" + "limit=" + this.limit + "&page=" + this.page;
      axios
        .post(url, searchData)
        .then((result) => {
          this.data = result.data.data;
        })
        .catch(() => {
          this.$notify({
            title: "Lỗi",
            type: "error",
          });
        });
    },

    searchByDropDown() {
      this.showDropdown();
      this.getProductBySearch();
    },

    searchData() {
      this.page = 1;
      if (!this.search) {
        this.$router.push(`/san-pham`).catch(() => {});
        this.getAllProduct();
      } else {
        this.$router
          .push(`/san-pham?search=${encodeURIComponent(this.search)}`)
          .catch(() => {});
        this.checkSearch();
      }
    },

    async checkSearch() {
      let queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const dataSearch = urlParams.get("search");
      const typeMusic = this.$store.getters.typeMusic;
      if (dataSearch || typeMusic) {
        this.search = dataSearch;

        if (typeMusic) {
          this.checkedFilters = typeMusic;
        }

        await this.getProductBySearch();
      } else {
        await this.getAllProduct();
      }
    },
  },

  async mounted() {
    await this.getAllTypeMusic();
    await this.checkSearch();
  },
  beforeRouteUpdate(to, next) {
    next();
    if (to.path.indexOf("/san-pham") == 0) {
      this.checkSearch();
    }
  },
  destroyed() {
    this.$store.dispatch("typeMusic", "");
  },
};
</script>

<style lang="scss">
* {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

ul {
  padding: unset;
}

*,
:after,
:before {
  box-sizing: border-box;
}

textarea,
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

.checkbox-select {
  position: relative;
  max-width: fit-content;
  width: 100%;
  color: #ffff;
  &__trigger {
    border-radius: 100px;
    // background: #162945;
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
    position: relative;
    z-index: 1;
    box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.13);
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 18px 20px;
    transition: all 0.4s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media only screen and (max-width: 600px) {
      padding: 0 15px;
      height: 70px;
    }
    &.isActive {
      border-radius: 10px 10px 0 0;
      background: #162945;
      svg {
        transform: rotate(-180deg);
      }
    }
    svg {
      width: 28px;
      stroke: 4px;
      transition: all 0.4s ease;
      @media only screen and (max-width: 600px) {
        width: 22px;
      }
    }
  }
  &__title {
    font-size: 18px;
    flex: 1;
    letter-spacing: 1px;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
  &__dropdown {
    opacity: 0;
    z-index: 2;
    visibility: hidden;
    background: #162945;
    position: absolute;
    left: 0;
    right: 0;
    box-shadow: 0 12px 15px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    padding-bottom: 25px;
    &:after {
      opacity: 0;
      background: #000;
      left: -200px;
      width: 200px;
      background-color: #2980b9;
      transition: opacity 0.3s ease;
      animation: load 1.8s linear infinite;
      background: linear-gradient(
        135deg,
        rgba(143, 36, 237, 1) 20%,
        rgba(143, 36, 237, 1) 20%,
        rgba(143, 36, 237, 1) 22%,
        rgba(143, 36, 237, 1) 25%,
        rgba(16, 124, 179, 1) 100%
      );
    }
    &:before {
      width: 100%;
      background-color: #000;
    }
    &.activeSearch {
      &:after {
        opacity: 1;
      }
    }
  }
  &__search-wrapp {
    padding: 10px 25px 5px;
    @media only screen and (max-width: 600px) {
      padding: 10px 15px 5px;
    }
    input {
      width: 100%;
      height: 40px;
      border-width: 0 0 2px;
      border-style: solid;
      border-color: #000;
      font-size: 16px;
      font-family: "Roboto Slab", serif;
      background: transparent;
    }
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #b8b8b8;
      opacity: 1;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #b8b8b8;
      opacity: 1;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #b8b8b8;
      opacity: 1;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #b8b8b8;
      opacity: 1;
    }
  }
  &__col {
    display: flex;
    font-size: 12px;
    padding: 0 25px;
    justify-content: space-between;
    text-transform: uppercase;
    @media only screen and (max-width: 600px) {
      padding: 0 15px;
    }
  }
  &__select-all {
    label {
      cursor: pointer;
    }
    input {
      display: none;
    }
  }
  &__filters-wrapp {
    margin-top: 20px;
    overflow-y: auto;
  }

  &__check-wrapp {
    position: relative;
    padding: 0 25px;
    margin-bottom: 5px;
    @media only screen and (max-width: 600px) {
      padding: 0 15px;
    }
    input[type="checkbox"] {
      display: none;

      & + label {
        position: relative;
        cursor: pointer;
        font-size: 16px;
        line-height: 22px;
        padding-left: 30px;
        display: inline-block;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: padding 0.25s ease;
        &:after {
          border: solid 2px #b6ff52;
          border-radius: 4px;
          content: "";
          width: 22px;
          height: 22px;
          top: 0;
          left: 0;
          position: absolute;
        }
        &:before {
          width: 14px;
          height: 14px;
          content: "";
          position: absolute;
          top: 4px;
          left: 4px;
          background-color: #b6ff52;
          opacity: 0;
          will-change: transform;
          transform: scale(0.5);
          transition: all 0.2s ease;
        }
        &:hover {
          padding-left: 32px;
        }
      }
      &:checked {
        & + label {
          &:before {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }
  }
}

@keyframes load {
  0% {
    left: -200px;
    width: 20%;
  }
  50% {
    width: 40%;
  }
  70% {
    width: 60%;
  }
  80% {
    left: 50%;
  }
  95% {
    left: 120%;
  }
  100% {
    left: 100%;
  }
}

.product-container {
  margin: 0 auto;
  max-width: 1140px;

  .slider {
    padding-top: 60px;
  }

  .search-bar {
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-container {
      flex: 1;
      max-width: 864px;
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
  }

  .product-content {
    .empty-content {
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
      color: black;
      background: #b6ff52;
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
    cursor: pointer;
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
        display: inline-block;
        a {
          color: #ffff;
        }
      }

      p:not(:last-child)::after {
        content: ",\00a0";
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

.overwrite-btn {
  display: flex;
  justify-content: space-around;
  .reset-btn {
    color: #b6ff52;
    background: transparent;
    border-color: #b6ff52;
    font-weight: 700;
    margin: unset;
    max-width: 85px;
  }

  .submit-btn {
    color: #000;
    font-weight: 700;
    margin: unset;
    width: 85px;
  }
}

@media screen and (max-width: 820px) {
  .product-container {
    margin: 0 auto;
    max-width: 1140px;

    .slider {
      padding-top: 30px;
    }

    .search-bar {
      padding: 30px;
      flex-direction: column;
      gap: 20px;

      .search-container {
        max-width: unset;
        width: 100%;
      }
    }

    .product-content {
      padding: 20px;
      .empty-content {
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

    .paging {
      padding: 30px;
    }
  }
}
</style>
