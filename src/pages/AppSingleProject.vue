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
                        //404
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
    <AppJumbostronz page-title="PROJECT" link="projects" btn-title="Projects" />
    <div class="container py-5">
        <div class="row">
            <div class="col">
                <div class="card text-center">
                    <div class="card-title">
                        <strong>
                            {{ $project.title }}
                        </strong>
                    </div>
                    <div class="sub-title text-center py-2" v-if="$project.type">
                        {{ $project.type.name }}
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-evenly">
                        <div class="btn btn-dark" v-for="$tech in $project.technologies">
                            {{ $tech.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
