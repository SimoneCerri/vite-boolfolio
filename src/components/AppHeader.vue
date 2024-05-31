<script>
export default
    {
        name: 'AppHeader',
        data() {
            return {
                menu:
                    [
                        {
                            'title': 'Home',
                            'link': 'home'
                        },
                        {
                            'title': 'Projects',
                            'link': 'projects'
                        },
                        {
                            'title': 'About',
                            'link': 'about'
                        },
                        {
                            'title': 'Contacts',
                            'link': 'contacts'
                        },
                    ]
            }
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
                        <li class="nav-item" v-for="link in menu">
                            <RouterLink class="nav-link" :to="{ name: link.link }">{{ link.title }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style></style>