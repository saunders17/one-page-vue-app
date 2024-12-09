import { createRouter, createWebHistory } from 'vue-router'

import EventList from '../views/EventList.vue'

import EventLayout from '@/views/event/EventLayout.vue'
import EventDetails from '@/views/event/EventDetails.vue'
import EventRegister from '@/views/event/EventRegister.vue'
import EventEdit from '@/views/event/EventEdit.vue'

import About from '@/views/AboutPage.vue'

import NotFound from '@/views/errors/NotFound.vue'
import NetworkError from '@/views/errors/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1})
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: "", // root path of the parent
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
      },
    ]
  },
  {
    path: '/event/:afterEvent(.*)', // path children: match to any path after /event/, (.*) to include /
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/404/:resource', // path to pass the resource into the NotFound component when service API call fails
    name: '404Resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/:catchAll(.*)', // match routes that have no match
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0}
    }
  }
})

export default router
