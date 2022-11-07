<template>
  <div>
    <h3>Đây là trang chủ của First Vue</h3>
    <router-link to="/listapibank">Danh sách Api</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home"
}
</script>

<style scoped>

</style>