import Vue from 'vue'
import FastClick from 'fastclick'

import App from './App.vue'
import router from './router'

FastClick.attach(document.body)

new Vue({
    render: (h) => h(App),
    router
}).$mount('#app')