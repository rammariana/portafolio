import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiHome2Fill } from "oh-vue-icons/icons";
addIcons(RiHome2Fill);
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router).mount("#app");
