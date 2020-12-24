<template>
  <div>
    <h2 class="text-center">Articles</h2>
    <ul class="list-group">
      <li v-for="item in items" :key="item.title">{{item.title}} </li>
      <li>
        <div class="card" >
          <div class="card-body">
            <div class="card-title">
                <h2> {{billets1.title}} </h2>
            </div>
            <div class="card-text">
              <div> {{billets1.content}} </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from "axios";

export default {
name: "page1",
  data(){
    return{
      items: "",
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
    .then(response => {console.log(response.data)});
  }
}
</script>

<style scoped>

</style>
