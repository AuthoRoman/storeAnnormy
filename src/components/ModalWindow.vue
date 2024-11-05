<template>
  <div class="popup__global" ref="popup__global">
    <div class="popup">
      <div class="popup__header">
        <span></span>
        <span>
          <img
            @click="() => closePopup()"
            width="15"
            class="popup__header--close"
            height="15"
            src="https://img.icons8.com/ios-glyphs/30/c89351/delete-sign.png"
            alt="delete-sign"
          />
        </span>
      </div>
      <div class="popup__body">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button @click="() => closePopup()" class="popup__button--close">
          Close
        </button>
        <button class="popup__button--submit">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PopupComponent",

  return: {},
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    document.addEventListener("click", (item) => {
      if (item.target === this.$refs["popup__global"]) {
        this.closePopup();
      }
    });
  },
});
</script>

<style lang="less" scoped>
.popup {
  padding: 10px 26px;
  position: fixed;
  top: 50px;
  width: 800px;
  height: 500px;
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
    margin: 15px 0 0 0;

    &--close {
      &:hover {
        cursor: pointer;
      }
    }
  }

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__button {
    &--submit {
      padding: 8px;
      color: #262431;
      background: transparent;

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
