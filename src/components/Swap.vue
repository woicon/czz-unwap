<template>
  <div class="swap">
    <div class="swap-item title">
        <div>From</div>
        <div>Balance:115000</div>
    </div>
    <div class="swap-item">
      <AmountInput v-model.number="total" v-on:change="allChange" />
      <SelectCoin />
    </div>
    <div class="swap-item title">
        <div class="f-c"><i class="ico ico-exchange" /> to</div>
        <div>limit:5000</div>
    </div>
    <div class="swap-item">
      <AmountInput v-model.number="exChangeTotal" />
      <SelectCoin />
    </div>
    <Button class="button-block" :click="swapCzz">Swap</Button>
  </div>
</template>

<script>
import SelectCoin from "./SelectCoin";
import AmountInput from "./AmountInput";
import Button from "./Button";
export default {
  name: "Swap",
  components: {
    AmountInput,
    SelectCoin,
    Button
  },
  data() {
    return {
      total:12,
      exChangeTotal:1,
    };
  },
  methods:{
      swapCzz(){
          console.log('swap czz')
      },
      allChange(v){
        this.exChangeTotal = v * 129.13
      }
  }
};
</script>

<style lang="less">
  .swap {
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px -10px;
      color:#fff;
      .ico{
        margin-right: 10px;
        font-size: 26px;
        cursor: pointer;
      }
      &.title{
        margin:0;
        display: flex;
        justify-content: space-between;
        &>div{
          flex:inherit;
          font-size: 13px;
        }
      }
      &>div{
          margin: 0 10px;
          flex:1;
      }
    }
  }
  .button-block{
    margin-top:20px;
  }
</style>