<template>
  <div class="col-span-2">
    <div class="px-2">
      <button
        class="shadow-lg border border-gray-200 rounded-full text-sm text-gray-700 font-semibold px-5 py-2 lg:flex items-center justify-between"
      >
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          class="mr-4 lg:mx-0 mx-auto"
        />
        <span class="lg:ml-2">Compose</span>
      </button>
    </div>
    <div class="mt-5">
      <router-link to="/">
        <div class="bg-red-200 flex py-1 rounded-r-full items-center pl-8 mr-3">
          <inbox-icon class="text-red-600" :size="iconSize"></inbox-icon>
          <p class="text-red-600 text-sm font-semibold ml-5">Inbox</p>
          <p class="left-auto">3</p>
        </div>
      </router-link>
      <router-link to="/starred">
        <box-button title="Starred">
          <star-icon class="text-gray-600" :size="iconSize"></star-icon>
        </box-button>
      </router-link>
      <router-link to="/snoozed">
        <box-button title="Snoozed">
          <clock-icon class="text-gray-600" :size="iconSize"></clock-icon>
        </box-button>
      </router-link>
      <router-link to="/sent">
        <box-button title="Sent">
          <send-icon class="text-gray-600" :size="iconSize"></send-icon>
        </box-button>
      </router-link>
      <box-button title="Drafts">
        <file-icon class="text-gray-600" :size="iconSize"></file-icon>
      </box-button>
      <box-button title="Unwanted">
        <label-icon class="text-gray-600" :size="iconSize"></label-icon>
      </box-button>
      <div @click="onClicked">
        <div v-if="!isClicked">
          <box-button title="More">
            <chevron-down-icon
              class="text-gray-600"
              :size="iconSize"
            ></chevron-down-icon>
          </box-button>
        </div>
        <div v-else>
          <box-button title="Less">
            <chevron-up-icon
              class="text-gray-600"
              :size="iconSize"
            ></chevron-up-icon>
          </box-button>
        </div>
      </div>
      <!-- Openable field -->
      <openable-field v-if="isClicked"></openable-field>
    </div>
    <sidebar-footer></sidebar-footer>
  </div>
</template>

<script>
import InboxIcon from "vue-material-design-icons/Inbox";
import StarIcon from "vue-material-design-icons/Star";
import ClockIcon from "vue-material-design-icons/ClockTimeFour";
import SendIcon from "vue-material-design-icons/Send";
import FileIcon from "vue-material-design-icons/File";
import LabelIcon from "vue-material-design-icons/Label";
import ChevronDownIcon from "vue-material-design-icons/ChevronDown";
import ChevronUpIcon from "vue-material-design-icons/ChevronUp";
import BoxButton from "./BoxButton";
import OpenableField from "./OpenableField";
import SidebarFooter from "./SidebarFooter";

export default {
  components: {
    InboxIcon,
    StarIcon,
    BoxButton,
    ClockIcon,
    SendIcon,
    FileIcon,
    LabelIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    OpenableField,
    SidebarFooter
  },
  data() {
    return {
      isClicked: false,
      iconSize: 20
    };
  },
  methods: {
    onClicked() {
      this.isClicked = !this.isClicked;
      console.log("clicked");
    }
  }
};
</script>
