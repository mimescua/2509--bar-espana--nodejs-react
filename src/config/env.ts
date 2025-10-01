export const env = (() => {
	const API_URL = import.meta.env.VITE_API_URL as string | undefined;
	const IMG_API_URL = import.meta.env.VITE_IMG_API_URL as string | undefined;
	const ADMIN_CODE = import.meta.env.VITE_ADMIN_CODE as string | undefined;

	if (!API_URL) throw new Error('VITE_API_URL is required');
	if (!IMG_API_URL) throw new Error('VITE_IMG_API_URL is required');
	if (!ADMIN_CODE) throw new Error('VITE_ADMIN_CODE is required');

	return { API_URL, IMG_API_URL, ADMIN_CODE } as const;
})();
