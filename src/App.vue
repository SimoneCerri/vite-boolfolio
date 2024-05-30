<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import 'bootstrap/dist/css/bootstrap.css';


export default
  {
    name: 'App',
    props:
    {

    },
    components:
    {
      ProjectCard,
    },
    data() {
      return {
        projects: [],
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
          this.projects = response.data.projects;
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
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Portfolio</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page">Projects
                <span class="visually-hidden">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>
  <main>
    <div class="container">
      <div class="row py-5">
        <ProjectCard v-for="project in projects.data" :project />
      </div>
    </div>
  </main>
  <footer>Footer</footer>
</template>

<style></style>
