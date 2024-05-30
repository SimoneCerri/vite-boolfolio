<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default
  {
    name: 'App',
    components:
    {
      ProjectCard,
    },
    data() {
      return {
        posts: [],
        base_url: 'http://127.0.0.1:8000',
        api_projects_url: '/api/projects',
        error_message: '',
      }
    },
    methods:
    {
      callApi(url) {
        axios.get(url).then(response => {
          //console.log(response.data.projects);
          this.posts = response.data.projects;
        }
        ).catch(err => {
          //console.log(err.message);
          this.error_message = err.message;
        })
      }
    },
    mounted() {
      let url = this.base_url + this.api_projects_url;
      this.callApi(url)
    }
  }
</script>

<template>
  <div>
    <ProjectCard v-for="project in projecs" />
  </div>
</template>

<style></style>
