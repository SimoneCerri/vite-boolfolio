<script>
import axios from 'axios';

export default
    {
        name: "ContactForm",
        data() {
            return {
                base_url: 'http://127.0.0.1:8000',
                contacts_url: '/api/contacts',
                name: '',
                email: '',
                message: '',
                loading: false,
                success: false,
                errors: {}
            }
        },
        methods: {
            sendForm() {
                this.loading = true;
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                };
                this.errors = {};

                axios.post(this.base_url + this.contacts_url, data).then((response) => {
                    this.success = response.data.success;
                    if (!this.success) {
                        this.errors = response.data.errors;
                    } else {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                });
            },
        }
    }
</script>

<template>
    <section class="contact_me py-5">
        <div class="container text-center">
            <div class="mb-5">
                <div class="row flex-column align-items-center">
                    <div class="col-5 bg-success rounded-5 py-5">
                        <h2 class="text-uppercase">Send me a feedback</h2>
                        <h2 class="text-uppercase">or</h2>
                        <h2 class="text-uppercase">just contact me !</h2>
                    </div>
                </div>

            </div>
            <div v-if="success" class="alert alert-success text-start d-flex align-items-center justify-content-between"
                role="alert">
                <strong>Successfully send message !</strong>
                <button type="button" class="close btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div class="row">
                <form @submit.prevent="sendForm()" class="col-12 text-start">
                    <div class="mb-3">
                        <input class="border form-control" :class="{ 'is-invalid': errors.name }" type="text"
                            name="name" id="name" placeholder="Name" v-model="name">
                        <p v-for="(error, index) in errors.name" :key="`message-error-${index}`"
                            class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <div class="mb-3">
                        <input class="border form-control" :class="{ 'is-invalid': errors.email }" type="text"
                            name="email" id="email" placeholder="Email" v-model="email">
                        <p v-for="(error, index) in errors.email" :key="`message-error-${index}`"
                            class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <div class="mb-3">
                        <textarea class="border form-control" :class="{ 'is-invalid': errors.message }" name="message"
                            id="message" cols="30" rows="10" placeholder="Message" v-model="message"></textarea>
                        <p v-for="(error, index) in errors.message" :key="`message-error-${index}`"
                            class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <button class="btn btn-dark text-success" type="submit" :disabled="loading">{{
                        loading ?
                            'Sending...' : 'Send'
                    }}</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style></style>