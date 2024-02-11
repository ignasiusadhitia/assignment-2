<template>
    <input
        :type="type"
        :value="value"
        class="form-control form-control-sm"
        @change="onChangeHandler(params)"
    />
</template>

<script>
export default {
    emits: ["emit-change"],
    props: {
        type: {
            type: String,
        },
        value: {
            type: Number,
        },
    },
    methods: {
        onChangeHandler(params) {
            this.$emit("emit-change", params);
        },
    },
};
</script>

<style scoped>
input {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    text-align: center;
}
</style>
