<template>
    <input
        :type="type"
        :value="value"
        class="form-control form-control-sm"
        @input="onInputHandler(parseInt($event.target.value))"
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
        onInputHandler(newValue) {
            this.$emit("emit-change", newValue);
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
