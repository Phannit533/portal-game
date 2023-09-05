<template>
    <h1 class="text-white m-5">2 Player Games</h1>
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
            'image': "https://img.tapimg.net/market/images/dcb91af16f9e3737c0dac04010b1bc18.jpg?imageView2/0/w/720/h/405/q/80/format/jpg/interlace/1/ignore-error/1"
        },
        {
            'image': "https://images.crazygames.com/basket-random/20230126094209/basket-random-cover?auto=format,compress&q=75&cs=strip"
        },
        {
            'image': "https://images.crazygames.com/games/basketball-stars-2019/cover-1583231506155.png?auto=format,compress&q=75&cs=strip"
        },
        {
            'image': "https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/12/it-takes-two-game-of-the-year.jpg?w=1000&h=600&crop=1"
        },
        {
            'image': "https://image.winudf.com/v2/image1/Y29tLkppbmRvQmx1LlR3b1BsYXllckdhbWVzQ2hhbGxlbmdlX3NjcmVlbl83XzE2NDYyOTg4MzBfMDA4/screen-7.webp?fakeurl=1&type=.webp"
        },
        {
            'image': "https://assets.gamingdeals.com/storage/best-2-player-switch-games-article-header-1648203281yfT5x.jpg"
        },
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
