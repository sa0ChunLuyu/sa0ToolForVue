<template>
    <div class="loadingPage">
        <div class="loadingPageWrapper">
            <div class="loadingPageContainer">
                <div class="loadingPageCloseButtonContainer sa0PositionAbsolute sa0Button sa0RoundPill sa0Border sa0ZIndex100"
                     @click="handleLoadingPageCloseButtonClick()">{{loadingPageInfo.closeText}}
                </div>
                <div class="loadingPageContentContainer sa0ElementCenter sa0PositionAbsolute sa0Width100">
                    {{loadingPageInfo.content}}
                </div>
                <div class="loadingPageFooterContainer sa0TextLeft sa0PositionAbsolute">
                    <div>{{loadingPageInfo.power}} {{loadingPageInfo.version}} x {{loadingPageInfo.author}}</div>
                    <div>{{loadingPageInfo.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0ChunLuyu
     * @time: 2019/11/1 8:52 上午
     */
    export default {
        name: "loadingPage",
        components: {},
        props: ['handleLoadingPageCloseButtonClick'],
        data: () => ({}),
        computed: {
            loadingPageInfo() {
                return this.$store.state.pageData.appPage;
            }
        },
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

    .loadingPage {
    }

    .loadingPageCloseButtonContainer {
        left: 1.5rem;
        top: 1.5rem;
        font-size: 1rem;
        padding: .3rem 1rem;
        border-color: rgba(0, 0, 0, .5);
        color: rgba(0, 0, 0, .5);
    }

    .loadingPageContentContainer {
        font-size: 5rem;
    }

    .loadingPageFooterContainer {
        left: 1.5rem;
        bottom: 1.5rem;
        color: rgba(0, 0, 0, .5);
    }
</style>