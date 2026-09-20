<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// URL do builder do Typebot, injetada pelo layout (TYPEBOT_BUILDER_URL).
const builderUrl = computed(() =>
  (window.chatwootConfig?.typebotBuilderUrl || '').replace(/\/$/, '')
);
</script>

<template>
  <section class="flex flex-1 w-full h-full min-w-0 bg-n-background">
    <iframe
      v-if="builderUrl"
      :src="builderUrl"
      :title="t('SIDEBAR.CHATBOT')"
      class="w-full h-full border-0"
      allow="clipboard-read; clipboard-write"
    />
  </section>
</template>
