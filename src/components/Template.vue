<template>
    <div class="template">
        <h1 v-html="RowHtml"></h1>
        <h4 v-once>{{name}}</h4>
        <h4>{{name}}</h4>
        <h4>{{a+b}}</h4>
        <h4>{{ok?"Ok is True":"No"}}</h4>
        <button v-bind:disabled="DisableBtn" v-on:click="ChangeName"> Click Me</button>
        <button  v-on:click="disable"> Click To Disable</button>
    </div>
</template>


<script>
    export default {
        name: 'TemplateComponent',
        data() {
            return {
                name: 'Khan',
                a: 10,
                b: 5,
                ok: true,
                RowHtml: "Template in vue js",
                DisableBtn: true,
            }
        },
        methods: {
            ChangeName() {
                this.name = 'Petter'
            },
            disable() {
                this.DisableBtn = !this.DisableBtn
            }
        },
    }
</script>


<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    div.template {
        background-color: antiquewhite;
        height: 200px;
        width: 400px;
        margin-top: 20px;
    }

    div.template h1 {
        line-height: 100px;
        text-align: center;
    }
</style>
