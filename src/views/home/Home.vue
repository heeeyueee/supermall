<!-- 组件说明 -->
<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>  
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>
        <ul>
            <li>xx</li>
            <li>xx</li>
            <li>xx</li>
            <li>xx</li>
            <li>xx</li>
            <li>xx</li>
            <li>xx</li>
            <li>xx</li>
            <li>xx</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>



        </ul>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'


import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import {getHomeMultidata} from 'network/home' //default导出才不用大扩号
    //import x from ''
    export default {
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl

        },
        data () {
            return {
                result:null,
                banners:[],
                recommends:[],
                goods:{
                    'pop':{ page:0,list:[]},
                    'news':{page:0,list:[]},
                    'sell':{page:0,list:[]},
                }
            };
        },
        created(){
            getHomeMultidata().then(res=>{
                this.result=res.data;
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;

            })
        },
        computed: {
        },
        methods: {
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
    padding-top:44px ;
}
.tab-control{
    position:sticky;
    top:44px;
    background-color: #fff;
}
</style>