<template>
  <v-text-field
    v-model="inputedValue"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
    :type="type"
    clearable
    dense
  ></v-text-field>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from "vue"
import { computed } from "vue"

type Props = {
  modelValue?: string | number
  label?: string
  placeholder?: string
  type?: string
  clearable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  label: "input",
  placeholder: "入力してください",
  type: "text",
  clearable: true,
})

const emit = defineEmits(["input"])

const inputedValue = computed({
  get: () => props.modelValue,
  set: (newVal) => emit("input", newVal),
})
</script>
