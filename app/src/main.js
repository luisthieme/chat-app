import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import App from './App.vue';

const config = defaultConfig({
    theme: 'genesis',
});

createApp(App).use(plugin, config).mount('#app');
