<template>
    <div
        class="modal fade show"
        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
        style="display: block; background-color: rgba(33, 37, 41, 0.4)"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalCenterTitle">
                        {{ title }}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        @click="showModal"
                    ></button>
                </div>
                <div class="modal-body">
                    <slot />
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        @click="showModal"
                    >
                        Back
                    </button>
                    <button type="button" class="btn btn-primary">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["emit-show-modal"],

    props: {
        cartData: {
            type: Array,
            default: () => {
                return [];
            },
        },
        title: {
            type: String,
        },
    },

    methods: {
        showModal() {
            this.$emit("emit-show-modal");
        },
    },
};
</script>

<style></style>
