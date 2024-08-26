<template>
    <HeaderComponent />
    <h1>Add Restaurant</h1>
    <form class="AddRestaurant">
        <input type="text" placeholder="Restaurant Name" v-model="restaurant.name" />
        <input type="text" placeholder="Restaurant Contact" v-model="restaurant.contact" />
        <input type="text" placeholder="Restaurant Address" v-model="restaurant.address" />
        <button @click="AddRestaurant" :disabled="loading">
            {{ loading ? 'Adding Restaurant...' : 'Add Restaurant' }}
        </button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
</template>


<script>
    import axios from 'axios'
    import HeaderComponent from './Header.vue';

    export default {
        name: 'AddRestaurant',

        components: {
            HeaderComponent
        },

        data() {
            return {
                restaurant: {
                    name: '',
                    contact: '',
                    address: '',
                },
                
                loading: false,
                errorMessage: ''
            }
        },


        methods: {
            async AddRestaurant() {
                if (!this.restaurant.name || !this.restaurant.contact || !this.restaurant.address) {
                    this.errorMessage = 'All fields are required.';
                    return;
                }

                this.loading = true;
                this.errorMessage = '';

                try {
                    let result = await axios.post("http://localhost:3000/restaurants", {
                        name: this.restaurant.name,
                        contact: this.restaurant.contact,
                        address: this.restaurant.address
                    });

                    if (result.status === 201) {
                        this.$router.push({ name: 'home' });
                    } else {
                        this.errorMessage = 'Failed to sign up. Please try again.';
                    }

                } catch (error) {
                    console.error("Signup error:", error);
                    this.errorMessage = 'An error occurred during signup. Please try again.';
                } finally {
                    this.loading = false;
                }
            },

        },

        mounted() {
            let user = localStorage.getItem("user-info");
            if (!user) {
                this.$router.push({ name: 'login' });
            }
        }
    }
</script>














<style scoped>
    h1 {
        margin: 20px 0;
    }

    .AddRestaurant input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid skyblue;
    }
    .AddRestaurant button {
        width: 300px;
        height: 40px;
        border: 1px solid skyblue;
        background: skyblue;
        color: #fff;
        cursor: pointer;
        transition: background 0.3s ease;
    }
    .AddRestaurant button:hover {
        background: deepskyblue;
    }

    .error {
        color: red;
        text-align: center;
        margin-top: 20px;
    }
</style>
