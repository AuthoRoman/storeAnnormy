import { ActionContext, Module } from "vuex";
import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";
import prod5 from "../../assets/prod5.png";
import prod6 from "../../assets/prod6.png";
import prod7 from "../../assets/prod7.png";
import prod8 from "../../assets/prod8.png";

interface Product {
  id: number;
  img: string;
  card_text: string;
  card_price: string;
  optial: string;
  page: number;
}

// Интерфейс состояния
interface StoreState {
  filterProductsOptialActive: string;
  numberPage: number;
  currentPage: number;
  isVisibleCreatorPopup: boolean;
  products: Product[];
  filteredProducts: Product[];
}

// Типы для параметров экшена
interface SetFilterProductsArrayPayload {
  searchTexts: string;
  filter: string;
}

// Дефолтное состояние
const state: StoreState = {
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
  filteredProducts: [],
};

const mutations = {
  getFilterProductsArray(state: StoreState, filterProducts: Product[]) {
    state.filteredProducts = filterProducts;
  },
  setFilterProductsOptialActive(state: StoreState, newValue: string) {
    state.filterProductsOptialActive = newValue;
  },
  setNumberPage(state: StoreState, newPage: number) {
    state.numberPage = newPage;
  },
  setCurrentNumberPage(state: StoreState, newPage: number) {
    state.currentPage = newPage;
  },
  createProduct(state: StoreState, newProduct: Product) {
    state.products.unshift(newProduct);
  },
  setVisible(state: StoreState) {
    state.isVisibleCreatorPopup = !state.isVisibleCreatorPopup;
  },
};

const actions = {
  setFilterProductsArray(
    ctx: ActionContext<StoreState, any>,
    payload: SetFilterProductsArrayPayload
  ) {
    const { searchTexts, filter } = payload;
    const newArray = ctx.state.products.filter(
      (product) =>
        product.card_text.toLowerCase().includes(searchTexts.toLowerCase()) &&
        product.optial === filter
    );
    ctx.commit("setNumberPage", Math.ceil(newArray.length / 4));
    ctx.commit("getFilterProductsArray", newArray);
  },
  updateFilterProductsOptialActive(
    { commit }: ActionContext<StoreState, any>,
    newValue: string
  ) {
    commit("setFilterProductsOptialActive", newValue);
  },
  implementpage(ctx: ActionContext<StoreState, any>) {
    if (ctx.state.currentPage < ctx.state.numberPage) {
      ctx.commit("setCurrentNumberPage", ctx.state.currentPage + 1);
    }
  },
  decrementpage(ctx: ActionContext<StoreState, any>) {
    if (ctx.state.currentPage > 1) {
      ctx.commit("setCurrentNumberPage", ctx.state.currentPage - 1);
    }
  },
};

const getters = {
  getArray(state: StoreState): Product[] {
    return state.filteredProducts;
  },
  getInitArray(state: StoreState): Product[] {
    return state.products;
  },
  filterProductsOptialActive: (state: StoreState): string =>
    state.filterProductsOptialActive,
  getNumPage: (state: StoreState): number => state.numberPage,
  getCurrentPage: (state: StoreState): number => state.currentPage,
  getSetVisibleCreator: (state: StoreState): boolean =>
    state.isVisibleCreatorPopup,
};

const storeModule: Module<StoreState, any> = {
  state,
  mutations,
  actions,
  getters,
};

export default storeModule;
