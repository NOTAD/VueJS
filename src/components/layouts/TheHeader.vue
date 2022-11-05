<template>
  <div>
    <ul>
      <li>
        <a href="/">Trang chủ</a>
      </li>

      <li>
        <a href="/login">Đăng nhap</a>
      </li>
      <li>
        <a href="/signin">Dang ky</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #ffcbc1;

}
li{
  display: inline-block;
  margin: 0 10px;
}
</style>