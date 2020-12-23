import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import VueRouter from "vue-router";
import Routes from "@/Routes";
import firebase from "firebase";

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(firebase);

const router = new VueRouter({
  routes: Routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
