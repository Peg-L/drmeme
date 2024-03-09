<template>
  <!-- 聽取人生的藥方 (podcast) -->
  <div class="container pt-20 pb-0 py-md-30">
    <div class="border-none border border-md-12 border-dark p-md-2">
      <div class="border-md-dashed border-md-dashed-secondary-700 p-md-15">
        <div class="row justify-content-center">
          <!-- podcast 區塊標題 -->
          <TitleBlockComponent title="PODCAST" text2="聽取人生的藥方" />
          <!-- podcast 分類 -->
          <div class="col-12 col-xxl-8 gx-6 gy-2 gy-md-0">
            <div class="row gy-md-2 gy-lg-0">
              <div class="col-6 col-lg-3">
                <div
                  class="d-flex justify-content-md-center align-items-center py-md-3 border-none border border-2 border-primary-500 bdrs-30 text-primary-500"
                >
                  <span class="material-symbols-outlined me-2"> school </span
                  >學校沒有教的事
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div
                  class="d-flex justify-content-md-center align-items-center py-md-3 border-none border border-2 border-primary-500 bdrs-30 text-primary-500"
                >
                  <span class="material-symbols-outlined me-2">
                    stethoscope </span
                  >從醫學看人生
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div
                  class="d-flex justify-content-md-center align-items-center py-md-3 border-none border border-2 border-primary-500 bdrs-30 text-primary-500"
                >
                  <span class="material-symbols-outlined me-2">
                    medication </span
                  >醫師雜談
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div
                  class="d-flex justify-content-md-center align-items-center py-md-3 border-none border border-2 border-primary-500 bdrs-30 text-primary-500"
                >
                  <span class="material-symbols-outlined me-2">
                    question_mark </span
                  >醫護幹三小
                </div>
              </div>
            </div>
          </div>
          <!-- podcast 播放 -->
          <div class="col-12 col-lg-8 col-xl-6">
            <div class="bg-podcast mt-5 mt-md-20 bdrs-8">
              <div class="row justify-content-center">
                <img
                  class="col-6 col-md-4 bdrs-20 my-10"
                  :src="podcast.images"
                  alt="drmeme 圖片"
                />
                <div class="col-12">
                  <div
                    class="px-5 py-6 px-md-10 py-md-8 bg-dark text-light d-flex flex-column align-items-center bdrs-8"
                  >
                    <p>{{ podcast.title }}</p>
                    <audio ref="episode" :src="podcast.epSrc"></audio>
                    <input
                      ref="progress"
                      type="range"
                      class="progress w-100 mt-4 form-range"
                      :max="progressbar.max"
                      v-model="progressbar.value"
                      step="1"
                      min="0"
                      id="progress"
                      style="height: 8px"
                    />
                    <div class="w-100 d-flex justify-content-between mt-2">
                      <p>{{ formatTime(podcast.currentTime) }}</p>
                      <p>{{ formatTime(podcast.duration) }}</p>
                    </div>
                    <div ref="controls" class="d-flex align-items-center mt-4">
                      <button type="button" class="btn text-light border-0 p-1">
                        <i class="fa-solid fa-backward"></i>
                      </button>
                      <button
                        @click="handlePlay"
                        type="button"
                        class="btn text-light border-0 p-0 mx-10 mx-md-12"
                      >
                        <i
                          ref="controlBtn"
                          class="fa-solid fa-2xl"
                          :class="
                            podcast.paused
                              ? 'fa-circle-play'
                              : 'fa-circle-pause'
                          "
                        ></i>
                      </button>
                      <button type="button" class="btn text-light border-0 p-1">
                        <i class="fa-solid fa-forward"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-md-14">
              <div class="col-12 col-md-6 mt-5 mt-md-0">
                <a
                  target="_blank"
                  href="https://podcasts.apple.com/us/podcast/dr-meme/id1522408497"
                  type="button"
                  class="btn w-100 py-4 bg-light border border-4 border-dark bdrs-4 fs-5 fs-md-4 fw-bold button-hover"
                >
                  <i class="fa-solid fa-podcast fa-lg me-2"></i>Apple Podcasts
                </a>
              </div>
              <div class="col-12 col-md-6 mt-5 mt-md-0">
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/4gm4BSePy7Xoi08Nd8KH87"
                  type="button"
                  class="btn w-100 py-4 bg-light border border-4 border-dark bdrs-4 fs-5 fs-md-4 fw-bold button-hover"
                >
                  <i class="fa-brands fa-spotify fa-lg me-2"></i>Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBlockComponent from '@/components/Homepage/TitleBlockComponent.vue';

const { VITE_APP_SPOTIFY_CLIENT_ID, VITE_APP_SPOTIFY_CLIENT_SECRET } =
  import.meta.env;

export default {
  components: {
    TitleBlockComponent,
  },
  data() {
    return {
      id: '74FhGXNmjtQfLh2zCETaqb',
      podcast: {
        paused: true,
        images: '',
        title: '',
        currentTime: '',
        duration: '',
        epSrc: '',
      },
      progressbar: {
        max: 60,
        value: 0,
      },
    };
  },
  methods: {
    async getSpotifyToken() {
      const url = 'https://accounts.spotify.com/api/token';

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: `grant_type=client_credentials&client_id=${VITE_APP_SPOTIFY_CLIENT_ID}&client_secret=${VITE_APP_SPOTIFY_CLIENT_SECRET}`,
        url,
      };

      try {
        const response = await this.$http(options);
        const token = response.data.access_token;
        localStorage.setItem('token', token);
        console.log(token);
      } catch (error) {
        console.error('getSpotifyToken Error:', error);
        // throw error; // 可以拋出錯誤或進行其他錯誤處理
      }
    },
    async getSpotifyEp() {
      const token = localStorage.getItem('token');
      const url = `https://api.spotify.com/v1/episodes/${this.id}?market=TW`;
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url,
      };

      try {
        const response = await this.$http(options);
        const { images, name, audio_preview_url } = response.data;

        this.podcast.images = images[1].url;
        this.podcast.title = name;
        this.podcast.epSrc = audio_preview_url;
      } catch (error) {
        console.error('getSpotifyEp Error:', error.message);
        // throw error; // 可以拋出錯誤或進行其他錯誤處理
      }
    },
    getEpMetadata() {
      const epAudio = this.$refs.episode;
      epAudio.addEventListener('loadedmetadata', () => {
        this.podcast.duration = epAudio.duration;
        // this.podcast.currentTime = epAudio.currentTime;

        this.progressbar.max = this.podcast.duration;
      });
    },
    formatTime(s) {
      // 將 audio 的 時間轉換成 03:20 格式
      const min = Math.floor(s / 60);
      const remainingS = Math.round(s % 60);

      const formattedMin = min < 10 ? '0' + min : min;
      const formattedS = remainingS < 10 ? '0' + remainingS : remainingS;

      return `${formattedMin}:${formattedS}`;
    },
    handlePlay() {
      const controlBtn = this.$refs.controlBtn;
      const episode = this.$refs.episode;

      if (!this.podcast.paused) {
        episode.pause();
      } else {
        episode.play();
      }

      this.podcast.paused = !this.podcast.paused;
    },
  },
  async mounted() {
    await this.getSpotifyToken();
    this.getSpotifyEp();
    this.getEpMetadata();

    // 偵測 input 更新，同步音檔播放秒數
    this.$refs.progress.addEventListener('input', () => {
      this.$refs.episode.currentTime = this.progressbar.value;
    });

    // 隨著時間更新
    this.$refs.episode.ontimeupdate = () => {
      // 更新 progressbar
      this.progressbar.value = this.$refs.episode.currentTime;

      // 更新 下方標示時間
      this.podcast.currentTime = this.$refs.episode.currentTime;
    };

    // 監聽音檔結束
    this.$refs.episode.addEventListener('ended', () => {
      this.podcast.currentTime = 0;
      this.$refs.episode.currentTime = 0;
      this.handlePlay();
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/all.scss';
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

.bg-podcast {
  background: url('../../assets/images/background/bg-podcast.png') no-repeat
    center / cover;
}

.material-symbols-outlined.fs-larger {
  font-size: 60px;
}

@include media-breakpoint-down(md) {
  .border-none {
    border: none !important;
  }
}

#progress::-webkit-slider-thumb {
  width: 8px;
  border: 1px solid $primary-500;
  background-color: $primary-500;
  box-shadow: -407px 0 0 400px $primary-300;
}
</style>
