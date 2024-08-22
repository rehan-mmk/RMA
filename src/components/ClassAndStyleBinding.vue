<template>
    <!--  
    class with array
    style with property
    -->
    <div class="template">
        <h1 class="homestyle">Class And Style Binding</h1>
        <h1 v-bind:style="{color:'blue'}"> Style Binding</h1>
        <h1 v-bind:style="{color:ColorKey}"> Style Binding</h1>

        <h3 v-bind:class="{display:show, color:show}"> Class With Condition (object)</h3>
        <h3 v-bind:class="[aclass]"> Class With Array</h3>
        <h3 v-bind:class="['ArrayClass']"> Class With Array</h3>
        <h3 v-bind:class="[show?'ArrayClass': 'no class']"> Class With Array (condition)</h3>
    </div>
</template>



<script>
    export default {
        name: 'ClassAndStyleBinding',
        data() {
            return {
                show: true,
                aclass: 'ArrayClass',
                ColorKey: 'red',
            }
        }
    }
</script>




<style scoped>

    div.template {
        background-color: antiquewhite;
        height: 300px;
        margin: 50px 0;
    }


    .homestyle {
        color: orange;
    }

    .display {
        background-color: brown;
    }

    .color {
        color: white;
    }

    .ArrayClass {
        background-color: lightblue;
    }
</style>
