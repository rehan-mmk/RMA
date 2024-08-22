<template>
    <div>
        <!-- filter is used to change output -->
        <!-- to change text to uppercase or lower case -->
        <!-- to convert amount to currency (dollar to pkr or pkr to dollar) -->
        <!-- to calculate percentage of amount  -->
        <!-- filters are globall you can use it any where  -->
        <h1>Hello! This is filter component</h1>

        <!-- <h3>{{name | Ucase}}</h3> -->
        <!-- <h3>{{amount | ConvertToPkr}}</h3> -->
    </div>
</template>


<script>
    export default {
        name: 'FilterComponent',

        // data function: used for defining properties in vue js 
        // every component have own data function
        data() {
            return {
                name:"atif aslam",
                amount: 100
            }
        }
    }
</script>

