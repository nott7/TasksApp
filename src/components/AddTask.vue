<template>
  <v-layout>
    <v-flex>
      <v-form
        class="d-flex align-center justify-center gap-2"
        @submit.prevent="addTask"
      >
        <v-text-field
          type="text"
          label="Add a Task..."
          required
          class="mr-5"
          v-model="title"
          single-line
        ></v-text-field>
        <v-btn @click="addTask" color="primary">Add Task</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
    };
  },

  props: {
    username: String,
  },

  methods: {
    addTask(e) {
      e.preventDefault();
      if (this.username === "") {
        alert("Please login first");
        return;
      } else if (this.title === "") {
        alert("Please enter a task");
        return;
      }
      const newTask = {
        id: Math.random(),
        title: this.title,
        completed: false,
        username: this.username,
      };

      this.$emit("add-task", newTask);
      this.title = "";
    },
  },
};
</script>
