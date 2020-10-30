<!-- 组件说明 -->
<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>  
       <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>

        </scroll>   
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'


import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import {getHomeMultidata,getHomeGoods} from 'network/home' //default导出才不用大扩号
    //import x from ''
    export default {
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop

        },
        data () {
            return {
                result:null,
                banners:[],
                recommends:[],
                probeType:3,
                goods:{
                    'pop':{ page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]}
                },
                 currentType: 'pop',
                 isShowBackTop:true

            };
        },
        created(){
           //1.请求多个数据
           this.getHomeMultidata()
           //2.请求商品数据 每类的第一条数据
          // this.getHomeGoods("pop")
           this.getHomeGoods("new")
           this.getHomeGoods("pop")
           this.getHomeGoods("sell")

        },
        mounted(){
            //将refresh函数传到debonds函数中生成一个新的函数（返回值是一个函数）
            const refresh=this.debonds(this.$refs.scroll.refresh,500)//注意：要传的是函数名，不是函数结果
            //3.监听item中的图片加载完成，刷新scroll
           this.$bus.$on('imageLoad',()=>{
               refresh()

           })

        },
        computed: {
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
        methods: {
            //刷新频繁的防抖函数处理
            debonds(func,delay){
                let timer=null
                return function(...args){
                    if(timer)clearTimeout(timer)
                    timer= setTimeout(()=>{
                        func.apply(this,args)
                    },delay)
                }
            },
            //事件监听的相关方法
            tabClick(index){
                switch(index){
                    case 0:
                        this.currentType='pop'
                        break
                    case 1:
                        this.currentType='new'
                        break
                    case 2:
                        this.currentType='sell'
                        break
                }
            },
            backClick(){
                this.$refs.scroll.scrollTo(0,0)
                console.log(this.$refs.scroll);
                console.log("点击事件");
                

            },
             contentScroll(position) {
                // 1.判断BackTop是否显示
                this.isShowBackTop = (-position.y) > 1000

                // 2.决定tabControl是否吸顶(position: fixed)
                this.isTabFixed = (-position.y) > this.tabOffsetTop
            },
            loadMore() {
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad() {
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
            },

            // 网络请求的相关方法
            getHomeMultidata(){
                getHomeMultidata().then(res=>{
                this.result=res.data;
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;
            })
            },
            getHomeGoods(type){
                const page=this.goods[type].page+1;
                getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1

                // 完成上拉加载更多
                this.$refs.scroll.finishPullUp()
                })

            }
        },
    }
</script>

<style scoped>
.home-nav{
    background-color: var(--color-tint);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}
#home{
    height: 100vh;
}
.tab-control{
    position:sticky;
    top:44px;
    background-color: #fff;
    z-index: 9;
}
.content{
    margin-top: 44px;
    height: calc(100% - 93px);
    overflow: hidden
}
</style>