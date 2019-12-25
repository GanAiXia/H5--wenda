import Vue from 'vue'
import FastClick from 'fastclick'

import App from './App.vue'
import router from './router'
import store from './store'

FastClick.attach(document.body)

new Vue({
    render: (h) => h(App),
    router,
    store
}).$mount('#app')