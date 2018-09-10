import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _106f2e59 = () => import('../pages/list/index.vue' /* webpackChunkName: "pages/list/index" */).then(m => m.default || m)
const _de8c20f6 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _bb1219fe = () => import('../pages/list/_id.vue' /* webpackChunkName: "pages/list/_id" */).then(m => m.default || m)
const _9f1c6b6c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _53d2cbbc = () => import('../pages/_user.vue' /* webpackChunkName: "pages/_user" */).then(m => m.default || m)
const _035f32ec = () => import('../pages/user/_username/index.vue' /* webpackChunkName: "pages/user/_username/index" */).then(m => m.default || m)
const _5a44c41e = () => import('../pages/user/_username/repos/index.vue' /* webpackChunkName: "pages/user/_username/repos/index" */).then(m => m.default || m)
const _b9e26ab0 = () => import('../pages/user/_username/repos/_reponame.vue' /* webpackChunkName: "pages/user/_username/repos/_reponame" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/list",
			component: _106f2e59,
			name: "list"
		},
		{
			path: "/about",
			component: _de8c20f6,
			name: "about"
		},
		{
			path: "/list/:id",
			component: _bb1219fe,
			name: "list-id"
		},
		{
			path: "/",
			component: _9f1c6b6c,
			name: "index"
		},
		{
			path: "/:user",
			component: _53d2cbbc,
			name: "user",
			children: [
				{
					path: ":username",
					component: _035f32ec,
					name: "user-username"
				},
				{
					path: ":username/repos",
					component: _5a44c41e,
					name: "user-username-repos"
				},
				{
					path: ":username/repos/:reponame?",
					component: _b9e26ab0,
					name: "user-username-repos-reponame"
				}
			]
		}
    ],
    
    
    fallback: false
  })
}
