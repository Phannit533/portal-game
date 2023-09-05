<template>
      <v-app>
          <TheNavbar v-if="$route.path !=='/login' && $route.path !=='/register' && $route.path !=='/forgot_password' && $route.path !=='/reset_password' "></TheNavbar>
          <v-main>

              <router-view></router-view>
          </v-main>
        </v-app>      
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue';
</script>
<style scoped>
    *{
    margin: 0%;
    background-color: rgb(0, 0, 0);
    font-family: sans-serif;
    height: auto;
    /* background-image: url(assets/img3.png);
    background-size: cover; */

    }
 
</style>
