<template>
  <div class="address-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="address-flex">
      <div class="item-left">
        <div class="title-container">
          <h2>Thông tin liên hệ</h2>
        </div>
        <div class="content-container">
          <div class="content-item" v-if="email">
            <span
              ><img src="./../../assets/MiniIcon/email-icon.png" alt="" />
            </span>
            <p>{{ email.data }}</p>
          </div>
          <div class="content-item" v-if="phone">
            <span
              ><img src="./../../assets/MiniIcon/call-icon.png" alt="" />
            </span>
            <p>{{ phone.data }}</p>
          </div>
          <div class="content-item" v-if="map">
            <span
              ><img src="./../../assets/MiniIcon/location-icon.png" alt="" />
            </span>
            <p>{{ map.data }}</p>
          </div>
          <div class="content-item social-container">
            <a
              href="https://www.facebook.com/terracemedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/MiniIcon/bordered-icon-facebook.png"
                alt="facebook"
              />
            </a>
            <a
              href="https://instagram.com/terracemedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/MiniIcon/bordered-icon-insta.png"
                alt="instagram"
              />
            </a>
            <a
              v-if="false"
              href="https://zalo.me/0799721999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/MiniIcon/bordered-icon-zalo.png"
                alt="instagram"
              />
            </a>
            <a
              href="https://www.youtube.com/@terracemedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/MiniIcon/bordered-icon-youtube.png"
                alt="youtube"
              />
            </a>
            <a
              href="https://www.tiktok.com/@terrace.media"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/MiniIcon/bordered-icon-tiktok.png"
                alt="tiktok"
              />
            </a>
            <a
              href="https://twitter.com/terracemedia_co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/MiniIcon/bordered-icon-twitter.png"
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="item-right" v-if="map" v-html="map.url"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: null,
      email: null,
      map: null,
      slugPhone: "phone",
      slugEmail: "email",
      slugAddress: "map",
    };
  },
  methods: {
    async getAllBusiness() {
      await axios
        .get("general/business/get")
        .then((result) => {
          result.data.data.forEach((element) => {
            switch (element.slug) {
              case this.slugPhone:
                this.phone = element;
                break;
              case this.slugEmail:
                this.email = element;
                break;
              case this.slugAddress:
                this.map = element;
                break;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async created() {
    await this.getAllBusiness();
  },
};
</script>

<style lang="scss" scoped>
.address-container {
  max-width: 1140px;
  margin: 0 auto;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .address-flex {
    display: flex;
    padding: 120px 0;
    .item-left {
      flex: 0.35;
      .content-container {
        .content-item {
          padding-bottom: 20px;
          display: flex;
          width: 80%;
          p {
            color: #d9dbe1;
            display: inline-block;
            font-size: 16px;
            font-weight: 500;
          }
          img {
            max-width: 30px;
            max-height: 30px;
            padding-right: 8px;
          }
        }

        .social-container {
          width: 80%;
          display: flex;
          justify-content: space-between;
          a {
            display: block;
            img {
              max-width: 50px;
              max-height: 50px;
            }
          }
        }
      }
    }

    .item-right {
      flex: 0.65;
      width: 100%;
    }
  }
}

.title-container {
  padding: unset;
  padding-bottom: 30px;
  text-align: left;
  h2 {
    display: inline-block;
    width: 80%;
    font-weight: 800;
    font-size: 36px;
    color: #b6ff52;
  }
}

@media screen and (max-width: 820px) {
  .address-container {
    padding: unset;
    .line {
      img {
        height: 1px;
      }
    }
    .address-flex {
      padding: 30px;
      flex-direction: column;
      .item-left {
        flex: 1;
        .content-container {
          .content-item {
            padding-bottom: 10px;
            width: 100%;
            p {
              font-size: 14px;
              font-weight: 500;
            }
          }

          .social-container {
            width: 100%;
          }
        }
      }

      .item-right {
        flex: 1;
        width: 100%;
      }
    }
  }
  .title-container {
    padding-bottom: 20px;
    h2 {
      width: 100%;
      font-weight: 700;
      font-size: 25px;
    }
  }
}
</style>
