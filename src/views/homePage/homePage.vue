<template>
    <div class="homePage">
        <div class="homePageWrapper">
            <div class="homePageContainer">
                <div class="sa0ElementCenter sa0PositionAbsolute">
                    <h1>COMING SOON</h1>
                </div>
                <div class="homePageFooterContainer sa0PositionAbsolute sa0Left sa0Right">
                    <div>{{homePageInfo.power}} {{homePageInfo.version}} x {{homePageInfo.author}}</div>
                    <div>{{homePageInfo.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0ChunLuyu
     * @time: 2019/11/2 1:19 下午
     */
    export default {
        name: "homePage",
        components: {},
        props: [],
        data: () => ({}),
        computed: {
            homePageInfo() {
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

    .homePage {
    }

    .homePageWrapper {

    }

    .homePageContainer {

    }

    .homePageFooterContainer{
        bottom: 2rem;
    }
</style>