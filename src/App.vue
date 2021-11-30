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
              <h3><u> Categories </u></h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="./assets/jewel.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <router-link to="/jewelery" class="black--text">
            <v-list-item-title>jewelery</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="./assets/electronic.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <router-link to="/electronics" class="black--text">
            <v-list-item-title>electronics</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="./assets/profile.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <router-link to="/menclothing" class="black--text">
            <v-list-item-title>mens clothing</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line link>
        <v-list-item-avatar>
          <img cover src="./assets/girl.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <router-link to="/womenclothing" class="black--text">
            <v-list-item-title>womenclothings</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Drawer end here -->

    <!--Nav starts from here -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> Magento </v-toolbar-title>
      <v-spacer></v-spacer>

      <!--1st-->

      <router-link to="/home">
        <v-btn class="ma-2" color="Black" light>
          <v-icon dark left> mdi-home </v-icon>
          Home
        </v-btn>
      </router-link>
      <!--2nd-->

      <router-link to="/products">
        <v-btn class="ma-2" color="Black" light>
          <v-icon dark left> mdi-widgets </v-icon>
          Products
        </v-btn>
      </router-link>

      <!-- 3rd -->
      <router-link to="/about">
        <v-btn class="ma-2" color="Black" light>
          <v-icon dark left> mdi-information </v-icon>
          About
        </v-btn>
      </router-link>

      <!-- 4th -->
      <router-link to="/contactus">
        <v-btn class="ma-2" color="Black" light>
          <v-icon dark left> mdi-message-text </v-icon>
          Contact Us
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/profile">
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="mr-1">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </router-link>

      <v-btn color="light" dark class="mr-1">
        {{ cartItemCount }}
        <v-icon right> mdi-cart</v-icon>
      </v-btn>

      <v-btn color="orange" class="white--text">
        <router-link to="/login" class="white--text"> Logout </router-link>
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
};
</script>
