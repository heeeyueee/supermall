<!-- 组件说明 -->
<template>
    <div class='nav-bar'>
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    //import x from ''
    export default {
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height:44px;
    text-align: center;
    box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
   
}
.right, .left{
    width: 60px;
  

}
.center{
    flex: 1;
}

</style>