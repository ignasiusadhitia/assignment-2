<template>
    <span>{{ product.name }}</span>

    <!-- <span>Remaining stock: {{ getRemainingStock }}</span>
    <button
        @click="emitAddToCart"
        :disabled="
            product.stock === 0 || product.stock <= getProductCountInCart
        "
    >
        Add to cart
    </button> -->

    <button @click="addToCart(product)">Add to cart</button>
</template>

<script>
export default {
    emits: ["emit-add-to-cart"],
    props: {
        product: {
            type: Object,
            required: true,
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
