<template>
  <header class="header__nav">
    <div class="container">
      <div class="header_text">
        <div class="header_login--text">
          <a class="login__links" href="#">Login</a>
          <span style="color: #c8c8c8"> or </span>
          <a class="login__links" href="#">Create account </a>
          <span class="login__link_curr">Currency</span>
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/ios-glyphs/30/sort-down.png"
            alt="sort-down"
          />
        </div>
        <div class="header__nav--text">
          <form class="form">
            <div class="search_inp">
              <input
                class="header__nav--search"
                placeholder="Search items..."
                type="text"
                @input="updateInput"
              />
              <img
                class="nav_search__ico"
                width="15"
                height="15"
                src="https://img.icons8.com/ios-filled/50/search--v1.png"
                alt="search"
              />
            </div>
          </form>
          <img
            class="shop"
            width="15"
            height="15"
            src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/ios-glyphs/30/sort-down.png"
            alt="sort-down"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  model: {
    props:{
      value: String,
      default: ''
    }  ,
    event: "input",
  },
  methods:{
    updateInput(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style lang="less" scoped>
/* Market */

.header {
  &__nav {
    background-color: #f2f2f2;
    padding: 10px 0;
    position: relative;

    &--text {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--search {
      height: 25px;
      padding: 2px;
      outline: none;
    }
  }

  &_text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  }
}

.search_inp {
  display: flex;
  align-items: center;
  padding: 4px;
}

.nav_search__ico {
  margin: 0 0 0 5px;
}

.login {
  &__links {
    text-decoration: none;
    color: #2c3e50;
    position: relative;

    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }

  &__link_curr {
    position: relative;
    margin: 0 7px;

    &::after {
      position: absolute;
      top: 0;
      left: -5px;
      content: "";
      display: block;
      height: 100%;
      width: 1px;
      background: #c8c8c8;
    }
  }
}

.shop {
  margin: 0 6px;
}
</style>
