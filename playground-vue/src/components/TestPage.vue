<script setup lang="ts">
import { fetchPage, watchForPageChanges } from '@twilify/sdk';
import { reactive } from 'vue';

const page = await fetchPage<{
  General: {
    headline: string;
    subheadline: string;
  };
}>('');

const content = reactive(page.content);

watchForPageChanges('', (data: any) => {
  Object.assign(content, data);
});
</script>

<template>
  <h3>{{ content.General.headline }}</h3>
  <p>{{ content.General.subheadline }}</p>
</template>
