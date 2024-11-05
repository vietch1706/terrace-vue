<template>
  <div class="map-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="title-container">
      <h2>Phân phối âm nhạc trên toàn thế giới</h2>
    </div>
    <div class="img-container">
      <img src="./../../assets/AllotmentComponent/World Map.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.map-container {
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 60px;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .title-container {
    padding: 60px 0;
    h2 {
      color: #b6ff52;
      font-weight: 800;
      font-size: 36px;
      text-align: center;
    }
  }
  .img-container {
    width: 100%;
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 820px) {
  .map-container {
    padding-bottom: 30px;

    .title-container {
      padding: 30px;
      h2 {
        color: #b6ff52;
        font-weight: 700;
        font-size: 25px;
      }
    }
    .img-container {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
