<template>
  <div class="contact-page" id="contact">
    <div class="contact-container">
      <div class="contact-flex">
        <div class="contact-item form-container">
          <div class="title">
            <h2>Liên hệ</h2>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <div class="row row-cols-1">
              <div class="col">
                <el-form-item prop="name">
                  <el-input
                    v-model="ruleForm.name"
                    placeholder="Họ và tên"
                    class="overwrite-form-item"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="col">
                <el-form-item prop="email">
                  <el-input
                    v-model="ruleForm.email"
                    placeholder="Email"
                    class="overwrite-form-item"
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-2 g-0 g-lg-3">
              <div class="col">
                <el-form-item prop="phone">
                  <el-input
                    v-model="ruleForm.phone"
                    placeholder="Số điện thoại"
                    class="overwrite-form-item"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="col">
                <el-form-item prop="country_id">
                  <el-select
                    v-model="ruleForm.country_id"
                    filterable
                    placeholder="Quốc gia"
                    class="overwrite-form-item"
                  >
                    <el-option
                      v-for="value in data.country"
                      :key="value.id"
                      :value="value.id"
                      :label="value.name"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <div class="row row-cols-1">
              <div class="col">
                <el-form-item prop="content">
                  <el-input
                    type="textarea"
                    v-model="ruleForm.content"
                    placeholder="Nội dung"
                    class="overwrite-form-item"
                    :autosize="{ minRows: 4, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="col">
                <el-form-item>
                  <el-button
                    class="overwrite-btn"
                    @click="submitForm('ruleForm')"
                    >Gửi</el-button
                  >
                </el-form-item>
              </div>
            </div>
          </el-form>
        </div>
        <div class="contact-item hide-image">
          <v-lazy-image :src="banner" alt="Terrace Media" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import VLazyImage from "v-lazy-image";
import banner from "@/assets/ContactComponent/Photo.png";
export default {
  components: {
    VLazyImage,
  },
  computed: {
    banner() {
      return banner;
    },
  },
  data() {
    var validatePhone = (rule, value, callback) => {
      const regex_phone = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
      if (!value.match(regex_phone)) {
        callback(new Error("Vui lòng nhập Số điện thoại"));
      } else {
        callback();
      }
    };

    return {
      data: {
        country: [],
      },
      ruleForm: {
        name: "",
        email: "",
        phone: "",
        country_id: null,
        content: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Vui lòng nhập Họ và Tên",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Tên quá ngắn",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Vui lòng nhập Email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Vui lòng nhập chính xác Email",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "Vui lòng nhập Số điện thoại",
            trigger: "blur",
          },
          {
            validator: validatePhone,
            trigger: "blur",
          },
        ],

        country_id: [
          {
            required: true,
            message: "Vui lòng chọn quốc gia",
            trigger: "change",
          },
        ],
        content: [
          {
            required: true,
            message: "Vui lòng nhập nội dung",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.postContactData();
          this.resetForm(formName);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    getAllCountry() {
      axios
        .get("general/country/get")
        .then((result) => {
          this.data.country = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    postContactData() {
      axios
        .post(`contact/post`, this.ruleForm)
        .then((result) => {
          this.notifySuccess(result.data.data.message);
        })
        .catch(() => {
          this.$notify.error({
            title: "Error",
            message: "Lỗi! Vui lòng liên hệ lại sau.",
          });
        });
    },

    notifySuccess(messageAPI) {
      this.$notify({
        title: "Success",
        message: messageAPI,
        type: "success",
      });
    },
  },
  async mounted() {
    this.getAllCountry();
  },
};
</script>

<style lang="scss">
.contact-container {
  max-width: 1140px;
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.08) 0%,
    rgba(250, 250, 250, 0.08) 100%
  );
  border: 1px solid #fafafa;
  margin: 0 auto;
  border-radius: 32px;
  padding: 30px;
  .contact-flex {
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
    .contact-item {
      width: 100%;
      img {
        width: 100%;
      }
      .title {
        h2 {
          font-size: 36px;
          font-weight: 800;
          color: #ffff;
        }
      }
    }
  }
  .flex-form-item {
    display: flex;
    justify-content: space-between;
  }
  .overwrite-form-item {
    width: 100%;
    .el-input__inner,
    .el-textarea__inner {
      background-color: transparent;
      color: #ffff;
    }
  }

  .overwrite-btn {
    width: 100%;
    background: #b6ff52;
    color: #000;
    font-weight: 700;
    line-height: 140%;
    font-size: 16px;
  }
}

.contact-page {
  width: 100%;
  padding: 64px 0;
}

@media screen and (max-width: 820px) {
  .contact-container {
    margin: 0 30px;
    padding: 40px;
    border-radius: 20px;
    .contact-flex {
      .contact-item {
        .title {
          h2 {
            font-size: 25px;
            font-weight: 700;
          }
        }
      }
      .hide-image {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .contact-container {
    padding: 20px;
  }
}
</style>
