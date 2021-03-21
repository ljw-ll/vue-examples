<template>
  <div>
    <h1>composition</h1>
    <p>
      与Composition-API基本示例代码相同，但按逻辑聚合相关操作为独立的函数。
    </p>
    <h1>useMessage()函数</h1>
    <p>
      创建useMessage()函数，聚合message相关逻辑操作。包括计算属性/函数。
      <br />
    </p>
    <p>msgRef: {{ msgRef }}</p>
    <p>reverseMsg : {{ reverseMsg }}</p>
    <button @click="changeMsg">changeMsg</button>
    <hr />
    <p>
      创建useUser()函数，聚合user对象数据相关逻辑操作。包括计算属性/函数。
      <br />
      基于Proxy代理对象能够感知新添加的属性
    </p>
    <p>{{ userRef?.name }}/{{ userRef?.insertTime }}/{{ userRef?.address }}</p>
    <p>计算属性 ： {{ Replace }}</p>
    <p>随机添加 地址属性</p>
    <button @click="changeAddress">changeAddress</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";
import { User } from "@/datasource/Types";
function useMessage(msg: Ref<string>) {
  const reverseMsg = computed(() => {
    return msg.value
      .split("")
      .reverse()
      .join("");
  });
  const changeMsg = function() {
    msg.value = "Composition-api";
  };

  return {
    reverseMsg,
    changeMsg
  };
}

function useUser(user: Ref<User>) {
  const Replace = computed(() => {
    return user.value.insertTime?.replace("T", " ");
  });
  const changeAddress = () => {
    user.value.address = (Math.random() * 1000).toFixed(0).toString();
  };
  return {
    Replace,
    changeAddress
  };
}
export default defineComponent({
  setup() {
    const msgRef = ref("hello ref()");
    const { reverseMsg, changeMsg } = useMessage(msgRef);

    const user: User = {
      name: "BO",
      insertTime: "2046-04-09T11:04:25"
    };
    const userRef = ref(user);
    const { changeAddress, Replace } = useUser(userRef);
    return {
      msgRef,
      reverseMsg,
      changeMsg,
      userRef,
      Replace,
      changeAddress
    };
  }
});
</script>
