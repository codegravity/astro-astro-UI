// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), icon(), partytown()],

  vite: {
  plugins: [tailwindcss()],
  },

  image: {
responsiveStyles: true,
},

  adapter: vercel(),
});