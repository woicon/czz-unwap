<template>
  <div>
    <modal name="swap-confirm" class="c-modal" width="400" height="auto">
      <div class="swap-confirm">
        <div class="swap-confirm-header">
          <h3>Swap Confirm</h3>
          <a @click="$modal.hide('swap-confirm')" class="swap-confirm-close ico-close" />
        </div>
        <div class="swap-exchange">
          <img :src="require(`images/${swapRes.from}.png`)" />
          <span>{{ swapRes.swapCount }}</span>
        </div>
        <div class="f-c swap-div">
          <i class="ico ico-exchange-line" />
        </div>
        <div class="swap-exchange">
          <img :src="require(`images/${swapRes.to}.png`)" />
          <span>{{ swapRes.swapTotal }}</span>
        </div>
        <p class="swap-exchange-notic">
          Note: If you do not redeem within 2000 block after redemption, you will
          lose your redemption qualification
        </p>
        <div class="swap-info">
          <div class="swap-modal-line">
            <span class="swap-attr">Minimum received</span>
            <span>{{ swapRes.received }}{{ swapRes.to }}</span>
          </div>
          <div class="swap-modal-line">
            <span class="swap-attr">Beacon Fee</span>
            <span>{{ swapRes.fee }}{{ swapRes.from }}</span>
          </div>
          <div class="swap-modal-line">
            <span class="swap-attr">Beacon BTC Address</span>
            <span>{{ swapRes.beaconAddress }}</span>
          </div>
        </div>
        <Button @click="handOk">{{ $t("trade.swap") }}</Button>
      </div>
    </modal>
    <SwapSuccess ref="swapsuccess" />
  </div>
</template>

<script>
import SwapSuccess from "./SwapSuccess"
import Button from "component/Button"
export default {
  name: "SwapConfirm",
  components:{
    Button,
    SwapSuccess
  },
  methods: {
    show() {
      this.$modal.show("swap-confirm")
    },
    handOk() {
      this.$refs.swapsuccess.show()
      this.$modal.hide("swap-confirm")
    },
  },
  data(){
    return {
      swapRes:{
        from:'ETH',
        to:'CZZ',
        swapCount: 20,
        swapTotal: 91230.201,
        received:9000,
        fee:0.213,
        beaconAddress:'9um25s112300x0120312312312312999x'
      }
    }
  }
};
</script>

<style lang="less">
  .swap{
    &-confirm{
      padding: 15px;
      &-close{
        cursor: pointer;
        font-size: 18px;
        width:50px;
        height:50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        top:0;
        &:hover{
          opacity: .6;
        }
      }
      .ico{font-size: 24px;}
      &-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:10px 0 25px;
        h3{
          color: @blue1;
          font-weight: normal;
        }
      }
    }
    &-exchange{
      display: flex;
      align-items: center;
      padding: 10px 6px;
      background: rgba(153, 153, 153, 0.2);
      border-radius: @radius;
      &-notic{
        padding: 20px 0;
        text-align: center;
        font-size: 14px;
      }
      img{
        width: 20px;
        height:20px;
        padding: 0 10px;
      }
      span{
        font-size:18px;
        color:cornflowerblue;
      }
    }
    &-info{
      background: #F2F2F2;
      border-radius: @radius;
      margin:0 0 15px;
      padding: 8px;
      &>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:4px 0;
        font-size: 12px;
      }
    }
  }
</style>
