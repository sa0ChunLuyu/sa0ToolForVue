<template>
    <div class="elementPage">
        <div class="elementPageWrapper">
            <div class="elementPageContainer">
                <div class="asideContainer sa0TextLeft sa0PositionFixed">
                    <div class="leftNavTitle">资源</div>
                    <div @click="routerPush(leftNavItem.value)"
                         class="leftNavItem sa0CursorPointer" :class="partData===leftNavItem.value?'leftNavActive':''" v-for="(leftNavItem ,leftNavIndex) in leftNavList">
                        <span>{{leftNavItem.title}}</span>
                        <span class="sa0DisplayInlineBlock">{{leftNavItem.name}}</span>
                    </div>
                </div>
                <div class="elementPageContentContainer sa0TextLeft sa0FR">
                    <colorPage v-if="partData==='color'"></colorPage>
                    <containerPage v-if="partData==='container'"></containerPage>
                    <cssPage v-if="partData==='css'"></cssPage>
                    <iconPage v-if="partData==='icon'"></iconPage>
                    <layoutPage v-if="partData==='layout'"></layoutPage>
                    <readmePage v-if="partData==='readme'"></readmePage>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0ChunLuyu
     * @time: 2019/11/6 9:03 下午
     */

    import colorPage from "./components/colorPage";
    import containerPage from "./components/containerPage";
    import cssPage from "./components/cssPage";
    import iconPage from "./components/iconPage";
    import layoutPage from "./components/layoutPage";
    import readmePage from "./components/readmePage";

    export default {
        name: "elementPage",
        components: {
            colorPage,
            containerPage,
            cssPage,
            iconPage,
            layoutPage,
            readmePage,
        },
        props: [],
        data: () => ({
            partData: 'readme',
            leftNavList: [
                {
                    title: 'ReadMe',
                    name: '说明',
                    id: 0,
                    value: 'readme',
                }, {
                    title: 'Color',
                    name: '颜色',
                    id: 1,
                    value: 'color',
                }, {
                    title: 'Icon',
                    name: '图标',
                    id: 2,
                    value: 'icon',
                }, {
                    title: 'Layout',
                    name: '布局',
                    id: 3,
                    value: 'layout',
                }, {
                    title: 'Container',
                    name: '容器',
                    id: 4,
                    value: 'container',
                }, {
                    title: 'CSS',
                    name: '样式',
                    id: 5,
                    value: 'css',
                },
            ]
        }),
        computed: {},
        watch: {
            $route() {
                this.routerChange();
            }
        },
        methods: {
            routerChange() {
                this.partData = this.$route.params.part;
            },
            routerPush(value) {
                if (this.$route.params.part === value) return;
                this.$router.push(`/element/${value}`);
            }
        },
        mounted() {
            this.routerChange();
        }
    }
</script>

<style scoped>
    * {
        /*background: rgba(168, 127, 100, 0.28);*/
    }

    .elementPage {
    }

    .elementPageWrapper {

    }

    .elementPageContainer {

    }

    .asideContainer {
        padding-right: 40px;
        border-right: 1px solid rgba(51, 51, 51, 0.53);
    }

    .leftNavTitle {
        font-size: 20px;
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .elementPageContentContainer {
        width: 1000px;
        margin-top: 30px;
    }

    .leftNavItem {
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative;
    }

    .leftNavItem:after{
        content: '';
        position: absolute;
        background: #ffffff;
        width: 5px;
        height: 100%;
        right: -30px;
        transition: background-color .5s;
        border-radius: 9999px;
    }

    .leftNavItem:hover:after{
        background: #000;
    }

    .leftNavActive:after{
        content: '';
        position: absolute;
        background: #000;
        width: 5px;
        height: 100%;
        right: -30px;
        border-radius: 9999px;
    }
</style>