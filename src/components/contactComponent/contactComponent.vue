<template>
  <div class="m-5">
    <form>
        <fieldset>
          <legend>Legend</legend>
          <div class="form-group row">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleSelect1">Example select</label>
            <select class="form-control" id="exampleSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>





          <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
      </form>

  </div>
</template>

<script>
export default {
name: "contact.component",
  data(){
    return{
      email: 'declic62@gmail.com'
    }
  }
}
</script>

<style scoped>

</style>
