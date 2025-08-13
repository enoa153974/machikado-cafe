import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.MODE === 'production'
        ? 'https://example.com'
        : 'http://localhost:2000',
    base: '/',
    trailingSlash: 'ignore',
    output: 'static',
    root: '.',
    srcDir: './src',
    publicDir: './public',
    outDir: './dist',
    compressHTML: false,
    build: {
        format: 'directory',   
        inlineStylesheets: 'never'
    },
    server: {
        open: true
    },
    vite: {
        build: {
            cssCodeSplit: false,
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/scripts/main.min.js',
                    assetFileNames: (assetFile) => {
                        if (assetFile.name) {
                            if (/\.css$/.test(assetFile.name)) {
                                return 'assets/styles/style.min.[ext]';
                            } else if (/\.(gif|jpe?g|png|svg|webp)$/.test(assetFile.name)) {
                                return 'assets/images/[name].min.[ext]';
                            } else if (/\.(ttf|otf|eot|woff2?)$/.test(assetFile.name)) {
                                return 'assets/fonts/[name].[ext]';
                            } else {
                                return 'assets/[name].[ext]';
                            }
                        }
                    }
                }
            }
        }
    },
    integrations: [
        react({
            experimentalReactChildren: true,
            include: ['**/react/*']
        }),
        vue(),
        sitemap()
    ],
    markdown: {
        syntaxHighlight: 'shiki',
        gfm: false,
        remarkPlugins: [],
        rehypePlugins: [],
        remarkRehype: {}
    }
});
