import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// The site property is crucial for setting the base URL 
// for relative links and canonical URLs on Netlify.
export default defineConfig({
  // *** IMPORTANT: Replace 'https://goval-replica.netlify.app' with your actual Netlify domain name ***
  site: 'https://goval-replica.netlify.app', 
  
  integrations: [tailwind()],
  
  // Since this replica is a static marketing page, 'static' output is generally sufficient.
  // If you later add serverless functions or API routes, you would change this to 'server'.
  output: 'static', 

  // The Netlify adapter handles deployment and static asset configuration
  adapter: netlify(),
});
