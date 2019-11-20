<template>
    <div class="inputPage">
        <div class="inputPageWrapper">
            <div class="inputPageContainer">
                <Input v-model="yo"></Input>
                {{yo}}
            </div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0chunluyu
     * @time: 2019/11/20 11:33 上午
     */
    export default {
        name: "inputPage",
        components: {},
        props: [],
        data: () => ({
            yo: '123',
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
    }
</style>