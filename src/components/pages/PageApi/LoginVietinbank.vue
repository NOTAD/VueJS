<template>
  <div>
    <h3>Vui lòng đăng nhập tài khoản Vietinbank</h3>
    <div>
      <span>Username</span>
      <input v-model="account"  type="text" name="" id="" placeholder="Nhập tài khoản"/>
      <br/>
      <span>Password</span>
      <input v-model="password" type="text" name="" id="" placeholder="Nhap mat khau"/>
      <br/>
      <span>STK</span>
      <input v-model="stk" type="text" name="" id="" placeholder="Nhap stk">
      <br/>
      <button type="button" @click="submit_form">Submit</button>
    </div>
    <div>
      <span>{{ketqua}}</span>
    </div>


    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = 'https://beapp.notad.io/';

     export default {
       data() {
         return {
           account: "",
           password: "",
           stk: "",
           ketqua: "Chờ data"

         }
       },
       methods: {
         submit_form: function () {
           // let submit_data = {
           //   'a': this.account,
           //   'b': this.password
           // }
           let dataAcount = this.account
           let dataPassword = this.password
           let dataStk = this.stk

           console.log(dataPassword, dataAcount)
           axios
               .get('api/loginVTB?username=' + dataAcount + '&password=' + dataPassword + '&acc=' + dataStk)
               .then(function (response) {
                this.ketqua = response
                 console.log(response)
               })
               .catch(function (error) {
                 console.log(error)
               })
         },
         changeData: function () {
           this.ketqua = "Đang chờ response"
         }
       }
     }


</script>

<style scoped>

</style>