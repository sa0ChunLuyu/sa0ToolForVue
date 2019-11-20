<template>
    <div class="componentPage">
        <div class="componentPageWrapper">
            <div class="componentPageContainer">
                <div class="asideContainer sa0TextLeft sa0PositionFixed">
                    <div class="leftNavTitle">组件</div>
                    <div @click="routerPush(leftNavItem.value)"
                         class="leftNavItem sa0CursorPointer" :class="partData===leftNavItem.value?'leftNavActive':''"
                         v-for="(leftNavItem ,leftNavIndex) in leftNavList">
                        <span>{{leftNavItem.title}}</span>
                        <span class="sa0DisplayInlineBlock">{{leftNavItem.name}}</span>
                    </div>
                </div>
                <div class="componentPageContentContainer sa0TextLeft">
                    <buttonPage v-if="partData==='button'"></buttonPage>
                    <inputPage v-if="partData==='input'"></inputPage>
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

    import buttonPage from "./components/buttonPage";
    import inputPage from "./components/inputPage";

    export default {
        name: "componentPage",
        components: {buttonPage, inputPage},
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
                    title: 'Button',
                    name: '按钮',
                    id: 1,
                    value: 'button',
                }, {
                    title: 'Input',
                    name: '输入框',
                    id: 2,
                    value: 'input',
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
                this.$router.push(`/component/${value}`);
            }
        },
        mounted() {
            this.routerChange();
        }
    }
</script>

<style scoped>
    .componentPage {
    }

    .componentPageWrapper {

    }

    .componentPageContainer {

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

    .componentPageContentContainer {
        margin-left: 10rem;
        margin-top: 3rem;
    }


    @media screen and (max-width: 800px) {
        .asideContainer {
            position: relative;
        }

        .componentPageContentContainer {
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