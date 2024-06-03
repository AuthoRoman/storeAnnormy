import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";
import prod5 from "../../assets/prod5.png";
import prod6 from "../../assets/prod6.png";
import prod7 from "../../assets/prod7.png";
import prod8 from "../../assets/prod8.png";

export default {
  state: {
    filterProductsOptialActive: "lastest",
    numberPage: 1,
    currentPage: 1,
    isVisibleCreatorPopup: false,
    products: [
      {
        id: 1,
        img: prod1,
        card_text: "Curaitur Eget Feujat",
        card_price: "$250.00",
        optial: "lastest",
        page: 1,
      },
      {
        id: 2,
        img: prod2,
        card_text: "Dauulis Sagulis Porta",
        card_price: "$850.00",
        optial: "lastest",
        page: 1,
      },
      {
        id: 3,
        img: prod3,
        card_text: "Nam Commando",
        card_price: "$250.00",
        optial: "lastest",
        page: 1,
      },
      {
        id: 4,
        img: prod4,
        card_text: "Nec Retrum Nequm",
        card_price: "$250.00",
        optial: "lastest",
        page: 1,
      },
      {
        id: 5,
        img: prod5,
        card_text: "Phauselius Nec Rutry",
        card_price: "$250.00",
        optial: "best sellers",
        page: 1,
      },
      {
        id: 6,
        img: prod6,
        card_text: "Prasaent Corvalilis",
        card_price: "$250.00",
        optial: "special",
        page: 1,
      },
      {
        id: 7,
        img: prod7,
        card_text: "Proin Varlius Sem Lectus",
        card_price: "$165.00",
        optial: "best sellers",
        page: 1,
      },
      {
        id: 8,
        img: prod8,
        card_text: "Ult Accum Dapibus",
        card_price: "$250.00",
        optial: "lastest",
        page: 2,
      },
    ],
    filteredProducts: [], // новое свойство для хранения отфильтрованных продуктов
  },
  actions: {
    setFilterProductsArray(ctx, { searchTexts, filter }) {
      let newArray = ctx.state.products.filter(
        (product) =>
          product.card_text
            .toLowerCase()
            .includes(searchTexts && searchTexts.toLowerCase()) &&
          product.optial == filter
      );
      ctx.commit("setNumberPage", Math.ceil(newArray.length / 4));
      ctx.commit("getFilterProductsArray", newArray);
    },
    updateFilterProductsOptialActive({ commit }, newValue) {
      commit("setFilterProductsOptialActive", newValue);
    },
    implementpage(ctx) {
      if (ctx.state.currentPage < ctx.state.numberPage) {
        ctx.commit("setCurrentNumberPage", (ctx.state.currentPage += 1));
      }
    },
    decrementpage(ctx) {
      if (ctx.state.currentPage > 1) {
        ctx.commit("setCurrentNumberPage", (ctx.state.currentPage -= 1));
      }
    },
  },
  mutations: {
    getFilterProductsArray(state, filterProducts) {
      state.filteredProducts = filterProducts; // сохраняем отфильтрованные продукты в новом свойстве
    },
    setFilterProductsOptialActive(state, newValue) {
      state.filterProductsOptialActive = newValue;
    },
    setNumberPage(state, newPage) {
      state.numberPage = newPage;
    },
    setCurrentNumberPage(state, newPage) {
      state.currentPage = newPage;
    },
    createProduct(state, newState) {
      state.products.unshift(newState);
    },
    setVisible(state) {
      state.isVisibleCreatorPopup = !state.isVisibleCreatorPopup;
    },
  },
  getters: {
    getArray(state) {
      return state.filteredProducts; // возвращаем отфильтрованные продукты из нового свойства
    },
    getInitArray(state) {
      return state.products;
    },
    filterProductsOptialActive: (state) => state.filterProductsOptialActive,
    getNumPage: (state) => state.numberPage,
    getCurrentPage: (state) => state.currentPage,
    getSetVisibleCreator: (state) => state.isVisibleCreatorPopup,
  },
};
