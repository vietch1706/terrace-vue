<template>
  <header class="header-container" ref="header">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <div class="container-fluid header-menu">
        <div class="navbar-brand logo-container">
          <router-link to="/">
            <v-lazy-image
              :src="logo"
              alt="Terrace Media"
              class="header-logo navbar-brand"
            />
          </router-link>
        </div>
        <button
          id="buttonMenu"
          class="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleContent"
          aria-controls="navbarToggleContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggleContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item menu-item effect-item">
              <router-link to="/" class="nav-link">Trang chủ</router-link>
            </li>
            <li class="nav-item menu-item effect-item">
              <router-link to="/gioi-thieu" class="nav-link">
                Giới thiệu</router-link
              >
            </li>
            <li class="nav-item menu-item effect-item">
              <router-link to="/dich-vu" class="nav-link"> Dịch vụ</router-link>
            </li>
            <li class="nav-item menu-item effect-item">
              <router-link to="/quy-trinh" class="nav-link"
                >Quy trình</router-link
              >
            </li>
            <li class="nav-item menu-item effect-item">
              <router-link to="/nghe-si" class="nav-link"> Nghệ sĩ</router-link>
            </li>
            <li class="nav-item menu-item effect-item">
              <router-link to="/san-pham" class="nav-link">
                Sản phẩm
              </router-link>
            </li>
            <li class="nav-item dropdown menu-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <router-link to="/phan-bo" class="dropdown-item effect-item"
                    >Phân bổ
                  </router-link>
                </li>
                <li>
                  <router-link to="/tin-tuc" class="dropdown-item effect-item"
                    >Tin tức</router-link
                  >
                </li>
                <li>
                  <router-link to="/lien-he" class="dropdown-item effect-item"
                    >Liên hệ</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <div class="menu-btn">
              <div class="btn-login">
                <a href="https://distribution.terracemedia.co" target="_blank">
                  <button type="button" class="btn effect-item">
                    Đăng nhập
                  </button>
                </a>
              </div>
              <div class="btn-reg">
                <router-link to="/dang-ky">
                  <button type="button" class="btn effect-item">
                    Đăng ký
                  </button></router-link
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import VLazyImage from "v-lazy-image";
import logo from "@/assets/Logo_web.png";
export default {
  name: "PageHeader",
  components: {
    VLazyImage,
  },
  computed: {
    logo() {
      return logo;
    },
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    const menuToggle = document.getElementById("buttonMenu");
    if (window.getComputedStyle(menuToggle).display !== "none") {
      const navLinks = document.querySelectorAll(".effect-item");
      navLinks.forEach((l) => {
        l.addEventListener("click", () => {
          menuToggle.click();
        });
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.custom-toggler.navbar-toggler {
  border-color: transparent;
}
/* Setting the stroke to green using rgb values (0, 128, 0) */

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(182, 255, 82, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.navbar {
  background-color: #0e1d34;
  z-index: 10;
}

.header-container {
  height: 70px;
}

.header-container,
.dropdown-menu {
  width: 100%;
  background: #0e1d34;
}

.header-menu {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0;
  height: inherit;
  display: flex;
  justify-content: space-between;

  .logo-container {
    line-height: 2;
    .header-logo {
      width: 129px;
    }
  }

  .nav-link:focus,
  .nav-link:hover {
    color: #b6ff52;
  }

  .dropdown-menu {
    .dropdown-item:hover {
      background-color: #323247;
    }
  }
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.nav-item {
  margin: 0 10px 0 10px;

  .active {
    color: #b6ff52;
  }

  a {
    color: white;
    font-size: 14px;
    font-weight: 700;
  }
  p {
    font-size: 15px;
    display: inline-block;
    font-weight: 700;
  }
}

.btn {
  color: #162945;
  border: transparent;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  a {
    color: #162945;
  }
}

.menu-btn {
  display: flex;
  justify-content: space-between;

  div {
    border-radius: 5px;
  }
  .btn-login,
  .btn-reg {
    max-width: 120px;
    min-width: 100px;
    padding: 2px;
  }
  .btn-login {
    background-color: #f58afd;
    margin-right: 10px;
  }
  .btn-reg {
    background-color: #b6ff52;
  }
}
</style>
