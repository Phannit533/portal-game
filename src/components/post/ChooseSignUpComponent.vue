<template>
    <div class="dialog-card">
        <div class="dialog">
            <i class="fa-solid fa-xmark" style="color: #e8eaed; text-align: end; font-size:30px;" @click="close"></i>
            <h1 style="text-align: center; color: white;">Sign in</h1>
            <div class="button">
                <button style="background-color:white"><img src="../../assets/google.png" alt="" width="20"> Sigu in with Google</button>
                <button style="background-color: rgb(64, 113, 187); color: white;"> <img src="../../assets/facbook.png"
                        alt="" width="20">Continue with Facbook</button>
                <router-link style="width:100%;" to="/register"><button style="background-color: rgb(64, 113, 187); color: white; width:100%;" >Register with your an
                    Account</button></router-link>
                <p style="color: white; text-align: center;  margin-top:2%;">Already register? <router-link style="" to="/login"><span style=" color: rgb(11, 96, 224);"
                        @click="login">Log in</span> </router-link></p>
            </div>
        </div>
        </div>
</template>
<script setup>
import "@fortawesome/fontawesome-free/css/all.css";
</script>
<style scope>
.dialog-card {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    opacity: 1;
    background-color: #000000be;

}

.button {
    display: flex;
    flex-direction: column;
}

.button p {
    font-size: 25px;
}

.button button {
    margin-top: 4%;
    padding: 4%;
    border-radius: 50px;
    border: none;
    font-size: 25px;
}

.dialog {
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: rgba(48, 47, 45, 0.877);
    padding: 30px;
    border-radius: 20px;
    box-shadow: black 0px 7px 29px 0px;
}</style>