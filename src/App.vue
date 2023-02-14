<script>
</script>

<template>
  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/products">Product</RouterLink>
      </li>
      <li>
        <RouterLink to="/cart">Cart</RouterLink>
      </li>
      <li>
        Antal produkter i kundvagn: {{ $store.state.shoppingCart.length }}
      </li>
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>
