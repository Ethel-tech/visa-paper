import plugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			transitionProperty: {
				width: "width",
			},
		},
	},
	plugins: [plugin],
};
