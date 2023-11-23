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
    methods:{
        deleteData:function(index){
            this.listData.splice(index,1)   
        },
        updateData:function(index){
            console.log(index)
        }
    }
}
</script>

<template>
    <section class="w-full  flex justify-center items-center px-5 gap-2 ">
        <table class="content w-3/4">
            <tr>
                <td class="border border-black p-2 text-xl ">nama</td>
                <td  class="border border-black p-2 text-xl ">usia</td>
                <td class="border border-black p-2 text-xl ">jenis kelamin</td>
                <td class="border border-black p-2 text-xl ">alamat</td>
                <td class="border border-black p-2 text-xl ">gaji</td>
                <td class="border border-black p-2 text-xl ">menu Delete</td>
                <td class="border border-black p-2 text-xl ">menu update</td>
            </tr>
            <tr v-for="(data,index) in listData" 
            :key="index">
                <td class="border border-black p-2">{{ data.nama }}</td>
                <td class="border border-black p-2">{{ data.usia }}</td>
                <td  class="border border-black p-2">{{ data.jenisKelamin }}</td>
                <td class="border border-black p-2">{{ data.alamat }}</td>
                <td class="border border-black p-2">{{ data.gaji }}</td>
                <td class="border border-black p-2 text-center text-red-500 cursor-pointer"><i @click="deleteData(index)" class="fa-solid fa-trash"></i></td>
                <td class="border border-black p-2 text-center text-white cursor-pointer"><i @click="updateData(index)" class="fa-solid fa-pen-to-square"></i></td>

            </tr>
        </table>
    </section>
</template>