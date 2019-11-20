<template>
    <div class="cssPage">
        <div class="cssPageWrapper">
            <div class="cssPageContainer sa0TextCenter">
                <div class="sa0Wrapper sa0TextWhite">
                    sa0Wrapper max-width: 1920px;
                    <div class="sa0Container">sa0Container padding: 0 10px;max-width: 1200px;
                        <div class="divInContainer">DIV IN CONTAINER</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0ChunLuyu
     * @time: 2019/11/7 8:24 下午
     */
    export default {
        name: "cssPage",
        components: {},
        props: [],
        data: () => ({}),
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

    .cssPage {
    }

    .cssPageWrapper {

    }

    .cssPageContainer {

    }

    .sa0Wrapper {
        height: 12rem;
        line-height: 3rem;
        border-radius: 1rem;
        background: rgba(17, 17, 17, 0.22);
    }

    .sa0Container {
        line-height: 2rem;
        height: 6rem;
        border-radius: 1rem;
        background: rgba(17, 17, 17, 0.22);
    }

    .divInContainer {
        line-height: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background: rgba(17, 17, 17, 0.22);
    }
</style>