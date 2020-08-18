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
    background: #2f80ed;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: darken(#2f80ed, 5%);
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
