<script>
import axios from 'axios';

export default
{
  name: 'App',
  data()
  {
    return{
      posts: [],
      base_url:'http://127.0.0.1:8000',
      api_projects_url:'/api/projects',
      error: null,
    }
  },
  mounted()
  {
    let url = this.base_url + this.api_projects_url;
    axios.get(url).then(response=>
      {
        //console.log(response.data);
        this.posts = response.data;
      }
    ).catch(err => {
      //console.log(err.message);
      this.error = err.message;
    })
  }
}
</script>

<template>
  <div>
    
  </div>
</template>

<style>

</style>
