<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
// import axios from "axios";
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>
<style>

</style>
