<template>
    
    <img class="logo" alt="Vue logo" src="../assets/restologo.jpg">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" Placeholder="Name" v-model="name">
        <input type="email" Placeholder="Email" v-model="email">
        <input type="password" Placeholder="Password" v-model="password">

        <button v-on:click="signup">Signup</button>
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
            }
        },

        methods: {
            async signup() {
                let result = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                if(result.status == 201){
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({name:'Home'});
                }

                console.warn(result.data);

            }
        }, 

        mounted() {
            let user = localStorage.getItem("user-info");
            if(user) {
                this.$router.push({name:'Home'});
            }
        },
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
    }
</style>
