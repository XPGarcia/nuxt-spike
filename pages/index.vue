<script setup lang="ts">
import { Page, Car } from "~/interfaces";
import { env } from "@/config/env";

const page = ref<Page<Car>>();

try {
  const { data, error } = await useFetch<Page<Car>>(`${env.baseUrl}/api/cars`);

  if (data.value !== null) {
    page.value = data.value;
  }
} catch (e) {}
</script>

<template>
  <div>
    <div class="w-full">
      <img src="/images/bannerInit.jpg" alt="" class="w-full" />
    </div>
    <LayoutsContainer spacing="my-10">
      <TitlePage>Descubre oportunidades imperdibles</TitlePage>
      <section class="w-full grid grid-cols-4 gap-9 my-10">
        <CarCard v-for="car in page?.data" :car="car" />
      </section>
    </LayoutsContainer>
  </div>
</template>
