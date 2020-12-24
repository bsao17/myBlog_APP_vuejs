<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler border-light" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li><li class="nav-item active">
            <a class="nav-link" routerlink="/contact">Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Darkmode from 'darkmode-js';
  export default {
  name: "barNav",
    data(){
      return{
        txt: '',
      }
    },
    methods:{
      darkMode:function () {
        const options = {
          bottom: '64px', // default: '32px'
          right: 'unset', // default: '32px'
          left: '32px', // default: 'unset'
          time: '0.5s', // default: '0.3s'
          mixColor: '#fff', // default: '#fff'
          backgroundColor: '#fff',  // default: '#fff'
          buttonColorDark: '#100f2c',  // default: '#100f2c'
          buttonColorLight: '#fff', // default: '#fff'
          saveInCookies: false, // default: true,
          label: '🌓', // default: ''
          autoMatchOsTheme: true // default: true
        }
        const darkmode =  new Darkmode(options);
        darkmode.toggle();
      }
    }
  }
</script>

<style scoped src="./barNav.css">

</style>
