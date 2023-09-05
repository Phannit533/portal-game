<template>
    <div v-if="isAlert" class="alert" icon="$success" title="Successful !" closable>

        <i class="material-icons">check_circle</i>
        <p>{{ alertMessage }}</p>

    </div>
    <div  class="form-forgot flex flex-row justify-center items-center h-screen">
        <form @submit.prevent="resetPassword" class="flex flex-col w-4/12 bg-gray-800 p-10 rounded-2xl">
            <div class="flex  flex-col justify-center items-center">
                <img src="../../assets/register.png" alt="" class="w-3/12">
                <h1 class="text-white font-bold font m-5">RESET PASSWORD</h1>
            </div>
            <input type="text" placeholder="Enter Code Number" v-model="code_verification">
            <input type="password" placeholder="New Password" v-model="password">
            <input type="password" placeholder="Converfirm Password" v-model="confirm_password">
            <button type="submit"  class="bg-green-600">
                <span v-if="loading">Loading...</span>
                <span v-else>RESET NOW</span>
            </button>
            <router-link class="btn" to="/forgot_password">BACK</router-link>
        </form>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const code_verification = ref("");
const password = ref("");
const isAlert = ref(false);
const alertMessage = ref("");
const loading = ref(false);
const confirm_password = ref("");
const router = useRouter();
const resetPassword = () => {
    if(password.value !== confirm_password.value){
        console.log("reset password failed for password: " + password.value);
        setTimeout(() => (
                    alertMessage.value = "reset password failed for password",
                    isAlert.value = true,
                    setTimeout(() => (
                        isAlert.value = false
                    ), 2000)
        ), 1000)
    }
    axios.post("http://localhost:5000/user/reset_pasword", { code_verification: code_verification.value, password: password.value }, { withCredentials: true })
        .then((res) => {
            console.log(res.data);
            router.push({ name: 'login' })
        }).catch((err) => {
            console.error(err);
            console.log(err.response.status)
            if (err.response.status == 400) {
                setTimeout(() => (
                    alertMessage.value = err.response.data,
                    isAlert.value = true,
                    setTimeout(() => (
                    isAlert.value = false
                    ), 2000)
                ), 1000)
            }

        })
}
</script>
<style scoped>
form {
  background-color: rgba(43, 39, 39, 0.726);
} 

input,
button {
  padding: 15px;
  margin-bottom: 25px;
  border: none;
  border-radius: 10px;

}
input {
  border: 1px solid rgb(36, 90, 31);
  color: white;
}
button:hover {
  background-color: pink;
  color: black;
}

.alert {
  margin-left: 81%;
  position: absolute;
  background-color: rgb(221, 23, 139);
  padding: 1%;
  width: 17%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.alert p {
  color: white;
}

i {
  color: green;
  margin-right: 1%;
}

.validate {
  color: rgb(197, 33, 33);
  margin-bottom: 2%;
  margin-top: -3%;
}

.btn {
    background-color: green;
    text-decoration: none;
    padding: 14px;
    border-radius: 10px;
    color: white;
    width: 20%;
    margin-left: 80%;
    text-align: center;
}

@media (max-width:1280px) {
  form{
    width: 50%;
  }
  .picture {
      display: none;
  }
} 
 @media (max-width:980px) {
  form{
    width: 70%;
  }
} 
@media (max-width: 500px) {
  form {
    margin: auto;
      width: 100%;
      background-color:rgb(0, 0, 0);
      box-shadow: black 0px 0px 0px 0px;
    }
    input,button,.btn{
        padding: 2.5%;
    }

}
@media (max-width: 360px) {
  form{
    margin: auto;
    width: 100%;
  }
  h1{
    font-size: 15px;
  }
} 
@media (max-width: 320px) {
  form{
    margin: auto;
    width: 100%;
  }
  h1{
    font-size: 15px;
  }
  .btn{
    margin-left: 70%;
    width: 30%;
  }
}
</style>