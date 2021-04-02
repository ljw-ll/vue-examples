<template>
  <div>
    <h1>v-if</h1>
    <p v-if="user.level >= 4">当前内容仅 level>=4 可见</p>
    <button type="button" @click="changelevel4">level=4</button>
    <button type="button" @click="changelevel3">level=3</button>
    <hr />
    <p>vue3.0，input组件默认不会被复用了</p>
    <button type="button" @click="changeInput">切换登录方式</button> <br />
    <template v-if="userNameLogin">
      <input type="text" placeholder="Enter you name" /> <br />
      <input type="password" placeholder="Enter you password" /> <br />
    </template>
    <template v-else>
      <input type="text" placeholder="Enter you KEY" /> <br />
    </template>

    <hr />
    <h1>v-show</h1>
    <button type="button" v-on:click="changeClose">切换</button>
    <!-- <button v-on:click="close = !close">切换</button> -->
    <p v-show="close">此内容仅close为true可见</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { User } from "@/datasource/Types";

export default defineComponent({
  setup() {
    const message = ref("hello world");
    const user = ref<User>({ name: "BO", level: 5 });
    const userNameLogin = ref(true);
    const close = ref(true);

    const changelevel4 = () => {
      user.value.level = 4;
    };
    const changelevel3 = () => {
      user.value.level = 3;
    };
    const changeInput = () => {
      userNameLogin.value = !userNameLogin.value;
    };
    const changeClose = () => {
      close.value = !close.value;
    };

    return {
      message,
      user,
      close,
      userNameLogin,
      changelevel4,
      changelevel3,
      changeInput,
      changeClose
    };
  }
});
</script>
