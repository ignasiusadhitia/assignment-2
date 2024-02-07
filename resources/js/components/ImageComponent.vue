<template>
    <img
        src="{{ source }}"
        class="rounded mx-auto d-block"
        alt="{{
        altText
        }}"
    />
</template>

<script>
export default {
    props: {
        source: {
            type: String,
            default: "",
        },
        altText: {
            type: String,
            default: "",
        },
    },
};
</script>

<style></style>
