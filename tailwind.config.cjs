const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daisyui],


	daisyui: {
		themes: [{
				devenirsst: {
					"primary": "#ef4444",
					"secondary": "#b91c1c",
					"accent": "#fca5a5",
					"neutral": "#9ca3af",
					"base-100": "#e5e7eb",
					"info": "#277da1",
					"success": "#90be6d",
					"warning": "#f9c74f",
					"error": "#ea560c",
				},
			},
		],
	},
};

module.exports = config;
