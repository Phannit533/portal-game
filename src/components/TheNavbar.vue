<template>
    <v-app-bar app style="background-color: #1b1818;" dark>


        <v-toolbar-title class="text-uppercase font-weight-bold">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <router-link :to="{name:'home'}" class="text-decoration-none text-white">
                Direxplay Game
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-card-text>
            <v-text-field style="background-color: #2e2222; color: white; border: 1px solid black; margin: 2%;" density="compact" variant="outlined" label="Search" append-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-btn id="my_game" text>
            <router-link :to="{ name: 'my_game' }" exact-active-class="active" active-class="active" class="text-decoration-none text-white mr-4">
                My Game
            </router-link>
        </v-btn>
        <v-btn id="my_game" text>
            <router-link :to="{ name: 'all_games' }" exact-active-class="active" active-class="active" class="text-decoration-none text-white mr-4">
                See All
            </router-link>
        </v-btn>
        <router-link v-if="dataCookie == ''" :to="{ name: 'login' }">
            <v-btn text exact-active-class="active" active-class="active" class="text-decoration-none text-white bg-green-950 btn-login">
                Log in
            </v-btn>
        </router-link>

        <v-menu>
            <template v-slot:activator="{ props }">
                <p class="name ml-4" style="padding-right: 0.5%; color: white;">{{ dataCookie.first_name }}
                    {{ dataCookie.last_name }}</p>
                <img class="profile mr-5" v-if="dataCookie != ''" @click="profile()" :src="dataCookie.profile" style="border-radius: 50%; margin-right: 1%;" alt="" v-bind="props">
                <v-btn v-else icon="mdi-account-circle-outline" class="icons" style="color: white;" v-bind="props" @click="showDialog()"></v-btn>
                <!-- <i v-else  style="color: white;" v-bind="props" @click="showDialog()" class="fa-regular fa-user icons" ></i> -->
            </template>
            <div class="signup" v-if="isProfile">
                <h1>Your Profile</h1>
                <div class="file-input">
                    <img :src="dataCookie.profile" alt="">
                    <input type="file" v-on:change="handleFileChange">
                </div>
                <h3>{{ dataCookie.first_name }}
                    {{ dataCookie.last_name }}</h3>
                <p>{{ dataCookie.email }}</p>
                <button @click="logout()">LOGOUT</button>
            </div>
            <v-list v-if="dashbordShow" style="background-color: rgba(57, 53, 53, 0.845); color: white;">
                <v-list-item :style="{ width: width }" color="black">
                    <v-list-item-title>
                        <router-link :to="{ name: 'register' }" class="text-decoration-none text-black">
                            <v-container class="container">
                                <v-row align="center">
                                    <v-col cols="2">
                                        <v-img src="../assets/register.png" alt="Placeholder image" :style="{ width: iconWidth }"></v-img>
                                    </v-col>
                                    <v-col cols="10">
                                        <span class="ml-4 text-white">Register</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </router-link>
                    </v-list-item-title><br/>
                    <v-list-item-title>
                        <router-link :to="{ name: 'login' }" class="text-decoration-none text-black">
                            <v-container class="container">
                                <v-row align="center">
                                    <v-col cols="2">
                                        <i class="fa-solid fa-right-to-bracket" style="color: #0da00f; font-size: 20px;"></i>
                                    </v-col>
                                    <v-col cols="10">
                                        <span class="ml-4 text-white">Login</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </router-link>
                    </v-list-item-title><br/>
                    <v-list-item-title>
                        <router-link :to="{ name: 'login' }" class="text-decoration-none text-black">
                            <v-container class="container bg-white" style="border-radius: 100px;">
                                <v-row align="center">
                                    <v-col cols="10">
                                        <span class="flex flex-row items-center p-1 w-6 h-6 "><img class="m-3" src="../assets/google.png" alt="">
                                            Sign in with
                                                                                                              Google</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </router-link>
                    </v-list-item-title><br/>
                    <v-list-item-title>
                        <router-link :to="{ name: 'login' }" class="text-decoration-none text-black">
                            <v-container class="container bg-blue" style="border-radius: 100px;">
                                <v-row align="center">
                                    <v-col cols="10">
                                        <span class="flex flex-row items-center p-1 w-6 h-6 "><img class="m-3" src="../assets/facbook.png" alt="" width="15">
                                            Continue with Facebook</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </router-link>
                    </v-list-item-title><br/>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
    <v-navigation-drawer
        style="background-color: #1b1818; position: fixed; opacity: 1;" v-model="drawer">
        <!-- <router-link class="category" style="color:white; text-decoration: none;" :to="{name:'home'}" >{{}}</router-link> -->
        <v-list
            density="compact" nav v-for="(item, index) in items" :key="index">
            <router-link class="router" :to="{name:item.router}">
                <v-list-item class="text-white" :prepend-icon="item.icon" :title="item.title" value="" :active="false"></v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
    <div class="page-end">
        <router-link class="flex flex-col items-center" :to="{name:'home'}">
            <i class="fa-solid fa-house" style="color: #e5e7eb;"></i>
            <span style="color: white;">HOME</span>
        </router-link>
        <router-link class="flex flex-col items-center hover:text-gray-50" :to="{ name: 'my_game' }" style="color: #ffffff;  text-decoration: none;">
            <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
            <span>
                MY GAME
            </span>
        </router-link>
    </div>
</template>
<script setup>
    import "@fortawesome/fontawesome-free/css/all.css";
    import axios from 'axios';

    import {ref, onMounted, watch} from 'vue';
    const width = ref("300px");
    const iconWidth = ref("2000px");
    const isDailog = ref(false)
    const isProfile = ref(false)
    const dataCookie = ref("")
    const dashbordShow = ref(false)
    const drawer = ref(false)
    const group = ref(null)
    const items = ref([
        {
            title: 'Home',
            icon: 'mdi-home-circle',
            router: 'home'

        },
        {
            title: 'Recently played',
            icon: 'mdi-alarm',
            router: 'recent'

        },
        {
            title: 'New',
            icon: 'mdi-new-box',
            router: 'new'

        },
        {
            title: 'Updated',
            icon: 'mdi-update',
            router: 'updated'

        }, {
            title: 'Random',
            icon: 'mdi-arrow-all',
            router: 'random'


        }, {
            title: '2 Player',
            icon: 'mdi-account-multiple',
            router: '2player'

        }, {
            title: 'Actions',
            icon: 'mdi-gesture-tap-button',
            router: 'action'
        }, {
            title: 'Adventure',
            icon: 'mdi-account-cowboy-hat',
            router: 'adventure'
        },
    ])

    watch(group, () => {
        drawer.value = false
    })
    // const router = useRouter();
    const newProfile = ref("")
    const showDialog = () => {
        isDailog.value = true
        dashbordShow.value = true
    }
    const profile = () => {
        isProfile.value = true
    }
    const getSession = async () => {
        axios.get('http://localhost:5000/user/session', {withCredentials: true}).then(res => {
            dataCookie.value = res.data.data
            console.log(dataCookie.value);
        }).catch(err => {
            console.error(err);
        });
    };

    async function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    // const router = useRouter();
    const handleFileChange = async (event) => {
        newProfile.value = await getBase64(event.target.files[0]);
        console.log(newProfile.value);
        await axios.put(`http://localhost:5000/user/changeProfile/${
            dataCookie.value.id
        }`, {
            profile: newProfile.value
        }, {withCredentials: true}).then(res => {
            console.log(res.data)
            window.location.href = "/"
        }).catch(err => {
            console.error(err)
        })
    }

    const logout = () => {
        axios.post('http://localhost:5000/user/logout', {}, {withCredentials: true}).then(res => {
            console.log(res.data)
            isProfile.value = false
            // router.push({ name: 'home' })
            window.location.href = "/"
        }).catch(err => {
            console.error(err)
        })
    }
    onMounted(() => {
        getSession();

    })
</script>
<style scoped>

    .v-navigation-drawer {
        position: fixed;
        left: 0;
        top: 1;
    }
    .active {

        border-bottom: #0da00f solid 5px;
    }
    .v-list-item-active {

        border-bottom: #0da00f solid 5px;
    }


    .container:hover {
        background-color: #745b5b;
        box-shadow: 1px 1px 5px #888;
    }
    .category {
        display: flex;
        flex-direction: column;
    }
    .icons,
    .v-app-bar-nav-icon {
        color: #ffffff;
        font-size: 20px;
        margin-left: 1%;
        margin-right: 2%;
    }
    .page-end {
        display: none;
    }
    .signup {
        width: 100%;
        background-color: rgba(20, 20, 20, 0.915);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        color: rgb(255, 255, 255);
        border-radius: 5px;
    }
    ::placeholder {
        color: rgb(159, 140, 140);
    }
    .file-input img {
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
    }
    .profile {
        width: 50px;
        height: 50px;
    }
    .file-input img {
        width: 70px;
        height: 70px;
    }
    .file-input input {
        background-color: brown;
    }
    .file-input input[type="file"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 35%;
        height: 32%;
        opacity: 0;
        margin-left: 33%;
        margin-top: 30%;
        cursor: pointer;
        border-radius: 50%;
    }
    .signup button {
        background: rgb(8, 164, 47);
        width: 100%;
        margin-top: 5%;
        padding: 2%;
        border-radius: 10px;

    }
    #my_gmae {
        background: #cf1717;
    }
    @media(max-width:800px) {
        .page-end {
            position: fixed;
            bottom: 0;
            z-index: 2000;
            background: #1b1818;
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-evenly;
            padding: 1.5%;
        }
        .name,
        #my_game,
        .btn-login {
            display: none;
        }
        .icons {
            margin-right: 4%;
        }
        .page-end span{
            font-size: 10px;
        }
    }
</style>
