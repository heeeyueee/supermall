<!-- 组件说明 -->
<template>
    <div class='tab-control'>
        <div v-for="(item,index) in title" class="tab-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
            <span >
               {{item}}
            </span>
        </div>
        
    </div>
</template>

<script>
    //import x from ''
    export default {
        components: {

        },
        props:{
            title:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data () {
            return {
                currentIndex:0  
            };
        },
        computed: {

        },
        methods: {
            itemClick(index){
                this.currentIndex=index;
                this.$emit('tabClick', index)
            }

        },
    }
</script>

<style  scoped>
.tab-control{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
}
.tab-item{
    height: 40px;
    line-height: 40px;
}
.active{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
}

</style>