<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue darken-1" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"
            type="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
          ></v-text-field>
          <div class="error" v-html="error"></div>
          <v-btn
            dark
            class="blue darken-1"
            @click="login">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout column>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'hello',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        return response;
      } catch (error) {
        this.error = error.response.data.error;
      }
      return undefined;
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
