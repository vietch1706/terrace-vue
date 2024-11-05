<template>
  <div class="form-container">
    <el-form
      :model="data.user"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        <div class="col">
          <el-form-item prop="name">
            <template label="scope">
              <label class="overwrite-label-register">
                Họ và tên
                <span class="required">*</span>
              </label>
            </template>
            <el-input
              v-model="data.user.name"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
        <div class="col">
          <el-form-item prop="email">
            <template label="scope">
              <label class="overwrite-label-register">
                Email
                <span class="required">*</span>
              </label>
            </template>
            <el-input
              v-model="data.user.email"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        <div class="col">
          <el-form-item prop="phone">
            <template label="scope">
              <label class="overwrite-label-register"> Số điện thoại </label>
            </template>
            <el-input
              v-model="data.user.phone"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
        <div class="col">
          <el-form-item prop="website">
            <template label="scope">
              <label class="overwrite-label-register"> Website </label>
            </template>
            <el-input
              v-model="data.user.website"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        <div class="col">
          <el-form-item prop="social_url">
            <template label="scope">
              <label class="overwrite-label-register">
                URL <i class="fa-brands fa-square-facebook fa-beat fa-xl"></i> /
                <i class="fa-brands fa-square-instagram fa-beat fa-xl"></i> /
                <i class="fa-brands fa-square-twitter fa-beat fa-xl"></i>
                của bạn
                <span class="required">*</span>
              </label>
            </template>
            <el-input
              v-model="data.user.social_url"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
        <div class="col">
          <el-form-item prop="youtube_url">
            <template label="scope">
              <label class="overwrite-label-register">
                URL <i class="fa-brands fa-square-youtube fa-beat fa-xl"></i> /
                <i class="fa-brands fa-spotify fa-beat fa-xl"></i> /
                <i class="fa-brands fa-soundcloud fa-beat fa-xl"></i> của bạn
                <span class="required">*</span>
              </label>
            </template>
            <el-input
              v-model="data.user.youtube_url"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="col">
        <el-form-item prop="music_link">
          <template label="scope">
            <label class="overwrite-label-register">
              Liên kết đến bài hát demo của bạn <span class="required">*</span>
            </label>
          </template>
          <el-input
            v-model="data.user.music_link"
            class="overwrite-form-item-register"
          ></el-input>
        </el-form-item>
      </div>

      <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        <div class="col">
          <el-form-item prop="nation">
            <template label="scope">
              <label class="overwrite-label-register">
                Quốc gia
                <span class="required">*</span>
              </label>
            </template>
            <el-select
              v-model="data.user.nation"
              filterable
              class="overwrite-form-item-register"
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
        <div class="col">
          <el-form-item prop="organization">
            <template label="scope">
              <label class="overwrite-label-register">
                Bạn là
                <span class="required">*</span>
              </label>
            </template>
            <el-select
              v-model="data.user.organization"
              filterable
              class="overwrite-form-item-register"
            >
              <el-option
                v-for="value in data.organization"
                :key="value.id"
                :value="value.id"
                :label="value.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="col">
        <el-form-item>
          <template label="scope">
            <label class="overwrite-label-register">
              Thể loại nhạc chính
            </label>
          </template>
          <el-input
            v-model="data.user.type"
            class="overwrite-form-item-register"
          ></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <button
          v-if="loading === false"
          type="button"
          class="btn-overwrite"
          @click="submitForm('ruleForm')"
        >
          Đăng ký
        </button>
        <button v-else type="button" class="btn-overwrite">
          <div class="d-flex justify-content-center add-padding">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        organization: [],
        country: [],
        user: {
          name: "",
          email: "",
          phone: "",
          website: "",
          social_url: "",
          youtube_url: "",
          music_link: "",
          nation: null,
          organization: null,
          type: "",
        },
      },
      loading: false,
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
        social_url: [
          {
            required: true,
            message: "Vui lòng nhập URL Facebook/Instagram/Twitter của bạn",
            trigger: "blur",
          },
        ],
        youtube_url: [
          {
            required: true,
            message: "Vui lòng nhập URL YouTube/ Spotify/SoundCloud của bạn",
            trigger: "blur",
          },
        ],
        music_link: [
          {
            required: true,
            message: "Vui lòng nhập Liên kết đến bài hát của bạn",
            trigger: "blur",
          },
        ],
        nation: [
          {
            // required: true,
            message: "Vui lòng chọn quốc gia",
            trigger: "change",
          },
        ],
        organization: [
          {
            // required: true,
            message: "Vui lòng chọn bạn là ai?",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          axios
            .post(`user/register`, this.data.user)
            .then((result) => {
              this.resetForm(formName);
              this.notifySuccess(result.data.data.message);
            })
            .catch((err) => {
              console.log(err);
              this.$notify.error({
                title: "Error",
                message: err.response.data.message,
              });
            })
            .finally(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getAllOrganization() {
      axios
        .get("general/organization/get")
        .then((result) => {
          this.data.organization = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
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

    notifySuccess(messageAPI) {
      this.$notify({
        title: "Thành Công",
        message: messageAPI,
        type: "success",
      });
    },
  },
  async mounted() {
    this.getAllOrganization();
    this.getAllCountry();
  },
};
</script>

<style lang="scss">
.overwrite-label-register {
  color: #ffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

.btn-overwrite {
  color: #162945;
  border: transparent;
  font-weight: 700;
  font-size: 15px;
  width: 100%;
  background-color: #b6ff52;
  border-radius: 4px;
}

.overwrite-form-item-register {
  width: 100%;
  .el-input__inner,
  .el-textarea__inner {
    padding: 0.5rem 0.75rem;
    background: rgba(255, 255, 255, 0.08);
    gap: 12px;
    align-self: stretch;
    color: #ffff;
    outline: none;
    border: none;
  }
}

select option {
  background: #162945;
  color: #ffff;
  padding: 10px 0;
}

.required {
  display: inline-block;
  color: #e22b30;
}

.add-padding {
  padding: 4px 0;
}
</style>
