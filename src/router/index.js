/// this is basically the router files
/// in this file we routes the file with one another and also provide the complete path of the specific files
/// here I have also included the global routing guards 


import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import product from "../views/product.vue";
import jewelery from "../components/jewelery.vue";
import menclothing from "../components/menclothing.vue";
import womenclothing from "../components/womenclothing.vue";
import electronics from "../components/electronics.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";
import Checkout from "../components/Checkout.vue";

Vue.use(VueRouter);


const routes = [{
    path: "/",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/product",
    component: product,
    name: "product",

  },
  {
    path: "/jewelery",
    component: jewelery,
    name: "jewelery",
  },
  {
    path: "/electronics",
    component: electronics,
    name: "electronics",
  },
  {
    path: "/menclothing",
    component: menclothing,
    name: "menclothing",
  },
  {
    path: "/womenclothing",
    component: womenclothing,
    name: "womenclothing",
  },
  {
    path: "/checkout",
    component: Checkout,
    name: "Checkout",
  },
  
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



////////////////////////////////////////////////    Method for >>>>>>>>>>>> ROUTER GUARD   (GLOBAL)
router.beforeEach((to, from, next) => {
  //  console.log("to", to.path);  

  var isAuthenticated = false;
  if (localStorage.getItem('currentUser'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (['/login', '/', ].includes(to.path) || isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/login'); // go to '/login';
  }
})


export default router;