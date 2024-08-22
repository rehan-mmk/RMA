<template>
    <div class="home">
        <h1>Home Component</h1>
        <p>
            <router-link to="user/1"> Ahmad </router-link><br><br>
            <router-link to="user/2"> Hashir </router-link><br><br>
            <router-link to="user/3"> Muhammad </router-link><br><br>
            <router-link to="user/4"> Talha </router-link><br><br>
        </p>
        <Users />
        <Products />
        <Template />
        <ClassAndStyleBinding />
    </div>
</template>


<script>
    import Users from './Users.vue'
    import Products from './Products.vue'
    import Template from './Template.vue'
    import ClassAndStyleBinding from './ClassAndStyleBinding.vue'
    
    

    export default {
        name: 'HomeComponent',
        components: {
            Users,
            Products,
            Template,
            ClassAndStyleBinding,
        }
    }
</script>


<style scoped>
    div.home {
        text-align: center;
        background-color: #dde5ec;
        height: auto;
    }
</style>
