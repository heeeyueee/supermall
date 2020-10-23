<!-- 组件说明 -->
<template>
    <div id="tab-bar">
     <slot></slot>
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
#tab-bar{
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
}
</style>