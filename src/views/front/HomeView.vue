<template>
  <BannerComponent />

  <FollowIgComponent />

  <PodcastComponent />

  <ShoppingComponent />

  <FeedbackComponent />
</template>

<script>
import BannerComponent from '@/components/Homepage/BannerComponent.vue';
import FollowIgComponent from '@/components/Homepage/FollowIgComponent.vue';
import PodcastComponent from '@/components/Homepage/PodcastComponent.vue';
import ShoppingComponent from '@/components/Homepage/ShoppingComponent.vue';
import FeedbackComponent from '@/components/Homepage/FeedbackComponent.vue';

export default {
  components: {
    BannerComponent,
    FollowIgComponent,
    PodcastComponent,
    ShoppingComponent,
    FeedbackComponent,
  },
};
</script>
