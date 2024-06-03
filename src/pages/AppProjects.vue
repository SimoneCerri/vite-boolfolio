<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import 'bootstrap/dist/css/bootstrap.css';
import AppJumbostronz from "../components/AppJumbostronz.vue";

export default
    {
        name: 'AppProjects',
        components:
        {
            ProjectCard,
            AppJumbostronz,
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
            },
        },
        mounted() {
            let url = this.base_url + this.api_projects_url;
            this.callApi(url)
        }
    }
</script>

<template>
    <AppJumbostronz page-title="PROJECTS" link="about" btn-title="About" />
    <main>
        <div class="container">
            <div class="row py-5 flex-wrap">
                <ProjectCard v-for="project in projects.data" :project @click="" />
            </div>
        </div>
    </main>
</template>

<style></style>