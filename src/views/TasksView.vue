<template>
  <v-container>
    <AddTask
      v-on:add-task="$emit('add-task', $event)"
      v-bind:username="username"
    />
    <Tasks
      v-bind:tasks="tasks"
      v-on:del-task="$emit('del-task', $event)"
      v-on:rename-task="$emit('rename-task', $event)"
      v-on:completed-task="$emit('completed-task', $event)"
    />
  </v-container>
</template>

<script>
import AddTask from "@/components/AddTask.vue";
import Tasks from "@/components/Tasks.vue";

export default {
  name: "TasksView",
  components: {
    AddTask,
    Tasks,
  },
  props: {
    tasks: Array,
    username: String,
  },
};
</script>
