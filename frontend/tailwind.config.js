/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
			}
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};
