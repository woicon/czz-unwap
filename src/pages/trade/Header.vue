<template>
  <div class="c-header">
    <div class="c-header-info">
      <h1 class="c-logo">
        CzzBeacon
      </h1>
      <div class="c-header-bag">
        <span class="c-address" v-if="$store.walletAddress">{{$store.walletAddress}}</span>
        <span class="c-address" v-else @click="connectWallet">{{$t('trade.connectWallet')}}</span>
      </div>
      <div class="c-menu">
      <router-link v-for="(item,index) in menu" :to="item.path" :key="index"><i :class="item.icon"></i> {{item.name}}</router-link>
      </div>
    </div>
    <div class="f-c-c c-lang">
      <i class="ico-language"/>
      <a v-for="(item,index) in lang" :class="['item',index === $i18n.locale && 'active']" :key="index" @click="toggleLang(index)">{{item}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data(){
    return {
      lang:{
        zh:'中文',
        en:'English',
      },
      menu:[
        {
          name:'Beacons',
          icon:'ico-beacon',
          path:'/info',
        },
        {
          name:'Swap',
          path:'/trade',
          icon:'ico-swap',
        },
        {
          name:'Twitter',
          path:'/twitter',
          icon:'ico-twitter',
        },
         {
          name:'Telegram',
          path:'/telegram',
          icon:'ico-telegram',
        },
           {
          name:'Github',
          path:'/help',
          icon:'ico-github',
        },
        
      ]
    }
  },
  
  methods:{
    toggleLang(locale){
      this.$i18n.locale = locale
    },
    connectWallet(){
      this.$store.walletAddress = '012312312xx...123123ss'
    }
  }
}
</script>

<style scoped lang="less">
  .c{
    &-header{
      height: 100vh;
      position: sticky;
      top:0;
      flex-direction:column;
      background: #090A0C;
      display: flex;
      min-width: 250px;
      justify-content: space-between;
      align-items: center;      
      &-info{
        flex:1;
        width: 100%;
      }
    }
    &-menu{
      a{
        display:block;
        text-decoration: none;
        color: @gray4;
        padding:10px 30px ;
        font-size: 14px;
        display: flex;
        align-items: center;
        &.router-link-active{
          color: @blue1;
        }
        i{
          line-height: normal;
          margin-right:5px;
          font-size: 22px;
        }
      }
    }
  
    &-lang{
      padding: 10px 0;
      color: #fff;
      display: flex;
      align-items: center;
      i{
        font-size: 26px;
        opacity: .5;
      }
      a{
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        display: inline-block;
        padding: 2px 4px;
        opacity: .5;
        &.active{
          color: @blue1;
          opacity: 1;
        }
      }
    }
    &-logo{
      background:url('../../assets/images/logos.png') no-repeat left center;
      background-size:150px;
      font-size: 0;
      height: 40px;
      margin:30px;
    }
    &-address{
      font-size: 12px;
      color: #fff;
      padding: 10px 12px;
      background: #25292F;
      border-radius: 90px;
      margin:0 30px;
      cursor: pointer;
      display: flex;
      align-items: center;
      background: @blue1;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &::after{
        content: '';
        width: 10px;
        height: 10px;
        display: block;
        background: #fff;
        border-radius: 90px;
        margin-left: 8px;
      }
    }
    
  }
</style>
