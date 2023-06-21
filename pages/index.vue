<script setup lang="ts">
import { PaginationCarInterface } from '~/interfaces';

const cars = ref<PaginationCarInterface|null>(null);


try{
    const { data, error } = await useFetch(`https://snowy-cliff-qjv7u6iex0r9.vapor-farm-a1.com/api/cars`,);
    
   
    cars.value = data.value;
    
}catch(e){

}




</script>

<template>
    <div>
        <div class="w-full">
            <img src="/images/bannerInit.jpg" alt="" class="w-full" />
        </div>
        <LayoutsContainer spacing="my-10">
            <TitlePage>Descubre oportunidades imperdibles</TitlePage>
            <section class="w-full grid grid-cols-4 gap-9 my-10">
                <CarCard v-for="car in cars!.data" :car="car"/>
            </section>
        </LayoutsContainer>
    </div>
    
    
</template>