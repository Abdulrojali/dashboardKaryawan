<script>
import {RouterLink} from 'vue-router'
</script>
<template>
    <div class="w-full flex justify-around items-center py-3 bg-green-400">
        <a href="" class="logo text-2xl font-black font-sans capitalize">dashboard</a>
        <div class="links flex gap-10">
            <RouterLink to="/"><a href="" class="font-black text-sm hover:text-red-600">home</a></RouterLink>
            <RouterLink to="/data"><a href="" class="font-black text-sm hover:text-red-600">data</a></RouterLink>
            <RouterLink to="/gaji"><a href="" class="font-black text-sm hover:text-red-600">gaji</a></RouterLink>
            <RouterLink to="/contact"><a href="" class="font-black text-sm hover:text-red-600">contact</a></RouterLink>
        </div>
    </div>
</template>