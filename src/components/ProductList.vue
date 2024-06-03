<template>
  <div class="prodList">
    <div
      v-for="(val, index) in getArray.slice(
        (getCurrentPage - 1) * 4,
        getCurrentPage * 4
      )"
      :key="index"
    >
      <ProductCard
        :suk="val.id"
        :cardText="val.card_text"
        :cardPrice="val.card_price"
        :imgs="val.img"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  props: {
    searchTexts: {
      type: String,
      default: "",
    },
    filter: {
      type: String,
      default: "lastest",
    },
    page: Number,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getArray", "getCurrentPage", "getNumPage", "getInitArray",]),
  },
   
  methods: {
    ...mapActions(["setFilterProductsArray"]),
    ...mapMutations(["setCurrentNumberPage"]),
    fetchData() {
      if (this.getNumPage < this.getCurrentPage) {
        this.setCurrentNumberPage(1);
      }
      this.setFilterProductsArray({
        searchTexts: this.searchTexts,
        filter: this.filter,
      });
    },
  },
  watch: {
    searchTexts: {
      handler: "fetchData",
      immediate: true,
    },
    filter: "fetchData",
    getCurrentPage: "fetchData",
    getNumPage: "fetchData",
    getInitArray: "fetchData",
  },
};
</script>

<style scoped>
.prodList {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
</style>
