import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/jquery.js'],
            refresh: true,
        }),
        tailwindcss(),

    ],
    resolve: {
        alias: [{
            // this is required for the SCSS modules
            find: /^~(.*)$/,
            replacement: '$1',
            '$': 'jQuery' // Added here
        }, ],
    },
});
