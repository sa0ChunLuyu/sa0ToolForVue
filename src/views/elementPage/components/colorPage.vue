<template>
    <div class="colorPage">
        <div class="colorPageWrapper">
            <div class="colorPageContainer">
                <h1>背景</h1>
                <div class="backgroundListItem" v-for="(backgroundListItem,backgroundListIndex) in backgroundList">
                    <h2>{{backgroundListItem.title}}</h2>
                    <div class="sa0MY20 sa0PY10 backgroundItem sa0ShadowS sa0CursorPointer"
                         :class="backgroundItem.class"
                         @click="handleBackgroundItemClick(backgroundItem.value)"
                         v-for="(backgroundItem,backgroundIndex) in backgroundListItem.data">
                        <span class="sa0PY10"
                              :class="backgroundItem.color?'sa0TextWhite':''">{{backgroundItem.name}} {{backgroundItem.class}} {{backgroundItem.value.toUpperCase()}}</span>
                    </div>
                </div>

                <h1>文字</h1>
                <div class="backgroundListItem" v-for="(textColorListItem,textColorListIndex) in textColorList">
                    <h2>{{textColorListItem.title}}</h2>
                    <div class="sa0MY20 sa0PY10 textColorItem sa0CursorPointer"
                         :class="textColorItem.color?'sa0BgBlack':'sa0BgWhite'"
                         v-for="(textColorItem,textColorIndex) in textColorListItem.data">
                        <span class="sa0PY10" :class="textColorItem.class">{{textColorItem.name}} {{textColorItem.class}} {{textColorItem.value.toUpperCase()}}</span>
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
            textColorList: [{
                title: '基础',
                data: [{
                    name: '红色',
                    class: 'sa0TextRed',
                    value: '#e53e3e',
                }, {
                    name: '橙色',
                    class: 'sa0TextOrange',
                    value: '#ff983c',
                }, {
                    name: '黄色',
                    class: 'sa0TextYellow',
                    value: '#ffd83c',
                }, {
                    name: '绿色',
                    class: 'sa0TextGreen',
                    value: '#52ba3d',
                }, {
                    name: '青色',
                    class: 'sa0TextCyan',
                    value: '#3acdcb',
                }, {
                    name: '蓝色',
                    class: 'sa0TextBlue',
                    value: '#4646ff',
                }, {
                    name: '黑色',
                    class: 'sa0TextBlack',
                    value: '#2f2f2f',
                }, {
                    name: '白色',
                    class: 'sa0TextWhite',
                    value: '#ffffff',
                    color: true,
                }]
            }, {
                title: '扩展',
                data: [{
                    name: '偏蓝',
                    class: 'sa0TextLittleBlue',
                    value: '#5d61ff',
                }, {
                    name: '藕粉',
                    class: 'sa0TextPalePinkishGrey',
                    value: '#edd1d8',
                }]
            }, {
                title: '动漫',
                data: [{
                    name: '雷姆',
                    class: 'sa0TextRem',
                    value: '#91bef0',
                }, {
                    name: '拉姆',
                    class: 'sa0TextRam',
                    value: '#efa5b5',
                }, {
                    name: '爱蜜莉雅',
                    class: 'sa0TextEmilia',
                    value: '#f3f3f3',
                    color: true,
                }, {
                    name: '桐人',
                    class: 'sa0TextKirito',
                    value: '#3c3f39',
                }, {
                    name: '亚丝娜',
                    class: 'sa0TextAsuna',
                    value: '#e2b282',
                }, {
                    name: '尤吉欧',
                    class: 'sa0TextEugeo',
                    value: '#eac989',
                }, {
                    name: '爱丽丝',
                    class: 'sa0TextAlice',
                    value: '#f0d681',
                }]
            }],
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
                title: '渐变',
                data: [{
                    name: '橙黄小清新',
                    class: 'sa0BgO2Y',
                    value: 'linear-gradient(135deg, #ffa8a8 0%, #fcff00 100%)',
                }, {
                    name: '蓝绿渐变',
                    class: 'sa0BgB2G',
                    value: 'linear-gradient(135deg, #90f7ec 0%, #32ccbc 100%)',
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
        beforeDestroy() {
            document.body.style.backgroundColor = '#ffffff';
        },
        computed: {},
        watch: {},
        methods: {
            handleBackgroundItemClick(value) {
                if (value.length > 7) return;
                let color = document.body.style.backgroundColor;
                color = color.split('(')[1];
                color = color.split(')')[0];
                color = color.split(',');
                for (let i in color) {
                    color[i] = parseInt(color[i]).toString(16);
                }
                color = '#' + color[0] + color[1] + color[2];
                color === value ? document.body.style.backgroundColor = '#ffffff' : document.body.style.backgroundColor = value;
            },
        },
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
        margin-bottom: 4rem;
    }

    .backgroundItem {
        overflow: hidden;
        border-radius: 0.3rem;
        padding-left: 1rem;
    }

    .textColorItem {
        overflow: hidden;
        border-radius: 0.3rem;
        padding-left: 1rem;
    }
</style>