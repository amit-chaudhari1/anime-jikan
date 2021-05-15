module.exports = {
	purge: {
		enable: true,
		content: [
			"./src/pages/**/*.{js,jsx,ts,tsx}",
			"./src/components/**/*.{js,jsx,ts,tsx}",
			"./src/redux/**/*.{js,ts,jsx,tsx}", //TODO: Either Change the folder structure, or make sure that you are using,
		],
	},

	darkMode: false,
	variants: {
		color: ["responsive", "hover", "focus", "group-hover"],
		borderColor: ["responsive", "hover", "focus", "group-hover"],
	},
	theme: {
		extend: {
			colors: {
				background: "#1a1c20",
				notactive: "#8d8f94",
			},
			width: {
				player: "1024px",
			},
			border: ["hover"],
		},
	},

	variants: {
		extend: {},
	},
	plugins: [],
};
