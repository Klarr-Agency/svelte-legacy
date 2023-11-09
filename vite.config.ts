import * as path from 'path';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    if (command === 'serve') {
        return {
            base: './',
            server: {
                hmr: {
                    protocol: 'ws'
                },
                proxy: {
                    // Your project url
                    '/': 'http://localhost:4545'
                }
            },
            plugins: [svelte({
                preprocess: [sveltePreprocess({ typescript: true })]
            })]
        }
    } else {
        return {
            build: {
                lib: {
                    entry: path.resolve(__dirname, 'src/main.ts'),
                    name: 'Component',
                    formats: ["umd", "es"],
                    fileName: (format) => `bundle.${format}.js`
                }
            },
            plugins: [svelte({
                preprocess: [sveltePreprocess({ typescript: true })]
            })],
        }
    }
});
