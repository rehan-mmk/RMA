<template>
    <HeaderComponent />
    <h1>Hello {{name}}! Welcome Here</h1>
    <table border="1px">
            <thead>
                <th>S/No</th> <th>Name</th> <th>Contact</th> <th>Address</th> <th colspan="2"> Action </th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in restaurants" :key="item.id">
                    <td>{{index + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.contact}}</td>
                    <td>{{item.address}}</td>
                    <td> <router-link :to="'/update-restaurant/'+item.id"> Edit </router-link> </td>
                    <td> Delete </td>
                </tr>
            </tbody>
        </table>
</template>


<script>
    import HeaderComponent from './Header.vue';
    import axios from 'axios';

    export default {
        name: 'HomeComponent',

        data() {
            return {
                name: '',
                restaurants: [] 
            }
        },

        components: {
            HeaderComponent
        },

        async mounted() {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name;
            if (user) {
                let result = await axios.get('http://localhost:3000/restaurants');
                this.restaurants = result.data;
            }
            else if(!user) {
                this.$router.push({ name: 'login' });
            }
        }
    }
</script>


<style scoped>
    table {
        margin: auto;
        margin-top: 20px;
        text-align: center;
    }

    td {
        width: 160px;
        height: 40px;
    }
</style>
