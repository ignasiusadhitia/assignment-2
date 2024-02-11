<template>
    <div v-for="product in products" :key="product.id">
        <product-card-component
            :product="product"
            @emit-add-to-cart="addToCart"
        />
    </div>
</template>

<script>
export default {
    emits: ["emit-add-to-cart"],
    props: {
        products: {
            type: Array,
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
