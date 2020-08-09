<template>
  <div>
    <box-button title="Important">
      <important-icon :size="iconSize" class="text-gray-600"></important-icon>
    </box-button>
    <box-button title="Chats">
      <chat-icon :size="iconSize" class="text-gray-600"></chat-icon>
    </box-button>
    <box-button title="Scheduled">
      <scheduled-icon :size="iconSize" class="text-gray-600"></scheduled-icon>
    </box-button>
    <box-button title="All Mail">
      <all-mail-icon :size="iconSize" class="text-gray-600"></all-mail-icon>
    </box-button>
    <box-button title="Spam">
      <spam-icon :size="iconSize" class="text-gray-600"></spam-icon>
    </box-button>
    <box-button title="Trash">
      <trash-icon :size="iconSize" class="text-gray-600"></trash-icon>
    </box-button>
    <box-button title="Categories">
      <categories-icon :size="iconSize" class="text-gray-600"></categories-icon>
    </box-button>
    <box-button title="Manage labels">
      <manage-labels-icon
        :size="iconSize"
        class="text-gray-600"
      ></manage-labels-icon>
    </box-button>
    <box-button title="Create new label">
      <create-new-label-icon
        :size="iconSize"
        class="text-gray-600"
      ></create-new-label-icon>
    </box-button>
  </div>
</template>

<script>
import ImportantIcon from "vue-material-design-icons/LabelVariant";
import ChatIcon from "vue-material-design-icons/GoogleHangouts";
import ScheduledIcon from "vue-material-design-icons/SendClock";
import AllMailIcon from "vue-material-design-icons/Mail";
import SpamIcon from "vue-material-design-icons/AlertOctagon";
import TrashIcon from "vue-material-design-icons/Delete";
import CategoriesIcon from "vue-material-design-icons/Label";
import ManageLabelsIcon from "vue-material-design-icons/Cog";
import CreateNewLabelIcon from "vue-material-design-icons/Plus";
import BoxButton from "./BoxButton";

export default {
  components: {
    BoxButton,
    ImportantIcon,
    ChatIcon,
    ScheduledIcon,
    AllMailIcon,
    SpamIcon,
    TrashIcon,
    CategoriesIcon,
    ManageLabelsIcon,
    CreateNewLabelIcon
  },
  data() {
    return {
      iconSize: 20
    };
  }
};
</script>
