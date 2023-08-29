<template>
    <v-navigation-drawer app>
        <v-list>
            <v-list-item v-for="(item, index) in menuItems" :key="index">
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    data() {
        return {
            menuItems: [
                { text: 'Dashboard', icon: 'mdi-view-dashboard' },
                { text: 'Reports', icon: 'mdi-file-chart' },
                { text: 'Settings', icon: 'mdi-cog' }
            ]
        };
    }
};
</script>
  