<template>
    
    <img class="logo" alt="Vue logo" src="../assets/restologo.jpg">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" Placeholder="Name">
        <input type="email" Placeholder="Email">
        <input type="password" Placeholder="Password">

        <button v-on:click="submit">Submit</button>
    </div>
</template>


<script>
    export default {
        name: 'SignupComponent',
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
