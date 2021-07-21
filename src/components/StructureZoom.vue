<template>
    <div ref="panzoomElement" id="panzoom-element">
        <slot />
    </div>
</template>
<script>
    import Panzoom from '@panzoom/panzoom';
    export default {
        name: 'StructureZoom',
        data() {
            return {
                panElement: null,
            };
        },
        mounted() {
            this.panElement = this.$refs.panzoomElement;
            this.$nextTick(() => {
                this.panzoom = Panzoom(this.panElement, {
                    maxScale: 5,
                });
                this.$emit('init', this.panElement);
            });
        },
        beforeUpdate() {

        },
    };
</script>
