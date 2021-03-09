import Vue from 'vue'
import VueRouter from 'vue-router'
// import RickAndMortyList from '@/views/RickAndMortyList.vue'
// import RickAndMortyCharacter from '@/views/RickAndMortyCharacter';

const RickAndMortyList = () => import('@/views/RickAndMortyList.vue')
const CharacterDetails = () => import('@/views/RickAndMortyCharacter')
const RickAndMortyEpisodeList = () => import('@/views/RickAndMortyEpisodeList')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RickAndMortyList',
    component: RickAndMortyList
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: CharacterDetails,
  },
  {
    path: '/episode/:id',
    name: 'RickAndMortyEpisodeList',
    component: RickAndMortyEpisodeList,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: "active",
})

export default router
