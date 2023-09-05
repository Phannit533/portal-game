<template>
    <h1 class="text-white m-5">Updated Games</h1>
    <hr>
    <div class="flex flex-row justify-evenly flex-wrap mt-5">
        <div v-for="(game, index) in games" :key="index">
            <img class="bg-primary rounded-lg object-cover h-48 w-64 m-4 transform transition duration-500 hover:scale-110" :src="game.image">
        </div>
    </div>


</template>
<script setup>
    import {ref} from "vue";

    const games = [
        {
            'image': "https://play-lh.googleusercontent.com/HY1QGd5eiUD7kyYJv2eW6UX5suatJ7wGjzCxlBcJNWsb6vJFK2fev5K4-ApxA7Qy4jc=w526-h296-rw"
        },
        {
            'image': "https://img.tapimg.net/market/images/dcb91af16f9e3737c0dac04010b1bc18.jpg?imageView2/0/w/720/h/405/q/80/format/jpg/interlace/1/ignore-error/1"
        },
        {
            'image': "https://img.tapimg.net/market/images/f7a7b0e49146930822d1769a37518ac9.png?imageView2/0/w/720/h/405/q/80/format/jpg/interlace/1/ignore-error/1"
        },
        {
            'image': "https://play-lh.googleusercontent.com/3YQ8tP-2Bgtcn3mFyz6QRYh4_ee0l09LYo183qBr1I_vcLkRg2tsl8u7VL8XJvyJRg=w526-h296-rw"
        }, {
            'image': "https://play-lh.googleusercontent.com/HY1QGd5eiUD7kyYJv2eW6UX5suatJ7wGjzCxlBcJNWsb6vJFK2fev5K4-ApxA7Qy4jc=w526-h296-rw"
        }, {
            'image': "https://img.tapimg.net/market/images/dcb91af16f9e3737c0dac04010b1bc18.jpg?imageView2/0/w/720/h/405/q/80/format/jpg/interlace/1/ignore-error/1"
        }
    ]
</script>
<style scoped>


img{
    width: 250px;
    height: 150px;
}
@media (max-width:800px) {
    img{
        width: 150px;
        height: 100px;
  }
}
@media (max-width:500px) {
    img{
        width: 140px;
        height: 100px;
  }
}
</style>
