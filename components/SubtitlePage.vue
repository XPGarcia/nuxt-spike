<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
    fontSize:{
        String,
        default:'text-lg md:text-xl lg:text-2xl'
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
    <h3 :class="styles"><slot></slot></h3>
</template>