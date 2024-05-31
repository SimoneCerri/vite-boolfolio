<script>
export default
    {
        name: 'AppJumbostronz',
        props:
        {
            'pageTitle': String,
            'link': String,
            'btnTitle': String,
        }
    }
</script>

<template>
    <section class="bg-dark text-danger">
        <div class="container my_h_small d-flex align-items-center justify-content-between">
            <h1>
                <strong>
                    {{ pageTitle }}
                </strong>
            </h1>
            <RouterLink class="btn btn-secondary text-danger fw-bold" :to="{ name: link }">{{ btnTitle }}</RouterLink>
        </div>
    </section>
</template>

<style></style>
