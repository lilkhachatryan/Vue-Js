<template>
    <auth-page-transition>
        <b-container>
            <b-form-group
                    id="fieldset-1"
                    description="Let us know your email."
                    label="Enter your email"
                    label-for="input-1"
                    :invalid-feedback="emailInvalidFeedback"
                    :valid-feedback="emailValidFeedback"
                    :state="emailState"
            >
                <b-form-input id="input-1" v-model="email" :state="emailState" trim data-cy="email"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="fieldset-2"
                    description="Let us know your password."
                    label="Enter your password"
                    label-for="input-1"
                    :invalid-feedback="passwordInvalidFeedback"
                    :valid-feedback="passwordValidFeedback"
                    :state="passwordState"
            >
                <b-form-input id="input-2" v-model="password" :state="passwordState" trim data-cy="password"></b-form-input>
            </b-form-group>
            <base-button :disabled="!(emailState && passwordState)" @click="attempt" variant="primary">Submit</base-button>
        </b-container>
    </auth-page-transition>
</template>

<script>
    import AuthPageTransition from "../../components/shared/AuthPageTransition";
    export default {
        name: 'Login',
        components: {
            AuthPageTransition
        },
        data: () => ({
            email: '',
            password: ''
        }),
        computed: {
            emailState() {
                return this.email.length >= 4;
            },
            passwordState() {
                return this.password.length >= 6;
            },
            emailInvalidFeedback() {
                if (this.email.length > 4) {
                    return '';
                } else if (this.email.length > 0) {
                    return 'Enter at least 4 characters';
                } else {
                    return 'Please enter something';
                }
            },
            passwordInvalidFeedback() {
                if (this.password.length > 4) {
                    return '';
                } else if (this.password.length > 0) {
                    return 'Enter at least 4 characters';
                } else {
                    return 'Please enter something';
                }
            },
            emailValidFeedback() {
                return this.emailState === true ? 'Thank you' : '';
            },
            passwordValidFeedback() {
                return this.passwordState === true ? 'Thank you' : '';
            }
        },
        methods: {
            attempt () {
                this.$router.push({name: 'home'})
            }
        }
    }
</script>
