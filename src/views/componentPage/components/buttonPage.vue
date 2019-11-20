<template>
    <div class="buttonPage">
        <div class="buttonPageWrapper">
            <div class="buttonPageContainer">
                <h1>按钮</h1>
                <div>
                    <h2>样式</h2>
                    <div class="sa0MY5">
                        <Button class="sa0MX5" type="main">默认按钮</Button>
                        <Button class="sa0MX5" type="error">错误按钮</Button>
                        <Button class="sa0MX5" type="warning">警告按钮</Button>
                        <Button class="sa0MX5" type="success">成功按钮</Button>
                    </div>
                    <div class="sa0MY5">
                        <Button class="sa0MX5" type="main" round="pill">默认按钮</Button>
                        <Button class="sa0MX5" type="error" round="pill">错误按钮</Button>
                        <Button class="sa0MX5" type="warning" round="pill">警告按钮</Button>
                        <Button class="sa0MX5" type="success" round="pill">成功按钮</Button>
                    </div>
                    <div class="sa0MY5">
                        <Button class="sa0MX5" type="main" round="none">默认按钮</Button>
                        <Button class="sa0MX5" type="error" round="none">错误按钮</Button>
                        <Button class="sa0MX5" type="warning" round="none">警告按钮</Button>
                        <Button class="sa0MX5" type="success" round="none">成功按钮</Button>
                    </div>
                    <div class="sa0MY5">
                        <Button class="sa0MX5" type="main" round="circle">默认按钮</Button>
                        <Button class="sa0MX5" type="error" round="circle">错误按钮</Button>
                        <Button class="sa0MX5" type="warning" round="circle">警告按钮</Button>
                        <Button class="sa0MX5" type="success" round="circle">成功按钮</Button>
                    </div>
<!--                    <div class="sa0MY5">-->
<!--                        <Button class="sa0MX5" type="main_outline">默认按钮</Button>-->
<!--                        <Button class="sa0MX5" type="error_outline">错误按钮</Button>-->
<!--                        <Button class="sa0MX5" type="warning_outline">警告按钮</Button>-->
<!--                        <Button class="sa0MX5" type="success_outline">成功按钮</Button>-->
<!--                    </div>-->
                </div>
                <div>
                    <h2>大小</h2>
                    <Button class="sa0MX5" size="main">默认按钮</Button>
                    <Button class="sa0MX5" size="small">小号按钮</Button>
                    <Button class="sa0MX5" size="mini">迷你按钮</Button>
                </div>
                <div>
                    <h2>禁用</h2>
                    <Button class="sa0MX5" :disable="true">禁用按钮</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /***
     * @author: sa0chunluyu
     * @time: 2019/11/18 11:48 上午
     */
    export default {
        name: "buttonPage",
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
</style>