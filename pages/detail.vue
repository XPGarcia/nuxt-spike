<script setup lang="ts">
import { reactive } from "vue";
import { env } from "~/config/env";

const formData = reactive({
  name: "",
  lastname: "",
});

const message = ref<string>("");

const handleSubmit = async () => {
  console.log(formData);

  try {
    const response: any = await $fetch(`${env.baseUrl}/api/cars/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": env.apiKey,
      },
      body: {
        message: formData.name,
        from: formData.lastname,
      },
    });

    message.value = response.data.response;
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div>
    <div class="w-full">
      <img src="/images/bannerInit.jpg" alt="" class="w-full" />
    </div>
    <LayoutsContainer spacing="my-10">
      <font-awesome-icon icon="fa-solid fa-car" size="xl" />
      <TitlePage>Cotizar</TitlePage>
      <div class="p-3 bg-green-50" v-if="message">
        {{ message }}
      </div>
      <form @submit.prevent="handleSubmit" class="w-full grid gap-6 my-5">
        <FormInput
          placeholder="Nombre"
          v-model:input="formData.name"
          @update:input="(input: string) => {}"
          error=""
        />
        <FormInput
          placeholder="Apellido"
          v-model:input="formData.lastname"
          @update:input="(input: string) => {}"
          error=""
        />
        <CommonPrimaryButton type="submit">Enviar</CommonPrimaryButton>
      </form>
    </LayoutsContainer>
  </div>
</template>
