<script setup lang="ts">
import { fetchPage } from '@twilify/sdk';

const page = await fetchPage<{
  General: {
    headline: string;
    subheadline: string;
  };
}>('');
</script>

<template>
  <h3>{{ page.content.General.headline }}</h3>
  <p>{{ page.content.General.subheadline }}</p>
</template>
