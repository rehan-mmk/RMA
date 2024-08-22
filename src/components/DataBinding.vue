
<template>
  <div class="DataBinding">
    <!-- what i write reflects (shows) directly --> 
    <h1> Data Binding </h1>
    <h2 style="white-space:pre-line">{{ message }}</h2>
    <!-- <input type="text" v-model="message"> -->
    <textarea type="text" v-model="message" />
  </div>
</template>


 
<script>
  export default {
    name: 'DataBinding',
    data() {
      return {
        message: "hi",
      }
    }
  }
</script>



<style scoped>
  .DataBinding {
    margin-bottom: 50px;
    text-align: center;
  }
</style>
