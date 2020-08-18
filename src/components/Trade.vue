<template>
  <div class="c-trade-block">
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
      tab: ["Swap", "Beacon"],
      current: "Swap",
      coin: this.$sort,
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
    width: 400px;
    margin: 0 auto;
    &-block{
        flex:1;
        display: flex;
        justify-content: center;
        margin-top:60px;
    }
    &-container {
      background: #25292f;
      padding:60px 20px 20px;
      margin-top: -20px;
      border-radius: 10px;
    }
  }
  &-tab {
    display: flex;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    width: 200px;
    margin: -20px auto 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .9);
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
        background: cornflowerblue;
        &:hover {
          background: darken(cornflowerblue, 5%);
        }
      }
    }
  }
}
</style>