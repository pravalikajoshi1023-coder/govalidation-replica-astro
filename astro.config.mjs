import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';  // Tailwind integration

// Static export (no SSR, no Netlify adapter needed)
export default defineConfig({
  output: 'static',              // Astro will output static HTML/JS/CSS
  integrations: [tailwind()],    // Enables Tailwind
  // site: 'https://your-site.netlify.app',  // optional, set later if needed
});
