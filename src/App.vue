<template>
    <StructureZoom>
        <div class="tree-company">
            <StructureTree
                clickableNodes
                showCollapsable
                :nodes="oData"
                :nodeWidth="200"
                :nodeHeight="160"
                @node-click="nodeClick"
            >
                <template v-slot:default="props">
                    <div class="c-node__top">
                        <div class="c-node__title">{{ props.node.name }}</div>
                    </div>
                    <div class="c-node__info">
                        <div class="c-node__part">
                            <template v-if="props.node.head">
                                {{ props.node.head }}
                            </template>
                        </div>
                        <div class="c-node__part">
                            {{ props.node.employees_count }}
                        </div>
                    </div>
                    <div @click.prevent.stop.capture="nodeContentClick(props.node.id)">
                        click me
                    </div>
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
            </StructureTree>
        </div>
    </StructureZoom>
</template>

<script>
    import StructureTree from '@/components/StructureTree';
    import StructureZoom from '@/components/StructureZoom';
    export default {
        name: 'App',
        components: {
            StructureTree,
            StructureZoom,
        },
        data() {
            return {
                oData: {
                    showChildren: true,
                    head: 'Лазарева Анастасия Викторовна',
                    employees_count: 24,
                    name: 'Название компании',
                    id: 1,
                    children: [
                        {
                            showChildren: false,
                            id: 3,
                            head: 'Лазарева Анастасия Викторовна',
                            employees_count: 24,
                            name:
                                'Департамент производства и поставок упаковочного материала 11',
                            children: [
                                {
                                    id: 5,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [],
                                },
                                {
                                    showChildren: false,
                                    id: 6,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [
                                        {
                                            id: 7,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала',
                                            children: [],
                                        },
                                        {
                                            id: 8,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала',
                                            children: [],
                                        },
                                        {
                                            showChildren: false,
                                            id: 9,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала',
                                            children: [
                                                {
                                                    id: 10,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                                {
                                                    id: 11,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                                {
                                                    id: 12,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    id: 12,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [],
                                },
                            ],
                        },
                        {
                            showChildren: false,
                            id: 22,
                            head: 'Лазарева Анастасия Викторовна',
                            employees_count: 24,
                            name:
                                'Департамент производства и поставок упаковочного материала 11',
                            children: [
                                {
                                    id: 21,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [],
                                },
                                {
                                    showChildren: false,
                                    id: 20,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [
                                        {
                                            id: 19,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала',
                                            children: [],
                                        },
                                        {
                                            id: 18,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала',
                                            children: [],
                                        },
                                        {
                                            showChildren: false,
                                            id: 17,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала',
                                            children: [
                                                {
                                                    id: 16,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                                {
                                                    id: 15,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                                {
                                                    id: 14,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    id: 13,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [],
                                },
                            ],
                        },
                        {
                            showChildren: false,
                            id: 3,
                            head: 'Лазарева Анастасия Викторовна',
                            employees_count: 24,
                            name:
                                'Департамент производства и поставок упаковочного материала 11',
                            children: [
                                {
                                    id: 5,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [],
                                },
                                {
                                    showChildren: false,
                                    id: 6,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [
                                        {
                                            id: 7,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала 222',
                                            children: [],
                                        },
                                        {
                                            id: 8,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала',
                                            children: [],
                                        },
                                        {
                                            showChildren: false,
                                            id: 9,
                                            head: 'Лазарева Анастасия Викторовна',
                                            employees_count: 24,
                                            name:
                                                'Департамент производства и поставок упаковочного материала',
                                            children: [
                                                {
                                                    id: 10,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                                {
                                                    id: 11,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                                {
                                                    id: 12,
                                                    head:
                                                        'Лазарева Анастасия Викторовна',
                                                    employees_count: 24,
                                                    name:
                                                        'Департамент производства и поставок упаковочного материала',
                                                    children: [],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    id: 12,
                                    head: 'Лазарева Анастасия Викторовна',
                                    employees_count: 24,
                                    name:
                                        'Департамент производства и поставок упаковочного материала 111',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                filteredoData: {},
                showedLevel: 0,
                initialLevel: 0,
            };
        },

        created() {

        },
        methods: {
            nodeClick(node) {
                // eslint-disable-next-line no-console
                console.log(node);
            },
            nodeContentClick(id) {
                // eslint-disable-next-line no-console
                console.log(id);
            },
        },
    };
</script>

<style lang="scss">
</style>
