import Layout from '../views/Layout.vue'

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
      },
      {
        path: '*',
        component: () => import(/* webpackChunkName: "error404" */ '../views/error404.vue')
      },

      {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta:{
                  title: '首页',
                  icon: 'home'
                },
                component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
              },
              {
                path: '/my',
                name: 'my',
                meta:{
                  title: '个人中心',
                  icon: 'my'
                },
                component: () => import(/* webpackChunkName: "my" */ '../views/My.vue')
              },
              {
                path: '/custom',
                name: 'custom',
                meta:{
                  title: '客户管理',
                  icon: 'custom'
                },
                component: () => import(/* webpackChunkName: "custom" */ '../views/Custom.vue')
              },
              {
                path: '/visit',
                name: 'visit',
                meta:{
                  title: '拜访管理',
                  icon: 'visit'
                },
                component: () => import(/* webpackChunkName: "visit" */ '../views/Visit.vue')
              },
              {
                path: '/user',
                name: 'user',
                meta:{
                  title: '用户管理',
                  icon: 'user'
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
              },
              {
                path: '/permiss',
                name: 'permiss',
                redirect:'/permiss/organ',
                meta:{
                  title: '权限管理',
                  icon: 'permiss'
                },
                component: () => import(/* webpackChunkName: "permiss" */ '../views/Permiss.vue'),
                children: [
                  {
                    path: 'organ',
                    name: 'organ',
                    meta:{
                      title: '组织管理',                    
                    },
                    component: () => import(/* webpackChunkName: "organ" */ '../views/Organ.vue')
                  },
                  {
                    path: 'department',
                    name: 'department',
                    meta:{
                      title: '部门管理',                    
                    },
                    component: () => import(/* webpackChunkName: "department" */ '../views/Department.vue')
                  },
                  {
                    path: 'job',
                    name: 'job',
                    meta:{
                      title: '职务管理',                    
                    },
                    component: () => import(/* webpackChunkName: "job" */ '../views/Job.vue')
                  },
                  {
                    path: 'role',
                    name: 'role',
                    meta:{
                      title: '角色管理',                    
                    },
                    component: () => import(/* webpackChunkName: "role" */ '../views/Role.vue')
                  },
                ]
              }
        ]
      },
      {
        path: '/test',
                    name: 'test',
                    
                    component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue')
      },
      
  ]

