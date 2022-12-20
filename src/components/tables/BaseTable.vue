<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <slot name="actions" :id="item.id" />
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
// import { DataTableHeader } from "vuetify"

// export type TableHeader = DataTableHeader

type Props = {
  headers: Array<any>
  items: Array<Record<string, unknown>>
}

defineProps<Props>()
</script>
