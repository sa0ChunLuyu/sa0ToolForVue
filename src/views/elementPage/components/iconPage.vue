<template>
    <div class="iconPage">
        <div class="iconPageWrapper">
            <div class="iconPageContainer">
                <div>
                    <div v-for="(iconItem,iconIndex) in iconList" class="iconItemContainer">
                        <div class="iconItem">
                            <div class="iconItemValue" :class="iconItem.value"></div>
                            <div class="iconItemName">{{iconItem.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0ChunLuyu
     * @time: 2019/11/7 8:23 下午
     */
    export default {
        name: "iconPage",
        components: {},
        props: [],
        data: () => ({
            iconList: [{
                name: '返回',
                value: 'sa0IconBack'
            }, {
                name: '主页',
                value: 'sa0IconHome'
            }, {
                name: '增加',
                value: 'sa0IconAdd'
            }, {
                name: '用户',
                value: 'sa0IconUser'
            }, {
                name: '加载',
                value: 'sa0IconLoading'
            }]
        }),
        computed: {},
        watch: {},
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>
    * {
        /*background: rgba(168, 127, 100, 0.28);*/
    }

    .iconPage {
    }

    .iconPageWrapper {

    }

    .iconPageContainer {

    }

    .iconItemContainer {
        width: 7rem;
        height:7rem;
        padding: 1rem;
        display: inline-block;
    }

    .iconItem {
        border: 1px #333333 solid;
        width: 100%;
        text-align: center;
        height: 100%;
        border-radius: 1rem;
    }

    .iconItemValue{
        font-size: 2rem;
        line-height: 5rem;
    }
</style>