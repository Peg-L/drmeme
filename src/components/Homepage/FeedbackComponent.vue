<template>
  <!-- 粉絲＆聽眾好評 -->
  <div class="container py-20 py-md-30">
    <!-- 好評標題 -->
    <TitleBlockComponent title="FEEDBACK" text2="粉絲＆聽眾好評" />

    <!-- 好評內容 -->
    <div class="row g-6">
      <div class="col-md-6">
        <div
          class="p-6 p-md-10 border-dashed border-dashed-primary-500 d-flex flex-column h-100"
        >
          <div class="fs-3 fw-bold">
            <i class="fa-solid fa-podcast me-2 text-secondary-500"></i
            >段考仔救贖
          </div>
          <div class="flex-grow-1">
            <p class="fs-5">
              最近突然看到Dr.命的ig帳號發現很有趣就追蹤了，雖然我也不是要考醫學系但也是水深火熱學測生，聽完覺得很有幫助讀書讀到快爆炸的時候聽這個podcast感覺很棒，希望之後還會持續更新很多內容(((o(ﾟ▽ﾟ
              )o)))
            </p>
          </div>
          <div class="fs-6 align-self-end mt-6 mt-md-4">
            <div>2020/07/09</div>
            <div>yanlingm0</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="p-6 p-md-10 border-dashed border-dashed-secondary-500 d-flex flex-column h-100"
        >
          <div class="fs-3 fw-bold">
            <i class="fa-brands fa-spotify me-2 text-secondary-500"></i
            >最喜歡幹話了
          </div>
          <div class="flex-grow-1">
            <p class="fs-5">國考地獄的休息時間中聽迷因的談話真的很紓壓</p>
          </div>

          <div class="fs-6 align-self-end mt-6 mt-md-4">
            <div>2020/08/14</div>
            <div>客服實在不行</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="p-6 p-md-10 border-dashed border-dashed-secondary-500 d-flex flex-column h-100"
        >
          <div class="fs-3 fw-bold">
            <i class="fa-brands fa-instagram me-2 text-secondary-500"></i>：）
          </div>
          <div class="flex-grow-1">
            <p class="fs-5">
              因為欣賞的人有追ig所以就跟著追 改變我對罵髒話的看法 聽了收獲很多
              也受過版主的開導 讓我從黑暗看見光明不再頹廢 真的很感謝🙏😇😇😇
            </p>
          </div>
          <div class="fs-6 align-self-end mt-6 mt-md-4">
            <div>2020/09/05</div>
            <div>❤️🤎💜💙🧡</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="p-6 p-md-10 border-dashed border-dashed-primary-500 d-flex flex-column h-100"
        >
          <div class="fs-3 fw-bold">
            <i class="fa-solid fa-podcast me-2 text-secondary-500"></i
            >謝謝命的分享
          </div>
          <div class="flex-grow-1">
            <p class="fs-5">
              謝謝命的分享讓我們對於斜槓有更進一步的觀念也知道了一些平常比較沒有聽說的事情🤫相信幹部們跟學妹都對平常較沒有接觸的世界有了不同的看法還有視角💯
            </p>
          </div>
          <div class="fs-6 align-self-end mt-6 mt-md-4">
            <div>2022/05/17</div>
            <div>_smms10_</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBlockComponent from '@/components/Homepage/TitleBlockComponent.vue';
export default {
  components: {
    TitleBlockComponent,
  },
};
</script>
