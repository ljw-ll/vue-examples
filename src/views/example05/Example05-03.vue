<template>
  <div>
    <h1>v-for</h1>
    <ul>
      <li v-for="c of courses" :key="c.id">{{ c.name }}</li>
      <li v-for="c of courses" :key="c.id">
        <router-link :to="`/courses/${c.id}`">{{ c.name }}</router-link>
      </li>
    </ul>

    <hr />
    <table>
      <tr>
        <th>#</th>
        <th>name</th>
        <th>createTime</th>
        <th>operation</th>
      </tr>
      <tr v-for="(c, index) of courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ formatDate(c.createTime) }}</td>
        <td>
          <button type="button" @click="removeItem(index)">remove item</button>
        </td>
      </tr>
    </table>

    <button type="button" @click="addItem">add item</button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";

/**
 * 抽取出独立的，对courses 的增删逻辑
 */
function useCourses(courses: Ref<Course[]>) {
  const addItem = () => {
    courses.value.push({
      id: courses.value.length + 1,
      name: "vue3.0",
      createTime: new Date().toISOString()
    });
  };
  const removeItem = (index: number) => {
    // splice()参数，预删除元素索引，删除之后的几个
    courses.value.splice(index, 1);
  };
  return {
    addItem,
    removeItem
  };
}

/**
 * 抽取出独立的，对指定时间格式化的逻辑
 */
function useformatDate() {
  const formatDate = computed(() => {
    return (date: string) => date.replace("T", " ").substring(0, 16);
  });

  return {
    formatDate
  };
}

export default defineComponent({
  setup() {
    const courses = ref<Course[]>(listCourses());
    const { addItem, removeItem } = useCourses(courses);
    const { formatDate } = useformatDate();
    return {
      courses,
      addItem,
      formatDate,
      removeItem
    };
  }
});
</script>
