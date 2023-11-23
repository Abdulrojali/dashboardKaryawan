<script>
export default{
    data(){
        return{
            searchData:'',
            data:''
        }
    },
    methods:{
    }
}
</script>
<template>
    <div class="search w-full p-2 flex justify-center items-center gap-3">
        <input type="text" placeholder="search" class="w-1/2 px-2 py-1 text-xl rounded-md" v-model="searchData">
        <button @click="search" class="p-2 rounded-sm bg-red-500 text-white">search</button>
    </div>
</template>