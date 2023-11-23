<script>
export default{
    data(){
        return{
            username:'',
            email:'',
            massage:''
        }
    },
    methods:{
        submitMassage:function(){
            if(this.username==='' || this.email==='' || this.massage===''){
                alert('maaf tolong masukkan username email ataua password!!')
            }
            else{
                alert('sukses kirim pesan')
            }
        },
        cancelMassage:function(){
            window.location.reload()
        },
        prevent:function(e){
            e.preventDefault()
        }
    }
}
</script>

<template>
    <div class="contact w-full h-screen flex justify-center items-center flex-col bg-green-400">
        <h3 class="judul text-3xl font-black capitalize ">contact</h3>
        <form @click="prevent" action="" class="w-3/4 p-2 flex flex-col gap-3">
            <div class="col flex flex-col gap-1">
                <label for="username" class="text-2xl font-light font-sans mb-2">username</label>
                <input type="text" placeholder="username" class="px-2 py-3 rounded-sm" v-model="username">
            </div>
            <div class="col flex flex-col gap-1">
                <label for="email" class="text-2xl font-light font-sans mb-2">email</label>
                <input type="email" placeholder="email" class="px-2 py-3 rounded-sm" v-model="email">
            </div>
            <div class="col flex flex-col gap-1">
                <label for="massage" class="text-2xl font-light font-sans mb-2">massage</label>
                <textarea placeholder="" class="px-2 py-5 font-sm rounded-sm" v-model="massage"></textarea>
            </div>
            <div class="btn w-full flex justify-around items-center mt-2">
                <button class="p-2 rounded-md bg-red-500 text-white" @click="submitMassage">submit</button>
                <button class="p-2 rounded-md bg-white text-black" @click="cancelMassage">submit</button>
            </div>
        </form>
    </div>
</template>