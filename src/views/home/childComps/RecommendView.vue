<!-- 组件说明 -->
<template>
    <div class='recommend'>
        <div class="rec" v-for="item in recommends"> 
            <div class="rec-item">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                </a>
               
            </div>

        </div>
        
    </div>
</template>

<script>
    //import x from ''
    export default {
        components: {

        },
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
                
            }

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

<style  scoped>
.recommend{
     display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: space-around;
    text-align: center;
    padding: 10px 0 10px;
    border-bottom: 5px solid #eeeeee;
}
.rec img{
    width: 60px;
    height: 60px; 
    margin-bottom: 6px;

}

</style>