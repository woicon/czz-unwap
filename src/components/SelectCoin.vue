<template>
  <div class="c-select">
    <div :class="{'c-select-val':true,active:open}" @click="toggle">
      <div class="c-select-val-inner">
        <img v-if="url" :src="url" />
        <div class="c-select-value">{{val || 'choose'}}</div>
      </div>
    </div>
    <div class="c-select-dropdown" v-if="open">
      <div
        class="c-selct-item"
        v-for="(item, index) in coin"
        :key="index"
        @click="selectItem(item)"
      >
        <div class="f-c c-select-dropdown-item">
            <img :src="require('images/'+item+'.png')" />
            {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectCoin",
  props: {
    range: Array,
    value: String,
  },
  data() {
    return {
      open: false,
      val: "",
      url: "",
      coin: this.$store.coin,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    selectItem(val) {
      this.toggle();
      this.val = val;
      this.url = require(`images/${val}.png`);
      this.$emit("change", val);
    },
  },
};
</script>

<style lang="less">
.c {
  &-select {
    position: relative;
    width: 100%;
    &-value{
      font-size: 14px;
    }
    &-val {
      background: #151719;
      color: #fff;
      text-align: center;
      border-radius: @radius;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      cursor: pointer;
      padding: 0 10px;
      transition: .4s;
      &:after{
          content: '';
          width: 5px;
          height: 5px;
          display: block;
          border:2px solid #fff;
          border-left: none;
          border-bottom: none;
          transform: rotate(135deg);
          transition: .5s;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      &:hover{
      background:darken(#151719,5%)

      }
      &-inner{
          display: flex;
          align-items: center;
          flex:1;
      }
      &.active{
          &:after{
            transform: rotate(-45deg);
          }
      }
    }
    &-dropdown {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      background: lighten(#151719,12%);
      z-index: 99;
      border-radius: @radius;
      box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
      overflow: hidden;
      &-item {
        color: #fff;
        cursor: pointer;
        line-height: 40px;
        padding: 0 20px 0 10px;
        transition: .5s;
        font-size: 14px;
        img{
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
        &:hover{
            background: lighten(#151719,1%);
        }
      }
    }
    &-item {
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>