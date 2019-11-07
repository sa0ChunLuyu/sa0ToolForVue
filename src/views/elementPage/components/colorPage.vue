<template>
    <div class="colorPage">
        <div class="colorPageWrapper">
            <div class="colorPageContainer">
                <div class="backgroundListItem" v-for="(backgroundListItem,backgroundListIndex) in backgroundList">
                    <h2>{{backgroundListItem.title}}</h2>
                    <div class="sa0MY20 sa0PY10 backgroundItem sa0ShadowS" :class="backgroundItem.class"
                         v-for="(backgroundItem,backgroundIndex) in backgroundListItem.data">
                        <span class="sa0PY10"
                              :class="backgroundItem.color?'sa0TextWhite':''">{{backgroundItem.name}} {{backgroundItem.class}} {{backgroundItem.value.toUpperCase()}}</span>
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
        name: "colorPage",
        components: {},
        props: [],
        data: () => ({
            backgroundList: [{
                title: '基础',
                data: [{
                    name: '红色',
                    class: 'sa0BgRed',
                    value: '#e53e3e',
                    color: true,
                }, {
                    name: '橙色',
                    class: 'sa0BgOrange',
                    value: '#ff983c',
                    color: true,
                }, {
                    name: '黄色',
                    class: 'sa0BgYellow',
                    value: '#ffd83c',
                }, {
                    name: '绿色',
                    class: 'sa0BgGreen',
                    value: '#52ba3d',
                    color: true,
                }, {
                    name: '青色',
                    class: 'sa0BgCyan',
                    value: '#3acdcb',
                }, {
                    name: '蓝色',
                    class: 'sa0BgBlue',
                    value: '#4646ff',
                    color: true,
                }, {
                    name: '黑色',
                    class: 'sa0BgBlack',
                    value: '#2f2f2f',
                    color: true,
                }, {
                    name: '白色',
                    class: 'sa0BgWhite',
                    value: '#ffffff',
                }]
            }, {
                title: '扩展',
                data: [{
                    name: '偏蓝',
                    class: 'sa0BgLittleBlue',
                    value: '#5d61ff',
                    color: true,
                }, {
                    name: '藕粉',
                    class: 'sa0BgPalePinkishGrey',
                    value: '#edd1d8',
                }]
            }, {
                title: '动漫',
                data: [{
                    name: '雷姆',
                    class: 'sa0BgRem',
                    value: '#91bef0',
                }, {
                    name: '拉姆',
                    class: 'sa0BgRam',
                    value: '#efa5b5',
                }, {
                    name: '爱蜜莉雅',
                    class: 'sa0BgEmilia',
                    value: '#f3f3f3',
                }, {
                    name: '桐人',
                    class: 'sa0BgKirito',
                    value: '#3c3f39',
                    color: true,
                }, {
                    name: '亚丝娜',
                    class: 'sa0BgAsuna',
                    value: '#e2b282',
                }, {
                    name: '尤吉欧',
                    class: 'sa0BgEugeo',
                    value: '#eac989',
                }, {
                    name: '爱丽丝',
                    class: 'sa0BgAlice',
                    value: '#f0d681',
                }]
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

    .colorPage {
    }

    .colorPageWrapper {

    }

    .colorPageContainer {

    }

    .backgroundListItem {
        margin-bottom: 60px;
    }

    .backgroundItem {
        overflow: hidden;
        border-radius: 5px;
        padding-left: 10px;
    }
</style>