<template>
  <div id="app">
    <Header />
    <div id="app-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from 'pages/trade/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 100vh;
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: space-between;
    &-container{
      flex:1;
    }
  }
  .container{
    max-width: 600px;
    margin: 0 auto;
  }
  body{
    color: @gray1;
  }
  a{
    color: @blue1;
    cursor: pointer;
    transition: .4s;
    &:hover{
      color: darken(@blue1,10%);
    }
  }
  .f{
    display: flex;
    &-c{
      display: flex;
      align-items: center;
      &-c{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-sb{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>
