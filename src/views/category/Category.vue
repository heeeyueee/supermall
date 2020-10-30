<!-- 组件说明 -->
<template>
    <div >
       <h2>分类</h2> 
       <div class="wrapper">
        <ul class="content">
           <li>商品列表1</li>
           <li>商品列表2</li>
           <li>商品列表3</li>
           <li>商品列表4</li>
           <li>商品列表5</li>
           <li>商品列表6</li>
           <li>商品列表7</li>
           <li>商品列表8</li>
           <li>商品列表9</li>
           <li>商品列表10</li>
       </ul>
       </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        components: {

        },
        created(){
            
            

        },
        mounted(){
            this.scroll = new BScroll('.wrapper',{
                probeType:3,
                pullUpLoad:true
            })
            this.scroll.on('scroll',(position)=>{

            })
            this.scroll.on('pullingUp',()=>{
                console.log("上拉加载更多");

            })
        },
        data () {
            return {
                scroll :null

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style  scoped>

.wrapper{
    height: 50px;
    background: #000;
    overflow: hidden;
}
</style>