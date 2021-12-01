// this is our Products page which basically controls the productlist component
// in this page, all the products list get from the productlist component

<template>
  <v-container fluid class="lighten-5">
    <ProductList />
    <br>

    <div class="text-center">
      <v-pagination v-model="page" :length="4" circle></v-pagination>
    </div>
  </v-container>
</template>

<script>
import ProductList from "../components/ProductList.vue";

export default {
  name: "Products",
  data() {
    return {
      page: 1,
    };
  },
  components: {
    ProductList,
  },
};
</script>

<style>
</style>