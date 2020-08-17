<template>
  <div class="c-header">
    <div class="c-header-top">
      <div class="c-logo">
        <img src="../assets/images/logo.png">
      </div>
      <div class="c-header-bag">
        012312312xx...123123ss
      </div>
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
      padding: 10px;
      &-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>
