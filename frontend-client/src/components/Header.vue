<template>
  <v-toolbar fixed class="blue darken-3" dark>
    <v-toolbar-title class="mr-4">
      <span 
        class="home"
        @click="navigateTo({name: 'root'})">
        Tracker
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat dark
        @click="navigateTo({name: 'browse'})"
        >Browser
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat dark
        @click="navigateTo({name: 'login'})"
        >Login
      </v-btn>
      <v-btn
        flat dark
        @click="navigateTo({name: 'register'})"
        >Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #2FC5D8;
}
</style>
