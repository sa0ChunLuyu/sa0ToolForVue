<template>
    <input
            @input="handleInput"
            :type="inputType">
</template>

<script>
    /***
     * @author: sa0chunluyu
     * @time: 2019/11/20 11:34 上午
     */
    export default {
        name: "Input",
        components: {},
        props: ['type'],
        data: () => ({}),
        computed: {
            inputType() {
                let type = this.type;
                if (typeof this.type === 'undefined') type = 'text';
                return type;
            }
        },
        watch: {},
        methods: {
            handleInput(event) {
                this.$emit('input', event.target.value);
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    * {
    }
</style>