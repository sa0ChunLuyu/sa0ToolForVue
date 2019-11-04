<template>
    <div id="app">
        <loadingPage :handleLoadingPageCloseButtonClick="handleLoadingPageCloseButtonClick"
                     v-if="loadingPageShow"></loadingPage>
        <router-view v-if="!loadingPageShow"/>
    </div>
</template>

<script>
    /***
     * @author: sa0ChunLuyu
     * @time: 2019/11/1 7:45 下午
     */
    import loadingPage from '@/views/loadingPage/loadingPage';

    export default {
        name: "App",
        components: {loadingPage},
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
                }, 1000);
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
    }
</style>