/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      boxShadow: {
        'google': '0 2px 6px #0000001f, inset 0 -1px #dadce0',
      },
      boxShadow: {
        'card': '0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15)'
      } 
    }
  },
	plugins: [],
}