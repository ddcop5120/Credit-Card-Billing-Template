<template>
  <div class="h-screen grid place-items-center">
    <TableDemo v-bind="tableDemoData" />
  </div>
</template>

<script>
import tableDemoData from "@/assets/data/tableDemo.json";
import TableDemo from "@/components/TableDemo.vue";

export default {
  components: {
    TableDemo
  },
  data() {
    return {
      tableDemoData: tableDemoData
    };
  }
};
</script>
