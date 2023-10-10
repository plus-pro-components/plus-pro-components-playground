<script lang="ts" setup>
import { ref } from 'vue'
import { PlusInputTag } from 'plus-pro-components'

const data = ref(['tag1', 'tag2'])
</script>

<template>
  <PlusInputTag v-model="data" />
</template>
