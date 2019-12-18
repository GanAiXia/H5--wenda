import Vue from 'vue'
import VueRouter from 'vue-router'

import Cover from '../pages/Cover'
import Content from '../pages/Content'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path: '/content', component: Content, name: 'content'},
        {path: '/cover', component: Cover},
        {path: '/', component: Cover}
    ]
})