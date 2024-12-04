<template>
  <section class="preview">
    <div class="container">
      <div class="preview_inner">
        <div class="preview_inner_nav_first">
          <span class="preview_nav_link">HOME</span
          ><span class="preview_nav_link arrow">SHOP</span>
          <img
            class="link__img"
            width="10"
            height="10"
            src="https://img.icons8.com/ios-glyphs/30/sort-down.png"
            alt="sort-down"
          /><span class="preview_nav_link arrow">SALE</span>
          <img
            class="link__img"
            width="10"
            height="10"
            src="https://img.icons8.com/ios-glyphs/30/sort-down.png"
            alt="sort-down"
          />
        </div>
        <div class="preview_inner_nav_title">
          <span>ANORMY</span>
          <div class="subtitle">
            <div class="subtitle_line"></div>
            <div class="subtitle_center"><i>Fashion Store</i></div>
            <div class="subtitle_line"></div>
          </div>
        </div>

        <div class="preview_inner_nav_end">
          <span class="preview_nav_link">BLOG</span
          ><span class="preview_nav_link">ABOUT</span
          ><span class="preview_nav_link">CONTACT</span>
        </div>
      </div>

      <div class="preview_cards">
        <div class="preview_subcards1">
          <div class="subcards1_text_inner">
            <div class="subcards1_text_inner_title">New Collection</div>
            <div class="subcards1_text_inner_subtitle">T-SHIRT</div>
            <div class="subcards1_text_inner_subtitle_prom">
              ENJOY UP TO 30% OFF
            </div>
            <button class="subcards_4_button">VIEW COLLECTION</button>
          </div>
        </div>
        <div class="preview_subcards2">
          <div class="subcards_text_inner blue">
            <div class="text_inner_title">FREE SHIPPING</div>
            <div class="text_inner_subtitle"><i>On order over $199.00</i></div>
          </div>
        </div>
        <div class="preview_subcards3">
          <div class="subcards_text_inner orange">
            <div class="text_inner_title">FREE RETURNS</div>
            <div class="text_inner_subtitle">
              <i>Free 90 days returns reality policy</i>
            </div>
          </div>
        </div>
        <div class="preview_subcards4">
          <div class="subcards_4_text_inner">
            <div class="text_inner4_title">Spring</div>
            <div class="text_inner4_subtitle">INCREDIBLE COLLECTION</div>
            <button class="subcards_4_button">CHECK NOW</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="less" scoped>
/* Preview */

.preview {
  height: 100%;
  margin: 50px 0;

  &_inner {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 90px;

    &_nav_first {
      display: flex;
      align-items: center;
    }

    &_nav_title {
      font-size: 70px;
      letter-spacing: 10px;
      font-weight: 700;
      margin: 0 0 -40px 0;
      padding: 0;

      flex-direction: column;
    }
  }

  &_nav_link {
    font-size: 21px;
    margin: 0 20px;
    font-weight: 600;
    transition: all 0.6s;

    &:first-child {
      margin: 0 20px 0 0;
    }

    &:last-child {
      margin: 0 0 0 20px;
    }

    &:hover {
      color: #c89351;
      cursor: pointer;
    }
  }

  &_cards {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(2, 300px);
    grid-template-rows: repeat(2, 270px);
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    align-items: center;
    justify-content: center;
  }

  &_subcards1 {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 0 0 40px;
    background-image: url("../../assets/mira.png");
    position: relative;
    background-size: 650px;
    height: 100%;
    width: 100%;
    background-position: right -140px bottom -80px;
    background-repeat: no-repeat;
    grid-area: 1 / 1 / 3 / 2;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.6s;

    &:hover {
      cursor: pointer;
      background-size: 700px;
      background-position: right -170px bottom -130px;
    }

    &::before {
      content: "";
      z-index: -99999;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      mix-blend-mode: multiply;
      background: linear-gradient(
        to right top,
        #b7b7b9,
        #c1c0c2,
        #cac9cc,
        #d4d3d5,
        #dedcdf
      );
    }
  }

  &_subcards2 {
    grid-area: 1 / 2 / 2 / 3;
    height: 100%;
    background-color: #262431;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);

    &:hover {
      cursor: pointer;
    }

    &:hover .subcards_text_inner {
      letter-spacing: 1px;
    }

    &:hover .blue {
      width: 100%;
      height: 100%;
    }
  }

  &_subcards3 {
    grid-area: 1 / 3 / 2 / 4;
    height: 100%;
    background-color: #c89256;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);

    &:hover {
      cursor: pointer;
    }

    &:hover .orange {
      width: 100%;
      height: 100%;
    }

    &:hover .subcards_text_inner {
      letter-spacing: 1px;
    }
  }

  &_subcards4 {
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url("../../assets/sub4.png");
    background-repeat: no-repeat;
    background-size: 120%;
    background-position: right -250px bottom -380px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    grid-area: 2 / 2 / 3 / 4;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      mix-blend-mode: multiply;
      z-index: -9999;
      background-image: linear-gradient(
        to right bottom,
        #dcd9d0,
        #dcd9cf,
        #ddd8cf,
        #ddd8ce,
        #ded7ce
      );
    }
  }
}

.arrow {
  margin: 0 5px 0 20px;
}

.subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.subtitle_center {
  font-size: 20px;
  letter-spacing: normal;
}

.subtitle_line {
  border-bottom: 1px solid gray;
  width: 30px;
  margin: 0 20px 0;
}

.link__img {
  margin: 0 20px 0 0;
}

/* Preview Cards */

.subcards_text_inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.6s;
  width: 85%;
  height: 85%;
}

.blue {
  border: 3px solid #2f2d3a;
}

.orange {
  border: 3px solid #c8975c;
}

.text_inner {
  &_title {
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 25px;
  }

  &_subtitle {
    font-size: 15px;
  }
}

.subcards1_text_inner {
  &_title {
    font-size: 18px;
  }

  &_subtitle {
    font-weight: 900;
    font-size: 61px;

    &_prom {
      color: #c59c6c;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
}

.subcards_4 {
  &_text_inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  &_button {
    width: 200px;
    height: 40px;
    background-color: transparent;
    border: 3px solid #262431;
    transition: all 0.6s;
    font-size: 15px;

    &:hover {
      cursor: pointer;
      transform: scale(1.15);
    }

    &:active {
      cursor: pointer;
      transform: scale(1);
    }
  }
}

.text_inner4 {
  &_title {
    font-size: 21px;
  }

  &_subtitle {
    font-size: 37px;
    margin-bottom: 10px;
    font-weight: 600;
  }
}

//Adaptive//

@media screen and (min-width: 0px) and (max-width: 1100px) {
  .preview_inner {
    display: flex;
    justify-content: center;
  }

  .preview_inner_nav_first {
    display: none;
  }

  .preview_inner_nav_end {
    display: none;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1300px) {
  .preview_cards {
    width: 100%;
    display: grid;

    align-items: center;
    justify-content: center;

    grid-template-columns: repeat(3, 300px);
    grid-template-rows: repeat(3, 270px);
  }

  .preview_subcards1 {
    grid-area: 1 / 1 / 3 / 3;
  }

  .preview_subcards2 {
    grid-area: 1 / 3 / 2 / 4;
  }

  .preview_subcards3 {
    grid-area: 2 / 3 / 3 / 4;
  }

  .preview_subcards4 {
    grid-area: 3 / 1 / 4 / 4;
    background-position: right -100px bottom -390px;
    background-size: 80%;
  }
}

@media screen and (min-width: 0px) and (max-width: 1000px) {
  .preview_cards {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(4, 270px);
  }

  .preview_subcards1 {
    grid-area: 1 / 1 / 3 / 3;
  }

  .preview_subcards2 {
    grid-area: 3 / 1 / 4 / 2;
  }

  .preview_subcards3 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .preview_subcards4 {
    grid-area: 4 / 1 / 5 / 3;
  }
}
</style>
