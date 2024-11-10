<template>
  <div>
    <Transition>
      <PopupComponent v-if="isPopupVisible" @closePopup="closeNowPopup" appear>
        <div>
          <div class="product_card--text">{{ cardText }}</div>
          <div class="popup__inner">
            <div class="popup__image">
              {{ id }}
              <img :src="imgs" alt="" />
            </div>

            <p class="popup__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo repellat neque libero esse quidem error magni deserunt
              debitis quas at ducimus dolor adipisci quam unde itaque, cum ab
              dignissimos dicta. Amet consequatur ut, in dolore facilis dolores
              impedit, fuga quam qui eveniet atque vel praesentium beatae
              dolorem distinctio excepturi dolorum provident quae molestiae
              libero harum totam! Necessitatibus provident dignissimos expedita!
              Eius autem aperiam natus, quo ducimus iusto facere reprehenderit
              repudiandae voluptatibus corrupti labore
            </p>
          </div>
          <div class="product_card--price">{{ cardPrice }}</div>
        </div>
      </PopupComponent>
    </Transition>
    <Transition>
      <PopupProductCreate v-if="isPopupCreateVisible" />
    </Transition>

    <div class="product_card" @click="showPopup">
      <div class="poduct_image">
        <div class="product_card--inner">
          {{ id }}
          <img :src="imgs" alt="" />
        </div>
      </div>

      <div class="product_card--text">{{ cardText }}</div>
      <div class="product_card--price">{{ cardPrice }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PopupComponent from "../components/ModalWindow.vue";
import PopupProductCreate from "../components/PopupProductCreate.vue";

const props = defineProps({
  id: Number,
  cardText: String,
  cardPrice: String,
  imgs: String,
});

const isPopupVisible = ref(false);
const isPopupCreateVisible = ref(false);

function showPopup() {
  return (isPopupVisible.value = true);
}
function closeNowPopup() {
  return (isPopupVisible.value = false);
}
</script>

<style lang="less" scoped>
.product {
  &_card {
    max-height: 500px;
    max-width: 299px;
    width: 100%;
    height: 100%;
    margin-bottom: 35px;
    overflow: hidden;

    &--inner {
      height: 400px;
      width: 310px;
      background-color: #f2f2f2;
      display: flex;
      justify-content: center;
      flex-direction: column;
      transition: all 0.6s;
      overflow: hidden;
    }

    &:hover .product_card--inner {
      cursor: pointer;
      width: 345px;
    }

    &--text {
      font-size: 11px;
      margin: 10px 0 15px;
    }
  }

  &_image {
    overflow: hidden;
    height: 400px;
  }
}

.popup {
  &__inner {
    display: flex;
    align-items: center;
  }
  &__image {
    margin: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all 0.6s;
    overflow: hidden;

    width: 300px;
  }
  &__description {
    max-width: 500px;
  }
}

.v-enter-active {
  transition: opacity 0.8s ease;
}

.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
