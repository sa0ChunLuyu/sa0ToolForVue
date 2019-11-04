<template>
    <div class="homePage">
        <div class="homePageWrapper">
            <div class="homePageContainer sa0TextLeft">
                <div class="sa0DisplayInlineBlock sa0Width50 sa0BackgroundGreen">1</div>
                <div class="sa0DisplayInlineBlock sa0Width50 sa0BackgroundRed">1</div>
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
</style>