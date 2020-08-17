<template>
  <div class="swap">
    <div class="swap-item">
        <div>From</div>
        <div>Balance:115000</div>
    </div>
    <div class="swap-item">
      <AmountInput />
      <SelectCoin />
    </div>
    <div class="swap-item">
        <div> to</div>
        <div>limit:5000</div>
    </div>
    <div class="swap-item">
      <AmountInput />
      <SelectCoin />
    </div>
    <Button>Swap</Button>
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
    return {};
  },
};
</script>

<style lang="less">
.swap {
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px -10px;
    &>div{
        margin: 0 10px;
        flex:1;
    }
  }
}
</style>