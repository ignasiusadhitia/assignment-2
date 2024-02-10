<template>
    <div class="cart-icon-container" @click="onClickHandler">
        <div class="mx-auto position-relative cart-icon-wrapper">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-cart"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                    />
                </svg>
            </div>
            <span
                v-if="count"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-2 border-white"
            >
                {{ count }}
            </span>
            <span v-else></span>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["emit-click"],
    props: {
        count: {
            type: Number,
            default: null,
        },
    },
    methods: {
        onClickHandler() {
            this.$emit("emit-click");
        },
    },
};
</script>

<style scoped>
.cart-icon-container {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.cart-icon-container:hover {
    background: #e8e9ea;
    border-radius: 0.375rem;
}
.cart-icon-wrapper {
    width: 26px;
    height: 26px;
}
</style>
