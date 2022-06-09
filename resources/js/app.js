import Vue from 'vue';
import ExampleComponent from "./components/ExampleComponent";
import VueRouter from "vue-router";
import routes from "./routes";
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import ViewUI from 'view-design';
import Editor from 'vue-editor-js/src/index'

Vue.use(Editor)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(ViewUI);
Vue.use(VueRouter)
Vue.use(vuetify ,  {
    theme: {
        themes: {
            light: {
                primary: '#ff0000',
                secondary: '#ff0000',
                accent: '#ff0000',
                error: '#ff0000'
            }
        }
    }
})
window.Vue = require('vue').default;
require('./bootstrap');

const router = new VueRouter({
    mode: 'history',
    routes,

});


export const bus = new Vue();


const app = new Vue({
    el: '#app',
    router,
    vuetify: new vuetify(),

});
