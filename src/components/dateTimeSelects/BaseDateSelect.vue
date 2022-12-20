<template>
  <v-menu
    v-model="isShowDatePicker"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        label="この日に出来たらいいなー"
        v-model="date"
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        placeholder="日付選択"
        persistent-placeholder
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      locale="jp-ja"
      no-title
      :day-format="formatDate"
      @input="isShowDatePicker = false"
    ></v-date-picker>
  </v-menu>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref, defineEmits, computed } from "vue"

type Props = {
  value?: string
}
const isShowDatePicker = ref(false)

const props = withDefaults(defineProps<Props>(), {
  value: "",
})

const emit = defineEmits(["input"])

const date = computed({
  get: () => props.value,
  set: (newValue) => {
    emit("input", newValue)
  },
})

const formatDate = (date: string): number => {
  return new Date(date).getDate()
}
</script>
