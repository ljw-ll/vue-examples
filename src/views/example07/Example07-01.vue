<template>
  <div>
    <p>可在视图直接通过$store.state获取state中数据。</p>
    {{ $store.state.user.name }} / {{ $store.state.user.address }}
    <hr />
    <p>
      useStore()函数必须在setup()中使用。可以传递store对象给自定义use函数。
      <br />
      组件内声明的user变量必须 <br />
      通过计算属性绑定state user。否则state user更新， <br />
      组件user变量不会响应式更新。
    </p>
    <p>{{ userS.name }} / {{ userS.address }}</p>
    <hr />
    <p>通过mapState，获取state指定属性名称的值。</p>
    {{ user.name }}/{{ user.address }}
    <br />
    <hr />
    <button type="button" @click="change">修改信息</button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import { mapState, Store, useStore } from "vuex";
import { User } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const userS = computed(() => store.state.user);
    // const userS = store.state.user;
    const user1: User = {
      name: "bo",
      address: "911"
    };
    const change = () => {
      //  userS.name = "kkk";
      store.state.user = user1;
    };
    return {
      userS,
      change
    };
  },
  computed: {
    ...mapState(["user"])
  }
});
</script>
