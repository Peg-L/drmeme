<template>
  <!-- 精選文章 banner -->
  <BannerComponent
    title="精選文章"
    subtitle="Featured Articles"
    image-name="banner-article.jpg"
    image-alt="'精選文章"
  />
  <div class="container">
    <div
      v-masonry="containerId"
      transition-duration="0.3s"
      item-selector=".item"
      class="row"
    >
      <div
        v-masonry-tile
        class="item col-sm-6 col-md-4 col-lg-3"
        v-for="item in blocks"
        :key="item.id"
      >
        <img :src="item.imgUrl" :alt="item.title" class="img-fluid" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
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
    return {
      blocks: [
        {
          id: 1,
          title: '文章1',
          imgUrl:
            'https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文xxxxx',
        },
        {
          id: 2,
          title: '文章2',
          imgUrl:
            'https://plus.unsplash.com/premium_photo-1706727291890-21aabd0cce3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文2 xxxxx',
        },
        {
          id: 3,
          title: '文章3',
          imgUrl:
            'https://images.unsplash.com/photo-1707153982034-b9e0c37e203e?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文3 xxxxx',
        },
        {
          id: 4,
          title: '文章4',
          imgUrl:
            'https://images.unsplash.com/photo-1708481736382-af81348e8b57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文 4 xxxxx',
        },
        {
          id: 5,
          title: '文章5',
          imgUrl:
            'https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文5 xxxxx',
        },
        {
          id: 6,
          title: '文章6',
          imgUrl:
            'https://images.unsplash.com/photo-1708523404198-86eab6eab55d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文6 xxxxx',
        },
        {
          id: 7,
          title: '文章7',
          imgUrl:
            'https://images.unsplash.com/photo-1708452722875-04779d4704b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文7 xxxxx',
        },
        {
          id: 8,
          title: '文章8',
          imgUrl:
            'https://images.unsplash.com/photo-1708583625790-732008e8f277?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文8 xxxxx',
        },
        {
          id: 9,
          title: '文章9',
          imgUrl:
            'https://images.unsplash.com/photo-1708458927308-f798522882a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文9 xxxxx',
        },
        {
          id: 10,
          title: '文章10',
          imgUrl:
            'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          content: '文章內文 10 xxxxx',
        },
      ],
    };
  },
};
</script>
<style>
.item {
  margin-inline: auto;
}
</style>
