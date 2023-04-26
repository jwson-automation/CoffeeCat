<template>
  <q-page class="q-pt-lg q-pb-lg q-px-md text-center flex-center">
    <q-space />
    <h5 class="q-mt-none" style="background-color: aquamarine">
      Coffee Cat이 뭔가요?
    </h5>
    <div style="background-color: ghostwhite">
      <p>안녕하세요!</p>
      <p>
        Coffee Cat은 8명의 신입 개발자, 싸피 교육생이 진행 중인 멘토링 프로그램
        입니다.
      </p>
      <p>
        <a href="/form" style="font-weight: bold">FORM</a>
        버튼을 누르시고, 이야기 하고 싶은 내용, 상담 받고 싶은 내용을 적어서
        보내주시면,
      </p>
      <p>
        총 6명의 멘토 중에 가장 비슷한 상황의 경험이 있는 멘토님이 연락을
        드립니다.
      </p>
    </div>
    <h5 class="q-mt-none" style="background-color: aquamarine">
      어떤방식으로 진행되나요?
    </h5>
    <div style="background-color: ghostwhite">
      <p>진행 방식은 모두 멘토님들의 역량에 맡기고 있습니다.</p>
      <p>
        통화를 통해 이야기 하는 경우도 있고, 메세지로 설명하거나 첨삭을 직접
        달아주시는 분도 계십니다.
      </p>
      <p>원하는 방향이 있다면 적극적으로 폼에 남겨주세요!</p>
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
  font-size: 20px;
}
</style>
