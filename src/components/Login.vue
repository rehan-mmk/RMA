<template>
    <div class="login">
        <h1>Login</h1>
        <p v-if="error.length">
            <b>Fill Required Fields</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id">
                    {{e}}
                </li>
            </ul>
        </p>
        <form @submit="login">
            <input type="text" Placeholder="Name" v-model="name"><br><br>
            <input type="password" Placeholder="Password" v-model="password"><br><br>

            <button>Submit</button>
        </form>
    </div>
</template>


<script>
    export default {
        name: 'LoginComponent',

        data() {
            return {
                error: [],
                name: null,
                password: null,
            }
        },

        methods: {
            login(e) {
                this.error = [];
                if(this.name && this.password) {
                    console.log("No Error");
                    // return true;
                }
                if(!this.name) {
                    this.error.push("User Name Is Required");
                }
                if(!this.password) {
                    this.error.push("Password Is Required");
                }
                
                console.log(this.error);
                e.preventDefault();
            }
        }
    }
</script>






<style scoped>
    .login {
        margin: 50px 0;
        border: 1px solid #ccc;
    }
</style>
