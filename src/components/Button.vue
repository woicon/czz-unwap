<template>
  <div class="c-button" @click="$emit('tap')"><slot /></div>
</template>

<script>
export default {
    name:"Button",
    props:{
        
    }
}
</script>

<style lang="less">
    .c{
        &-button{
            color: #fff;
            text-align: center;
            height: 40px;
            line-height: 40px;
            background: #2F80ED;
            border-radius:10px;
            cursor: pointer;
            &:hover{
                background-color:darken(#2F80ED,5%)
            }
        }
    }
</style>