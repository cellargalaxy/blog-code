import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d4d810e2 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _27418fd3 = () => interopDefault(import('../pages/archive/_date.vue' /* webpackChunkName: "pages/archive/_date" */))
const _aa68209c = () => interopDefault(import('../pages/view/_.vue' /* webpackChunkName: "pages/view/_" */))
const _6682001c = () => interopDefault(import('../pages/page/_.vue' /* webpackChunkName: "pages/page/_" */))
const _35c0b5a5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/blog-code/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _d4d810e2,
    name: "test"
  }, {
    path: "/archive/:date?",
    component: _27418fd3,
    name: "archive-date"
  }, {
    path: "/view/*",
    component: _aa68209c,
    name: "view-all"
  }, {
    path: "/page/*",
    component: _6682001c,
    name: "page-all"
  }, {
    path: "/",
    component: _35c0b5a5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
