<template>
  <div id="app">
    <Header />
    <Trade />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Trade from './components/Trade.vue'
export default {
  name: 'App',
  components: {
    Header,
    Trade
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
    &>div{
      width: 100%;
    }
  }
  body{
    background: #151719;
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
