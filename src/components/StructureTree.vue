<template>
    <div class="s-tree">
        <StructureNode
            :clickableNodes="clickableNodes"
            :node="oDataLocal"
            :nodeWidth="nodeWidth"
            :nodeHeight="nodeHeight"
            :bus="TreeBus"
            :showCollapsable="showCollapsable"
        >
            <template v-slot:default="props">
                <slot :node="props.node" />
            </template>
            <!-- this for custom toggle block -->
            <!-- <template v-slot:node-toggle="toggleProps">
                <div v-if="toggleProps.node.showChildren">
                    -
                </div>
                <div v-else>
                    +
                </div>
            </template> -->
        </StructureNode>
    </div>
</template>

<script>
    import Vue from 'vue';
    import StructureNode from '@/components/StructureNode';

    export default {
        name: 'StructureTree',
        components: {
            StructureNode,
        },
        props: {
            nodes: {
                type: Object,
                requited: false,
                default: () => {},
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
                itemId: null,
                isExpanded: true,
                searchValue: '',
                arrayfromTree: [],
                unique: [],
                uniqueName: [],
                oDataLocal: {},
                showedLevel: 0,
                initialLevel: 0,
                TreeBus: new Vue(),
            };
        },

        mounted() {
            this.TreeBus.$on('toggle-children', (id) => {
                this.toggleChildren(this.oDataLocal, id);
            });
            this.TreeBus.$on('node-click', (node) => {
                this.$emit('node-click', node);
            });
        },
        created() {
            this.getStructure();
        },
        methods: {
            getStructure() {
                this.oDataLocal = { ...this.nodes };
                this.prepareoDataForShow(this.oDataLocal, this.initialLevel);
            },
            prepareoDataForShow(o, initialLevel) {
                let level = initialLevel;
                // eslint-disable-next-line no-param-reassign
                if (level === 0) o.id = 0;
                o.level = level;
                if (!this.showCollapsable) o.showChildren = true;
                level += 1;
                if (o.children.length !== 0) {
                    o.hasChildren = true;
                    for (const child in o.children) {
                        o.children[child].level = level;
                        o.children[child].parent = o;
                        this.prepareoDataForShow(o.children[child], level);
                    }
                }
                else {
                    o.hasChildren = false;
                }
                this.$forceUpdate();
            },
            showParent(level, parent) {
                if (level <= 0 || parent.showChildren) return;
                parent.showChildren = true;
                level -= 1;
                this.showParent(level, parent.parent);
            },
            toggleChildren(object, parentId) {
                if (object.id === parentId) {
                    object.showChildren = !object.showChildren;
                    return;
                }
                if (object.children) {
                    for (const child in object.children) {
                        if (object.children[child].id === parentId) {
                            object.children[child].showChildren = !object.children[child].showChildren;
                            return;
                        }
                        this.toggleChildren(object.children[child], parentId);
                    }
                }
            },
            nodeClick() {
                // eslint-disable-next-line no-console
                console.log('tada');
            },
        },
    };
</script>
