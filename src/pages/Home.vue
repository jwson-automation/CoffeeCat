<template>
  <q-page class="q-pt-lg q-pb-lg q-px-md flex-center">
    <q-space />
    <q-card class="q-mb-md">
      <q-card-section style="display: flex; align-items: left">
        <img
          src="../assets/coffee.png"
          style="width: 15%; margin-right: 20px"
        />
        <div class="q-gutter-md q-items-left">
          <div>
            <p
              class="text-h5 font-weight-bold q-mb-xs"
              style="background-color: wheat"
            >
              Coffee Cat이 뭔가요?
            </p>

            <p class="text-body-1 q-mb-md">
              Coffee Cat은 8명의 신입 개발자, 싸피 교육생이 진행 중인 멘토링
              프로그램입니다.
            </p>
            <a
              style="background-color: black; color: white"
              href="https://forms.gle/7pXhQeigTGfWFsjQ7"
              >FORM</a
            >
            <span class="text-body-1">
              버튼을 누르시면 멘토링 신청화면으로 전환됩니다.
            </span>
            <span class="text-body-1">
              총 9명의 멘토 중에 가장 비슷한 상황의 경험이 있는 멘토님이 연락을
              드릴 예정입니다.
            </span>
            <span style="background-color: yellow">
              멘토링이 성공적이었다면, 멘토님에게 큰 사례는 필요 없으니 작은
              커피 한잔씩 선물 해주세요!
            </span>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-mb-md">
      <q-card-section style="display: flex; align-items: center">
        <img
          src="../assets/friends.png"
          style="width: 15%; margin-right: 20px"
        />
        <div class="q-gutter-md q-items-center">
          <div>
            <p
              class="text-h5 font-weight-bold q-mb-xs"
              style="background-color: wheat"
            >
              어떤 이야기를 들을 수 있나요?
            </p>

            <p class="text-body-1 q-mb-md">
              이력서 첨삭, 자소서 분석, 스토리텔링, 면접 준비, 시험 후기, 등
              여러가지 정보를 들을 수 있습니다.
            </p>

            <span class="text-body-1">
              또한, 엔지니어로써 최근 현업의 이야기나 방향성, 취업 준비 전략에
              대한 이야기도 가능합니다. 하지만, 너무 과한 질문 세례는 멘토님이
              힘들어하니 꼭 어떤 테마로 대화할 것인지 미리 준비해주세요!
            </span>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-mb-md">
      <q-card-section style="display: flex; align-items: center">
        <img src="../assets/heart.png" style="width: 15%; margin-right: 20px" />
        <div class="q-gutter-md q-items-center">
          <div>
            <p
              class="text-h5 font-weight-bold q-mb-xs"
              style="background-color: wheat"
            >
              이런걸 왜 하는 건가요?
            </p>

            <p class="text-body-1 q-mb-md">
              단순히 상담해주고 커피 한잔 선물 받고 끝이 아닌, 엔지니어로써
              여러분과 함께 성장하는 동료가 되고 싶습니다.
            </p>

            <span class="text-body-1">
              취업도, 이직도 정보가 가장 중요한 우리 엔지니어! 오늘 도움 받은
              내용을 꼭 훌륭한 엔지니어가 되어서 함께 일하고 성장함으로써
              돌려주세요!
            </span>
          </div>
        </div>
      </q-card-section>
    </q-card>
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
  font-size: medium;
}
</style>
