<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-pt-lg q-pb-lg q-px-md" elevated>
      <q-toolbar class="q-pt-lg q-pb-lg q-px-md" elevated>
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
          to="/form"
          label="Form"
          flat
          round
          dense
          class="text-center q-mr-md"
        />

        <q-space />
        <q-btn
          to="/review"
          label="Review"
          flat
          round
          dense
          class="text-center"
        />
        <q-space />
      </q-toolbar>
      <div class="text-right crtTime">{{ currentTime }}</div>
    </q-header>
    <q-page-container>
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
.q-header {
  background-color: white;
  margin: 20px;
  box-shadow: 0 1px 5px rgba(0, 0.15, 0.15, 0.15);
}
.crtTime {
  color: black;
  font-family: "Gamja Flower", "sans-serif";
}
.q-btn {
  color: black;
  font-family: "Exo 2", "sans-serif";
}
</style>
