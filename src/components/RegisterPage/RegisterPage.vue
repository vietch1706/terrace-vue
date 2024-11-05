<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-flex">
        <div class="register-item item-image">
          <img src="./../../assets/RegisterComponent/Hero Image.png" alt="" />
        </div>
        <div class="register-item">
          <div class="title">
            <h1>Đăng ký</h1>
          </div>
          <form-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormComponent from "./FormComponent.vue";

export default {
  components: {
    FormComponent,
  },
};
</script>

<style lang="scss" scoped>
.register-page {
  background: #071e42;
  padding: 64px 0;
}
.register-container {
  max-width: 1140px;
  margin: 0 auto;
  .register-flex {
    display: flex;
    align-items: center;
    flex: 1;
    .register-item {
      width: 100%;
      img {
        width: 100%;
      }
      .title {
        color: #b6ff52;
        display: block;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: -0.72px;
        padding-bottom: 40px;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .register-container {
    padding: 0 30px;
    .register-flex {
      flex-direction: column;
      .item-image {
        display: none;
      }
    }
  }
}
</style>
