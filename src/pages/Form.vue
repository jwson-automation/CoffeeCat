<template>
  <q-page>
    <div>
      <iframe
        src="https://forms.gle/7pXhQeigTGfWFsjQ7"
        style="width: 100%; height: 100vh"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
<style>
.q-page {
  font-family: "Gamja Flower", "sans-serif";
}

.webview {
  display: flex;
  height: 100%;
  width: 100%;
  border: none;
  overflow: hidden;
}
</style>
