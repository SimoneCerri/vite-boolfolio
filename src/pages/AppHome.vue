<script>
import AppJumbostronz from "../components/AppJumbostronz.vue";

export default
    {
        name: 'AppHome',
        components:
        {
            AppJumbostronz,
        }
    }
</script>

<template>
    <AppJumbostronz page-title="HOME" link="projects" btn-title="Projects" />
    <div class="jumbotron p-3 mb-4 bg-white rounded-3">
        <div class="container py-5 d-flex flex-column align-items-center gap-5">
            <div class="logo_laravel">
                <img src="/img/logo_bg_white.jpg" alt="">
            </div>
            <h1 class="display-5 fw-bold text-center">
                Welcome to Simone's portfolio
            </h1>
            <p>
                Simone born in Pisa, in 1994. Start to be a junior dev in 2024 thanks to his passion for everything
                related
                to technology.
            <ul class="list-unstyled text-center">
                <li class="mb-2">
                    <strong>
                        Extra hobbys:
                    </strong>
                </li>
                <li>
                    M.M.A.
                </li>
                <li>
                    Motorbike
                </li>
                <li>
                    Gaming
                </li>
            </ul>
            </p>
        </div>
    </div>

    <div class="content mb-4">
        <div class="container d-flex justify-content-center">
            <p class="text-center">
                For more information about the J-Dev you can visit my
            </p>
            <RouterLink class="nav-link px-1 text-danger underline" :to="{ name: 'contacts' }">
                contacts
            </RouterLink>
            <p>
                page.
            </p>
        </div>
    </div>
</template>

<style></style>
