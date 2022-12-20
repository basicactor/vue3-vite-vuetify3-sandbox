<template>
  <div>
    <v-radio-group v-model="inputedValue" row dense>
      <v-radio
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </v-radio-group>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue"
import { computed } from "vue"

type RadioBtnOption = {
  label: string
  value: string
}

type Props = {
  modelValue: string
  items: Array<RadioBtnOption>
}

const props = defineProps<Props>()

const emit = defineEmits(["input"])

const inputedValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("input", newValue),
})
</script>
