<template>
  <div class="popup__global" ref="popup__global">
    <div class="popup">
      <div class="popup__header">
        <span></span>
        <span>
          <img
            @click="closePopup"
            width="15"
            class="popup__header--close"
            height="15"
            src="https://img.icons8.com/ios-glyphs/30/c89351/delete-sign.png"
            alt="delete-sign"
          />
        </span>
      </div>
      <div class="popup__body">
         
          <textarea   placeholder="URL image" id v-model="imgSrc" class="popup--text"/>  
          <div class="popup__inner">
             

            <textarea
              placeholder="Title"
              class="popup__title"
              v-model="title"
              type="text"
              name=""
              id=""
            />
           
          <textarea placeholder="$price" class="popup__price" v-model="price" />
        </div>
      </div>
      <div class="popup__footer">
        <button @click="closePopup" class="popup__button--close">Close</button
        ><button @click="submit" class="popup__button--submit">
          Add Product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,  } from "vuex";
export default {
  name: "PopupProductCreate",

    data() {
      return {
        title: "",
        imgSrc: "",
        price: "",
      };
    },
   
  methods: {
    ...mapMutations(["createProduct", "setVisible","getFilterProductsArray"]),
     
     
    closePopup() {
      this.setVisible(false);
    },
    submit() {
      this.createProduct({
        id: Math.random(Date.now()),
        img: this.imgSrc  ,
        card_text: this.title  ,
        card_price: "$" + this.price  ,
        optial: "lastest",
      })  
      this.closePopup()
    },
  },
  mounted() {
    document.addEventListener("click", (item) => {
      if (item.target === this.$refs["popup__global"]) {
        this.closePopup();
      }
    });
  },
};
</script>

<style lang="less" scoped>
 

.popup {
  padding: 10px 26px;
  position: fixed;
  top: 50px;
  width: 800px;
  height: 400px;
  background: #ffff;
  box-shadow: 0 0 17px 0 #c89351;

  &__global {
    background: #262431ed;
      display: flex;
      justify-content: center;
      align-items: center;

      position: fixed;
      right: 0;
      left: 0;
      top: 0;

      bottom: 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0 0 0;
    &--close {
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__inner{
    display: flex;
    flex-direction: column;
     justify-content: space-between;
      
  }

  &__title{
    max-height: 80px;
    max-width: 200px;
  }

  &--title{
    max-width: 300px;
    padding: 5px;
    width:100%;
  }

  &--text{
  max-width: 170px; 
  max-height: 218px;
   height: 218px;
   width: 170px;
   margin: 15px;
  }

 

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  &__footer {
    margin: 40px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__price{
    margin-top:  120px;
    max-height: 48px;
    max-width: 120px;
    
     
    font-size: 15px;
    padding: 5px;
  }

  &__button {
    
    &--submit {
      padding: 8px;
      color: #262431;
      background: transparent;

      width: 170px;
      height: 40px;
      background-color: transparent;
      border: 3px solid #262431;
      transition: scale 0.6s;
      font-size: 15px;
      &:hover {
        cursor: pointer;
        scale: (1.09);
      }
      &:active {
        cursor: pointer;
        scale: (0.9);
      }
    }
    &--close {
      width: 100px;
      height: 40px;
      background-color: transparent;
      border: 3px solid #262431;
      transition: scale 0.6s;
      font-size: 15px;
      &:hover {
        cursor: pointer;
        scale: (1.09);
      }
      &:active {
        cursor: pointer;
        scale: (0.9);
      }
    }
  }
}
</style>
