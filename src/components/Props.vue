<template>
    <div>
        <p v-for="item in name" :key="item.fullname">
            {{item.fullname}} -- {{item.email}}
        </p>

        <button v-on:click="UpdateTitle">Update Parent Title</button>
    </div>
</template>


<script>
    export default {
        name: 'PropsComponent',
        props: [
            'name',
        ],

        methods: {
            UpdateTitle() {
                this.$emit("ChangeTitle", "Props Updated");
            }
        },
    }
</script>

