<template>
  <div>
    <h2>Hello and welcome page one !!!</h2>
    <div> {{billets1.title}} </div>
    <div> {{billets1.content}} </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
name: "page1",
  data(){
    return{
      billets0: "",
      billets1: "",
      comment0: "",
      comment1: "",
    }
  },
  methods: {

  },
  mounted: function () {
    axios.get('https://127.0.0.1:8000/api/billets')
        .then(response => {
              console.log(response);
              this.billets0 = response.data["hydra:member"][0];
              this.billets1 = response.data["hydra:member"][1];

    });

    axios.get('https://127.0.0.1:8000/api/comments')
    .then(response => {console.log(response)});
  }
}
</script>

<style scoped>

</style>
