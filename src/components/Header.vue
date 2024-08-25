<template>
    <div class="nav">
        <a href=""> Home </a>
        <a href=""> Add Restaurant </a>
        <a href=""> Update Restaurant </a>
        <a v-on:click="logout" href="#"> Logout </a>
    </div>
</template>


<script>

    export default {
        name: 'HeaderComponent',

        methods: {
            logout() {
                localStorage.clear();
                this.$router.push({ name: 'login' });
            }
        }
    }
</script>


<style scoped>
    .nav {
        background-color: #333;
        overflow: hidden;
    }

    .nav a {
        text-decoration: none;
        float: left;
        color: #f2f2f2f2;
        padding: 16px 14px;
        text-align: center;
        font-size: 17px;
        margin-right: 5px;
    }

    .nav a:hover {
        background: #ddd;
        color: #333;
    }
</style>
