<template>
  <div>
    <p>
      aaa与视图元素的绑定与vue2完全不同。需要声明元素，以及绑定函数，在视图元素通过:ref绑定函数
    </p>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
    </p>
    <form>
      <label>
        <input type="checkbox" v-model="agreed" /> 同意条款 {{ agreed }}
        <br />
      </label>
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input
            :ref="chRefs"
            type="checkbox"
            v-model="selectedCoursesRef"
            :value="{ id: c.id }"
            :disabled="!agreed"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button
        type="button"
        :disabled="!agreed || selectedCoursesRef.length < amount"
      >
        submit
      </button>
    </form>
    <hr />
    {{ selectedCoursesRef }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
// 模拟曾经选中的数据
const selectedCourses: Course[] = [{ id: 7 }];
export default defineComponent({
  setup() {
    const courses = listCourses();
    const selectedCoursesRef = ref<Course[]>(selectedCourses);
    const checkboxs: HTMLInputElement[] = [];
    const chRefs = (el: HTMLInputElement) => checkboxs.push(el);
    const agreed = ref(false);

    const amount = 2;

    watch(selectedCoursesRef, () => {
      const checkboxDis = selectedCoursesRef.value.length >= amount;
      checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    });
    return {
      courses,
      selectedCoursesRef,
      chRefs,
      agreed,
      amount
    };
  }
});
</script>
