<template>
  <div
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    :class="[isHover ? onHoverStyle : normalStyle]"
  >
    <div class="col-span-2 flex items-center">
      <input type="checkbox" />
      <star-icon
        :size="iconSize"
        :class="[isHover ? 'text-gray-600 mx-3' : 'text-gray-400 mx-3']"
      ></star-icon>
      <label-variant
        :size="iconSize"
        :class="[isHover ? 'text-gray-600' : 'text-gray-400']"
      ></label-variant>
      <p class="text-sm text-gray-900 mx-2">
        Reddit
      </p>
    </div>
    <div class="col-span-6 flex items-center">
      <p class="text-sm text-gray-900">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deserunt
        quibusdam iste odio
      </p>
    </div>
    <div class="col-span-1 flex justify-end items-center">
      <p v-if="!isHover" class="text-xs text-gray-700">1:43 AM</p>
      <span v-else class="flex">
        <archive-icon
          class="text-gray-600 mr-2"
          :size="iconSize"
        ></archive-icon>
        <trash-icon class="text-gray-600 mx-2" :size="iconSize"></trash-icon>
        <unread-icon class="text-gray-600 mx-2" :size="iconSize"></unread-icon>
        <snooze-icon class="text-gray-600 ml-1" :size="iconSize"></snooze-icon>
      </span>
    </div>
  </div>
</template>

<script>
import StarIcon from "vue-material-design-icons/StarOutline";
import LabelVariant from "vue-material-design-icons/LabelVariantOutline";
import TrashIcon from "vue-material-design-icons/Delete";
import ArchiveIcon from "vue-material-design-icons/PackageDown";
import UnreadIcon from "vue-material-design-icons/EmailMarkAsUnread";
import SnoozeIcon from "vue-material-design-icons/ClockTimeFour";

export default {
  components: {
    StarIcon,
    LabelVariant,
    TrashIcon,
    ArchiveIcon,
    UnreadIcon,
    SnoozeIcon
  },
  data() {
    return {
      iconSize: 22,
      isHover: false,
      onHoverStyle:
        "border-b border-gray-400 grid grid-cols-9 gap-5 px-5 py-2 bg-gray-200 shadow-2xl cursor-pointer",
      normalStyle:
        "border-b border-gray-300 grid grid-cols-9 gap-5 px-5 py-2 bg-gray-200"
    };
  },
  methods: {
    onMouseEnter() {
      this.isHover = true;
    },
    onMouseLeave() {
      this.isHover = false;
    }
  }
};
</script>
