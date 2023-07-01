import { createRouter, createWebHistory } from 'vue-router'
import PortafolioView from "../views/PortafolioView.vue";
import AboutView from "../views/AboutView.vue";
import ContactoView from "../views/ContactoView.vue";
import CvView from "../views/CvView.vue";
const routes = [
  {
    path: "/",
    redirect: () => {
      return {
        name: "portafolio",
      };
    },
  },
  {
    path: "/portafolio",
    name: "portafolio",
    component: PortafolioView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: ContactoView,
  },
  {
    path: "/cv",
    name: "cv",
    component: CvView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
