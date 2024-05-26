import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/DefaultView.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/components/HomeView.vue')
        },
        {
          path: '/lifecycle-hooks',
          name: 'LifecycleHooks',
          component: () => import('@/components/LifecycleHooks/LifecycleHooks.vue')
        },
        {
          path: '/slot',
          name: 'Slot',
          component: () => import('@/components/Slot/SlotView.vue')
        },
        {
          path: '/vbind',
          name: 'Vbind',
          component: () => import('@/components/Vbind/VbindView.vue')
        },
        {
          path: '/plugin',
          name: 'Plugin',
          component: () => import('@/components/Plugin/PluginView.vue')
        },
        {
          path: '/activator',
          name: 'Activator',
          component: () => import('@/components/Activator/LabActivator.vue'),
          children: [
            {
              path: '/activator/tooltips',
              name: 'activatorTooltips',
              component: () => import('../components/Activator/ActivatorTooltip.vue')
            },
            {
              path: '/activator/dialog',
              name: 'activatorDialog',
              component: () => import('../components/Activator/ActivatorDialog.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/almeida',
      name: 'Almeida',
      component: () => import('../components/Almeida/DefaultView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../components/Almeida/HomeView.vue')
        },
        {
          path: '/byoto',
          name: 'byoto',
          component: () => import('../components/Almeida/HomeByoto.vue')
        },
        {
          path: '/doctor',
          name: 'doctor',
          component: () => import('../components/Almeida/ForDoctor.vue')
        }
      ]
    },

    {
      path: '/layout1',
      name: 'layout1',
      component: () => import('../components/Layout/LabLayout1.vue')
    },
    {
      path: '/layout2',
      name: 'layout2',
      component: () => import('../components/Layout/LabLayout2.vue')
    },
    {
      path: '/layout3',
      name: 'layout3',
      component: () => import('../components/Layout/LabLayout3.vue')
    },
    {
      path: '/layout4',
      name: 'layout4',
      component: () => import('../components/Layout/LabLayout4.vue')
    },
    {
      path: '/button1',
      name: 'button1',
      component: () => import('../components/Comp/LabButton.vue')
    },
    {
      path: '/button2',
      name: 'button2',
      component: () => import('../components/Comp/LabButton2.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../components/Comp/LabCard.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../components/Comp/LabList.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../components/Comp/LabGrid.vue')
    },
    {
      path: '/sheet',
      name: 'sheet',
      component: () => import('../components/Comp/LabSheet.vue')
    },
    {
      path: '/toolbar',
      name: 'toolbar',
      component: () => import('../components/Comp/LabToolbar.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../components/Comp/LabDialog.vue')
    },
    {
      path: '/pizza-ya',
      name: 'PizzaYa',
      component: () => import('../components/Pizza-ya/HomeView.vue')
    },
    {
      path: '/pizza-ya/order',
      name: 'PizzaYaOrder',
      component: () => import('../components/Pizza-ya/OrderView.vue')
    },
    {
      path: '/pizza-ya/basket',
      name: 'PizzaYaBasket',
      component: () => import('../components/Pizza-ya/BasketView.vue')
    },
    {
      path: '/pizza-ya/accounting',
      name: 'PizzaYaAccounting',
      component: () => import('../components/Pizza-ya/AccountingView.vue')
    },
    {
      path: '/pizza-ya/register-user',
      name: 'RegisterUser',
      component: () => import('../components/Pizza-ya/RegisterUser.vue')
    },
    {
      path: '/pizza-ya/login',
      name: 'PizzaYaLogin',
      component: () => import('../components/Pizza-ya/LoginView.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../components/Statistics/HomeView.vue')
    },
    {
      path: '/statistics/upload',
      name: 'satisticsUpload',
      component: () => import('../components/Statistics/UploadView.vue')
    },
    {
      path: '/statistics/moving',
      name: 'moving',
      component: () => import('../components/Statistics/MovingView.vue')
    }
  ]
})

export default router
