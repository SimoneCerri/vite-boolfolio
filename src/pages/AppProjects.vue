<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import 'bootstrap/dist/css/bootstrap.css';

export default
    {
        name: 'AppProjects',
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
    <main>
        <div class="container">
            <div class="row py-5">
                <ProjectCard v-for="project in projects.data" :project />
            </div>
        </div>
    </main>
</template>

<style></style>