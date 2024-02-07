/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";
import { createApp } from "vue";

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import AppComponent from "./components/AppComponent.vue";
app.component("app-component", AppComponent);

import ButtonComponent from "./components/ButtonComponent.vue";
app.component("button-component", ButtonComponent);

import CartItemComponent from "./components/CartItemComponent.vue";
app.component("cart-item-component", CartItemComponent);

import CartListComponent from "./components/CartListComponent.vue";
app.component("cart-list-component", CartListComponent);

import FooterComponent from "./components/FooterComponent.vue";
app.component("footer-component", FooterComponent);

import HeaderComponent from "./components/HeaderComponent.vue";
app.component("header-component", HeaderComponent);

import IconComponent from "./components/IconComponent.vue";
app.component("icon-component", IconComponent);

import ImageComponent from "./components/ImageComponent.vue";
app.component("image-component", ImageComponent);

import InputComponent from "./components/InputComponent.vue";
app.component("input-component", InputComponent);

import ModalComponent from "./components/ModalComponent.vue";
app.component("modal-component", ModalComponent);

import ProductCardComponent from "./components/ProductCardComponent.vue";
app.component("product-card-component", ProductCardComponent);

import ProductsListComponent from "./components/ProductsListComponent.vue";
app.component("products-list-component", ProductsListComponent);

import TextComponent from "./components/TextComponent.vue";
app.component("text-component", TextComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount("#app");
