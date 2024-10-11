/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
  safelist: [
    'border-blue-500',
    'shadow-blue-400/30',
    'hover:shadow-blue-400/50',
    'border-blue-900',
    'border-red-500',
    'shadow-red-400/30',
    'hover:shadow-red-400/50',
    'border-red-900',
    'border-orange-500',
    'shadow-orange-400/30',
    'hover:shadow-orange-400/50',
    'border-orange-900',
  ],

}
