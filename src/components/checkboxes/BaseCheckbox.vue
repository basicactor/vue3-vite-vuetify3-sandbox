<template>
  <v-checkbox
    v-model="selected"
    :value="item?.value"
    dense
    hide-details
    @change="onChange"
  >
    <template #label>
      <span :class="labelClass">{{ item?.label }}</span>
    </template>
  </v-checkbox>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue"
const props = defineProps({
  input: Boolean,
  item: Object,
  labelClass: String,
})

const emit = defineEmits(["input"])

const selected = ref(props.input)

const onChange = () => {
  emit("input", selected.value)
}
</script>
