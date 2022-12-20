<template>
  <v-slider
    v-model="inputedValue"
    hide-details=""
    :min="min"
    :max="max"
    :thumb-size="thumSize"
    thumb-color="primary"
    thumb-label="always"
  ></v-slider>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, computed, defineEmits } from "vue"

type Props = {
  modelValue: string | number
  min?: string
  max?: string
  thumSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  min: "0",
  max: "100",
  thumSize: "24",
})

const emit = defineEmits(["input"])

const inputedValue = computed({
  get: () => props.modelValue,
  set: (newVal) => emit("input", newVal),
})
</script>
