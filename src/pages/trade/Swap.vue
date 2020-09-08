<template>
  <div class="container">
    <div class="swap">
      <div class="swap-item title">
        <div>From</div>
        <div>{{ $t("trade.balance") }}:10</div>
      </div>
      <div class="swap-item">
        <AmountInput v-model.number="total" v-on:change="allChange" />
        <SelectCoin />
      </div>
      <div class="swap-item title">
        <div class="f-c"><i class="ico ico-exchange" /> to</div>
        <div>{{ $t("trade.limit") }}:200000</div>
      </div>
      <div class="swap-item">
        <AmountInput v-model.number="exChangeTotal" />
        <SelectCoin />
      </div>
      <Button
        v-if="$store.walletAddress"
        class="button-block"
        @click="$refs.swapconfirm.show()"
        >{{ $t("trade.swap") }}</Button
      >
      <Button class="button-block" v-else>{{
        $t("trade.connectWallet")
      }}</Button>
      <div class="swap-rec">
        <div>
          Minimum received
          <span class="swap-val">{{ swapRes.received }}{{ swapRes.to }}</span>
        </div>
        <!-- <div>Beacon Fee <span  class="swap-val">{{swapRes.fee}}{{swapRes.from}}</span></div> -->
      </div>
      <SwapConfirm ref="swapconfirm" />
      <SwapSuccess ref="swapsuccess" />
    </div>
  </div>
</template>

<script>
import SelectCoin from "component/SelectCoin";
import AmountInput from "component/AmountInput";
import Button from "component/Button";
import SwapSuccess from "./SwapSuccess";
import SwapConfirm from "./SwapConfirm";
export default {
  name: "Swap",
  components: {
    AmountInput,
    SelectCoin,
    Button,
    SwapConfirm,
    SwapSuccess,
  },
  data() {
    return {
      total: 12,
      exChangeTotal: 1,
      swapRes: {
        from: "ETH",
        to: "CZZ",
        swapCount: 20,
        swapTotal: 91230.201,
        received: 500000,
        fee: 0.213,
        beaconAddress: "9um25s112300x0120312312312312999x",
      },
    };
  },
  mounted() {},
  methods: {
    confirmSwap() {
      this.$refs.swapsuccess.show();
    },
    allChange(v) {
      this.exChangeTotal = v * 5000000;
    },
  },
};
</script>

<style lang="less">
.c-modal {
  .vm--modal {
    border-radius: @radius;
  }
}
.swap {
  &-val {
    color: @orange;
  }
  &-div {
    margin: 8px 0;
  }
  &-attr {
    color: #9b9b9b;
  }
  &-modal {
    &-line {
      color: #9b9b9b;
      span {
      }
    }
  }
  &-rec {
    margin-top: 10px;
    & > div {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      color: #fff;
      padding: 6px 0;
    }
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px -10px;
    color: #fff;
    .ico {
      margin-right: 10px;
      font-size: 26px;
      cursor: pointer;
    }
    &.title {
      margin: 0;
      display: flex;
      justify-content: space-between;
      & > div {
        flex: inherit;
        font-size: 13px;
      }
    }
    & > div {
      margin: 0 10px;
      flex: 1;
    }
  }
  &-beacon{
    color: @gray4;
    display: flex;
    justify-content: space-between;
    &-address{
      h4{
        font-size:12px;
        color: @blue1;
      }
      p{
        font-size: 12px;
      }
    }
    &-trade{
      margin: 0 auto 40px;
    }
    
  }
}
.button-block {
  margin-top: 20px;
}
</style>
