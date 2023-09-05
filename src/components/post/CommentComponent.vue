<template>
    <div v-for="(item, index) in comments" :key="index" class="mb-5">
    <div class="flex flex-row items-center">
        <img src="../../assets/profile.png" alt="" style="border-radius: 50%;" class="w-7 mr-2"><p>{{item.username}}</p>
    </div>
    <div>
        <p class="bg-slate-50 comment-text text-black p-2.5 w-64 mt-3 ml-7">{{item.message}}</p>
    </div>
</div>
</template>
<script setup>
    import {ref} from "vue";
    const comments = ref([
        {username:"Darath Pum",message:"I like this game.👍"},
        {username:"Doeur Diet",message:"When I play this game it makes good sense."},
        {username:"Phannit Phuoy",message:"Amazing graphics.😮"},
        {username:"Soknoeurn Srun",message:"Difficult to play."},
        {username:"Sreyyoer Yoem",message:"Don't know how to play."},
        {username:"Dyna Hen",message:"Nice bro.😘🥰🤩😚"},
    ])
</script>
<style scoped>
        .comment-text{
        border-bottom-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    @media (max-width: 768px) {
    .play{
        width: 100%;
        height: 200px;
    }

    i{
        font-size: 10px;
    }
    
    .button p{
        font-size: 10px;
        width: 20%;
    }
    .icons{
        width: 60%;
    }
    p,li{
        font-size: 13px;
    }
}
</style>
