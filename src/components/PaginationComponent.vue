<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          type="button"
          class="page-link"
          aria-label="Previous"
          @click="getItems(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        v-for="page in pages.total_pages"
        :key="page + 'page'"
        class="page-item"
        :class="{ active: page === pages.current_page }"
      >
        <a type="button" class="page-link" @click="getItems(page)">{{
          page
        }}</a>
      </li>

      <!-- emit 寫法 -->
      <!-- <li
        v-for="page in pages.total_pages"
        :key="page + 'page'"
        class="page-item"
        :class="{ active: page === pages.current_page }"
      >
        <a
          type="button"
          class="page-link"
          @click.prevent="$emit('change-page', page)"
          >{{ page }}</a
        >
      </li> -->

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          type="button"
          class="page-link"
          aria-label="Next"
          @click="getItems(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages', 'getItems'],
};
</script>
