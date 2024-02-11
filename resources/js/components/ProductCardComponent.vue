<template>
    <span>{{ product.name }}</span>
    <span>Remaining stock: {{ getRemainingStock(product) }}</span>
    <button
        @click="addToCart(product)"
        :disabled="
            product.stock === 0 ||
            product.stock <= getProductCountInCart(product.id)
        "
    >
        Add to cart
    </button>
</template>

<script>
export default {
    emits: ["emit-add-to-cart"],
    props: {
        product: {
            type: Object,
            required: true,
        },
        getRemainingStock: {
            type: Function,
        },
        getProductCountInCart: {
            type: Function,
        },
    },
    methods: {
        addToCart(product) {
            this.$emit("emit-add-to-cart", product);
        },
    },
};
</script>

<style></style>
