<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
    fontSize:{
        String,
        default:'text-xl md:text-2xl lg:text-3xl'
    },
    color:{
        String,
        default:'text-black'
    },
    fontWeight:{
        String,
        default:'font-bold'
    },
});

const { fontSize, color, fontWeight } = toRefs(props);

const styles = computed(()=>`${fontSize.value} ${color.value} ${fontWeight.value}`)

</script>
<template>
    <h2 :class="styles"><slot></slot></h2>
</template>