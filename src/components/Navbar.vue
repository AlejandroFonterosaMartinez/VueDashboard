<template>
  <v-app-bar :color="isDarkTheme ? 'primary' : 'secondary'" app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Icono</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon >
      <Icon :icon="isDarkTheme ? 'mdi:white-balance-sunny' : 'mdi:moon-and-stars'" class="icon-large" />
    </v-btn>
    <v-btn icon >
      <Icon icon="mdi:account" class="icon-large" />
    </v-btn>
    <v-btn icon>
      <Icon icon="mdi:logout" class="icon-large" />
    </v-btn>
  </v-app-bar>
  <!-- Profile Dialog and Logout Card components go here -->
</template>


<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      isDarkTheme: false,
      profileDialog: false,
      showLogoutCard: false,
    };
  },
  methods: {

  },
};
</script>

<style>
.icon-large {
  font-size: 30px;

}
</style>
