<script lang="ts" setup>
import type { Navigation } from '@/utils/useNavigation';
const navigation = getNavigation('home') as Record<string, Navigation>;
</script>

<template>
  <header class="size-full flex items-center justify-center mt-2">
    <SpotlightButton
      as="nav"
      rounded
      transparent
      :animate="false"
      class="border border-white/10 p-1 transition-all duration-300 ease-in-out h-[50px] sm:h-[45px] sm:hover:gap-4"
    >
      <ul class="flex flex-row justify-around gap-2 p-1 z-10">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :aria-label="item.name + ' navigation link'"
          class="text-xl"
          :to="item.to"
        >
          <i :class="'pi text-xl text-neutral-200 ' + item.icon" />
        </NuxtLink>
      </ul>
    </SpotlightButton>
  </header>
</template>
