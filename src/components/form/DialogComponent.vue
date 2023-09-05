<template>
    <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props }">
                <i class="fa-solid fa-comment cursor-pointer" style="color: #ffffff;" v-bind="props">
                    <span class="font-sans font-normal">
                        Feedback</span>
                </i>
            </template>
            <template v-slot:default="{ isActive }">
                    <form @submit.prevent="" class="flex flex-col m-auto bg-gray-800 p-10 rounded-2xl">
                        <div class="flex  flex-col justify-center items-center">
                            <h1 class="font-bold font m-5 text-green-600">Share Your Feedback</h1>
                        </div>
          
                        <textarea type="text" name="" id="" cols="100" rows="5" placeholder="Your message"></textarea>
                        <input type="email" placeholder="Your Email">
             
                  
                        <button type="submit" class="bg-green-600 mt-3 rounded-2xl p-2" @click="isActive.value = false">
                            <!-- <span v-if="loading">Loading...</span> -->
                            <span>Submit</span>
                        </button>
                       
                    </form>
            </template>
        </v-dialog>
    </v-col>
</template>
<script setup></script>
<style scoped>
        input,textarea {
  border: 1px solid rgb(36, 90, 31);
  color: white;
  margin: 2%;
  padding: 2%;
  border-radius: 5px;
}
form{
    width: 50%;
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
    }
    form{
        width: 90%;
    }
}
</style>