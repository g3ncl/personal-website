import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://g3n.cl',
    compressHTML: true,
    build: {
        inlineStylesheets: 'always'
    }
});
