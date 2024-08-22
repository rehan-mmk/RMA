<template>
    <div class="products">
        <h1>Products Component</h1>
    </div>
</template>


<script>
    export default {
        name: 'ProductsComponent',
    }
</script>


<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    div.products {
        background-color: antiquewhite;
        height: 200px;
        width: 400px;
        margin-top: 20px;
    }

    div.products h1 {
        line-height: 200px;
        text-align: center;
    }
</style>
