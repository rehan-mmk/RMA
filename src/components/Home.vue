<template>
    <h1>Home Component</h1>
</template>


<script>
    export default {
        name: 'HomeComponent',

        mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'login' });
        }
    }
    }
</script>


<style scoped>

</style>
