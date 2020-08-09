<template>
  <div class="border-b py-2">
    <div class="grid grid-cols-10 gap-1">
      <div class="col-span-2 pl-5 flex items-center">
        <div class="mx-1">
          <menu-icon></menu-icon>
        </div>
        <router-link to="/">
          <div class="mx-3">
            <img
              class="gb_ua"
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
              srcset="
                https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png 1x,
                https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x.png 2x
              "
              alt
              aria-hidden="true"
              style="width:109px;height:40px"
            />
          </div>
        </router-link>
      </div>
      <div :class="[isFocused ? onFocusStyle : normalStyle]">
        <div class="flex items-center border-none py-3">
          <search-icon class="text-gray-700 px-3"></search-icon>
          <input
            @focus="onFocus"
            @blur="onBlur"
            ref="searchMail"
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search mail"
          />
          <arrow-downward class="text-gray-700 px-2"></arrow-downward>
        </div>
      </div>
      <div class="col-span-3 flex items-center justify-end pr-5">
        <div class="flex items-center">
          <help-icon class="mx-2 text-gray-700"></help-icon>
          <settings-icon class="mx-2 text-gray-700"></settings-icon>
          <apps-icon class="mx-2 text-gray-700"></apps-icon>
          <img
            src="https://avatars0.githubusercontent.com/u/30735258?s=460&u=83a7f783ee9e0aca88cadaba714f7a48071806cf&v=4"
            class="w-8 h-8 rounded-full ml-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu";
import ArrowDownward from "vue-material-design-icons/ChevronDown";
import SearchIcon from "vue-material-design-icons/Magnify";
import HelpIcon from "vue-material-design-icons/HelpCircleOutline";
import SettingsIcon from "vue-material-design-icons/CogOutline";
import AppsIcon from "vue-material-design-icons/Apps";

export default {
  components: {
    MenuIcon,
    ArrowDownward,
    SearchIcon,
    HelpIcon,
    SettingsIcon,
    AppsIcon
  },
  data() {
    return {
      isFocused: false,
      normalStyle: "border border-gray-100 col-span-5 rounded-lg bg-gray-200",
      onFocusStyle:
        "border border-gray-100 col-span-5 rounded-lg bg-white shadow-lg"
    };
  },
  methods: {
    onFocus() {
      this.isFocused = true;
    },
    onBlur() {
      this.isFocused = false;
    },
    focusToInput() {
      this.$refs.searchMail.focus();
    }
  }
};
</script>
