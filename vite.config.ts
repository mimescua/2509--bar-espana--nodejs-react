import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': `${path.resolve(__dirname, './src/assets')}`,
			'@components': `${path.resolve(__dirname, './src/components')}`,
			'@context': `${path.resolve(__dirname, './src/context')}`,
			'@hooks': `${path.resolve(__dirname, './src/hooks')}`,
			'@routes': `${path.resolve(__dirname, './src/routes')}`,
			'@services': `${path.resolve(__dirname, './src/services')}`,
			'@styles': `${path.resolve(__dirname, './src/styles')}`,
			'@utils': `${path.resolve(__dirname, './src/utils')}`,
		},
	},
});
