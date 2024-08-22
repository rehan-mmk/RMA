<template>
  <div id="EmployeesData">
    <h1>Fetch Employees Data From API</h1>
    <table border="1px" style="text-align: left; margin: 0 auto">
            <thead>
                <th>S/No</th> <th>Name</th> <th>Salary</th> <th>Age</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="item.id">
                    <td>{{index + 1}}</td>
                    <td>{{item.employee_name}}</td>
                    <td>{{item.employee_salary}}</td>
                    <td>{{item.employee_age}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
    // import * as Vue from 'vue'
    import axios from 'axios'
    // import VueAxios from 'vue-axios'

    // const app = Vue.createApp(...)  ;
    // app.use(VueAxios, axios);

    export default {
        name: 'EmployeesComponent',
        
        data() {
            return {
                list: undefined
            }
        },

        mounted() {
            axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then(resp => {
                this.list = resp.data.data;
                // console.warn(resp.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
    };
</script>










<style scoped>
    #EmployeesData {
        margin: 50px 0;
    }
</style>