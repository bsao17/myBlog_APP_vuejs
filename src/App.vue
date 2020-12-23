<template>
  <div id="app" class="container">
    <barnav></barnav>
    <div class="jumbotron bg-secondary text-center text-warning">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import barNav from "@/components/navigation/barNav";


import(barNav)
export default {
  name: 'App',
  components: {
    barnav: barNav

  }
}
</script>

<style>
#app {

}
</style>
