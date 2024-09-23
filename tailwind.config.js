/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray_100: "#e1e1e6",
				gray_300: "#c4c4cc",
				gray_400: "#8d8d99",
				gray_600: "#323238",
				gray_700: "#29292e",
				gray_800: "#202024",
				gray_900: "#121214",
				green_300: "#00B37E",
				green_500: "#00875f",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"], // Custom font family
				roboto: ["Roboto"],
			},
		},
	},
	plugins: [],
};
