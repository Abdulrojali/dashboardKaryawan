<script>
import searchComponent from '../component/search.vue'
import outputDataVue from '../component/outputData.vue';
export default{
    data(){
        return{
            listData:[]
        }
    },
    components:{
        searchComponent,
        outputDataVue
    }
}
</script>

<template>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-10 bg-green-400">
        <searchComponent></searchComponent>
        <outputDataVue></outputDataVue>
    </div>
</template>