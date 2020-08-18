<template>
  <div>
    <div class="c-block-title">
      Token Liquidity
    </div>
    <div v-if="token">
      <div class="f-c-sb c-list-item" v-for="(item, index) in token" :key="index">
        <div class="f-c c-list-title">
          <img :src="require(`../assets/images/${item.coin}.png`)" />
          {{ item.coin }}
        </div>
        <Button class="small" @click="$emit('tokenTap',item)">Swap</Button>
      </div>
    </div>
    <div class="c-block-title">
      Beacon Limit
    </div>
    <div v-if="beacon">
      <div class="f-c-sb c-list-item" v-for="(item, index) in beacon" :key="index">
        <div class="f-c c-list-title">
          <img :src="require(`../assets/images/${item.coin}.png`)" />
          {{ item.coin }}
        </div>
        <div>
          {{ item.quantity}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'Beacon',
  props:{

  },
  components:{
    Button
  },
  data () {
    return {
      token: [
        {
          coin: 'BCH',
          quantity: 19284
        },
        {
          coin: 'BTC',
          quantity: 19284
        },
        {
          coin: 'CZZ',
          quantity: 19284
        },
        {
          coin: 'ETH',
          quantity: 19284
        }
      ],
      beacon: [
        {
          coin: 'BCH',
          quantity: 19284
        },
        {
          coin: 'BTC',
          quantity: 19284
        },
        {
          coin: 'CZZ',
          quantity: 19284
        },
        {
          coin: 'ETH',
          quantity: 19284
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .c{
    &-block{
      &-title{
        color: #fff;
      }
    }
    &-list{
      &-item{
        font-size:14px;
        color: #fff;
        padding: 10px;
        margin: 10px 0;
        background: #121416;
        border-radius: 10px;
        img{
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
      }
    }
  }
</style>
