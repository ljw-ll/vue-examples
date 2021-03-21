<template>
  <div>
    <p>支持保存组件实例，在组件从dom移除后缓存，再次加载时直接使用原实例</p>
    <button @click="change = !change">change登录方式</button>
    <br />
    <keep-alive> <namelogin v-if="change"/></keep-alive>
    <keep-alive> <emaillogin v-if="!change"/></keep-alive>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// import namelogin from "./login_name.vue";
// import emaillogin from "./login_email.vue";

import namelogin from "../example03/login_name.vue";
import emaillogin from "../example03/login_email.vue";

export default defineComponent({
  components: {
    namelogin,
    emaillogin
  },
  data: () => {
    return {
      change: true
    };
  }
});
</script>
