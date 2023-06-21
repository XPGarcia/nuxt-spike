<script setup>
import { computed, toRefs } from 'vue';


const props = defineProps({
    maxWidth:{
        String,
        default:'max-w-7xl'
    },
    maxHeight:{
        String,
        default:''
    },
    spacing:{
        String,
        default:''
    }
});

const { maxHeight, maxWidth, spacing } = toRefs(props);
const styles = computed(()=> `${maxWidth.value} ${maxHeight.value} ${spacing.value}`)


</script>
<template>
    <main class="container mx-auto px-4 2xl:px-0" :class="styles">
        <slot></slot>
    </main>
</template>