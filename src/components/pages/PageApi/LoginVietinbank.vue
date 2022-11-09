<template>
  <div>
    <h3>Vui lòng đăng nhập tài khoản Vietinbank</h3>
    <div>
      <span>Tài khoản</span>
      <input v-model="account"  type="text" name="" id="" placeholder="Nhập tài khoản"/>
    </div>


    <router-view></router-view>
  </div>
</template>

<script>


// import axios from "axios";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.baseURL = 'https://laravel-9.sndn.repl.co/';
    // const test = () => {
    //   axios
    //       .get('/api/loginVTB')
    //       .then(function (response) {
    //         console.log(response)
    //       })
    //       .catch(function (error) {
    //         console.log(error)
    //       })
    // }

     export default {
       data() {
         return {
           account: ""
         }
       }
     }


</script>

<style scoped>

</style>