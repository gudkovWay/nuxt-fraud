<script setup>
useHead({
  title: 'Main page',
});
const localePath = useLocalePath();
</script>

<template>
  <main class="test">
    <NuxtLink :to="localePath('/', 'en')"> English home page </NuxtLink>
    <NuxtLink :to="localePath('/', 'ru')"> RU home page </NuxtLink>
    <NuxtLink :to="localePath('/', 'fr')"> Fr home page </NuxtLink>
    <NuxtLink :to="localePath('/', 'cn')"> Chinesee home page </NuxtLink>

    <div class="row">
      {{ $t('welcome') }}
    </div>
  </main>
</template>
