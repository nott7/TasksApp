<template>
  <v-list-item>
    <v-list-item-content class="flex-nowrap">
      <v-checkbox
        v-model="localTask.completed"
        :disabled="isEditing"
        v-on:change="markComplete"
      ></v-checkbox>
      <v-list-item-content class="ml-4">
        <v-list-item-title v-if="!isEditing">{{
          task.title
        }}</v-list-item-title>
        <v-list-item-title v-if="!isEditing" class="mt-2"><span class="font-weight-bold">user: </span>{{
          task.username
        }}</v-list-item-title>

        <v-text-field
          v-else
          v-model="localTask.title"
          @keyup.enter="finishEditing"
          @blur="finishEditing"
        ></v-text-field>
      </v-list-item-content>
    </v-list-item-content>
    <v-btn icon class="mr-4" @click="$emit('del-task', task.id)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <v-btn icon @click="isEditing = !isEditing" v-if="!isEditing">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],
  data() {
    return {
      isEditing: false,
      localTask: this.task,
    };
  },
  methods: {
    finishEditing() {
      this.isEditing = false;
      this.$emit("rename-task", this.localTask.title, this.localTask.id);
    },
    markComplete() {
      this.$emit("completed-task", this.localTask.id);
    },
  },
};
</script>

<style scoped>
.is-complete {
  text-decoration: line-through;
}
</style>
