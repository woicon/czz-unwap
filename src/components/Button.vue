<template>
  <div class="c-button" @click="$emit('click')"><slot /></div>
</template>

<script>
export default {
  name: "Button",
  props: {
    size:String
  },
};
</script>

<style lang="less" scoped>
.c {
  &-button {
    color: #fff;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: @blue1;
    border-radius: @radius;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: darken(@blue1, 5%);
    }
  }
}
.small{
    font-size: 12px;
    padding: 0 15px;
    height: 24px;
    line-height: 24px;
}
</style>
