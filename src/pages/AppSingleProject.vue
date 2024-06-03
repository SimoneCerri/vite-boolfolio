<script>
import axios from "axios";
import AppJumbostronz from "../components/AppJumbostronz.vue";
/* import axios from "axios"; */

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
                console.log(this.project_id);
            },
            callSingleProject(url) {
                axios.get(url).then(response => {
                    this.$project = response;
                    console.log(this.$project);
                })
            }
        },
        mounted() {
            /* this.projectId() */
            this.callSingleProject(this.base_url + this.api_projects_url + this.project_id)
        }
    }
</script>

<template>
    <AppJumbostronz page-title="PROJECT" link="projects" btn-title="Projects" />
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-title">
                        <!-- {{ $route.params.id }} -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
