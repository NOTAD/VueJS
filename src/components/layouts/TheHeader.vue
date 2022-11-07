<template>
  <div>
    <ul>
      <li>
        <a-button type="primary" @click="showDrawer">Drawer</a-button>
      </li>
      <li>
        <a href="/">Trang chủ</a>
      </li>

      <li>
        <a href="/login">Đăng nhập</a>
      </li>
      <li>
        <a href="/signup">Đăng ký</a>
      </li>
    </ul>
<!--    ..................................................-->
    <div>

      <a-drawer
          v-model:visible="visible"
          class="custom-class"
          placement="left"
          style="color: red"
          title="Danh mục"
      >
        <div>
        <a href="/">Trang chủ</a>
        <a href="/login">Đăng nhập</a>
        <p>Some contents3.</p>
        </div>
      </a-drawer>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    let visible = ref(false);

    const showDrawer = () => {
      if (visible.value == false) {
        visible.value = true;
      } else {
        visible = ref(false)
      }

    };

    return {
      visible,
      showDrawer,
    };
  },

})
// export default {
//   name: "TheHeader"
// }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #ffcbc1;

}
ul{
  text-align: center;
  height: 40px;
}
li{
  display: inline-block;
  margin: 0 10px;

}
</style>