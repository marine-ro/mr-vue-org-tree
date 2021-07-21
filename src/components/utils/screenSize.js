export default {
    data() {
        return {
            vpEvent: null,
            vpWidth: null,
            isDesktop: false,
        };
    },
    computed: {
        $isDesktop() {
            return this.isDesktop;
        },
    },
    created() {
        this.handleResize();
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        getScreenWidth() {
            return window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        },
        handleResize(event) {
            this.vpEvent = event;
            this.vpWidth = this.getScreenWidth();
            if (this.vpWidth <= 768) {
                this.isDesktop = false;
            }
            else {
                this.isDesktop = true;
            }
        },
    },
};
