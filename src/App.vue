<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <v-btn text class="title">Nott's Tasks App</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn text>Home</v-btn>
      </router-link>
      <router-link to="/completed">
        <v-btn text>Completed</v-btn>
      </router-link>
      <router-link to="/comics">
        <v-btn text>Comics</v-btn>
      </router-link>
      <router-link to="/login">
        <v-btn text>Login</v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view
        :tasks="selectTasks"
        v-on:del-task="deleteTask"
        v-on:rename-task="renameTask"
        v-on:add-task="addTask"
        v-on:login="login"
        :username="username"
        :usernames="usernames"
      />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    tasks: [],
    username: "",
    usernames: [],
  }),
  methods: {
    addTask(newTask) {
      this.tasks = [...this.tasks, newTask];
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    renameTask({ title, id }) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title,
          };
        }
        return task;
      });
    },
    login(username) {
      this.username = username;
      this.usernames = [...this.usernames, username];
    },
    completeTask(id) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
    },
  },
  computed: {
    selectTasks() {
      if (this.$route.path === "/completed") {
        return this.tasks.filter((task) => task.completed);
      } else {
        return this.tasks.filter((task) => !task.completed);
      }
    },
  },
};
</script>
