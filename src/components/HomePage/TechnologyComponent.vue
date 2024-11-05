<template>
  <div class="technology-container">
    <div class="line">
      <img src="./../../assets/Divider.png" alt="" />
    </div>
    <div class="technology-content">
      <h2>Công nghệ và tiện ích</h2>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/TechnologyComponent/1.png" alt="" />
            </div>
            <div class="title-content">
              <h3>Giải pháp sản xuất</h3>
            </div>
            <div class="data-content">
              <p>
                Cung cấp giải pháp sản xuất gồm studio sản xuất âm nhạc, ekip
                làm MV và hình ảnh chuyên nghiệp được trang bị các thiết bị máy
                móc hiện đại. Ngoài ra chúng tôi còn có đội ngũ chuyên gia ở
                nhiều lĩnh vực như composer, songwriter, producer,...hỗ trợ cho
                sản phẩm của đối tác được hoàn thiện hơn.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/TechnologyComponent/2.png" alt="" />
            </div>
            <div class="title-content">
              <h3>Giải pháp phân phối</h3>
            </div>
            <div class="data-content">
              <p>
                Cung cấp giải pháp phân phối âm nhạc tới các nhà cung cấp dịch
                vụ kỹ thuật số (DSP) trên khắp thế giới, giúp sản phẩm tiếp cận
                hàng triệu khán giả trong vòng 48h ở bất kỳ đâu.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/TechnologyComponent/3.png" alt="" />
            </div>
            <div class="title-content">
              <h3>Giải pháp tiếp thị</h3>
            </div>
            <div class="data-content">
              <p>
                chúng tôi hợp tác với các công ty truyền thông âm nhạc hàng đầu,
                cung cấp giải pháp truyền thông trên hệ thống mạng đa kênh:
                fanpage Facebook, kênh Youtube, kênh Tiktok, Website,...dịch vụ
                tiếp thị trên các nền tảng: Spotify, Apple Music, Zing Mp3,
                Nhaccuatui,...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/TechnologyComponent/4.png" alt="" />
            </div>
            <div class="title-content">
              <h3>Quản lý dữ liệu, phân tích và báo cáo doanh thu</h3>
            </div>
            <div class="data-content">
              <p>
                Bảng điều khiển tích hợp báo cáo doanh thu và quản lý danh mục
                bài hát của bạn, theo dõi danh mục hoạt động thế nào thông qua
                công cụ phân tích, có thể theo dõi dữ liệu và báo cáo doanh thu
                hàng ngày, từng sản phẩm, từng nền tảng, từng lãnh thổ.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/TechnologyComponent/5.png" alt="" />
            </div>
            <div class="title-content">
              <h3>Luôn kết nối với đối tác</h3>
            </div>
            <div class="data-content">
              <p>
                Chúng tôi luôn kết nối và hỗ trợ đối tác nhanh chóng, giúp mọi
                người dễ dàng tiếp cận với không gian nhạc số cho dù là người
                mới, giúp các đối tác có trải nghiệm tốt và suôn sẻ hơn.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-4 content-container">
            <div class="icon-content">
              <img src="./../../assets/TechnologyComponent/6.png" alt="" />
            </div>
            <div class="title-content">
              <h3>Cập nhật tin tức mới</h3>
            </div>
            <div class="data-content">
              <p>
                Chúng tôi luôn cập nhật những tin tức và xu hướng âm nhạc thịnh
                hành, đồng thời cũng chia sẻ các bài viết, tài liệu hay và có
                giá trị trong ngành âm nhạc của những người có chuyên môn cao,
                giúp xây dựng cộng đồng âm nhạc ngày càng phát triển.
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
  padding-bottom: 60px;
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
      font-weight: 800;
      font-size: 36px;
      color: #b6ff52;
    }
  }
  .content-container {
    min-height: 340px;
    background: linear-gradient(
      92.98deg,
      rgba(255, 255, 255, 0.112) 0%,
      rgba(255, 255, 255, 0.064) 100%
    );
    border-radius: 20px;
    color: #ffffff;
    padding: 32px;
    .icon-content {
      padding-bottom: 20px;
      img {
        width: 32px;
        height: 32px;
      }
    }
    .title-content {
      h3 {
        font-weight: 600;
        font-size: 22px;
      }
    }

    .data-content {
      p {
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .technology-container {
    padding-bottom: 30px;
    .line {
      img {
        height: 1px;
      }
    }

    .technology-content {
      padding: 30px;
      h2 {
        font-weight: 700;
        font-size: 25px;
      }
    }
    .content-container {
      min-height: unset;
      height: fit-content;
    }
  }
}
</style>
