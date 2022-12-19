<template>
  <table class="table-fixed w-full" style="height: max-content">
    <caption class="table-caption text-xs">
      紅利點數
    </caption>
    <tr v-for="(item, index) in points" :key="index">
      <td class="table-td table-display text-xs">
        <span>{{ item.title }}</span>
        <span>{{ item.content }}</span>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: ["points"]
};
</script>
