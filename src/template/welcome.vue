<template>
  <h3>PlusRadio 再次点击可以取消</h3>
  <PlusRadio v-model="state.value" :options="state.options" size="large" @change="change" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { OptionsRow, RecordType } from 'plus-pro-components'
import { PlusRadio } from 'plus-pro-components'

type State = {
  options: OptionsRow<RecordType>[]
  value: number
}

const state = reactive<State>({
  options: [
    { label: '选项一', value: 1 },
    { label: '选项二', value: 2 }
  ],
  value: 1
})

const change = (val: number) => {
  console.log(val, 'change')
}
</script>
