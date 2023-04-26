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
        <a href="https://forms.gle/7pXhQeigTGfWFsjQ7" style="font-weight: bold"
          >FORM</a
        >
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
    <h5 class="q-mt-none" style="background-color: aquamarine">
      NEXT SSAFY? 이 활동의 이름이 뭔가요?
    </h5>
    <div style="background-color: ghostwhite">
      "NEXT SSAFY"는 SSAFY 도전자 또는 수료생이 함께 성장해가며 만들어가는
      커뮤니티입니다.
      <p></p>
      "NEXT SSAFY"의 주요 특징은 다음과 같습니다.
      <pre></pre>
      - QnA 답변 : 공식적으로 물어보기 힘들거나, 주관적으로 판단해야 할 질문들의
      QnA를 진행하고 결과를 저장해서 공유합니다.
      <p></p>
      - 모의 면접 & 스터디 : 이전 기수들의 면접 경험을 바탕으로 비슷한 상황을
      겪을 수 있도록 모의 면접과 스터디를 주선합니다.
      <p></p>
      - 엔지니어로써 성장: 단순히 SSAFY의 합격 불합격을 목표로 하는 것이 아닌
      다각도로 지금의 성장이 이후 엔지니어로써 나아갈 발판이 될 수 있도록 방향을
      잡아줍니다.
      <p></p>
      - 열정있는 동료들과 친해질 기회 : SSAFY를 수료하거나, 도전한 것으로
      만족하지 못하고 타인과 함께 정보를 공유하고 함께 성장하고 싶어하는
      개발자들과 친해져, 지속 가능한 성장을 하며 서로에게 자극제가 되는 동료들이
      됩시다!
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
