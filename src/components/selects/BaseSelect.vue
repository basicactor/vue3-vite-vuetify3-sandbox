<template>
  <v-select
    v-model="inputedValue"
    :items="items"
    :placeholder="placeholder"
    outlined
    dense
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue"

const props = defineProps({
  modelValue: [Array, String, Number, Boolean],
  items: Array,
  placeholder: String,
})

const emit = defineEmits(["input"])

const inputedValue = computed({
  get: () => props.modelValue,
  set: (newVal) => emit("input", newVal),
})
</script>
