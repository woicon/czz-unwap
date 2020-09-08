<template>
  <div>
    <div class="c-block-title">
      Token Liquidity
    </div>
    <div v-if="token">
      <div class="f-c-sb c-list-item" v-for="(item, index) in token" :key="index">
        <div class="f-c c-list-title">
          <img :src="require(`images/${item.coin}.png`)" />
          <div class="c-list-content">
            <h4 class="f-c"> {{ item.coin }}</h4>
            <p class="c-list-quantity">{{ item.quantity }}</p>
          </div>
        </div>
        <div class="c-list-price">
            ${{item.price}}
        </div>
        <Button class="small" @click="$emit('tokenTap', item)">{{$t('trade.swap')}}</Button>
      </div>
    </div>
    <div class="c-block-title">
      Beacon Limit
    </div>
    <div v-if="beacon">
      <div class="f-c-sb c-list-item" v-for="(item, index) in beacon" :key="index">
        <div class="f-c c-list-title">
          <img :src="require(`images/${item.coin}.png`)" />
          <div class="c-list-content">
            <h4 class="f-c"> {{ item.coin }}</h4>
            <p class="c-list-quantity">{{ item.quantity }}</p>
          </div>
        </div>
        <div class="c-list-price end">
            ${{item.price}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'component/Button'
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
          price: 2.984,
          quantity: 11219284
        },
        {
          coin: 'BTC',
          price: 2.984,
          quantity: 1231319284
        },
        {
          coin: 'CZZ',
          price: 2.984,
          quantity: 19284
        },
        {
          coin: 'ETH',
          price: 2.984,
          quantity: 19284
        }
      ],
      beacon: [
        {
          coin: 'BCH',
          price: 282.984,
          quantity: 19284
        },
        {
          coin: 'BTC',
          price: 892.984,
          quantity: 19284
        },
        {
          coin: 'CZZ',
          quantity: 19284,
          price: 1232.984,
        },
        {
          coin: 'ETH',
          price: 12.984,
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
        background: @bg1;
        border-radius: @radius;
        transition: .5s;
        cursor: pointer;
        &:hover{
          background: darken(@bg1,5%);
        }
        img{
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
        &>div{
          width: 30%;
          &.small{
            width: 34px;
          }
        }
      }
      &-price{
        font-size: 20px;
        color: @orange;
        font-weight:800;
        &.end{
          text-align: right;
          flex:1;
        }
      }
      &-content{
        h4{
          font-size: 16px;
        }
        p{
          font-size: 14px;
          opacity: .5;
        }
      }
    }
  }
</style>
