// its a login page, in which a user when entered the details
// we match its information from the local storage and then, 
// if its information is matched, user goes to home page
// otherwise user cant go on home page and have to be entered correct details

<template>
<v-card class="d-flex flex-row flex-wrap ml-13" height="86vh" width="95%">
  <v-container>
    
    <v-row class="text-center">
      <v-col cols="6" class="mx-auto">
        <h1>Login</h1>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Username"
            type="username"
            v-model="userName"
            required
          ></v-text-field>

          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>

          <v-btn depressed  color="orange" @click.prevent="logIn">
             Login 
          </v-btn>

          <br>

          <router-link to="/signup"> <div>Create a New Account</div> </router-link>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      valid: true,
      userName: "",
      password: "",
      newUser: [],
    };
  },

  methods: {
    logIn() {
      this.newUser = JSON.parse(localStorage.getItem("users"));
      // console.log(this.newUser);
      this.currentUser = this.newUser.find((e) => {
        return (
          e.userNameValue == this.userName && e.passwordValue == this.password
        );
      });
      if (this.currentUser) {
        console.log("login success");
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        this.$router.push({ name: "Home" });
      } else {
        console.log("login failed");
      }
    },
  },
};
</script>
