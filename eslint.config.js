import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/space-before-function-paren': 'off',
			'@typescript-eslint/member-delimiter-style': 'off',
			'@typescript-eslint/triple-slash-reference': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/comma-dangle': 'off',
			'@typescript-eslint/indent': 'off',
			'@typescript-eslint/semi': 'off',
			'react/react-in-jsx-scope': 'off',
			'no-sequences': 'off',
			'no-tabs': 'off',
		},
		ignores: ['dist', 'eslint.config.cjs', 'vite.config.ts', 'commitlint.config.cjs'],
	},
]);
