<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <TheHeader />
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from "@/components/layouts/TheHeader";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TheHeader
  }
}
</script>

<style>

</style>
