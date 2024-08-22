<template>
  <div id="EmployeesData">
    <h1>Delete API Records</h1>
    <table border="1px" style="text-align: left; margin: 0 auto">
      <thead>
        <th>S/No</th>
        <th>Name</th>
        <th>Salary</th>
        <th>Age</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.employee_name }}</td>
          <td>{{ user.employee_salary }}</td>
          <td>{{ user.employee_age }}</td>
          <td>
            <button v-on:click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DeleteApi',

  data() {
    return {
      users: null
    };
  },

  methods: {
    GetUsers() {
      axios
        .get('https://dummy.restapiexample.com/api/v1/employees')
        .then(resp => {
          this.users = resp.data.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },

    deleteUser(id) {
      if (confirm("Are you sure you want to delete this record?")) {
        axios
          .delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
          .then(result => {
            console.log('Delete response:', result);
            // Update the local list by removing the deleted user
            this.users = this.users.filter(user => user.id !== id);
          })
          .catch(error => {
            console.error('Error deleting data:', error);
          });
      }
    }
  },

  mounted() {
    this.GetUsers();
  }
};
</script>

<style scoped>
.login {
  margin: 50px 0;
  border: 1px solid #ccc;
}
</style>
