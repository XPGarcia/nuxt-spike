<script setup lang="ts">
    import { toRefs, computed } from 'vue';

    const props = defineProps({
        input:{
            type:String,
            default:''
        },
        type: {
            String,
            default:'text'
        },
        placeholder:{
            String,
            default:''
        },
        error:{
            String,
            default:''
        },
        disabled:{
            Boolean,
            default: false
        },
        maxlength:{
            Number,
            default:100000
        },
        icon:{
            type:String,
            default:''
        }
    });

    const { type , input, placeholder, disabled, maxlength, error, icon } = toRefs(props);

    const emit = defineEmits(['update:input', 'update']);


    const inputComputed = computed({
        get:()=>input.value,
        set:(val)=>emit('update:input', val)
    });

    const styles = computed(() => `${ error.value  ? 'focus:ring-red placeholder:text-red-500 ring-red-500 text-red-500' : 'focus:ring-gray-400 text-gray-900 placeholder:text-gray-400 ring-gray-300 text-black'} ${disabled.value ? 'bg-gray-200' : ''} ${icon.value ? 'pl-10' : ''}`);

</script>
<template>
    <div class="w-full">
      <div class="relative mt-2 rounded-md shadow-sm">
        <input
            v-model.trim="inputComputed"
            :type="type"
            :class="styles"
            class="
                block 
                w-full 
                px-3 
                border-0 rounded-md 
                text-base
                ring-1 ring-inset ring-gray-300
                focus:ring-2 focus:ring-inset X 
                sm:leading-6
            "
            @input="emit('update')"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxlength"
        />
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" v-if="icon">
            <!--<font-awesome-icon :icon="icon" class="text-gray-400"/>-->
        </div>
      </div>
      <CommonError v-if="error">{{ error }}</CommonError>
    </div>
  </template>
