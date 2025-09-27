import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';  // Serverless adapter for Netlify

export default defineConfig({
  output: 'server',  // Serverless: Enables functions/API (change to 'static' for pure static)
  adapter: netlify({
    // Optional: Edge functions (global speed—uncomment if needed)
    // target: 'edge',  // Default: 'node' (stable)
  }),
  // Optional: Base URL (add after deploy)
  // site: 'https://your-site.netlify.app',
});
