<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
    fontSize:{
        String,
        default:'text-base'
    },
    color:{
        String,
        default:'text-black'
    },
    fontWeight:{
        String,
        default:'font-regular'
    },
});

const { fontSize, color, fontWeight } = toRefs(props);

const styles = computed(()=>`${fontSize.value} ${color.value} ${fontWeight.value}`)

</script>
<template>
    <p :class="styles"><slot></slot></p>
</template>