<template>
    <PanelItem :index="index" :field="field">
        <template #value>
            <div class="text-sm grid grid-cols-4 grid-flow-row gap-2">
                <div v-for="(label, option) in field.options" class="flex items-center">
                    <span :class="['rounded-full w-2 h-2 mr-1',field.value.map((i)=>String(i)).includes(option) ? 'bg-green-600' : 'bg-red-600' ]"/>
                    <span>{{ label }}</span>
                </div>
            </div>
        </template>

    </PanelItem>
</template>

<script>
export default {
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

}
</script>


