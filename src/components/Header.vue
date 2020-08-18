<template>
  <div class="c-header">
    <div class="c-header-top">
      <div class="c-logo">
        <img src="../assets/images/logo.png">
      </div>
      <div class="c-header-bag">
        <span class="c-address">{{address}}</span>
      </div>
    </div>
    <div class="f-c c-beacon">
      <div class="c-beacon-address">
        <h4>BeaconAddress</h4>
        <div>{{address}}</div>
      </div>
      <a class="ico-copy" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data(){
    return {
      address:'012312312xx...123123ss'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .c{
    &-logo{
      img{
        width: 40px;
        height: 40px;
      }
    }
    &-header{
      &-top{
        display: flex;
        align-items: center;
      padding: 20px;
        justify-content: space-between;
      }
    }
    &-address{
      font-size: 12px;
      color: #fff;
      padding: 4px 12px;
      background: #25292F;
      border-radius: 90px;
      cursor: pointer;
      display: flex;
      align-items: center;
      &::after{
        content: '';
        width: 10px;
        height: 10px;
        display: block;
        background: #2F80ED;
        border-radius: 90px;
        margin-left: 8px;
      }
    }
  }
</style>
