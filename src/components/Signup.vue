<template>
    <img class="logo" alt="Vue logo" src="../assets/restologo.jpg">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Name" v-model="name" />
        <input type="email" placeholder="Email" v-model="email" />
        <input :type="showPassword ? 'text' : 'password'" placeholder="Password" v-model="password" />
        <button @click="signup" :disabled="loading">{{ loading ? 'Signing up...' : 'Signup' }}</button>
        <p class="loginlink">
            <router-link to="/">Login</router-link>
        </p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignupComponent',

    data() {
        return {
            name: '',
            email: '',
            password: '',
            loading: false,
            showPassword: false,
            errorMessage: ''
        }
    },

    methods: {
        async signup() {
            if (!this.name || !this.email || !this.password) {
                this.errorMessage = 'All fields are required.';
                return;
            }

            if (!this.validateEmail(this.email)) {
                this.errorMessage = 'Please enter a valid email address.';
                return;
            }

            if (this.password.length < 8) {
                this.errorMessage = 'Password must be at least 8 characters long.';
                return;
            }

            this.loading = true;
            this.errorMessage = '';

            try {
                let result = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                if (result.status === 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({ name: 'home' });
                } else {
                    this.errorMessage = 'Failed to sign up. Please try again.';
                }

            } catch (error) {
                console.error("Signup error:", error);
                this.errorMessage = 'An error occurred during signup. Please try again.';
            } finally {
                this.loading = false;
            }
        },

        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    },

    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style scoped>
h1 {
    margin-bottom: 30px;
}
.logo {
    width: 100px;
    height: 100px;
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;
}
.register button:hover {
    background: deepskyblue;
}
.loginlink {
    margin-top: 20px;
}
.error {
    color: red;
    text-align: center;
    margin-top: 20px;
}
</style>
