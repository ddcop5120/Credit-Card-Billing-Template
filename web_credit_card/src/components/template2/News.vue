<template>
  <div class="flex flex-col">
    <article v-for="(item, index) in news.newsInfo" :key="index" class="border-b border-gray text-left mt-8 mx-7">
      <h3 class="text-sm font-bold -ml-2">{{ item.title }}</h3>
      <p class="py-4 text-sm t2_text-belstarGray">{{ item.content }}</p>
      <a class="flex text-sm t2_text-belstarFontBlue"
        >更多
        <svg class="h-7 w-7 ml-1" viewBox="0 0 35 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.7627 2.5L0.495367 4.66506L0.495367 0.334936L3.7627 2.5Z" fill="#034EBD" /></svg
      ></a>
    </article>
  </div>
</template>
<script>
export default {
  props: ["news"],
  data() {
    return {};
  },
};
</script>
