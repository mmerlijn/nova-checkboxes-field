<template>
    <div class="w-full">
        <span
            v-for="item in Object.entries(field.options)"
            :key="item[1]"
            :title="item[1]"
            :class="['rounded-full w-2 h-2 mr-1',field.value.map((i)=>String(i)).includes(item[0]) ? 'bg-green-600' : 'bg-red-600' ]"
        >&nbsp;</span>
    </div>
</template>

<script>
export default {
  props: ['resourceName', 'field'],
}
</script>
