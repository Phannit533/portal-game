<template>
    <h1 class="text-white m-5">Action Games</h1>
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
            'image': "https://nowifigamesblog.com/wp-content/uploads/2020/04/Action-Games-for-Android.png"
        },
        {
            'image': "https://assets-prd.ignimgs.com/2019/12/04/1ign-goty-noms-2019-best-action-game-1575417989727.png"
        },
        {
            'image': "https://hips.hearstapps.com/hmg-prod/images/devilmaycry5-1574805012.jpg"
        },
        {
            'image': "https://i.ytimg.com/vi/UTPQ7f2wb9Y/maxresdefault.jpg"
        }, {
            'image': "https://www.androidauthority.com/wp-content/uploads/2019/07/The-King-of-Fighters-AllStar-best-fighting-games-for-Android.jpg"
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
