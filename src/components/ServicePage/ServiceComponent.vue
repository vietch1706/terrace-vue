<template>
  <div class="service-container">
    <div class="item-container">
      <div class="service-item left">
        <div class="service-img">
          <v-lazy-image :src="image1" alt="" />
        </div>
      </div>
      <div class="service-item right">
        <h2 class="service-title">Ký kết hợp đồng linh hoạt</h2>
        <p class="service-text">
          Chúng tôi cung cấp giải pháp ký hợp đồng điện tử nhanh chóng và thuận
          tiện, giúp đối tác có thể ký hợp đồng hợp tác với chúng tôi từ xa mọi
          lúc mọi nơi, giúp tiết kiệm thời gian và công sức mà giá trị pháp lý
          vẫn tương tự hợp đồng giấy truyền thống.
        </p>
      </div>
    </div>
    <div class="item-container row-reverse-container">
      <div class="service-item left">
        <div class="service-img">
          <v-lazy-image :src="image2" alt="" />
        </div>
      </div>
      <div class="service-item right">
        <h2 class="service-title">
          Dịch vụ phát hành, phân phối âm nhạc kỹ thuật số
        </h2>
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Phân phối sản phẩm âm nhạc của bạn tới hơn 200 nền tảng trên toàn
              thế giới như: Spotify, Apple Music, Zing Mp3, Nhaccuatui,
              Facebook, Tiktok,...
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Tốc độ phát hành nhanh chóng, xuất hiện trên các nền tảng trong
              vòng 48h.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Dịch vụ Youtube Content ID miễn phí giúp quản lý bản quyền trên
              Youtube và truy vết doanh thu, bạn sẽ được trả tiền ngay cả khi
              người khác sử dụng nhạc của bạn trong video Youtube của họ.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">Cung cấp mã UPC và ISRC miễn phí.</p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Công cụ tải lên lời bài hát, giúp lời bài hát của bạn trên các nền
              tảng chính xác hơn.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Tùy chỉnh ngày và khu vực bạn muốn phát hành.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Phân phối sản phẩm tới các hồ sơ sẵn có của bạn tại các nền tảng,
              tránh phân phối sai hồ sơ.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Khai thác tiềm năng kiếm tiền từ UGC, PGC trên Facebook,
              Instagram, Tiktok tối đa hóa doanh thu.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Thêm bài hát vào danh sách phát thịnh hành của chúng tôi trên các
              nền tảng, giúp sản phẩm dễ dàng tiếp cận khán giả.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Công cụ theo dõi dữ liệu và xu hướng hàng ngày.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Công cụ quản lý cho nghệ sĩ, ban nhạc, hãng thu âm, công ty quản
              lý và phát hành.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Xác minh tích nghệ sĩ: Spotify, Apple Music, Youtube, Amazon
              Music.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="item-container">
      <div class="service-item left">
        <div class="service-img">
          <v-lazy-image
            class="service-img"
            :src="image3"
            alt=""
            style="width: 80%"
          />
        </div>
      </div>
      <div class="service-item right">
        <h2 class="service-title">Dịch vụ truyền thông và tiếp thị sản phẩm</h2>
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Truyền thông hình ảnh, video, bài viết trên hệ thống mạng xã hội
              đa kênh: Facebook, Instagram, Youtube, Tiktok, Website,...của
              chúng tôi.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Chiến dịch tiếp thị trên các nền tảng nhạc số: Spotify, Apple
              Music, Itunes, Zing Mp3, Nhaccuatui,...
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Chiến dịch tiếp thị người ảnh hưởng trên các phương tiện truyền
              thông xã hội: Facebook, Instagram, Tiktok, Youtube, Twitter,...
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Tạo các hình ảnh truyền thông, ấn phẩm thành tích sản phẩm.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Quảng cáo Facebook, Google, Tiktok, Youtube và hợp tác truyền
              thông với các trang mạng, báo chí đẩy mạnh tiếp thị và tăng khả
              năng tiếp cận khán giả.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Quảng cáo danh sách phát Spotify, tạo luồng và tương tác với quảng
              cáo Apple Music, Amazon Music, Soundcloud,...
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Dịch vụ tạo smart link, landing page tích hợp phương tiện truyền
              thông giúp bạn chia sẻ sản phẩm âm nhạc trên các nền tảng của mình
              chỉ với 1 liên kết.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Hỗ trợ tìm kiếm, hợp tác với các nghệ sĩ khác có màu sắc âm nhạc
              tương tự trên website của chúng tôi, giúp nâng cao thương hiệu cá
              nhân của bạn và giúp sản phẩm của bạn tiếp cận những người hâm mộ
              mà bạn chưa từng tiếp cận trước đây.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Tổ chức phỏng vấn, viết blog đưa tin về sản phẩm khi chuẩn bị ra
              mắt.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Theo dõi, phân tích và cập nhật kết quả thường xuyên để đánh giá
              hiệu quả chiến dịch truyền thông.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="item-container row-reverse-container">
      <div class="service-item left">
        <div class="service-img">
          <v-lazy-image :src="image4" alt="" />
        </div>
      </div>
      <div class="service-item right">
        <h2 class="service-title">Dịch vụ kế toán, báo cáo doanh thu</h2>
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Phân tích, báo cáo doanh thu minh bạch hàng tháng theo từng sản
              phẩm, nghệ sĩ, nền tảng, quốc gia.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Công cụ chia sẻ tiền bản quyền nhiều cấp độ: nhà phân phối, công
              ty, hãng thu âm, nghệ sĩ, tác giả,....
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Phân tích, hiển thị doanh thu và tải xuống hóa đơn chi tiết.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Thanh toán doanh thu linh hoạt hàng tháng, quý, năm.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Ứng trước doanh thu cho các sản phẩm tiềm năng (dựa theo view, thứ
              hạng, thương hiệu,...) sau khi phát hành sản phẩm.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="item-container">
      <div class="service-item left">
        <div class="service-img">
          <v-lazy-image :src="image5" alt="" style="width: 90%" />
        </div>
      </div>
      <div class="service-item right">
        <h2 class="service-title">Dịch vụ sản xuất âm nhạc, MV, hình ảnh</h2>
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Dịch vụ sản xuất âm nhạc gồm studio sản xuất nhạc, phòng thu cùng
              với sự kết hợp của các Producer chuyên nghiệp giúp sản phẩm của
              bạn trở nên bắt tai và thu hút khán giả hơn.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Ekip quay dựng, lên kịch bản MV âm nhạc, hình ảnh chuyên nghiệp có
              nhiều kinh nghiệm, từng làm các MV nổi tiếng và được trang bị các
              trang thiết bị hiện đại giúp cho video của bạn trở nên sáng tạo và
              bắt kịp xu thế.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Sản xuất các hình ảnh, ấn phẩm truyền thông cho sản phẩm và nghệ
              sĩ, tạo các ẩn phẩm thành tích khi sản phẩm đạt thành tựu nổi bật.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Sản xuất video phỏng vấn, hậu trường, teaser trailer,...giúp tiếp
              thị sản phẩm tới khán giả trước khi ra mắt sản phẩm.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="item-container row-reverse-container">
      <div class="service-item left">
        <div class="service-img">
          <v-lazy-image :src="image6" alt="" />
        </div>
      </div>
      <div class="service-item right">
        <h2 class="service-title">
          Tư vấn, hỗ trợ, định hướng và kết nối với đối tác
        </h2>
        <ul class="item-col">
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Đội ngũ chuyên gia nhiều lĩnh vực như Composer, Songwriter,
              Producer,...có nhiều năm kinh nghiệm hỗ trợ tư vấn và hoàn thiện
              sản phẩm giúp chất lượng được nâng cao.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Tìm kiếm, hợp tác với các nhà tài trợ, đơn vị đồng hành hỗ trợ và
              đầu tư cho các sản phẩm tiềm năng.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Tư vấn và định hướng sản phẩm, lựa chọn các yếu tố và phong cách
              phù hợp với các chiến lược phát triển.
            </p>
          </li>
          <li class="item-row">
            <div class="music-note">
              <img
                src="./../../assets/SolutionComponent/ic-musicnote.png"
                alt=""
              />
            </div>
            <p class="service-text">
              Luôn đồng hành, hỗ trợ cho đối tác trong các dự án, đưa ra giải
              pháp kịp thời giúp đối tác yên tâm tạo ra các sản phẩm chất lượng
              tốt nhất.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import vLazyImage from "v-lazy-image";
import image1 from "@/assets/ServiceComponent/1.png";
import image2 from "@/assets/ServiceComponent/2.png";
import image3 from "@/assets/ServiceComponent/3.png";
import image4 from "@/assets/ServiceComponent/4.png";
import image5 from "@/assets/ServiceComponent/5.png";
import image6 from "@/assets/ServiceComponent/6.png";
export default {
  components: {
    vLazyImage,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      image6: image6,
    };
  },
};
</script>

<style lang="scss" scoped>
.service-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
}

.item-container {
  display: flex;
  padding: 60px 0;
  column-gap: 2%;
  .left {
    flex-basis: 40%;
  }
  .right {
    flex-basis: 60%;
  }
  .service-item {
    align-self: center;
    .service-title {
      color: #b6ff52;
      font-weight: 800;
      font-size: 36px;
    }
    .service-text {
      margin: 0;
      padding: 10px 0;
      color: #ffffff;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
    }
    .item-col {
      padding: 0;
      margin: 0;
      .item-row {
        display: flex;
        flex-wrap: nowrap;
        width: 90%;
        .music-note {
          padding: 10px 10px;
          flex-basis: 36px;
          img {
            width: 100%;
          }
        }
      }
    }
    .service-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}

.item-container.row-reverse-container {
  flex-direction: row-reverse;
}

@media screen and (max-width: 820px) {
  .service-container {
    max-width: unset;
    padding: 30px;
  }
  .item-container.row-reverse-container {
    flex-direction: column-reverse;
  }
  .item-container {
    flex-direction: column-reverse;
    padding: 30px 0;
    .left {
      flex: 1;
      flex-basis: unset;
      width: 100%;
      padding-top: 30px;
      text-align: center;
    }
    .right {
      flex: 1;
      flex-basis: unset;
      width: 100%;
      br {
        display: none;
      }
    }
    .service-item {
      align-self: center;
      .service-title {
        font-weight: 700;
        font-size: 25px;
      }
      .service-text {
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
}
</style>
