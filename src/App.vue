<template>
  <nav>
    <div class="navHeader">
      <div @click="toggleNav" class="navIcons">
        <i v-if="!openNav" class="bi bi-list" />
        <i v-else class="bi bi-x" />
      </div>
      <div class="navHeaderTitle">
        <RouterLink to="/">FakeStore</RouterLink>
      </div>
      <div class="cartIcon">
        <RouterLink to="/cart">
          <i id="cartIcon" class="bi bi-basket3" />
          {{ $store.state.shoppingCart.length }}
        </RouterLink>
      </div>
    </div>
    <ul class="navList" :class="{ toggleNav: openNav }">
      <li class="navListItems">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="navListItems">
        <RouterLink to="/products">Products</RouterLink>
      </li>
      <li class="navListItems">
        <RouterLink to="/cart">Order</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>
<script>
  export default {
    data() {
      return {
        openNav: false
      }
    },
    methods: {
      toggleNav() {
        this.openNav = !this.openNav
      }
    }
  }
</script>
<style lang="scss">
  body {
    font-family: 'Lato', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
  }
  nav {
    position: fixed;
    z-index: 100;
    width: 100%;
  }
  .navHeader {
    background-color: beige;
    display: flex;
    justify-content: space-between;
  }
  .navHeaderTitle {
    margin: auto;
  }
  .navIcons {
    font-size: 25px;
  }
  .cartIcon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-top: auto;
    margin-bottom: auto;
    padding: 5px;
  }
  .cartIcon a,
  .navHeaderTitle a {
    text-decoration: none;
    color: black;
  }
  .navList {
    background-color: beige;
    opacity: 80%;
    margin: 0;
    padding: 0;
    height: 0;
    overflow: hidden;
  }
  .navList.toggleNav {
    height: 100px;
  }
  .navListItems {
    list-style-type: none;
    padding: 5px;
  }
  .navListItems a {
    text-decoration: none;
    color: black;
  }
  /* for tablet  */
  @media screen and (min-width: 810px) {
    .navIcons {
      display: none;
    }
    .navHeader {
      background-color: beige;
      display: flex;
      justify-content: space-between;
    }
    .navHeaderTitle {
      margin-left: 10px;
    }
    .navList {
      background-color: initial;
      opacity: 100%;
      display: flex;
      justify-content: space-evenly;
      height: 35px;
      width: 70%;
      margin-left: 15%;
      position: fixed;
      z-index: 150;
      top: 0;
    }
  }
</style>
