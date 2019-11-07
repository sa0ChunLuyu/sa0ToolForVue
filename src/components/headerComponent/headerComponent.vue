<template>
    <div class="headerComponent">
        <div class="headerComponentWrapper">
            <div class="headerComponentContainer sa0Shadow sa0DisplayBlock sa0PositionFixed sa0Top sa0Left sa0Right sa0DisplayBlock">
                <div class="sa0Container">
                    <div @click="$router.push('/')" class="headerLogoContainer sa0CursorPointer sa0TextBold sa0FL">
                        sa0ToolForVue
                    </div>
                    <div class="headerNavContainer sa0FR">
                        <div @click="$router.push(`/${navItem.router}/readme`)"
                             class="sa0DisplayInlineBlock headerNavItem sa0PositionRelative sa0CursorPointer"
                             v-for="(navItem,navIndex) in navList">
                            <span class="headerNavItemText"
                                  :class="$route.name===navItem.router?'headerNavItemTextActive':''">{{navItem.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="headerBlockContainer"></div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0ChunLuyu
     * @time: 2019/11/5 5:58 下午
     */
    export default {
        name: "headerComponent",
        components: {},
        props: [],
        data: () => ({
            navList: [
                {
                    title: '资源',
                    router: 'element',
                }, {
                    title: '组件',
                    router: 'component',
                }, {
                    title: '工具',
                    router: 'tool',
                }
            ]
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

    .headerComponent {
    }

    .headerComponentWrapper {

    }

    .headerComponentContainer {
        z-index: 100;
        background: #ffffff;
        height: 3rem;
        line-height: 3rem;
    }

    .headerBlockContainer {
        height: 4rem;
    }

    .headerNavItem {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }

    .headerNavItem:hover > .headerNavItemText:after {
        background: #2f2f2f;
    }

    .headerNavItemTextActive:after {
        background: #2f2f2f;
    }

    .headerNavItemText:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -.5rem;
        right: -.5rem;
        height: .2rem;
        transition: background-color 1s;
        border-radius: 9999px;
    }
</style>