<template>

    <div class="detail w-screen bg-black mt-10">
        <div class="info flex flex-col items-center">
            <div class="play rounded-2xl">
                <div class="button flex flex-row justify-between items-center w-full">
                    <p class="pl-6 w-6/12">Car game</p>
                    <!-- <img src="../../assets/img2.jpg" class="bg-green-700 rounded-2xl" alt=""> -->
                    <div class="icons flex flex-row justify-evenly items-center">
                        <i class="fa-sharp fa-solid fa-thumbs-up cursor-pointer" style="color: #ffffff;">
                            <span class="font-sans font-normal">
                                1.3k</span>
                        </i>
                        <i class="fa-solid fa-thumbs-down cursor-pointer" style="color: #ffffff;">
                            <span class="font-sans font-normal">
                                999</span>
                        </i>
                        <i class="fa-solid fa-heart cursor-pointer" style="color: #ffffff;"></i>
                        <DialogComponent></DialogComponent>
                      
                    </div>
                </div>
            </div>
            <div class="line mt-5 mb-5"></div>
            <div class="data flex flex-col items-start  p-5">
                <div>
                    <h1 class="text-start">Car Game</h1>
                    <h3>Rating: 8.9(143,018 votes)</h3>
                    <h3>Developer: Visal</h3>
                    <h3>Released: September 2021</h3>
                    <h3>Last Updated: June 2023</h3>
                    <h3>Technology: HTML5</h3>
                    <h3>Platforms: Browser (desktop, mobile, tablet), Android</h3><br>
                    <h3>Kirka.io is an online FPS game with a voxelated art style. You can play teams, solo or parkour mode in a range of battle locations. Once you've picked a game, you can customize your weapons loadout to suit your playing style.</h3><br>
                </div>
                <div>
                    <h1 class="mb-5">Control</h1>
                    <ul class="ml-5">
                        <li>WASD = move</li>
                        <li>Space = jump</li>
                        <li>P / Esc = open the Change Weapon menu</li>
                        <li>Left-click = shoot</li>
                        <li>Right-click = aim</li>
                        <li>Shift = crouch</li>
                        <li>E = dash</li>
                        <li>1, 2, 3 = switch weapons</li>
                    </ul><br>
                </div>
                <div class="flex flex-col justify-center w-full">
                    <h1>Trailer</h1>
                    <iframe class="flex flex-row items-center " width="" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
                <div class="comment w-full mt-5">
                    <div class="flex flex-row w-full items-center justify-between">
                        <h1>Comments</h1>
                        <DialogComponent></DialogComponent>
                    </div>
                    
                    <CommentComponent></CommentComponent>
                </div>

            </div>
        </div>
        <div class="similar">
            <h1 class="text-center">Similar Games</h1>
            <div class="scroll flex flex-row justify-evenly flex-wrap mt-5">
                <div v-for="(game, index) in games" :key="index">
                    <img class="bg-primary rounded-lg object-cover h-40 w-56 m-4 transform transition duration-500 hover:scale-110" :src="game.image">
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
    import {ref} from "vue";
    import CommentComponent from './CommentComponent.vue'
    import DialogComponent from '../form/DialogComponent.vue'
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

    ];
</script>
<style scoped>
    h1 {
        font-size: 20px;
        margin-bottom: 1%;
    }
    h3 {
        margin-left: 2%;
    }
    .info {
        width: 80%;
    }
    .icons, .button p{
        width: 50%;
    }
    .play {
        background-color: aqua;
        background-image: url('../../assets/img2.jpg');
        background-size: cover;
        width:80%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .data {
        width: 80%;
        background: #292828b9;

    }
    .button img {
        width: 250px;
        height: 150px;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .button {
        background-color: rgba(0, 0, 0, 0.712);
        opacity: 1;
        height: 10%;
    }
    .similar {
        background-color: rgb(0, 0, 0);
        width: 40%;
        border-left: 5px solid #918585;
        margin-left: 2%;

    }
    .line {
        border: 5px solid #918585;
        width: 80%;
    }
    .scroll {
        width: 100%;
        height: 35%;
        overflow: auto;
    }
    .detail {
        display: flex;
        flex-direction: row;
    }
    @media (max-width:1100px) {
    .detail{
        display: flex;
        flex-direction: column;
        padding: 5%;
    }
    img{
        width: 150px;
        height: 100px;
    }
    .play{
        width: 100%;
        height: 500px;
    }
    .info, .line, .data, .similar{
    width: 100%;
    margin: auto;
    border-left: none;
  } 
  .similar{
    margin-top: 1%;
  }
}
@media (max-width: 768px) {
    .play{
        width: 100%;
        height: 200px;
    }
    img{
        width: 140px;
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
    h3,li{
        font-size: 13px;
    }
    h1{
        font-size: 16px;
    }
    iframe{
        height: 160px;
    }
}
</style>
