<template>
  <div>
    <div class="py-6 pl-16 pr-8 flex items-center justify-between">
      <div class="flex items-center">
        <h1 class="text-xl text-gray-900">lan</h1>
        <label-variant
          :size="iconSize"
          class="text-yellow-400 mx-3"
        ></label-variant>
        <span class="text-xs bg-gray-300 px-1 rounded text-gray-600"
          >Inbox</span
        >
      </div>
      <div class="flex items-center">
        <printer-icon
          :size="iconSize"
          class="text-gray-600 mr-3"
        ></printer-icon>
        <open-in-new :size="iconSize" class="text-gray-600"></open-in-new>
      </div>
    </div>
    <div class="mt-4 lg:pl-4">
      <div class="flex justify-between">
        <div class="flex mx-auto lg:mx-0 md:mx-0">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png"
            alt="icon"
            width="38"
            class="bg-gray-400 md:ml-0 sm:ml-0 lg:ml-0 rounded-full lg:inline hidden"
          />
          <div class="lg:ml-3">
            <p class="text-sm font-semibold text-gray-800">
              {{ senderName }}
            </p>
            <div class="flex">
              <p class="text-xs text-gray-600">to me</p>
              <menu-down-icon
                :size="iconSizeSM"
                class="text-gray-700"
              ></menu-down-icon>
            </div>
          </div>
          <p class="text-xs text-gray-600 ml-1 block">{{ senderMail }}</p>
        </div>
        <div class="flex text-gray-600 mr-8">
          <p class="text-xs mr-5 lg:inline hidden">1:14 AM (1 hour ago)</p>
          <star-icon :size="iconSize"></star-icon>
          <reply-icon :size="iconSize" class="mx-4"></reply-icon>
          <dots-vertical :size="iconSize"></dots-vertical>
        </div>
      </div>
    </div>
    <div class="px-16 my-4">
      <p class="text-gray-800 text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse
        exercitationem temporibus sit, ex perferendis. Minus illum, nulla,
        maiores sapiente voluptatum adipisci optio nihil rerum corrupti repellat
        mollitia doloremque velit! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A aliquid cum eum eveniet culpa similique, libero
        illum voluptates, corporis officia dolorem sint quod consequuntur nihil
        omnis reprehenderit vitae saepe suscipit!
      </p>
    </div>
    <div class="px-16 mt-8 flex">
      <button
        class="border border-gray-400 mr-2 text-sm py-1 px-5 flex items-center rounded-sm text-gray-600"
      >
        <reply-icon :size="iconSize" class="mr-2"></reply-icon>
        <span class="font-semibold">Reply</span>
      </button>
      <button
        class="border border-gray-400 ml-2 text-sm py-1 px-5 flex items-center rounded-sm text-gray-600"
      >
        <arrow-right-icon :size="iconSize" class="mr-2"></arrow-right-icon>
        <span class="font-semibold">Forward</span>
      </button>
    </div>
  </div>
</template>

<script>
import LabelVariant from "vue-material-design-icons/LabelVariant";
import PrinterIcon from "vue-material-design-icons/Printer";
import OpenInNew from "vue-material-design-icons/OpenInNew";
import DotsVertical from "vue-material-design-icons/DotsVertical";
import ReplyIcon from "vue-material-design-icons/Reply";
import StarIcon from "vue-material-design-icons/StarOutline";
import MenuDownIcon from "vue-material-design-icons/MenuDown";
import ArrowRightIcon from "vue-material-design-icons/ArrowRightBold";

export default {
  data() {
    return {
      iconSize: 20,
      iconSizeSM: 18,
      senderMail: "<rasitiri3@gmail.com>",
      senderName: "Raşit İri"
    };
  },
  components: {
    LabelVariant,
    PrinterIcon,
    OpenInNew,
    DotsVertical,
    ReplyIcon,
    StarIcon,
    MenuDownIcon,
    ArrowRightIcon
  }
};
</script>
