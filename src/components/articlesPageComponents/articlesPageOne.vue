<template>
  <div>
    <h2>Hello and welcome page one !!!</h2>
    <div> {{billets}} </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
name: "page1",
  data(){
    return{
      billets: null,


    }
  },
  methods: {

  },
  mounted: function () {
    axios.get('https://127.0.0.1:8000/api/billets')
        .then(response => {
              console.log(response);
              this.billets = response.data["hydra:member"][0].content;
    });
  }
}
</script>

<style scoped>

</style>
