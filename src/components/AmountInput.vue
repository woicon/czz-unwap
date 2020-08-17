<template>
    <div class="c-input">
        <div class="c-input-inner">
            <input placeholder="" type="number" />
        </div>
    </div>
</template>

<script>
export default {
    name:'Input'
}
</script>

<style lang="less">
    .c{
        &-input{
            height: 40px;
            border-radius:10px;
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
                font-size: 20px;
                width: 110%;
                padding-right: 10%;
                &-inner{
                    flex:1;
                }
                
            }
        }
    }
</style>