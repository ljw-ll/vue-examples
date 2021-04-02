<template>
  <div>
    <p>{{ userS.name }}/{{ userS.address }}</p>
    <input type="text" v-model="myUser.name" /> <br />
    <input type="password" v-model="myUser.address" /> <br />
    <button type="button" @click="change">updata</button>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { User } from "@/datasource/Types";
import { UPDATE_USER } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const userS = computed(() => store.state.user);
    const myUser = ref<User>({});
    // 执行updateUser()函数时，从双向绑定的响应式对象中获取值
    // 而非直接传递myUser响应式对象
    const change = () => {
      store.commit(UPDATE_USER, {
        name: myUser.value.name,
        address: myUser.value.address
      } as User);
    };
    return {
      userS,
      myUser,
      change
    };
  }
});
</script>
