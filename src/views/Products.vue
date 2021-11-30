// this is our Products page which basically controls the productlist component
// in this page, all the products list get from the productlist component

<template>
  <v-container fluid class="lighten-5">
    <ProductList />
  </v-container>
</template>

<script>
import ProductList from "../components/ProductList.vue";

export default {
  name: "Products",
  components: {
    ProductList,
  },
};
</script>

<style>
</style>