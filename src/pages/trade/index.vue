<template>
  <div class="c-trade-page">
    <div class="c-beacon-trade">
      <div class="f-c c-beacon">
        <div class="c-beacon-address">
          <h4>BeaconAddress</h4>
          <p>{{ $store.beaconAddress }}</p>
        </div>
        <a class="ico-copy" />
      </div>
      <div class="c-beacon-col">
        <div>
          <div class="attr">block height</div>
          {{ beacon.height }}
        </div>
        <div>
          <div class="attr">balance</div>
          {{ beacon.balance }}
        </div>
        <div>
          <div class="attr">limit</div>
          {{ beacon.limit }}
        </div>
      </div>
    </div>
    <div class="c-trade">
      <div class="c-tab">
        <div
          v-for="(item,index) in tab"
          :key="index"
          @click="tabTap(item)"
          :class="['c-tab-item', item === current && 'active']"
        >{{item}}</div>
      </div>
      <component class="c-trade-container" :is="current" />
    </div>
  </div>
</template>
<script>
import Beacon from "./Beacon";
import Swap from "./Swap";
export default {
  name: "Trade",
  components: {
    Swap,
    Beacon,
  },
  data() {
    return {
      tab:['Swap','Beacon'],
      current: 'Swap',
      coin: this.$sort,
      beacon:{
        height:1500,
        balance:1000000,
        limit:200000
      }
    };
  },
  methods: {
    tabTap(current) {
      this.current = current;
    },
  },
};
</script>

<style lang="less">
.c {
  &-trade {
    width: 500px;
    margin:80px auto 0;
    &-container {
      padding:60px 20px 20px;
    background: #25292f;
      border-radius: @radius;
    }
    &-page{
      padding: 20px;
      height: @gray3;
      background: #121416;
      height: 100vh;
    }
  }
  &-tab {
    display: flex;
    align-items: center;
    border-radius: @radius;
    overflow: hidden;
    width: 200px;
    margin: 0 auto -20px;
    height: 40px;
    border-radius: @radius;
    &-item {
      flex: 1;
      background: #363a42;
      color: #fff;
      cursor: pointer;
      height: 40px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-size: 15px;
      transition: 0.5s;
      &:hover {
        background: darken(#363a42, 5%);
      }
      &.active {
        background: @blue1;
        &:hover {
          background: darken(@blue1, 5%);
        }
      }
    }
  }
  &-beacon{
    &-trade{
      display: flex;
      justify-content: space-between;
    }
    &-address{
      h4,p{
        color: @gray4;
        font-weight: normal;
        font-size: 12px;
      }
      p{
        font-size: 14px;
      }
    }
    &-col{
      display: flex;
      align-items: center;
      &>div{
        color: @text;
        font-size: 16px;
        color: @blue1;
        padding: 20px 0;
        width: 100px;
        margin-left: 20px;
        .attr{
          font-size: 12px;
          color: @text;
        }
      }
    }
  }
}
</style>