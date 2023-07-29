import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  GiBookmarklet,
  RiHome2Fill,
  BiFacebook,
  BiWhatsapp,
  BiGithub,
  LaHtml5,
  LaCss3Alt,
  IoLogoJavascript,
  RiVuejsLine,
  FaSass,
  SiBootstrap,
  FaMapMarkerAlt,
  FaHammer,
  GiSmartphone,
  FaUserAlt,
  GiSkills,
  BiGit,
  GiBullseye,
  CoGmail,
  GiCheckMark,
  FaUserAstronaut,
} from "oh-vue-icons/icons";

addIcons(
  FaUserAstronaut,
  GiCheckMark,
  GiBullseye,
  CoGmail,
  BiGit,
  GiBookmarklet,
  FaMapMarkerAlt,
  RiHome2Fill,
  BiFacebook,
  BiWhatsapp,
  BiGithub,
  LaHtml5,
  LaCss3Alt,
  IoLogoJavascript,
  RiVuejsLine,
  FaSass,
  SiBootstrap,
  FaHammer,
  GiSmartphone,
  FaUserAlt,
  GiSkills
);
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router).mount("#app");
