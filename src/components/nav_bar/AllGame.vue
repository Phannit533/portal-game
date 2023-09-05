<template>
    <h1 class="text-white text-center mt-4 text-lg font-bold">All Games</h1>
    <div class="flex flex-row justify-evenly flex-wrap mt-5">
        <div v-for="(game, index) in games" :key="index">
            <router-link :to="{name:'detail'}"><img class="bg-primary rounded-lg object-cover h-48 w-64 m-4 transform transition duration-500 hover:scale-110" :src="game.image"></router-link>
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
        }, {
            'image': "https://img.tapimg.net/market/images/f7a7b0e49146930822d1769a37518ac9.png?imageView2/0/w/720/h/405/q/80/format/jpg/interlace/1/ignore-error/1"
        }, {
            'image': "https://play-lh.googleusercontent.com/3YQ8tP-2Bgtcn3mFyz6QRYh4_ee0l09LYo183qBr1I_vcLkRg2tsl8u7VL8XJvyJRg=w526-h296-rw"
        }, {
            'image': "https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg"
        }, {
            'image': "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/Robots.jpg"
        }, {
            'image': "https://images.crazygames.com/robot-police-iron-panther/20210316080741/robot-police-iron-panther-cover?auto=format,compress&q=75&cs=strip"
        }, {
            'image': "https://www.myabandonware.com/media/screenshots/r/robots-od4/robots_3.jpg"
        }, {
            'image': "https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg"
        }, {
            'image': "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/Robots.jpg"
        }, {
            'image': "https://images.crazygames.com/robot-police-iron-panther/20210316080741/robot-police-iron-panther-cover?auto=format,compress&q=75&cs=strip"
        }, {
            'image': "https://www.myabandonware.com/media/screenshots/r/robots-od4/robots_3.jpg"
        }, {
            'image': "https://cdn.cloudflare.steamstatic.com/steam/apps/1735850/capsule_616x353.jpg?t=1636236363"
        }, {
            'image': "https://play-lh.googleusercontent.com/-CLEz_TOOzcf8558Jzzy3LJ_QjRo7tuMuV2C4LvQwTW1SYMbxVTPixBGMGK5E38INQ=w526-h296-rw"
        }, {
            'image': "https://play-lh.googleusercontent.com/DgZWsco1eUd29ATsN-ejYRDemQjcnvH6wmjaqbKNtJXiGr_33MM9Uq-aSA7XaFAN3EQ=w526-h296-rw"
        }, {
            'image': "https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-d337a789158e.jpg"
        }, {
            'image': "https://cdn.cloudflare.steamstatic.com/steam/apps/1735850/capsule_616x353.jpg?t=1636236363"
        }, {
            'image': "https://play-lh.googleusercontent.com/-CLEz_TOOzcf8558Jzzy3LJ_QjRo7tuMuV2C4LvQwTW1SYMbxVTPixBGMGK5E38INQ=w526-h296-rw"
        }, {
            'image': "https://play-lh.googleusercontent.com/DgZWsco1eUd29ATsN-ejYRDemQjcnvH6wmjaqbKNtJXiGr_33MM9Uq-aSA7XaFAN3EQ=w526-h296-rw"
        }, {
            'image': "https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-d337a789158e.jpg"
        }, {
            'image': "https://littlethingie.com/templates/yootheme/cache/07outsideWorld-f71cd6ff.jpeg"
        }, {
            'image': "https://img.itch.zone/aW1nLzczNTI1ODYuanBn/original/ZLRNkj.jpg"
        }, {
            'image': "https://ca-times.brightspotcdn.com/dims4/default/6a984d9/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6c%2F08%2F4194b554429fbb25523813900676%2Fswitch-acnh-nd0220-screen-23.jpg"
        }, {
            'image': "https://ichef.bbci.co.uk/news/976/cpsprodpb/13729/production/_112375697_1331db7a-17c0-4401-8cac-6a2309ff49b6.jpg"
        }, {
            'image': "https://littlethingie.com/templates/yootheme/cache/07outsideWorld-f71cd6ff.jpeg"
        }, {
            'image': "https://img.itch.zone/aW1nLzczNTI1ODYuanBn/original/ZLRNkj.jpg"
        }, {
            'image': "https://ca-times.brightspotcdn.com/dims4/default/6a984d9/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6c%2F08%2F4194b554429fbb25523813900676%2Fswitch-acnh-nd0220-screen-23.jpg"
        }, {
            'image': "https://ichef.bbci.co.uk/news/976/cpsprodpb/13729/production/_112375697_1331db7a-17c0-4401-8cac-6a2309ff49b6.jpg"
        }, {
            'image': "https://apkdone.com/wp-content/uploads/2020/10/Animal-Warfare-poster.jpg"
        }, {
            'image': "https://play-lh.googleusercontent.com/Xch79ysQ0CMH_Tfgelvug49x1GQ3XFsEwnCXvYZ125nEp38JORNmElXx7_VArznQgtg=w526-h296-rw"
        }, {
            'image': "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/best-animal-games-featured-image-tunic-stray-curse-of-the-sea-rats.jpg"
        }, {
            'image': "https://cdn.cloudflare.steamstatic.com/steam/apps/1364290/capsule_616x353.jpg?t=1682051586"
        }, {
            'image': "https://apkdone.com/wp-content/uploads/2020/10/Animal-Warfare-poster.jpg"
        }, {
            'image': "https://play-lh.googleusercontent.com/Xch79ysQ0CMH_Tfgelvug49x1GQ3XFsEwnCXvYZ125nEp38JORNmElXx7_VArznQgtg=w526-h296-rw"
        }, {
            'image': "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/best-animal-games-featured-image-tunic-stray-curse-of-the-sea-rats.jpg"
        }, {
            'image': "https://cdn.cloudflare.steamstatic.com/steam/apps/1364290/capsule_616x353.jpg?t=1682051586"
        }, {
            'image': "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/19-best-endless-runner-mobile-games-ranked.jpg"
        }, {
            'image': "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/137652/Originals/image-253.jpg"
        }, {
            'image': "https://twitiq.com/wp-content/uploads/2019/08/Endless-Runner-Games.jpg"
        }, {
            'image': "https://www.emulatorpc.com/wp-content/uploads/2021/12/the-best-endless-runners-on-the-highway.jpg"
        }, {
            'image': "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/19-best-endless-runner-mobile-games-ranked.jpg"
        }, {
            'image': "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/137652/Originals/image-253.jpg"
        }, {
            'image': "https://twitiq.com/wp-content/uploads/2019/08/Endless-Runner-Games.jpg"
        }, {
            'image': "https://www.emulatorpc.com/wp-content/uploads/2021/12/the-best-endless-runners-on-the-highway.jpg"
        },
    ]
</script>
<style scoped>


    /* img:hover {
        width: 100%;
    } */
</style>
