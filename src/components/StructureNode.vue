<template>
    <div class="tree-company-wrapp s-tree__wrapper">
        <div class="s-node">
            <div class="s-node__wrapper">
                <div
                    class="s-node__body"
                    :class="{ 'has-children': node.hasChildren && !node.showChildren }"
                    :style="[computeNodeBodyStyle, computeClickableNode]"
                    v-on="clickableNodes ? { click: nodeClick } : {}"
                >
                    <slot :node="node" />
                </div>
                <div
                    v-if="node.hasChildren && showCollapsable"
                    class="s-node__toggle"
                    @click.prevent.stop.capture="toggleChildren"
                >
                    <slot name="node-toggle" :node="node">
                        <div
                            class="s-node__toggle-icon"
                            v-if="node.showChildren"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.313 459.314">
                                <g>
                                    <path
                                        d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774
                                C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936
                                C441.333,189.472,459.308,207.456,459.313,229.648z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div class="s-node__toggle-icon" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.325 459.325">
                                <g>
                                    <path
                                        d="M459.319,229.668c0,22.201-17.992,40.193-40.205,
                                        40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193
                                c-11.101,
                                0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181
                                c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0
                                ,207.471,17.992,189.475,
                                40.202,189.475h149.267
                                V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,
                                40.19,40.187v149.288h149.282
                                C441.339,189.487,459.308,207.471,459.319,229.668z"
                                    />
                                </g>
                            </svg>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <div
                class="node-company-collapse s-node__collapse"
                v-if="
                    node.showChildren && node.children && node.children.length
                "
                :style="setMargin(node.level + 1)"
            >
                <StructureNode
                    v-for="(child, index) in node.children"
                    :key="index"
                    :node="child"
                    :bus="bus"
                    :clickableNodes="clickableNodes"
                    :nodeWidth="nodeWidth"
                    :nodeHeight="nodeHeight"
                    :showCollapsable="showCollapsable"
                >
                    <template v-slot:default="props">
                        <slot :node="props.node" />
                    </template>
                    <template v-slot:node-toggle="toggleProps">
                        <slot name="node-toggle" :node="toggleProps.node" />
                    </template>
                </StructureNode>
            </div>
        </transition>
    </div>
</template>

<script>
    import screenSize from './utils/screenSize';
    export default {
        name: 'StructureNode',
        props: {
            node: {
                type: Object,
                requited: false,
                default: () => {},
            },
            // eslint-disable-next-line vue/require-default-prop
            bus: {
                type: Object,
                requited: true,
            },
            clickableNodes: {
                type: Boolean,
                default: false,
            },
            nodeWidth: {
                type: [Number, String],
                requited: false,
                default: 'auto',
            },
            nodeHeight: {
                type: [Number, String],
                requited: false,
                default: 'auto',
            },
            showCollapsable: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
            };
        },
        mixins: [screenSize],
        components: {},
        computed: {
            computeNodeBodyStyle() {
                const widthData = typeof this.nodeWidth === 'number' ? `${this.nodeWidth}px` : `${this.nodeWidth}`;
                const heightData = typeof this.nodeHeight === 'number' ? `${this.nodeHeight}px` : `${this.nodeHeight}`;
                const width = this.$isDesktop ? `${widthData}` : '100%';
                const height = this.$isDesktop ? `${heightData}` : 'auto';
                return {
                    width: `${width}`,
                    height: `${height}`,
                };
            },
            computeClickableNode() {
                return this.clickableNodes ? { cursor: 'pointer' } : '';
            },
        },
        methods: {

            toggleChildren() {
                this.bus.$emit('toggle-children', this.node.id);
            },
            nodeClick() {
                this.bus.$emit('node-click', this.node);
            },

            // TODO: запускать функцию только на мобилке
            // (сейчас на декстопе margin сбрасывается через important)
            setMargin(level) {
                // TODO: высчитать так margin,
                // чтобы полоски от родителя к детям смотрелись одинаково
                return `margin-left: ${level * 5}px;`;
            },
        },
    };
</script>
