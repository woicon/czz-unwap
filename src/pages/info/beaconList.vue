<template>
  <div class="info-beacon-wrap">
    <div class="info-beacon" v-for="(item,index) in beacons" :key="index"  @click="$emit('change',{...item})">
        <div class="info-beacon-title">Beacon{{item.id}}</div>
          <div>Address:{{item.address}}</div>
          <div>Fee:{{item.fee}}%</div>
        </div>
        <div class="info-beacon wait" >
          <div class="info-beacon-title">Waiting for more Beacons...</div>
        </div>
    </div>
</template>

<script>
export default {
  name:'BeaconList',
  props:{
    list:Array
  },
  data(){
    return {
      beacons: [
        { id:1, age: 20, address: '001293123x921ii12312300001387', fee: 0.03343 },
        { id:2, age: 55, address: '001293123x921ii12312300001387',  fee: 0.03343 },
        { id:3, age: 20, address: '001293123x921ii12312300001387',  fee: 0.03343 },
        { id:4, age: 20, address: '001293123x921ii12312300001387',  fee: 0.03343 },
        { id:5, age: 20, address: '001293123x921ii12312300001387',  fee: 0.03343 },
        { id:6, age: 20, address: '001293123x921ii12312300001387',  fee: 0.03343 },
        { id:7, age: 20, address: '001293123x921ii12312300001387',  fee: 0.03343 },
        { id:8, age: 20, address: '001293123x921ii12312300001387',  fee: 0.03343 },
        { id:9, age: 20, address: '001293123x921ii12312300001387',  fee: 0.03343 },
      ],
    }
  },
  methods:{
  
  }
}
</script>

<style>

</style>