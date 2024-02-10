<template>
    <span>{{ product.name }}</span>

    <span>Remaining stock: {{ getRemainingStock }}</span>
    <button
        @click="emitAddToCart"
        :disabled="
            product.stock === 0 || product.stock <= getProductCountInCart
        "
    >
        Add to cart
    </button>
</template>

<script>
export default {
    emits: ["emit-add-product"],
    props: {
        product: {
            type: Object,
            required: true,
        },
        cart: {
            type: Array,
            required: true,
        },
    },
    computed: {
        getRemainingStock() {
            return (
                this.product.stock - this.getProductCountInCart(this.product.id)
            );
        },
    },
    methods: {
        emitAddToCart() {
            this.$emit("emit-add-product", this.product);
        },

        getProductCountInCart(id) {
            const itemInCart = this.cart.find((item) => (item.id = id));

            return itemInCart ? itemInCart.count : 0;
        },
    },
};
</script>

<style></style>
