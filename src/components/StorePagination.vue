<template>
  <div class="store_pagination">
    <div>
      <button class="pagination_button" type="button" @click="decrementpage">
        Пред
      </button>
      <button
        class="pagination_button"
        v-for="page in getNumPage"
        :key="page"
        type="button"
        @click="setCurrentNumberPage(page)"
      >
        {{ page }}
      </button>

      <button class="pagination_button" type="button" @click="implementpage">
        След
      </button>
    </div>

    <div class="subNotice_page">Текущая страница {{ getCurrentPage }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default defineComponent({
  name: "StorePagination",

  methods: {
    ...mapActions(["implementpage", "decrementpage"]),
    ...mapMutations(["setCurrentNumberPage"]),
  },
  computed: {
    ...mapGetters(["getNumPage", "getCurrentPage"]),
  },
});
</script>

<style lang="less" scoped>
.store_pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.pagination_button {
  width: 50px;
  height: 25px;
  margin: 5px;
  background-color: transparent;
  transition: all 0.6s;
}

.pagination_button:hover {
  cursor: pointer;
  transform: scale(1.15);
}
.pagination_button:active {
  cursor: pointer;
  transform: scale(1);
}
</style>
