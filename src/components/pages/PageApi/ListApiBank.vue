<template>
  <h3>Danh sách các API hiện tại chúng tôi bán bao gồm:</h3>
  <div class="list-div-bank">
    <h2>API Bank</h2>
  <router-link to=/formvietcombank>
    <a-button type="link">Vietcombank</a-button>
  </router-link>
  <router-link to="/formvietinbank">
    <a-button type="link">Vietinbank</a-button>
  </router-link>
  <router-link to="">
    <a-button type="link">Techcombank mới</a-button>
  </router-link>
  <router-link to="">
    <a-button type="link">BIDV</a-button>
  </router-link>
  <router-link to="">
    <a-button type="link">MB Bank</a-button>
  </router-link>
  <router-link to="">
    <a-button type="link">TP Bank</a-button>
  </router-link>
  <router-link to="">
    <a-button type="link">ACB</a-button>
  </router-link>
  </div>
  <div>
    <h2>API Ví điện tử</h2>
    <router-link to="">
      <a-button type="link">Momo</a-button>
    </router-link>
    <router-link to="">
      <a-button type="link">Zalo Pay</a-button>
    </router-link>
    <router-link to="">
      <a-button type="link">Viettel Pay</a-button>
    </router-link>
  </div>
  <h3>Mỗi api bao gồm: Đăng nhập, kiểm tra lịch sử giao, chuyển tiền</h3>
  <span>Đăng nhập và kiểm tra lịch sử giao dịch có thể thực hiện trong 1 lần request.</span>
  <br/>
  <span>Chuyển tiền sẽ cần lấy OTP từ thiết bị thật hoặc máy ảo. Có thể sử dụng Python để adb thiết bị và POST OTP vào webhook.</span>
  <br/>
  <span>Mã nguồn của API được viết bằng PHP</span>
  <h2>Giá của mỗi API là: 3.500.000đ. Bảo hành vĩnh viễn và hỗ trợ update mỗi khi ngân hàng thay đổi API.</h2>
</template>

<script>
export default {
  name: "ListApiBank"
}
</script>

<style scoped>

</style>