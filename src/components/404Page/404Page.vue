<template>
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>

            <div class="contant_box_404">
              <h3 class="h2">Có vẻ như bạn đã bị lạc</h3>

              <p>Trang bạn tìm kiếm không tồn tại</p>

              <router-link class="link_404" to="/">
                Quay về Trang chủ
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.backhome();
  },
  methods: {
    backhome() {
      setTimeout(() => {
        this.$router.push({ name: "homePage" });
      }, 5000);
    },
  },
};
</script>
<style lang="scss" scoped>
/*======================
    404 page
=======================*/

.page_404 {
  padding: 40px 0;
  margin: 0 auto;
  max-width: 1140px;
  background: #ffff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  margin: 0 auto;
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
