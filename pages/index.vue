<script setup lang="ts">
import { Page, Car } from "~/interfaces";

const page = ref<Page<Car>>();

const errorMessage = ref<string>();

const config = useRuntimeConfig();

try {
  const { data, error } = await useFetch<Page<Car>>(
    `${config.public.apiBaseURL}/cars`,
    {
      headers: {
        "X-Authorization": config.public.apiKey,
      },
    }
  );
  if (error) {
    errorMessage.value = error.value?.message;
  }

  if (data.value !== null) {
    page.value = data.value;
    errorMessage.value = undefined;
  }
} catch (e: any) {
  console.log(e);
  errorMessage.value = e;
}
</script>

<template>
  <div>
    <div class="w-full">
      <img src="/images/bannerInit.jpg" alt="" class="w-full" />
    </div>
    <LayoutsContainer spacing="my-10">
      <TitlePage>Descubre oportunidades imperdibles</TitlePage>
      <h3 v-if="errorMessage" class="text-gray-400 text-sm font-semibold">
        {{ errorMessage }}
      </h3>
      <section class="w-full grid grid-cols-4 gap-9 my-10">
        <CarCard v-for="car in page?.data" :car="car" />
      </section>
    </LayoutsContainer>
  </div>
</template>
