<template>
  <div class="process-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="process-tile">
      <h2>Quy trình phát hành sản phẩm</h2>
    </div>
    <div class="process-content">
      <div class="process-pc">
        <img src="./../../assets/ProcessComponent/Quy trinhf.png" alt="" />
      </div>

      <div class="process-mobile">
        <div class="process-item">
          <img src="@/assets/ProcessComponent/1.png" alt="" />
        </div>
        <div class="process-item">
          <img src="@/assets/ProcessComponent/2.png" alt="" />
        </div>
        <div class="process-item">
          <img src="@/assets/ProcessComponent/3.png" alt="" />
        </div>
        <div class="process-item">
          <img src="@/assets/ProcessComponent/4.png" alt="" />
        </div>
        <div class="process-item">
          <img src="@/assets/ProcessComponent/5.png" alt="" />
        </div>
        <div class="process-item">
          <img src="@/assets/ProcessComponent/6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.process-container {
  max-width: 1140px;
  margin: 0 auto;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .process-tile {
    padding: 60px 0;
    text-align: center;
    h2 {
      display: inline-block;
      width: 70%;
      font-weight: 800;
      font-size: 36px;
      color: #b6ff52;
    }
  }

  .process-content {
    width: 100%;
    .process-pc {
      width: 100%;
      img {
        width: 100%;
      }
    }

    .process-mobile {
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  .process-container {
    padding-bottom: 30px;
    .line {
      img {
        height: 1px;
      }
    }

    .process-tile {
      padding: 30px;
      text-align: center;
      h2 {
        display: inline-block;
        width: 100%;
        font-weight: 700;
        font-size: 25px;
      }
    }
    .process-content {
      .process-pc {
        display: none;
      }

      .process-mobile {
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        .process-item {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
