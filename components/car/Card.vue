<script setup lang="ts">
import { Car } from "@/interfaces/index";

interface Props {
  car: Car;
}

defineProps<Props>();
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-md">
    <img src="https://www.1001carros.com/fotosftp/proxima.png" alt="" />
    <div class="w-full border-t border-t-gray-800 grid px-6 pt-6 pb-4">
      <Paragraph color="gray-800">{{ car.name }}</Paragraph>
      <div class="flex items-end justify-start gap-2 my-5">
        <Paragraph font-size="text-sm" class="mb-1">Precio:</Paragraph>
        <Paragraph font-size="text-2xl"> ${{ car.price.toString() }}</Paragraph>
      </div>
      <CommonPrimaryButton type="link" to="/detail"
        >Ver más</CommonPrimaryButton
      >
    </div>
  </div>
</template>
