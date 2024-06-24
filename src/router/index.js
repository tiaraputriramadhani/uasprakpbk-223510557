import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import WeatherPage from '../pages/WeatherPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/weather', component: WeatherPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
