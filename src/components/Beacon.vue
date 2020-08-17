<template>
  <div>
      <div>
        <SelectCoin :range="coioList" />
        <SelectCoin :range="coioList" />
      </div>
  </div>
</template>

<script>
import SelectCoin from './SelectCoin'
export default {
    name:"Beacon",
    components:{
      SelectCoin
    },
    data(){
      return {
        coioList:['CZZ','BCH','BTC','ETH','BSV','BSG']
      }
    }
}
</script>

<style>

</style>