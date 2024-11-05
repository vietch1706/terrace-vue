<template>
  <footer class="footer-container">
    <div class="container-fluid">
      <div class="container">
        <div class="row footer-body">
          <div class="col-md-3 company-info">
            <div class="logo-container">
              <router-link to="/">
                <img
                  class="footer-logo navbar-brand"
                  src="../assets/Logo_web.png"
                  alt="Terrace Media"
                />
              </router-link>
            </div>
            <div class="row">
              <span class="col"
                ><img src="../assets/MiniIcon/email-icon.png" alt="email" />
                <p>{{ company.email }}</p>
              </span>
            </div>
            <div class="row">
              <span class="col"
                ><img src="../assets/MiniIcon/call-icon.png" alt="email" />
                <p>{{ company.phone }}</p>
              </span>
            </div>
            <div class="row">
              <span class="col"
                ><img src="../assets/MiniIcon/location-icon.png" alt="email" />
                <p>{{ company.addr }}</p>
              </span>
            </div>
          </div>
          <div class="col-md-8 categories">
            <div v-for="(cat, idx) in categoies" :key="idx">
              <div v-if="idx % 3 == 0" class="row">
                <div class="col-4 category">
                  <router-link :to="categoies[idx].link" class="nav-link">{{
                    categoies[idx].name
                  }}</router-link>
                </div>

                <div v-if="idx + 1 < categoies.length" class="col-4 category">
                  <router-link :to="categoies[idx + 1].link" class="nav-link">{{
                    categoies[idx + 1].name
                  }}</router-link>
                </div>
                <div v-else class="col-4 category"></div>

                <div v-if="idx + 2 < categoies.length" class="col-4 category">
                  <router-link :to="categoies[idx + 2].link" class="nav-link">{{
                    categoies[idx + 2].name
                  }}</router-link>
                </div>
                <div v-else class="col-4 category"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" id="break-line-grandient"></div>
        <div class="row break-line"></div>

        <div class="row signature">
          <div class="col-lg-9 col-md-8 copyright">
            © 2023 Terrace Media. All Rights Reserved.
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 social-network">
            <div class="row">
              <div class="col social-icon">
                <span class="col">
                  <a
                    href="https://www.facebook.com/terracemedia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../assets/MiniIcon/bordered-icon-facebook.png"
                      alt="facebook"
                    />
                  </a>
                </span>
              </div>
              <div class="col social-icon">
                <span class="col">
                  <a
                    href="https://instagram.com/terracemedia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../assets/MiniIcon/bordered-icon-insta.png"
                      alt="instagram"
                    />
                  </a>
                </span>
              </div>
              <div class="col social-icon" v-if="false">
                <span class="col">
                  <a
                    href="https://zalo.me/0799721999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../assets/MiniIcon/bordered-icon-zalo.png"
                      alt="instagram"
                    />
                  </a>
                </span>
              </div>
              <div class="col social-icon">
                <span class="col"
                  ><a
                    href="https://www.youtube.com/@terracemedia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../assets/MiniIcon/bordered-icon-youtube.png"
                      alt="youtube"
                    /> </a
                ></span>
              </div>
              <div class="col social-icon">
                <span class="col">
                  <a
                    href="https://www.tiktok.com/@terrace.media"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../assets/MiniIcon/bordered-icon-tiktok.png"
                      alt="tiktok"
                    />
                  </a>
                </span>
              </div>
              <div class="col social-icon">
                <span class="col">
                  <a
                    href="https://twitter.com/terracemedia_co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../assets/MiniIcon/bordered-icon-twitter.png"
                      alt="twitter"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
export default {
  name: "PageFooter",

  data() {
    return {
      company: {
        email: "asdasd",
        phone: "asd",
        addr: "asd",
      },

      categoies: [
        {
          name: "Trang chủ",
          link: "/",
        },
        {
          name: "Giới thiệu",
          link: "/gioi-thieu",
        },
        {
          name: "Dịch vụ",
          link: "/dich-vu",
        },
        {
          name: "Quy trình",
          link: "/quy-trinh",
        },
        {
          name: "Sản phẩm",
          link: "/san-pham",
        },
        {
          name: "Tin tức",
          link: "/tin-tuc",
        },
        {
          name: "Liên hệ",
          link: "/lien-he",
        },
        {
          name: "Nghệ sĩ",
          link: "/nghe-si",
        },
        {
          name: "Phân bổ",
          link: "/phan-bo",
        },
        {
          name: "Điểu khoản dịch vụ",
          link: "/dieu-khoan-dich-vu",
        },
        {
          name: "Chính sách bảo mật",
          link: "/chinh-sach-bao-mat",
        },
      ],

      data: [],
    };
  },
  methods: {
    getAllBusiness() {
      axios
        .get("general/business/get")
        .then((result) => {
          this.data = result.data.data;
          this.data.forEach((element) => {
            switch (element.slug) {
              case "email":
                this.company.email = element.data;
                break;
              case "phone":
                this.company.phone = element.data;
                break;
              case "map":
                this.company.addr = element.data;
                break;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    this.getAllBusiness();
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  font-size: 14px;
  width: 100%;
  background: #0e1d34;

  .container-fluid {
    max-width: 1140px;
    margin: 0 auto;
    height: inherit;
    display: flex;
    justify-content: space-between;

    .container {
      .footer-body {
        display: flex;
        justify-content: space-between;
      }
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 0;
      color: white;
    }
  }
}

.company-info {
  padding-left: 0;

  .logo-container {
    margin-bottom: 1.5rem;
    .footer-logo {
      width: 193px;
    }
  }

  .row {
    flex-wrap: nowrap;
    margin-bottom: 1.5em;
    .col {
      display: inherit;
      flex-direction: row;
    }
    p {
      margin-left: 8px;
      margin-bottom: 0;
    }

    img {
      display: inherit;
      padding: 0;
      width: 20px;
      height: 20px;
    }
  }
}

.categories {
  .row {
    justify-content: space-between;
    margin: 20px 0px 20px 0px;
  }

  .category {
    width: 100px;
  }
}

#break-line-grandient {
  height: 1px;
  margin: 1px 0 1px 0;
  background: radial-gradient(
    circle,
    rgb(248, 248, 248) 0%,
    rgb(98, 98, 98) 100%
  );
}

.break-line {
  height: 1.5em;
}

.signature {
  .copyright {
    padding-left: 0px;
  }
  .social-network .social-icon span img {
    width: 32px;
  }
}
@media only screen and (max-width: 1025px) {
  .footer-container {
    padding: 20px;
  }
}

@media only screen and (max-width: 780px) {
  .signature {
    flex-direction: column;

    .social-network {
      margin-top: 1.5em;
    }
    .space-slot {
      display: none;
    }
  }
}

@media only screen and (max-width: 600px) {
  .footer-body,
  .signature {
    flex-direction: column;
  }
}

@media only screen and (max-width: 580px) {
  .footer-container {
    padding: 10px;
  }
  .social-icon {
    width: auto;
  }
}
</style>
