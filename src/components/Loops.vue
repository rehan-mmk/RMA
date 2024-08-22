<template>
    <div>
        <h1>For loop in Vue Js</h1>
        <table border="1px" style="text-align: left;">
            <thead>
                <th>S/No</th> <th>Name</th> <th>Email</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in users" :key="item.id">
                    <td>{{index + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    export default {
        name: 'LoopsComponent',
        data() {
            return {
                users: [
                    {id: 1, name: 'Abu Bakkar', email: 'abubakkar@gmail.com'},
                    {id: 2, name: 'Umar', email: 'umar@gmail.com'},
                    {id: 3, name: 'Ali', email: 'ali@gmail.com'},
                    {id: 4, name: 'Usman', email: 'usman@gmail.com'},
                ]
            }
        }
    }
</script>

