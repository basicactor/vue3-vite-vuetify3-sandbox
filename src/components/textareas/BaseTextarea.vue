<template>
  <v-textarea
    v-model="inputedValue"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
    :rows="rows"
    outlined
    dense
  />
</template>

<script setup lang="ts">
import { withDefaults, defineProps, computed, defineEmits } from "vue"
type Props = {
  modelValue?: string | number
  label?: string
  placeholder?: string
  rows?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  label: "input",
  placeholder: "入力してください",
})

const emit = defineEmits(["input"])

const inputedValue = computed({
  get: () => props.modelValue,
  set: (newVal) => emit("input", newVal),
})
</script>
