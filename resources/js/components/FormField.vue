<template>
    <DefaultField
        :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
            <div class="text-sm grid grid-cols-2 grid-flow-row gap-2">
                <template v-for="(label, option) in field.options">
                    <div class="flex items-center">
                        <input
                            type="checkbox"
                            :value="option"
                            :checked="isChecked(option)"
                            @input="toggleOption(option)"
                            class="checkbox mr-2"
                            :id="field.name"
                        />
                        <label :for="field.name"
                               v-text="label"
                               @click="toggleOption(option)"
                               class="w-full leading-tight"
                        />
                    </div>
                </template>
            </div>
            <p v-if="hasError" class="my-2 text-red-500">
                {{ firstError }}
            </p>
        </template>
    </DefaultField>
</template>

<script>
import {FormField, HandlesValidationErrors} from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    methods: {
        isChecked(option) {
            return this.value ? this.value.map((i)=>String(i)).includes(option) : false
        },
        toggleOption(option) {
            if (this.isChecked(option)) {
                this.$set(this, 'value', this.value.filter(item => item != option))
                return
            }
            this.value.push(option)
        },
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || []
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || [])
        },
        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        }
    },
}
</script>
