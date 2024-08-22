<template>
    <div>
      <h1 id="demo">{{LifeCycle}}</h1>

      
    </div>
</template>


<script>
    export default {
        name: 'LifeCycle',

        data() {
            return {
                name: "hazrat ali",
                LifeCycle: "LifeCycle"
            }
        },


        // beforeCreate: function() {
        //     this.name = "khan";
        //     console.warn("Before Create", ", ", this.name);
        // },

        // created: function() {
        //     console.warn("Created", ", ", this.name);
        // },

        // beforeMount: function() {
        //     // console.warn("Before Mount", ", ", this.$el);
        //     console.warn("Before Mount", document.getElementById("demo"));
        // },
        
        // mounted: function() {
        //     // console.warn("mounted", ", ", this.$el);
        //     console.warn("mounted", document.getElementById("demo"));
        // },

        //when element is destroying (removing from dom)
        // but now this is deprecated no used any more 
        // beforeDestroy: function() {
        //     console.warn("Before Destroy");
        // },

        // beforeUnmount: function() {
        //     alert("before");
        //     console.warn("Before Unmount");
        // },

        // destroyed: function() {
        //     // console.warn("mounted", ", ", this.$el);
        //     console.warn("destroyed", document.getElementById("demo"));
        // },

        // unmounted: function() {
        //     alert("destroyed");
        //     console.warn("unmounted");
        // },

    }
</script>

