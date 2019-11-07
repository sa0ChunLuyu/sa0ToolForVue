<template>
    <div id="app">
        <loadingPage :handleLoadingPageCloseButtonClick="handleLoadingPageCloseButtonClick"
                     v-if="loadingPageShow"></loadingPage>

        <div>
            <div class="sa0BackgroundWhite">
                <headerComponent v-if="!loadingPageShow"></headerComponent>
            </div>
            <div class="sa0Wrapper">
                <router-view v-if="!loadingPageShow"/>
            </div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0ChunLuyu
     * @time: 2019/11/1 7:45 下午
     */
    import loadingPage from '@/views/loadingPage/loadingPage';
    import headerComponent from "./components/headerComponent/headerComponent";

    export default {
        name: "App",
        components: {loadingPage, headerComponent},
        props: [],
        data: () => ({
            loadingPageShow: true,
        }),
        computed: {},
        watch: {},
        methods: {
            handleLoadingPageCloseButtonClick() {
                this.loadingPageShow = false;
            },
            systemAutoLoadingPageClose() {
                setTimeout(() => {
                    if (this.loadingPageShow) this.handleLoadingPageCloseButtonClick();
                }, 5000);
            }
        },
        mounted() {
            this.systemAutoLoadingPageClose();
        }
    }
</script>

<style scoped>
    * {
        /*background: rgba(168, 127, 100, 0.28);*/
    }

    #app {
        color: #2f2f2f;
    }
</style>