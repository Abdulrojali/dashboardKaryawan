<script>
export default{
    data(){
        return{
            listData:[
                {nama:'ucok',alamat:'bandung',jenisKelamin:'laki-laki',usia:20,gaji:2500000},
                {nama:'budi',alamat:'jakarta',jenisKelamin:'laki-laki',usia:21,gaji:3000000},
                {nama:'bambang',alamat:'sukabumi',jenisKelamin:'laki-laki',usia:22,gaji:3500000},
                {nama:'ridho',alamat:'bogor',jenisKelamin:'laki-laki',usia:19,gaji:1500000},
            ]
        }
    },
}
</script>

<template>
    <section class="w-full  flex justify-center items-center px-5 gap-5 flex-col">
        <h1 class="text-2xl font-black text-red-600 capitalize"><span class="text-black">data</span> gaji karyawan</h1>
        <table class="content w-3/4">
            <tr>
                <td class="border border-black p-2 text-xl ">nama</td>
                <td  class="border border-black p-2 text-xl ">usia</td>
                <td class="border border-black p-2 text-xl ">jenis kelamin</td>
                <td class="border border-black p-2 text-xl ">alamat</td>
                <td class="border border-black p-2 text-xl ">gaji</td>
            </tr>
            <tr v-for="(data,index) in listData" 
            :key="index">
                <td class="border border-black p-2">{{ data.nama }}</td>
                <td class="border border-black p-2">{{ data.usia }}</td>
                <td  class="border border-black p-2">{{ data.jenisKelamin }}</td>
                <td class="border border-black p-2">{{ data.alamat }}</td>
                <td class="border border-black p-2">{{ data.gaji }}</td>
            </tr>
        </table>
    </section>
</template>