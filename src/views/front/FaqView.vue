<template>
  <!-- FAQ banner -->
  <BannerComponent
    title="常見問答"
    subtitle="FAQ"
    image-name="banner-faq.jpg"
    image-alt="常見問答"
  />
  <!-- faq -->
  <div class="container">
    <div class="row justify-content-center my-15">
      <div class="col-md-8">
        <div class="accordion" id="accordionFaq">
          <!-- 1-5 -->
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                想問 Dr.Meme 為什麼想當醫生?
              </button>
            </h2>
            <div
              id="collapse1"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>這題也是被問到爛掉的前三名之一。</p>
                <p>
                  因為我想當團隊領導者、能幫助人的、可以動手的、社經地位還不錯的、可以常跟人接觸的、有使命感的職業。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                感覺 Dr.Meme <del class="mx-1">很閒</del> 時間很多?
              </button>
            </h2>
            <div
              id="collapse2"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p class="mb-4 fw-bold">其實我並不閒。</p>
                <p>
                  你們沒看到的是我常常 2 點睡 6
                  點多起床，沒看到我都是邊大便邊發文回訊息，沒看到我吃三餐的時候，也會一邊打病歷。出去時一邊開車一邊想演講内容、潛水技巧。跟刀的時候，除了拉勾缝合也問疾病相關的知識。甚至連洗澡刷牙的時候都在安排遊戲練功的計畫。你們只看得到表面，覺得我很閒，甚至還有人會試圖拿我上班的醫院來說嘴。
                </p>
                <p class="mt-4 fw-bold">
                  「你必須費盡努力，才能看起來毫不費力」
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                Dr.Meme 你說的這個 XXX 是錯的吧?
              </button>
            </h2>
            <div
              id="collapse3"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  我要特別申明一點，這個帳號是迷音帳號，不是醫學帳號。雖然偶爾會科普一些醫學知識，那種文如果有說錯，我一定訂正，但是大部分内容都是以搞笑為出發點。
                </p>
                <div class="my-4">拜託拜託! 認真就輸了好嗎?</div>
                <p>
                  以後我再看到認真魔人的留言應該會直接封鎖，免得引戰。把你們做學問的精神用在學校、實驗室、工作上都很好，在迷因版上戰學問，我不知道意義在哪?
                  除了展現你的人生很無聊以外吧🤷🏻‍♂️
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                請問每次的 IG 直播可以留影片放在 IGTV 嗎?
              </button>
            </h2>
            <div
              id="collapse4"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  謝謝大家喜歡我的直播/podcast，我也會努力繼續做出好內容的。但除非無法上傳音檔，不然目前都<strong>不會</strong>留重播在
                  igtv 給大家，因為 ppt
                  我會希望保有版權，這是我的一點點私心，請大家包含🥹🥹
                </p>
              </div>
            </div>
          </div>
          <!-- 6-10 -->
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
              >
                Dr. Meme 平常都在幹嘛?
              </button>
            </h2>
            <div
              id="collapse6"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body"><p>正在當無業游民環遊世界✈️</p></div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse7"
                aria-expanded="false"
                aria-controls="collapse7"
              >
                請問你真的是醫師嗎?
              </button>
            </h2>
            <div
              id="collapse7"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body"><p>是，已領有醫師執照</p></div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse8"
                aria-expanded="false"
                aria-controls="collapse8"
              >
                命哥在哪工作？可以露臉嗎？
              </button>
            </h2>
            <div
              id="collapse8"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  不方便唷，不希望經營 IG 影響現實生活，還請體諒！
                  雖然知道大家都有好奇心，但沒辦法為了滿足你的好奇心犧牲自己的隱私。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse9"
                aria-expanded="false"
                aria-controls="collapse9"
              >
                請問 Dr. Meme 單身嗎?
              </button>
            </h2>
            <div
              id="collapse9"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>目前跟楓之谷老婆阿戴爾甜蜜生活中。</p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse10"
                aria-expanded="false"
                aria-controls="collapse10"
              >
                好奇你對護理師/檢驗師/營養師/各種醫護的看法？
              </button>
            </h2>
            <div
              id="collapse10"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  不管對誰我的看法都一樣，感謝你們，有你們真好 QQ。
                  但特別感謝護理師，她們是我們並肩作戰最忠實的戰友。
                </p>
              </div>
            </div>
          </div>
          <!-- 11-15 -->
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse11"
                aria-expanded="false"
                aria-controls="collapse11"
              >
                欣賞的對象是醫師，想問醫師們喜歡什麼類型的女生/男生？
              </button>
            </h2>
            <div
              id="collapse11"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  醫師也是人，人都喜歡跟自己有共同話題、興趣、相處起來舒適自在的人。
                  所以不要卡在醫師的框架內，你會更有機會!!
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse12"
                aria-expanded="false"
                aria-controls="collapse12"
              >
                可以一起玩楓之谷嗎？
              </button>
            </h2>
            <div
              id="collapse12"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>可以! 伺服器琉德，ID：白袍薪水小偷</p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse13"
                aria-expanded="false"
                aria-controls="collapse13"
              >
                醫師是不是都很渣？都很愛劈腿？都很自以為？
              </button>
            </h2>
            <div
              id="collapse13"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  我只能說，人都是有可能渣的，不會因為他是醫師或不是就特別不一樣。
                  醫師的身分、薪水、社經地位，只是可能剛好給他比較好的條件，而且大家對醫師又有高度的道德期待，所以一旦有醫師外遇就會被放大檢視，但其實醫師並沒有特別渣。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse14"
                aria-expanded="false"
                aria-controls="collapse14"
              >
                怎麼讀書？怎麼跟人相處？要開始實習/工作怎麼辦？
              </button>
            </h2>
            <div
              id="collapse14"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>請去聽我之前錄的 podcast，各大 podcast 平台都找得到</p>
                <ul>
                  <li>
                    <a
                      href="https://open.spotify.com/episode/6GsUGPd3JzfKUzYNdVwxHu?si=0iYP3HaRS0yOJN_tpFP-yg"
                      >我就爛的人生哲學</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/episode/0jHeK9bX7DRXAUuvrLWFbP?si=dIA0VjgZR--6yXGm5DfOBQ"
                      >厚黑心理學</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/episode/3rKzOYzVG3zwnY6ZOnL4ZE?si=qrlkLuA9RdufnpOdYAiYJw"
                      >論人際關係</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/episode/4iBQ4J590xKX2M5nViZmK1?si=g8-aX1IbRqqq1DpsBRoaiA"
                      >讀書這檔事</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse15"
                aria-expanded="false"
                aria-controls="collapse15"
              >
                醫師很愛搞護理師嗎？護理師很愛貼醫師嗎？
              </button>
            </h2>
            <div
              id="collapse15"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  聽過近水樓台嗎？同理 老闆跟員工、校長跟老師、機師跟空姐...
                  並不是這些職業本身怎樣，而是每個職業都會有喜歡亂搞的人，所以不要拿醫師的框架出來套，這個是假議題！
                </p>
              </div>
            </div>
          </div>
          <!-- 16-20 -->
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse16"
                aria-expanded="false"
                aria-controls="collapse16"
              >
                可以邀請醫師來學校演講嗎？
              </button>
            </h2>
            <div
              id="collapse16"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  可以透過系學會、學生會、班聯會等管道邀請，有邀我都願意去！
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse17"
                aria-expanded="false"
                aria-controls="collapse17"
              >
                可以問醫學相關的問題嗎？
              </button>
            </h2>
            <div
              id="collapse17"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  你可以問我不一定會回答，僅提供就醫建議，絕不提供線上問診服務。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse18"
                aria-expanded="false"
                aria-controls="collapse18"
              >
                豪想認識你，請問可以約你ㄇ？
              </button>
            </h2>
            <div
              id="collapse18"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  老粉絲、邀請我去演講過的幹部、想學潛水、剛好我想約喝酒的話可約。
                  三個字：看緣分
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse19"
                aria-expanded="false"
                aria-controls="collapse19"
              >
                會不會看不起後醫、中醫、波西捷克生？
              </button>
            </h2>
            <div
              id="collapse19"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>我誰都不會看不起，我只會看不起連自己都看不起的人。</p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse20"
                aria-expanded="false"
                aria-controls="collapse20"
              >
                可以找你潛水嗎？
              </button>
            </h2>
            <div
              id="collapse20"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>直接約。</p>
              </div>
            </div>
          </div>
          <!-- 21-22 -->
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse21"
                aria-expanded="false"
                aria-controls="collapse21"
              >
                喜歡看劇嗎？看過機智醫生生活嗎？看過浪漫醫生金師傅嗎？是不是跟你們生活很像?
              </button>
            </h2>
            <div
              id="collapse21"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>
                  累得部分一樣，但我沒看過跟韓劇主角一樣正或一樣帥的醫師。也沒有那麼精彩刺激。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item rounded-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed rounded-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse22"
                aria-expanded="false"
                aria-controls="collapse22"
              >
                我是護生、實習生、醫學生，可以跟我說加油嗎？
              </button>
            </h2>
            <div
              id="collapse22"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body">
                <p>加油</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerComponent from '@/components/BannerComponent.vue';

export default {
  components: {
    BannerComponent,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import '../../assets/SCSS/all.scss';

.accordion-item {
  box-shadow: 10px 10px 20px 1px rgba(229, 228, 227, 0.5);

  &:not(:first-child) {
    margin-top: 30px;
  }
}

.accordion-button {
  font-weight: bold;
  font-size: 16px;

  @include media-breakpoint-up(md) {
    font-size: 20px;
  }
}
</style>
