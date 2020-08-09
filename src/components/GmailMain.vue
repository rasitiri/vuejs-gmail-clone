<template>
  <div class="py-3">
    <div class="grid grid-cols-10">
      <gmail-sidebar></gmail-sidebar>
      <!-- This field is main section. -->
      <div class="col-span-8">
        <div class="flex border-b px-5 pb-3 items-center justify-between">
          <div class="flex items-center">
            <input type="checkbox" class="leading-tight" />
            <menu-down
              :size="iconSize"
              class="text-gray-600 cursor-pointer"
            ></menu-down>
            <refresh-icon
              class="text-gray-600 cursor-pointer mx-5"
              :size="iconSize"
            ></refresh-icon>
            <dots-vertical
              class="text-gray-600 cursor-pointer"
              :size="iconSize"
            ></dots-vertical>
          </div>
          <div class="flex items-center">
            <keyboard
              class="text-gray-700 cursor-pointer"
              :size="iconSize"
            ></keyboard>
            <menu-down
              :size="iconSize"
              class="text-gray-600 cursor-pointer"
            ></menu-down>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import GmailSidebar from "./GmailSidebar";
import MenuDown from "vue-material-design-icons/MenuDown";
import RefreshIcon from "vue-material-design-icons/Refresh";
import DotsVertical from "vue-material-design-icons/DotsVertical";
import Keyboard from "vue-material-design-icons/Keyboard";

export default {
  components: { GmailSidebar, MenuDown, RefreshIcon, DotsVertical, Keyboard },
  data() {
    return {
      iconSize: 20
    };
  }
};
</script>
