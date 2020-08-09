<template>
  <div class="overflow-y-auto height-full lg:h-auto">
    <mail-list v-for="i in 20" :key="i"></mail-list>
  </div>
</template>

<script>
import MailList from "../components/MailList";

export default {
  components: { MailList }
};
</script>

<style scoped>
.height-full {
  height: 35.7rem;
}
@media (max-width: 700px) {
  .height-full {
    height: 28.4rem;
  }
}
</style>
