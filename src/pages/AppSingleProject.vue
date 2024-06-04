<script>
import axios from "axios";
import AppJumbostronz from "../components/AppJumbostronz.vue";

export default
    {
        name: 'AppSingleProject',
        components:
        {
            AppJumbostronz,
        },
        data() {
            return {
                $project: [],
                base_url: 'http://127.0.0.1:8000',
                api_projects_url: '/api/projects',
                project_id: '',
            }
        },
        methods:
        {
            projectId() {
                this.project_id = '/' + parseInt(this.$route.params.id);
                //console.log(this.project_id);
            },
            callSingleProject(url) {
                axios.get(url).then(response => {
                    if (response.data.success) {
                        this.$project = response.data.response;
                        //console.log(response.data.response); 
                    }
                    else {
                        this.$router.push({ name: 'NotFound' });
                    }
                })
            }
        },
        mounted() {
            this.projectId()
            this.callSingleProject(this.base_url + this.api_projects_url + this.project_id)
        }
    }
</script>

<template>
    <AppJumbostronz :page-title="'PROJECT - ' + $project.title" link="projects" btn-title="Projects" />
    <div class="container py-5">
        <div class="row">
            <div class="col">
                <div class="text-center">
                    <div class="fs-1 d-flex align-items-center justify-content-evenly">
                        <a class="text-decoration-none d-flex flex-column align-items-center" href="{{ $project.url1 }}"
                            target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon icon="fa-brands fa-github" size="xl" style="color: #000000;" />
                            <span class="fs-6 text-danger">See on GitHub</span>
                        </a>
                        <div class="">
                            <h1 class="">
                                Title : <strong>{{ $project.title }}</strong>
                            </h1>
                        </div>
                        <a class="text-decoration-none d-flex flex-column align-items-center" href="{{ $project.url1 }}"
                            target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon icon="fa-brands fa-github" size="xl" style="color: #000000;" />
                            <span class="fs-6 text-danger">See on GitHub</span>
                        </a>
                    </div>
                    <div class="text-center py-2" v-if="$project.type">
                        <h3 class="text-dark">
                            Type : <strong class="text-danger"> {{ $project.type.name }} </strong>
                        </h3>
                    </div>
                    <div class="d-flex align-items-center justify-content-center py-2">
                        <img class="rounded-5" width="2000px" :src="$project.img" alt="">
                    </div>
                    <div class="mt-4">
                        <span class="fs-3">Technologies : </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-evenly py-5">
                        <div class="btn btn-dark text-danger" v-for="$tech in $project.technologies">
                            {{ $tech.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
