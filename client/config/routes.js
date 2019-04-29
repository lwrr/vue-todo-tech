// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },

  {
    path: '/app', // /app/xxx
    // path: '/app',
    props: true,
    // props: (route) => ({ b: route.query.b }),
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    },
    children: [
      {
        path: 'test',
        component: () => import('../views/login/login.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
