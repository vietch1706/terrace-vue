<template>
  <div class="technology-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="technology-content">
      <h2>Chính sách truyền thông, tiếp thị sản phẩm</h2>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/MediaComponent/1.png" alt="" />
            </div>
            <div class="data-content">
              <p>
                Cung cấp giải pháp truyền thông trên hệ thống mạng xã hội đa
                kênh: Facebook, Youtube, Tiktok, Website,...của công ty Terrace
                Media.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/MediaComponent/2.png" alt="" />
            </div>
            <div class="data-content">
              <p>
                Dịch vụ tiếp thị trên các nền tảng: Spotify, Apple Music,
                Itunes, Zing Mp3, Nhaccuatui,...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/MediaComponent/3.png" alt="" />
            </div>
            <div class="data-content">
              <p>
                Hỗ trợ tạo các hình ảnh truyền thông, ấn phẩm thành tích sản
                phẩm (nếu có)
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/MediaComponent/4.png" alt="" />
            </div>
            <div class="data-content">
              <p>
                Xây dựng Landing page cho từng sản phẩm, tích hợp các nền tảng
                truyền thông.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/MediaComponent/5.png" alt="" />
            </div>
            <div class="data-content">
              <p>
                Tổ chức phỏng vấn, viết blog đưa tin về sản phẩm khi chuẩn bị ra
                mắt.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/MediaComponent/6.png" alt="" />
            </div>
            <div class="data-content">
              <p>
                Công cụ theo dõi và phân tích, cập nhật kết quả thường xuyên để
                đánh giá hiệu quả chiến dịch truyền thông,...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.technology-container {
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 64px;
  .line {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .technology-content {
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
  .content-container {
    min-height: 250px;
    background: linear-gradient(
      92.98deg,
      rgba(255, 255, 255, 0.112) 0%,
      rgba(255, 255, 255, 0.064) 100%
    );
    border-radius: 20px;
    color: #ffffff;
    padding: 32px;
    .icon-content {
      padding-bottom: 55px;
      img {
        width: 32px;
        height: 32px;
      }
    }
    .data-content {
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
}
</style>
