<template>
    <img class="logo" alt="Vue logo" src="../assets/restologo.jpg">
    <h1>Login</h1>
    <div class="login">
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <button @click="login">Login</button>
        <p class="signuplink">
            <router-link to="/sign-up">Signup</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginComponent',

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        async login() {
            try {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );

                if (result.status === 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push({ name: 'home' });
                } else {
                    alert("Invalid email or password");
                }

            } catch (error) {
                console.error("There was an error logging in:", error);
                alert("An error occurred while trying to log in.");
            }
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
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.login button {
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;
}
.login button:hover {
    background: deepskyblue;
}
.signuplink {
    margin-top: 20px;
}
</style>
