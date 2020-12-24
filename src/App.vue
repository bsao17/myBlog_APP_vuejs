<template>
  <div class="container">
    <div id="app" v-bind:class="darkMode()">
      <barnav></barnav>
      <div class="jumbotron bg-secondary text-center text-warning">
        <p class="h1 text-light">Bienvenue sur </p>
        <h1 class="display-1">"Junior, mais pas Manchot"</h1>
        <p class="lead">Un p'tit blog pour faire découvrir mes créations, mais aussi celles d'autres juniors plein de talents !!!</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
        </p>
        <div class="form-group">
        </div>
      </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import barNav from "@/components/navigation/barNav";
import Darkmode from 'darkmode-js';

import(barNav)
export default {
  name: 'App',
  components: {
    barnav: barNav

  },
  methods:{
    darkMode:function (){
      const options = {
        bottom: '64px', // default: '32px'
        right: '32px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: false, // default: true,
        label: '⚡', // default: ''
        autoMatchOsTheme: true // default: true
      }
      new Darkmode(options).showWidget();
    }
  }
}
</script>

<style>
#app {

}
</style>
