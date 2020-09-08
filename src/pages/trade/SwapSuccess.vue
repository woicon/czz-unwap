<template>
  <modal class="swap" name="swap-success" height="auto" width="400">
    <div class="swap-success">
      <div class="swap-success-container">
        <i class="ico-ok" />
        <h4>Transaction Submitted</h4>
        <p>Swapping 0.1 BTC for 999999 CZZ</p>
        <a>View on explorer</a>
      </div>
      <Button class="swap-success-buttonn" @click="$modal.hide('swap-success')">{{$t('close')}}</Button>
    </div>
  </modal>
</template>

<script>
import Button from "component/Button";
export default {
  components:{
    Button
  },
  methods:{
    show(){
      this.$modal.show("swap-success")
    }
  }
}
</script>

<style lang="less">
  .swap{
    .vm--modal{
      border-radius: @radius;
    }
    &-success{
      padding: 15px;
   
      &-container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 40px 0;
        i{
          font-size:56px;
          color: @orange;
          margin-bottom: 10px;
        }
      }
      h4{
        margin-bottom: 20px;
      }
      p{
        font-size: 12px;
      }
      &-button{
        margin-top:20px;
      }
    }
  }
</style>