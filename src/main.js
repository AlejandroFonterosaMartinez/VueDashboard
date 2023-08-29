import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles'; // Agrega la ruta completa al archivo styles
import { createVuetify } from 'vuetify/lib/framework'; // Importa Vuetify desde 'vuetify/lib/framework'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { Icon } from '@iconify/vue';
import router from './routes/router'; // Asegúrate de que la ruta sea correcta


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            dark: {
                primary: '#2196F3',
                secondary: '#424242',
                accent: '#FF4081',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
        },
    },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.component('icon', Icon);
app.mount('#app');
export default vuetify;
