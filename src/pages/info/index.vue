<template>
  <div>
    <h1 class="info-title">Czz Beacon Protocol Analytics</h1>
    <div class="info-col">
      <div v-for="item in protocol" :key="item.name" class="info-col-item">
        <div class="info-col-name">{{item.name}}</div>
        <div>price: ${{item.price}}</div>
        <div>Transitions(24h): {{item.transctions}}</div>
      </div>
    </div>
    <div class="f-c-sb info-chart-container">
      <div class="info-chart"><LightChart title="Liquidity" /></div>
      <div class="info-chart"><LightChart title="Volume" /></div>
    </div>
    <h1 class="info-title">Czz Beacons</h1>
    <BeaconList :list="beacons" />
    <!-- <div class="info-beacon-wrap">
      <vue-good-table
        :columns="columns"
        theme="nocturnal"
        styleClass="vgt-table info-table"
        :rows="beacons"/> 
        <div class="info-beacon" v-for="(item,index) in beacons" :key="index">
          <div class="info-beacon-title">Beacon{{item.id}}</div>
          <div>Address:{{item.address}}</div>
          <div>Fee:{{item.fee}}%</div>
        </div>
        <div class="info-beacon wait" >
          <div class="info-beacon-title">Waiting for more Beacons...</div>
        </div>
    </div> -->
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
// import { VueGoodTable } from 'vue-good-table'
import LightChart from './chart.vue'
import BeaconList from './beaconList'
export default {
  name:'info',
  components:{
    // VueGoodTable,
    BeaconList,
    LightChart
  },
  data(){
    return {
       columns: [
        {
          label: 'Id',
          field: 'id',
        },
        {
          label: 'Address',
          field: 'address',
          type: 'number',
        },
        {
          label: 'fee',
          field: 'fee',
          type: 'String',
        },
        {
          label: 'Staking czz',
          field: 'staking',
          type: 'number',
        },
      ],
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
      protocol:[
        {
          name:'BTC',
          transctions:10000,
          price:10000,
        },
           {
          name:'ETH',
          transctions:10000,
          price:10000,
        },
        {
          name:'BCH',
          transctions:10000,
          price:10000,
        },
        {
          name:'DOGE',
          transctions:10000,
          price:10000,
        },
        {
          name:'BSV',
          transctions:10000,
          price:10000,
        },
        {
          name:'UTC',
          transctions:10000,
          price:10000,
        },
        {
          name:'USTD',
          transctions:10000,
          price:10000,
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .info{
    &-beacon{
      background: @bg2;
      margin-bottom: 20px;
      padding: 0 20px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      width:20%;
      border-radius: @radius;
      height: 90px;
      transition: .4s;
      cursor: pointer;
      &:hover{
        transform: scale(1.02);
      }
      &.wait{
        opacity: .2;
      }
      &>div{
        font-size: 12px;
        opacity: .4;
        &.info-beacon-title{
        font-size: 16px;
          opacity: 1;
        }
      }

      &-title{
        font-size: 14px;
        opacity: 1;
      }
      &-wrap{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 -10px;
        &>div{
          color: #fff;
          font-size: 12px;
          margin:10px;
        }
      }
    }
    &-col{
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      &-item{
        &>div{
          color: #fff;
          font-size: 14px;
          opacity: .6;
          &.info-col-name{
            font-size: 18px;
            opacity: 1;
          }
        }
      }
      
    }
    &-title{
      margin-bottom: 15px;
      font-size: 18px;
      color: #fff;
      font-weight: normal;
    }
    &-chart{
      &-container{
        margin-bottom: 20px;
      }
      background: #25292f;
      width: 46%;
      padding: 20px;
      border-radius: @radius;
      position: relative;
    }
    &-table{
      &.nocturnal{
        background-color: @bg2;
        border:none;
        border-radius: @radius;
        td{
          border:none;
          border-bottom:1px solid rgba(255, 255, 255, .1);
          font-size: 14px;
        }
        thead{
          border-radius: @radius @radius 0 0;
          th{
            background: darken(@bg2,5%);
            border-bottom:1px solid rgba(255, 255, 255, .1);
          }
        }
      }
    }
  }
</style>