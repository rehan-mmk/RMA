<template>
    <div>
        <h1>User component</h1>
        <h3>User Id Is {{UserId}}</h3>

    </div>
</template>


<script>
    export default {
        name: 'UserComponent',

        // data function: used for defining properties in vue js 
        // every component have own data function
        data() {
            return {
                UserId: this.$route.params.id
            }
        }
    }
</script>

