<template>
    <input-component />
    <div>
        <div v-for="product in products" :key="product.id">
            <div>
                <span>{{ product.name }}</span>
                <span>Remaining stock: {{ getRemainingStock(product) }}</span>
                <button
                    @click="addToCartHandler(product)"
                    :disabled="
                        product.stock === 0 ||
                        product.stock <= getProductCountInCart(product.id)
                    "
                >
                    Add to cart
                </button>
            </div>
        </div>
    </div>
    <hr />
    <div>
        <div v-for="product in cart" :key="product.id">
            <span>{{ product.name }}</span>
            <button @click="removeFromCartHandler(product.id)">-</button>
            <span>{{ product.count }}</span>
            <button @click="addToCartHandler(product)">+</button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            products: [
                {
                    id: 1,
                    name: "Nutty Oat Latte",
                    imgUrl: "https://static.fore.coffee/product/Nutty_Oat_Latte.jpeg",
                    desc: "Espresso dari biji kopi khas nusantara dipadukan susu oat gluten-free dan sensasi nutty dari hazelnut.",
                    stock: 38,
                    price: 33000,
                },
                {
                    id: 2,
                    name: "Iced Classic Latte",
                    imgUrl: "https://static.fore.coffee/product/classiclatteiced173.jpg",
                    desc: "Perpaduan rasa espresso premium dengan saus krim spesial Caféine",
                    stock: 27,
                    price: 24000,
                },
                {
                    id: 3,
                    name: "Iced Salted Caramel Mocha",
                    imgUrl: "https://static.fore.coffee/product/saltedcarameliced173.jpg",
                    desc: "Perpaduan coklat, latte dari house blend Fore, dan gurihnya caramel",
                    stock: 43,
                    price: 33000,
                },
                {
                    id: 4,
                    name: "Hot Cappuccino",
                    imgUrl: "https://static.fore.coffee/product/cappuccinohot173.jpg",
                    desc: "Espresso shots dengan susu hangat dan lapisan foam tebal di atasnya",
                    stock: 48,
                    price: 29000,
                },
                {
                    id: 5,
                    name: "Hot Café Latte",
                    imgUrl: "https://static.fore.coffee/product/cafelatte173.jpg",
                    desc: "Paduan espresso dengan susu sapi pilihan dan sedikit foam di atasnya",
                    stock: 32,
                    price: 29000,
                },
                {
                    id: 6,
                    name: "Iced Americano",
                    imgUrl: "https://static.fore.coffee/product/americanoiced173.jpg",
                    desc: "Espresso shot dalam segelas air dengan menjaga ketebalan rasa kopinya",
                    stock: 50,
                    price: 21000,
                },
            ],
            cart: [],
        };
    },
    methods: {
        getRemainingStock(product) {
            return (
                product.stock -
                (this.cart.find((item) => item.id === product.id)?.count || 0)
            );
        },

        getProductCountInCart(id) {
            const itemInCart = this.cart.find((item) => item.id === id);
            return itemInCart ? itemInCart.count : 0;
        },

        addToCartHandler(cartItem) {
            const { id, name, stock, price } = cartItem;
            const existingItem = this.cart.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.count < stock) {
                    existingItem.count++;
                } else {
                    alert("No more stock available for this product!");
                }
            } else {
                this.cart.push({
                    id,
                    name,
                    price,
                    stock,
                    count: 1,
                });
            }
        },

        removeFromCartHandler(id) {
            const index = this.cart.findIndex((item) => item.id === id);

            if (index !== -1) {
                this.cart[index].count--;

                if (this.cart[index].count === 0) {
                    this.cart.splice(index, 1);
                }
            }
        },

        deleteCartItemHandler() {},

        showModalHandler() {},

        checkoutHandler() {},
    },
};
</script>

<style></style>
