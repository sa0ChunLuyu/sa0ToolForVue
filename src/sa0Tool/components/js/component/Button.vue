<template>
    <button
            @click="handleClick"
            :class="[buttonType,buttonSize,buttonDisable,buttonRound]"
            class="sa0Button">
        <slot></slot>
    </button>
</template>

<script>
    /***
     * @author: sa0chunluyu
     * @time: 2019/11/18 10:45 上午
     */
    export default {
        name: "Button",
        components: {},
        props: ['type', 'size', 'disable', 'round'],
        data: () => ({}),
        computed: {
            buttonRound() {
                let round = this.round;
                if (typeof this.round === 'undefined') round = 'round';
                switch (round) {
                    case "round":
                        return '';
                    case "pill":
                        return 'sa0RoundPill';
                    case "circle":
                        return 'sa0RoundCircle';
                    case "none":
                        return 'sa0RoundNone';
                    default:
                        return this.round;
                }
            },
            buttonDisable() {
                return this.disable ? 'sa0ButtonDisable' : '';
            },
            buttonType() {
                let type = this.type;
                if (typeof this.type === 'undefined') type = 'main';
                switch (type) {
                    case "main":
                        return 'sa0BgBlue sa0TextWhite';
                    case "error":
                        return 'sa0BgRed sa0TextWhite';
                    case "success":
                        return 'sa0BgGreen sa0TextWhite';
                    case "warning":
                        return 'sa0BgOrange';
                    default:
                        return this.type;
                }
            },
            buttonSize() {
                switch (this.size) {
                    case "mini":
                        return 'sa0ButtonMini';
                    case "small":
                        return 'sa0ButtonSmall';
                    default:
                        return this.size;
                }
            }
        },
        watch: {},
        methods: {
            handleClick(e) {
                if (!this.disable) this.$emit('click', e);
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>