<template>
    <div class="register">
        <h1>Register</h1>
        <input type="text" Placeholder="Name" v-model="FormData.name"><br><br>
        <input type="password" Placeholder="Password" name="Password" v-model="FormData.password"><br><br>

        <input type="checkbox" id="Cricket" value="Cricket" v-model="FormData.hobby">
        <label for="Cricket">Cricket</label>&nbsp;
        <input type="checkbox" id="Football" value="Football" v-model="FormData.hobby">
        <label for="Football">Football</label><br><br>

        <input type="radio" id="Male" value="Male" v-model="FormData.gender">
        <label for="Male">Male</label> &nbsp;&nbsp;&nbsp;
        <input type="radio" id="Female" value="Female" v-model="FormData.gender">
        <label for="Female">Female</label><br><br>

        <button v-on:click="submit">Submit</button>
    </div>
</template>


<script>
    export default {
        name: 'RegisterComponent',
        data() {
            return {
                FormData: {
                    name: null,
                    password: null,
                    hobby: [],
                    gender: null
                }
            }
        },

        methods: {
            submit() {
                console.warn(this.FormData)
                // console.warn(this.FormData.name);
            }
        }
    }
</script>






<style scoped>
    .register {
        margin: 50px 0;
        border: 1px solid #ccc;
    }
</style>
