<template>
    <div>
        <h1>Hello! This is about component</h1>
        <h2>Bio: {{ bio }}</h2>
        <h3>Age: {{age}}</h3>
        <button v-on:click="hello('Parameter is used')">Mouse Click</button>
        <br>
        <br>
        <button v-on:mouseover="mouse('Parameter is used')">Mouse Over</button>
        <br>
        <br>
        <h1 v-if="show">Conditional Rendering</h1>
        <!-- <h1 v-else>Conditional rendering else block</h1> -->
        <br>
        <br>
        <button v-on:click="display">Show on Click</button>

        <p v-for="item in name" :key="item.fullname">
            {{item.fullname}} -- {{item.email}}
        </p>
    </div>
</template>


<script>
    export default {
        name: 'GeneralComponent',
        // props: {
        //     bio: String,
        //     age: Int16Array,
        //     name: String,
        // },
        props: [
            'name', 
        ],
        methods: {
            hello(data) {
                alert('You clicked the button');
                alert(data);
            },
            mouse(data) {
                alert(data);
            },
            display() {
                // this.show=false
                this.show = !this.show
            }
        },
        // data function: used for defining properties in vue js 
        // every component have own data function
        data() {
            return {show:true}
        }
    }
</script>

