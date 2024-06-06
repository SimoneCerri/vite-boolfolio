<script>
import AppJumbostronz from "../components/AppJumbostronz.vue";
import ContactForm from "../components/ContactForm.vue";

export default
    {
        name: 'AppContacts',
        components:
        {
            AppJumbostronz,
            ContactForm
        }
    }
</script>

<template>
    <AppJumbostronz page-title="CONTACTS" link="home" btn-title="Home" />
    <ContactForm />
</template>

<style></style>