<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: "",
  },
  type: {
    type: String as () => "submit" | "button" | "reset" | "link" |undefined,
    default: "submit",
    validator: (value: string) => {
      return ["submit", "button", "reset", "link", undefined].includes(value);
    },
  },
  bgColor: {
    String,
    default: "bg-purple-600 hover:bg-purple-500",
  },
  textColor: {
    String,
    default: "text-white",
  },
  fontSize: {
    String,
    default: "text-base",
  },
  padding: {
    String,
    default: "px-3.5 py-2.5",
  },
  disabled: {
    Boolean,
    default: false,
  },
  borderColor: {
    String,
    default: "border-purple-600 hover:border-purple-500",
  },
  to:{
    String,
    default:''
  }
});

const {
  width,
  type,
  padding,
  disabled,
  bgColor,
  textColor,
  fontSize,
  borderColor,
  to
} = toRefs(props);

const styles = computed(
  () =>
    `${width.value} ${padding.value} ${bgColor.value} ${textColor.value} ${
      fontSize.value
    } ${borderColor.value} ${disabled.value ? "pointer-events-none" : ""}`
);
</script>
<template>
  <button
    v-if="type !== 'link'"
    :type="type"
    :class="styles"
    class="inline-flex items-center justify-center gap-x-2 rounded-xl font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2"
  >
    <slot></slot>
  </button>
  <NuxtLink :to="to"
    v-if="type == 'link'"
    :class="styles"
    class="inline-flex items-center justify-center gap-x-2 rounded-xl font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2"
  >
    <slot></slot>
  </NuxtLink>
</template>
