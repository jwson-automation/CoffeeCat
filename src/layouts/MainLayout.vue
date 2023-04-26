<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="q-pt-lg q-pb-lg q-px-md">
        <q-space />
        <q-img src="../assets/logo.png" alt="Logo" width="300px" fit="cover" />
        <q-space />
        <q-btn
          to="/"
          label="Home"
          flat
          round
          dense
          class="text-center q-mr-md"
        />
        <q-space />
        <q-btn
          to="/"
          label="Form"
          flat
          round
          dense
          class="text-center q-mr-md"
        />

        <q-space />
        <q-btn to="/help" label="Review" flat round dense class="text-center" />
        <q-space />
      </q-toolbar>
      <div class="text-subtitle1">{{ currentTime }}</div>

      <!-- <q-img
        src="https://www3.nhk.or.jp/nhkworld/en/news/backstories/2331/images/geM9EJcCyAImlHFIjsH5cmlkkOq8cFDeAWl77CWu.jpeg"
        alt="이미지"
        class="header-image absolute-top"
      /> -->
    </q-header>
    <q-page-container>
      <keep-alive></keep-alive>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const currentTime = computed(() => {
      const timeStamp = Date.now();
      const options = {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      return new Intl.DateTimeFormat("ko-KR", options).format(timeStamp);
    });

    return {
      currentTime,
    };
  },
});
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.4;
  filter: grayscale(100%);
}
</style>
