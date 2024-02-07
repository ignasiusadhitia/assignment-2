<template>
    <p v-if="variant === 'paragraph'" class="lead">{{ text }}</p>
    <h1 v-else-if="variant === 'display'" class="display-1">{{ text }}</h1>
    <h3 v-else-if="variant === 'h3'" class="h3 fw-bold">{{ text }}</h3>
    <span v-else>{{ text }}</span>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
        },
        variant: {
            type: String,
            default: "",
        },
    },
};
</script>

<style></style>
