<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-item-group>
          <TaskItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            v-on:del-task="$emit('del-task', task.id)"
            v-on:rename-task="$emit('rename-task', task.title, task.id)"
            v-on:completed-task="$emit('completed-task', task.id)"
          />
        </v-list-item-group>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  name: "Tasks",
  props: ["tasks"],
  components: {
    TaskItem,
  },
};
</script>
