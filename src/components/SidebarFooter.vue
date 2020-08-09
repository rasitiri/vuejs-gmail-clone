<template>
  <div class="border-t absolute w-1/5 py-1 bottom-0 lg:flex hidden">
    <div class="mx-auto flex">
      <account-icon class="text-gray-600" :size="iconSize"></account-icon>
      <hangouts-chat-icon
        class="text-gray-600 mx-4"
        :size="iconSize"
      ></hangouts-chat-icon>
      <phone-icon class="text-gray-600" :size="iconSize"></phone-icon>
    </div>
  </div>
</template>

<script>
import AccountIcon from "vue-material-design-icons/Account";
import HangoutsChatIcon from "vue-material-design-icons/GoogleHangouts";
import PhoneIcon from "vue-material-design-icons/Phone";

export default {
  components: { AccountIcon, HangoutsChatIcon, PhoneIcon },
  data() {
    return {
      iconSize: 20
    };
  }
};
</script>

<style></style>
