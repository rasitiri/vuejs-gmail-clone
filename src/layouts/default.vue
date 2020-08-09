<template>
  <div class="min-h-screen" style="height:150px">
    <gmail-navbar></gmail-navbar>
    <gmail-main></gmail-main>
  </div>
</template>

<script>
import GmailNavbar from "../components/GmailNavbar";
import GmailMain from "../components/GmailMain";

export default {
  name: "Home",
  components: {
    GmailNavbar,
    GmailMain
  }
};
</script>
