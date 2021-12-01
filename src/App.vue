////  this is our App.vue that is Main file of the system
////  this file handles the complete layout design of the system
////  this file includes header component, footer component, navigation drawer and main container of the system
////  this file use the different components and pages(views) using the router-links

<template>
  <v-app id="inspire">
    <!-- Drawer starts from here -->
    <v-navigation-drawer temporary app v-model="drawer">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar> </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <h3><u> CATEGORIES </u></h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="./assets/jewel.jpg" />
        </v-list-item-avatar>

        <v-list-item-content @click="jewelery">
          <v-list-item-title>Jewelery</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="./assets/electronic.jpg" />
        </v-list-item-avatar>

        <v-list-item-content @click="electronics">
          <v-list-item-title>Electronics</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="./assets/profile.jpg" />
        </v-list-item-avatar>

        <v-list-item-content @click="menclothing">
          <v-list-item-title>Men's Clothing</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line link>
        <v-list-item-avatar>
          <img cover src="./assets/girl.jpg" />
        </v-list-item-avatar>

        <v-list-item-content @click="womenclothing">
          <v-list-item-title>Women's Clothing</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Drawer end here -->

    <!-- side menue -->

    <v-card
      id="side-menue"
      color="dark"
      flex-column
      style="z-index: 1; position: absolute"
      class="my-12"
      height="87vh"
    >
      <v-card
        outlined
        color="transparent"
        width="100%"
        height="55vh"
        class="my-15"
      >
        <v-avatar dark class="d-block text-center mx-auto mb-9">
          <v-btn
            relative
            color="grey darken-4"
            class="white--text"
            fab
            small
            right
            @click="home"
          >
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-avatar>

        <v-avatar dark class="d-block text-center mx-auto mb-9"
          ><v-btn
            relative
            color="grey darken-4"
            class="white--text"
            fab
            small
            right
            @click="products"
          >
            <v-icon>mdi-widgets</v-icon>
          </v-btn></v-avatar
        >

        <v-avatar dark class="d-block text-center mx-auto mb-9"
          ><v-btn
            relative
            color="grey darken-4"
            class="white--text"
            fab
            small
            right
            @click="about"
          >
            <v-icon> mdi-information </v-icon>
          </v-btn>
        </v-avatar>

        <v-avatar dark class="d-block text-center mx-auto mb-9"
          ><v-btn
            relative
            color="grey darken-4"
            class="white--text"
            fab
            small
            right
            @click="contactus"
          >
            <v-icon> mdi-message-text</v-icon>
          </v-btn></v-avatar
        >
      </v-card>
    </v-card>

    <!--Nav starts from here -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> <span class="orange--text"> M</span>agento </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="mr-1 transparent"
            @click="profile"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
      </v-menu>

      <v-btn color="light" dark class="mr-1">
        {{ cartItemCount }}
        <v-icon right> mdi-cart</v-icon>
      </v-btn>

      <v-btn color="orange" class="white--text" @click="logout">
        Logout
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main starts from here -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer dark padless>
      <v-card flat tile class="dark lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignis.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Magento</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: null,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  methods: {
    //////////////////////////////////////* Router links of specific pages */
    profile() {
      this.$router.push({ name: "Profile" });
    },
    logout() {
      localStorage.removeItem("currentUser");
      this.$router.push({ name: "Login" });
    },
    home() {
      this.$router.push({ name: "Home" });
    },
    products() {
      this.$router.push({ name: "products" });
    },
    about() {
      this.$router.push({ name: "About" });
    },
    contactus() {
      this.$router.push({ name: "ContactUs" });
    },
    jewelery() {
      this.$router.push({ name: "jewelery" });
    },
    electronics() {
      this.$router.push({ name: "electronics" });
    },
    menclothing() {
      this.$router.push({ name: "menclothing" });
    },
    womenclothing() {
      this.$router.push({ name: "womenclothing" });
    },
  },
};
</script>
