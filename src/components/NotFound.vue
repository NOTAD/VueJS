<template>
  <div id="site-body" class="not-found-content content-pt">
    <div class="container text-center">
      <div class="title">Xin lỗi, nội dung bạn yêu cầu không tồn tại.</div>
      <router-link class="button-29 mt-5" to="/">Trở về trang chủ</router-link>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>