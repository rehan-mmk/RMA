<template>
    <div class="login">
        <h1>Post API</h1>

        <form @submit="SubmitData" method="post">
            <input type="text" name="employee_name" Placeholder="Employee Name" v-model="employee.employee_name"><br><br>
            <input type="text" name="employee_salary" Placeholder="Employee Salary" v-model="employee.employee_salary"><br><br>
            <input type="number" name="employee_age" Placeholder="Employee Age" v-model="employee.employee_age"><br><br>

            <button>Submit</button>
        </form>
    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        name: 'PostApi',

        data() {
            return {
                employee: {
                    employee_name: null,
                    employee_salary: null,
                    employee_age: null
                }
            }
        },

        methods: {

            SubmitData(e) {
                axios.post('https://dummy.restapiexample.com/api/v1/create', this.employee)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
                e.preventDefault();
            }
        }
    }
</script>






<style scoped>
    .login {
        margin: 50px 0;
        border: 1px solid #ccc;
    }
</style>
