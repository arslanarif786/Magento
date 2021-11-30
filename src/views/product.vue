// this is my Product page which basically display the selected product from the products page
// in this page, only one product is shown at a time

<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img contain height="250" :src="product.image"></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4 mb-5">4.5 (413)</div>
      </v-row>

      <div>
        {{ product.description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
export default {
  props: ["id"],

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },

    methods: {
      addToCart() {
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1,
        });
      },
    },
  },
};
</script>
