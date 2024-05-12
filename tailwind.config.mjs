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
      },
      boxShadow: {
        'button': '0 1px 2px rgba(60,64,67,.3),0 1px 4px rgba(60,64,67,.25)'
      },
      backgroundImage: {
        'goal': 'linear-gradient(180deg,rgba(241,243,244,.5),hsla(0,0%,100%,0) 34.52%)'
      }
    }
  },
	plugins: [],
}