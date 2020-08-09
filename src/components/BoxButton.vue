<template>
  <div
    class="flex padding-y-axis rounded-r-full items-center pl-8 mr-3 hover:bg-gray-200 cursor-pointer"
  >
    <slot></slot>
    <p class="text-gray-700 text-sm ml-5">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.padding-y-axis {
  padding-top: 0.34rem;
  padding-bottom: 0.34rem;
}
</style>
