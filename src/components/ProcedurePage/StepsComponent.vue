<template>
  <div class="steps-container">
    <div class="item-container">
      <div class="steps-item right">
        <h2 class="steps-title">Hoàn thành sản phẩm</h2>
        <p class="steps-text">
          Bạn đang sở hữu các sản phẩm âm nhạc đầy tiềm năng <br />
          nhưng chưa biết làm sao để tối ưu quá trình sản xuất và <br />
          phát hành trên các nền tảng nhạc số. Vì vậy, chúng tôi sẵn <br />
          sàng cung cấp các giải pháp tối ưu nhất cho bạn. Dù bạn <br />
          đang ở giai đoạn sáng tác, sản xuất, thu âm, làm MV hay <br />
          hình ảnh, chúng tôi sẽ hỗ trợ bạn với những ý tưởng sáng <br />
          tạo và chuyên nghiệp. Hãy liên hệ với chúng tôi qua các <br />
          kênh thông tin để được tư vấn miễn phí và trải nghiệm dịch <br />
          vụ chất lượng.
        </p>
      </div>
      <div class="steps-item left">
        <div class="steps-img">
          <v-lazy-image :src="image1" alt="" />
        </div>
      </div>
    </div>
    <div class="item-container row-reverse-container">
      <div class="steps-item right">
        <h2 class="steps-title">Đăng ký tài khoản</h2>
        <p class="steps-text">
          Sau khi hoàn thành sản phẩm của mình, bạn có thể đăng ký <br />
          tài khoản miễn phí trên website của chúng tôi hoặc liên hệ <br />
          trực tiếp với chúng tôi để được cấp tài khoản. Để đảm bảo <br />
          quá trình đăng ký tài khoản của bạn được thuận tiện và <br />
          nhanh chóng, vui lòng cung cấp đầy đủ và chính xác thông <br />
          tin trong các mục yêu cầu của chúng tôi. Tài khoản của bạn <br />
          sẽ cung cấp cho bạn quyền truy cập vào các dịch vụ và <br />
          công cụ của chúng tôi để quản lý và phát hành sản phẩm <br />
          của bạn trên các nền tảng nhạc số hàng đầu.
        </p>
        <router-link to="/dang-ky">
          <button type="button" class="btn btn-product">Đăng ký ngay</button>
        </router-link>
      </div>
      <div class="steps-item left">
        <div class="steps-img">
          <v-lazy-image :src="image2" alt="" />
        </div>
      </div>
    </div>
    <div class="item-container">
      <div class="steps-item right">
        <h2 class="steps-title">Tải lên sản phẩm</h2>
        <p class="steps-text">
          Sau khi có tài khoản, bạn có thể tải lên sản phẩm của mình <br />
          lên hệ thống của chúng tôi. Chúng tôi yêu cầu
          <span class="mark-up"
            >file nhạc <br />
            định dạng .wav
          </span>
          và <span class="mark-up">hình ảnh có kích thước từ 1440x1440 </span>
          <br />
          trở lên. Nếu bạn gặp khó khăn trong quá trình tải lên, hãy <br />
          liên hệ với chúng tôi để được hướng dẫn hoặc để chúng tôi <br />
          hỗ trợ phát hành sản phẩm của bạn. Chúng tôi cam kết đảm <br />
          bảo quy trình tải lên sản phẩm của bạn được thuận tiện và <br />
          đơn giản nhất.
        </p>
      </div>
      <div class="steps-item left">
        <div class="steps-img">
          <v-lazy-image :src="image3" alt="" />
        </div>
      </div>
    </div>
    <div class="item-container row-reverse-container">
      <div class="steps-item right">
        <h2 class="steps-title">Lựa chọn thuộc tính phát hành</h2>
        <p class="steps-text">
          Khi tải lên sản phẩm, bạn có thể lựa chọn các thuộc tính cho <br />
          sản phẩm của mình như tên sản phẩm, nghệ sĩ, tác giả, thể <br />
          loại, ngày và năm phát hành, mã UPC và ISRC có sẵn hoặc <br />
          chỉ định, các nền tảng bạn muốn sản phẩm của mình xuất <br />
          hiện, và nhiều thuộc tính khác. Bằng cách lựa chọn các <br />
          thuộc tính phù hợp cho sản phẩm của bạn, bạn có thể giúp <br />
          sản phẩm của mình được tìm thấy và được phát hành trên <br />
          các nền tảng nhạc số hàng đầu.
        </p>
      </div>
      <div class="steps-item left">
        <div class="steps-img">
          <v-lazy-image :src="image4" alt="" />
        </div>
      </div>
    </div>
    <div class="item-container">
      <div class="steps-item right">
        <h2 class="steps-title">Kiểm duyệt sản phẩm</h2>
        <p class="steps-text">
          Sau khi bạn tải lên sản phẩm, bộ phận kiểm duyệt của <br />
          chúng tôi cần đảm bảo rằng sản phẩm của bạn có đầy <br />
          đủ bản quyền hoặc giấy phép hợp lệ đối với các sản <br />
          phẩm phái sinh từ tác giả, chủ sở hữu bản quyền. Sau <br />
          đó, chúng tôi sẽ phân phối sản phẩm của bạn tới các <br />
          nền tảng âm nhạc kĩ thuật số trên toàn thế giới.
        </p>
      </div>
      <div class="steps-item left">
        <div class="steps-img">
          <v-lazy-image :src="image5" alt="" />
        </div>
      </div>
    </div>
    <div class="item-container row-reverse-container">
      <div class="steps-item right">
        <h2 class="steps-title">Truyền thông sản phẩm</h2>
        <p class="steps-text">
          Khi phát hành sản phẩm của bạn, chúng tôi sẽ triển khai các <br />
          chiến dịch truyền thông trên các trang mạng xã hội và trên <br />
          các nền tảng phát trực tuyến hàng đầu như Spotify, Apple <br />
          Music, Nhaccuatui, Zing MP3, và nhiều nền tảng khác.<br />
          Chúng tôi cam kết đưa sản phẩm của bạn đến với đông đảo <br />
          khán giả một cách nhanh chóng và hiệu quả nhất. Để truyền <br />
          thông đạt hiệu quả tốt nhất, bạn nên gửi sản phẩm cho <br />
          chúng tôi trước vài ngày so với ngày dự kiến phát hành để <br />
          chúng tôi có thể tối ưu hoá các chiến dịch truyền thông, lưu <br />
          trước sản phẩm và có kế hoạch để tiếp thị tới khán giả.
        </p>
      </div>
      <div class="steps-item left">
        <div class="steps-img">
          <v-lazy-image :src="image6" alt="" />
        </div>
      </div>
    </div>
    <div class="item-container">
      <div class="steps-item right">
        <h2 class="steps-title">Nhận báo cáo doanh thu</h2>
        <p class="steps-text">
          Chúng tôi cung cấp các công cụ tiện ích giúp theo dõi mức <br />
          độ tăng trưởng sản phẩm, phân tích và báo cáo doanh thu <br />
          một cách minh bạch và đầy đủ nhất. Mỗi khi sản phẩm của <br />
          bạn có lượt nghe, lượt tải xuống, lượt xem quảng cáo,... thì <br />
          đều tạo ra doanh thu và chúng tôi sẽ chi trả doanh thu đó <br />
          cho bạn. Việc chi trả và tỉ lệ doanh thu sẽ được thống nhất <br />
          và trao đổi thông qua hợp đồng hợp tác giữa hai bên. <br />
          Thường sau 90 ngày kể từ khi phát hành sản phẩm, bạn sẽ <br />
          nhận được doanh thu lần đầu tiên và sau đó là định kỳ hàng <br />
          tháng. Chúng tôi cam kết cung cấp cho bạn các báo cáo chi <br />
          tiết về doanh thu, số lượng người nghe, tải xuống, và xem <br />
          quảng cáo để bạn có thể theo dõi tình trạng phát triển sản <br />
          phẩm của mình. Chúng tôi sử dụng các công nghệ tiên tiến <br />
          và các quy trình xử lý đáng tin cậy để đảm bảo việc chi trả <br />
          đúng và đầy đủ cho bạn. Chúng tôi luôn đặt sự minh bạch và <br />
          trung thực lên hàng đầu để đảm bảo quyền lợi của bạn được <br />
          bảo vệ.
        </p>
      </div>
      <div class="steps-item left">
        <div class="steps-img">
          <v-lazy-image :src="image7" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vLazyImage from "v-lazy-image";
import image1 from "@/assets/StepsComponent/1.png";
import image2 from "@/assets/StepsComponent/2.png";
import image3 from "@/assets/StepsComponent/3.png";
import image4 from "@/assets/StepsComponent/4.png";
import image5 from "@/assets/StepsComponent/5.png";
import image6 from "@/assets/StepsComponent/6.png";
import image7 from "@/assets/StepsComponent/7.png";
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
      image7: image7,
    };
  },
};
</script>

<style lang="scss" scoped>
.steps-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
}
.item-container {
  display: flex;
  padding: 60px 0;
  column-gap: 10%;
  .left {
    flex-basis: 50%;
  }
  .right {
    flex-basis: 50%;
  }
  .steps-item {
    align-self: center;
    .steps-title {
      color: #b6ff52;
      font-weight: 800;
      font-size: 36px;
    }
    .steps-text {
      margin: 0;
      padding: 10px 0;
      color: #ffffff;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      .mark-up {
        font-weight: 700;
      }
    }
    .steps-img {
      width: 100%;
      img {
        width: 95%;
      }
    }
  }
  .btn-product {
    background: #b6ff52;
    font-weight: 800;
    margin: 12px 0;
    padding: 12px 16px;
  }
}
.item-container.row-reverse-container {
  flex-direction: row-reverse;
}
@media screen and (max-width: 820px) {
  .steps-container {
    max-width: unset;
    padding: 30px;
  }
  .item-container.row-reverse-container {
    flex-direction: column;
  }
  .item-container {
    flex-direction: column;
    .left {
      flex-basis: unset;
      flex: 1;
      width: 100%;
    }
    .right {
      flex-basis: unset;
      flex: 1;
      width: 100%;
      padding-bottom: 50px;
      br {
        display: none;
      }
    }
    .steps-item {
      .steps-title {
        font-weight: 800;
        font-size: 25px;
      }
      .steps-text {
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
}
</style>
