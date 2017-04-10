import Vue from 'vue';

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

// router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//页面顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


// root component
import App from './App';

//vuex store
import store from './store/';


import routes from './config/router.js';

import 'plugins/';
import 'mixin/';

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    window.scroll(0, 0);

  console.log('tkyj++++11111++'+JSON.stringify(store.getters.getToken | 'xxxx'));

  console.log('tkyj++++++'+JSON.stringify(new Date().getTime()));
  var tokenInterval = new Date().getTime() - store.getters.getToken;
  var validateToken = tokenInterval > 0 && tokenInterval < 24 * 60 * 60 * 1000;
  console.log('tkyj+++xxxxxxx+++'+JSON.stringify(tokenInterval));
  if (!validateToken && to.path !== '/login') {
    store.dispatch('remove_userinfo');
    next('/login');
  }else {
        if (validateToken && to.path === '/login') {
            next({
                path: '/wh/statistics/overview'
            });
        } else {
            NProgress.start();
            next();
        }
    }
})

router.afterEach(transition => {
    NProgress.done();
});

const appAdmin = new Vue({
    el: '#app',
    data() {
        return {

        };
    },
    // template: '<App/>',
    router,
    store,
    render: h => h(App)
})
