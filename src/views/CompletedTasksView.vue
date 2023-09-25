<template>
  <v-container>
    <v-form @submit.prevent="filterTasks">
      <v-layout class="align-center gap-2">
        <v-text-field
          type="text"
          label="Search a Task..."
          required
          class="mr-5"
          v-model="search"
          single-line
        ></v-text-field>
        <v-btn @click="filterTasks" color="primary">Search</v-btn>
      </v-layout>
    </v-form>

    <v-autocomplete
      label="Select the user..."
      :items="usernames"
      clearable
      v-model="selectedUser"
      @change="filterTasks"
    ></v-autocomplete>
    <Tasks
      v-bind:tasks="localTasks"
      v-on:del-task="$emit('del-task', $event)"
      v-on:rename-task="$emit('rename-task', $event)"
      v-on:completed-task="onTaskCompleted"
    />
  </v-container>
</template>

<script>
import Tasks from "@/components/Tasks.vue";
export default {
  name: "CompletedTasksView",
  props: {
    tasks: Array,
    usernames: Array,
  },
  watch: {
    tasks(newTasks) {
      if (this.selectedUser === "" || this.selectedUser === null) {
        this.localTasks = newTasks;
      } else {
        this.localTasks = newTasks.filter(
          (task) => task.username === this.selectedUser
        );
      }
    },
  },
  data() {
    return {
      selectedUser: "",
      search: "",
      localTasks: this.tasks,
    };
  },
  components: {
    Tasks,
  },
  methods: {
    filterBySelectedUser() {
      if (this.selectedUser === "" || this.selectedUser === null) {
        this.localTasks = this.tasks;
      } else {
        this.localTasks = this.tasks.filter(
          (task) => task.username === this.selectedUser
        );
      }
    },

    filterBySearch() {
      let filteredTasks = [];
      if (this.selectedUser === "" || this.selectedUser === null) {
        filteredTasks = this.tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(this.search.toLowerCase()) ||
            task.username.toLowerCase().includes(this.search)
        );
      } else {
        filteredTasks = this.tasks
          .filter((task) => task.username === this.selectedUser)
          .filter((task) => task.title.includes(this.search));
      }

      this.localTasks = filteredTasks;
    },

    filterTasks() {
      if (this.search === "") {
        this.filterBySelectedUser();
      } else {
        this.filterBySearch();
      }
    },
    onTaskCompleted(task) {
      task.completed = !task.completed;
      this.$emit("completed-task", task);
    },
  },
};
</script>
