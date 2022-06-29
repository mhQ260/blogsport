import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
//utworzenie routera z podpiętym createWebHistory i routes
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});


export default router;