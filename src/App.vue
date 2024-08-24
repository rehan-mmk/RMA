<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <h2>{{title}}</h2> -->

  <!-- <router-view></router-view> -->

  <!-- <nav>
    <ul>
      <li><router-link to="/home"> Home </router-link></li>
      <li><router-link to="/login"> Login </router-link></li>
      <li><router-link to="/register"> Register </router-link></li>
    </ul>
  </nav> -->

  <!-- <Filter /> -->
  <!-- <Login /> -->
  <Signup />
  <!-- here bio and age are called props we use them to pass data to child component from parent  -->
  <!-- <General bio="Full Stack Developer" age="30"/> -->
  <!-- <Props v-bind:name="usersnames" v-on:ChangeTitle="update($event)"/> -->
  <!-- <Loops /> -->
  <!-- <Home /> -->
  <!-- <DataBinding nameprop="khan" /> -->

  <!-- <div v-if="display">
    <LifeCycle />
  </div> -->

  <!-- <button v-on:click="toggle"> Toggle </button> -->

  <!-- <Employees /> -->
  <!-- <PostApi /> -->
  <!-- <DeleteApi /> -->
</template>












<script>
  // import HelloWorld from './components/HelloWorld.vue'
  // import General from './components/General.vue'
  // import Loops from './components/Loops.vue'
  // import Home from './components/Home.vue'
  // import DataBinding from './components/DataBinding.vue'
  // import Props from './components/Props.vue'
  // import LifeCycle from './components/LifeCycle.vue'
  import Signup from './components/Signup.vue'
  // import Login from './components/Login.vue'
  // import Filter from './components/Filter.vue'
  // import Employees from './components/Employees.vue'
  // import PostApi from './components/PostApi.vue'
  // import DeleteApi from './components/DeleteApi.vue'


  export default {
    name: 'App',
    components: {
      Signup,
      // LifeCycle,
      // General,
      // Props,
      // Home,
      // DataBinding,
      // Login,
      // Filter,
      // Employees,
      // PostApi,
      // DeleteApi
    },


    data() {
      return {
        usersnames: [
          {fullname: "kashif", email: "kashif@gmail.com"},
          {fullname: "hayat"},
          {fullname: "adil"},
          {fullname: "ahsan"},
          {fullname: "rifaqat"},
        ],

        title: "Props Tutorial",
        display:true
      }
    },

    methods: {
      update(title) {
          this.title = title;
      },

      toggle() {
          // this.show=false
        this.display = !this.display
      }
    },
  }
</script>
















<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

