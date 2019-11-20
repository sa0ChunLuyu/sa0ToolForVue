<template>
    <div class="elementPage">
        <div class="elementPageWrapper">
            <div class="elementPageContainer">
                <div class="asideContainer sa0TextLeft sa0PositionFixed">
                    <div class="leftNavTitle">资源</div>
                    <div @click="routerPush(leftNavItem.value)"
                         class="leftNavItem sa0CursorPointer" :class="partData===leftNavItem.value?'leftNavActive':''"
                         v-for="(leftNavItem ,leftNavIndex) in leftNavList">
                        <span>{{leftNavItem.title}}</span>
                        <span class="sa0DisplayInlineBlock">{{leftNavItem.name}}</span>
                    </div>
                </div>
                <div class="elementPageContentContainer sa0TextLeft">
                    <colorPage v-if="partData==='color'"></colorPage>
                    <cssPage v-if="partData==='css'"></cssPage>
                    <iconPage v-if="partData==='icon'"></iconPage>
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
    import cssPage from "./components/cssPage";
    import iconPage from "./components/iconPage";
    import readmePage from "./components/readmePage";

    export default {
        name: "elementPage",
        components: {
            colorPage,
            cssPage,
            iconPage,
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
                    title: 'CSS',
                    name: '样式',
                    id: 3,
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
        padding-right: 2.5rem;
        border-right: 1px solid rgba(51, 51, 51, 0.53);
    }

    .leftNavTitle {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    .elementPageContentContainer {
        margin-left: 10rem;
        margin-top: 3rem;
    }


    @media screen and (max-width: 800px) {
        .asideContainer {
            position: relative;
        }

        .elementPageContentContainer {
            margin-left: 0;
        }
    }

    .leftNavItem {
        margin-top: 2rem;
        margin-bottom: 2rem;
        position: relative;
    }

    .leftNavItem:after {
        content: '';
        position: absolute;
        background: #ffffff;
        width: .3rem;
        height: 100%;
        right: -2rem;
        transition: background-color .5s;
        border-radius: 9999px;
    }

    .leftNavItem:hover:after {
        background: #000;
    }

    .leftNavActive:after {
        content: '';
        position: absolute;
        background: #000;
        width: .3rem;
        height: 100%;
        right: -2rem;
        border-radius: 9999px;
    }
</style>