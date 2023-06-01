/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/themes/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'dracula-background': '#282a36',
				'dracula-current-line': '#44475a',
				'dracula-foreground': '#f8f8f2',
				'dracula-comment': '#6272a4',
				'dracula-cyan': '#8be9fd',
				'dracula-green': '#50fa7b',
				'dracula-orange': '#ffb86c',
				'dracula-pink': '#ff79c6',
				'dracula-purple': '#bd93f9',
				'dracula-red': '#ff5555',
				'dracula-yellow': '#f1fa8c',
				//dark-theme
				'dark-background': '#000000',
				'dark-current-line': '#333',
				'dark-foreground': '#f8f8f2',
				'dark-comment': '#777',
				'dark-cyan': '#fff',
				'dark-green': '#50fa7b',
				'dark-orange': '#fff',
				'dark-pink': '#ff79c6',
				'dark-purple': '#bd93f9',
				'dark-red': '#ff5555',
				'dark-yellow': '#fff'
			}
		},
		container: {
			center: true
		}
	},
	plugins: []
};
