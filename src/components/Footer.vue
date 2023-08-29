<template>
    <v-footer app>
        <span class="text_footer">&copy; {{ currentYear }} Alejandro Fonterosa Martinez</span>
    </v-footer>
</template>
  
<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
};
</script>
<style>
.text_footer {
    text-align: center;
}
.text_footer:hover {
    color: #1976d2;
}
</style>