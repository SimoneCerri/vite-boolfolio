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
                            'link': 'home',
                        },
                        {
                            'title': 'Projects',
                            'link': 'projects',
                        },
                        {
                            'title': 'About',
                            'link': 'about',
                        },
                        {
                            'title': 'Contacts',
                            'link': 'contacts',
                        },
                    ]
            }
        }
    }
</script>

<template>
    <header>
        <nav class="py-2">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="">
                    <img width="50px" src="/img/logosmall.jpg">
                </div>
                <div class="" id="">
                    <ul class="list-unstyled d-flex gap-3 m-0 nav-item">
                        <li class="my_btn_nav" v-for="link in menu">
                            <RouterLink exactActiveClass="my_active" class="nav-link" :to="{ name: link.link }">{{
                                link.title
                                }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style></style>