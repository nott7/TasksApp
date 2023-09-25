import Vue from "vue";
import VueRouter from "vue-router";
import TasksView from "../views/TasksView.vue";
import CompletedTasksView from "../views/CompletedTasksView.vue";
import LoginView from "../views/LoginView.vue";
import ComicsView from "../views/ComicsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/completed",
    name: "completed",
    component: CompletedTasksView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/comics",
    name: "comics",
    component: ComicsView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
