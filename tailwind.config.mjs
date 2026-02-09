/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					navy: "#0A3A84",
					green: "#228B22",
					mint: "#6FAF6F",
					lime: "#02CE02",
					ink: "#1F2933",
					muted: "#6B7280",
					shell: "#F6F7F9",
				},
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			// media quries
			screens: {
				mobile: { max: "640px" },
				// => @media (max-width: 640px) { ... }
				tablet: { min: "641px", max: "1023px" },
				// => @media (min-width: 641px and max-width: 1023px)
				laptop: { min: "1024px" },
				Xlaptop: { min: "1440px" },
				// => @media (min-width: 768px) { ... }
			},
		},
	},
	daisyui: {
		styled: true, 
		themes: ["light"], 
		base: false, 
		utils: true, 
		logs: true, 
	},
	plugins: [require("daisyui")],
};
