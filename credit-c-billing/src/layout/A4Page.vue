<template>
  <div class="page">
    <slot></slot>
  </div>
</template>
<style scoped>
/* 設定media print時，page大小為A4，上下margin為0.5cm */
@page {
  size: A4 portrait;
  margin: 0.5cm 0;
}
@font-face {
  font-family:'EUDC';
  src: url('../assets/fonts/EUDC.ttf');
  unicode-range: U+(E000-F8FF);
}
</style>
