<template>
    <HeaderComponent />
    <h1>Update Restaurant</h1>
</template>


<script>
    import HeaderComponent from './Header.vue';

    export default {
        name: 'UpdateRestaurant',

        components: {
            HeaderComponent
        },

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
