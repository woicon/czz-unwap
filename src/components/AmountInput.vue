<template>
    <div class="c-input">
        <div class="c-input-inner">
            <input :value="value" placeholder="input some value" type="number" v-on:change="$emit('change', $event.target.value)" />
        </div>
    </div>
</template>

<script>
export default {
    name:'Input',
    props:{
        value:Number
    }
}
</script>

<style lang="less">
    .c{
        &-input{
            height: 40px;
            border-radius:@radius;
            background: #151719;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            &-inner{
                overflow: hidden;
            }
            input{
                outline: none;
                border: none;
                background: transparent;
                color: #fff;
                padding: 20px 0;
                font-size: 14px;
                width: 110%;
                padding-right: 10%;
                &-inner{
                    flex:1;
                }
                
            }
        }
    }
</style>