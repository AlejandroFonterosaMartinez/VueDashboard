<template>
  <v-app :dark="isDarkTheme">
    <Navbar @toggleTheme="toggleTheme" />
    <v-main>
      <Sidebar />
      <v-container>
        <Dashboard />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Dashboard from '@/views/Dashboard.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Navbar,
    Footer,
    Dashboard,
    Sidebar
  },
  data() {
    return {
      isDarkTheme: false
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.$vuetify.theme.dark = this.isDarkTheme;
    }
  }
};
</script>

<style>
/* Estilos globales para la aplicación */
</style>