import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";
import prod5 from "../../assets/prod5.png";
import prod6 from "../../assets/prod6.png";
import prod7 from "../../assets/prod7.png";
import prod8 from "../../assets/prod8.png";
import { defineStore } from "pinia";

interface Product {
  id: number;
  img: string;
  card_text: string;
  card_price: string;
  optial: string;
  page: number;
}

interface StoreState {
  filterProductsOptialActive: string;
  numberPage: number;
  currentPage: number;
  isVisibleCreatorPopup: boolean;
  products: Product[];
  filteredProducts: Product[];
}

export const useProductStore = defineStore("product", {
  state: (): StoreState => ({
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
  }),

  getters: {
    getArray(state): Product[] {
      return state.filteredProducts;
    },
    getInitArray(state): Product[] {
      return state.products;
    },
    getfilterProductsOptialActive: (state) => state.filterProductsOptialActive,
    getNumPage: (state) => state.numberPage,
    getCurrentPage: (state) => state.currentPage,
    getSetVisibleCreator: (state) => state.isVisibleCreatorPopup,
  },

  actions: {
    setFilterProductsArray({
      searchTexts,
      filter,
    }: {
      searchTexts: string;
      filter: string;
    }) {
      const newArray = this.products.filter(
        (product) =>
          product.card_text.toLowerCase().includes(searchTexts.toLowerCase()) &&
          product.optial === filter
      );
      this.numberPage = Math.ceil(newArray.length / 4);
      this.filteredProducts = newArray;
    },
    updateFilterProductsOptialActive(newFilter: string) {
      this.filterProductsOptialActive = newFilter;
    },
    setCurrentNumberPage(newPage: number) {
      this.currentPage = newPage;
    },
    implementPage() {
      if (this.currentPage < this.numberPage) {
        this.currentPage += 1;
      }
    },
    decrementPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    createProduct(newProduct: Product) {
      this.products = [newProduct, ...this.products];
    },
    toggleVisibleCreatorPopup() {
      this.isVisibleCreatorPopup = !this.isVisibleCreatorPopup;
    },
  },
});
