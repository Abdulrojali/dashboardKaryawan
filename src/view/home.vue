<script>
export default{
    methods:{
        joinNow:function(){
            alert('sukses')
        }
    }
}
</script>
<template>
    <header class="w-full h-screen flex justify-center items-center bg-green-400">
        <div class="teksContent flex flex-col gap-3 justify-center items-center">
            <h3 class="text-5xl font-black font-sans capitalize">welcome to trading forex</h3>
            <p class="text-1xl font-light w-9/12 font-serif text-center">this website to you trading forex and crypto or saham and learn fundamental,analisis 
                and fee just low dont forget if you join now you get discount 50% and free vidio learning 
            </p>
            <button @click="joinNow" class="bg-black text-white p-2 rounded-sm capitalize hover:rounded-sm font-extralight">join now</button>
        </div>
    </header>
</template>