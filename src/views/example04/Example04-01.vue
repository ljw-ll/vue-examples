<template>
  <div>
    <h1>composition-api</h1>
    <p>
      基于composition-api重写example02实例
      <br />
      <a href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html">
        什么是组合式 API？
      </a>
    </p>
    <hr />
    <h1>ref()</h1>
    <p>
      ref()函数，支持基本数据类型/数组/对象/数据转为响应式数据，
      在TS中通过value属性获取/修改，在视图模板直接使用自动拆箱。
    </p>
    <p>
      messageRef为响应式属性，即当其封装的数据改变时，动态响应式改变。
      <br />
      msgRef: {{ msgRef }}
    </p>
    <br />
    用户： {{ userRef?.name }} {{ userRef?.insertTime }} <br />
    用户： {{ user.name }} {{ user.insertTime }} <br />
    <button @click="changeUserRef">changeUserRef</button>
    <p>直接改变源对象 不能实现响应式 数据</p>
    <button @click="changeUser">changeUser</button>
    <hr />
    <h1>computed()</h1>
    <p>
      computed()函数。声明计算属性，当user对象改变时，重新计算user中inserttime属性值
      <br />
      {{ UserComputed }}
    </p>
    <hr />
    <h1>watch()</h1>
    <p>
      watch()函数，用以在响应式数据改变时执行操作(允许执行异步操作)
      <br />
      watch()函数包含2个参数，被监听的响应式属性(Ref对象)，传入new/old值的监听回调函数
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { User } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const msgRef = ref("hello ref() ");
    const user: User = {
      name: "ljw",
      insertTime: "2046-04-09T11:04:25"
    };
    const userRef = ref(user);
    const userAsync: User = {
      name: "Sun",
      insertTime: "2046-04-09T10:10:10"
    };
    // 视图执行函数
    const changeUserRef = () => {
      userRef.value = userAsync;
    };
    const changeUser = () => {
      // 直接改变源对象 不能是实现响应式 数据
      user.name = "lili";
    };
    // computed()函数
    const UserComputed = computed(() => {
      return userRef.value.insertTime?.replace("T", " ");
    });
    //  const userComputed = computed(() =>
    //   userRef.value.insertTime?.replace("T", " ")
    // );
    // watch()函数
    watch(userRef, (userAsync, user) =>
      alert(`用户名被改为: ${userAsync.name}`)
    );
    return {
      msgRef,
      user,
      userRef,
      userAsync,
      changeUserRef,
      changeUser,
      UserComputed
    };
  }
});
</script>
