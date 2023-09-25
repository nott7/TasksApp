<template>
  <v-container>
    <v-card
      variant="tonal"
      class="mx-auto mt-4 pa-6"
      max-width="900"
      height="300"
    >
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field
            class="mt-8"
            v-model="username"
            label="Username"
            name="username"
            type="text"
            required
          ></v-text-field>

          <v-btn @click="login" color="primary"> Login </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",

  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      this.$emit("login", this.username);
      this.$router.push("/");
    },
  },
};
</script>
