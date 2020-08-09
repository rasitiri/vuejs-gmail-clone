<template>
  <div class="border-b py-2">
    <div class="lg:grid lg:grid-cols-10 lg:gap-1 lg:mx-auto flex flex-col">
      <div class="col-span-2 lg:pl-5 flex items-center mx-auto lg:mx-0">
        <div class="lg:mx-1 lg:inline hidden">
          <menu-icon></menu-icon>
        </div>
        <router-link to="/">
          <div class="lg:mx-3">
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
      <div
        :class="[
          isFocused ? onFocusStyle : normalStyle,
          'w-4/5 mx-auto lg:mx-0 lg:w-full'
        ]"
      >
        <div class="flex items-center border-none lg:py-3 py-2">
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
      <div
        class="col-span-3 flex items-center justify-end pr-5 mx-auto lg:mx-0 my-1"
      >
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
