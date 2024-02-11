<template>
    <span>{{ product.name }}</span>
    <button @click="removeFromCart(product.id)">-</button>
    <input-component
        type="number"
        :value="product.count"
        @emit-change="updateCartItemCount"
    />
    <button @click="addToCart(product)">+</button>

    <span>Price: IDR{{ product.price }}</span>
    <span>Subtotal: {{ getCartItemSubtotal(product) }}</span>
    <button @click="deleteCartItem(product.id)">Delete</button>
</template>

<script>
export default {
    emits: [
        "emit-remove-from-cart",
        "emit-add-to-cart",
        "emit-delete-cart-item",
        "emit-update-cart-item-count",
    ],
    props: {
        product: {
            type: Object,
        },
    },
    methods: {
        removeFromCart(id) {
            this.$emit("emit-remove-from-cart", id);
        },

        addToCart(product) {
            this.$emit("emit-add-to-cart", product);
        },

        deleteCartItem(id) {
            this.$emit("emit-delete-cart-item", id);
        },

        updateCartItemCount(newValue) {
            this.$emit("emit-update-cart-item-count", {
                ...this.product,
                count: newValue,
            });
        },

        getCartItemSubtotal(product) {
            const { count, price } = product;

            return count * price;
        },
    },
};
</script>

<style></style>
