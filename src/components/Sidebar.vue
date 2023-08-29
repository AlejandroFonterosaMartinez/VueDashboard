<template>
    <v-navigation-drawer app v-model="drawer" class="sidebar" :color="isDarkTheme ? 'primary' : 'secondary'">
        <v-list class="links">
            <v-list-item v-for="(item, index) in items" :key="index" link >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    name: 'App',
    data() {
        return {
            drawer: true,
            items: [
                { text: 'Dashboard', icon: 'mdi-view-dashboard' },
                { text: 'Profile', icon: 'mdi-account' },
                { text: 'Settings', icon: 'mdi-cog' },
                { text: 'Logout', icon: 'mdi-logout' }
            ]
        };
    }
};
</script>
  
<style>
.sidebar {
    width: 250px;
}

.links {
    text-decoration: none;
    color: white;
    font-weight: bold;

}
</style>
  