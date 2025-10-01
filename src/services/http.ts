import type { ProductByCategory } from '../../types';
import { env } from '../config/env';
import { request } from './httpClient';

export interface FetchResult {
	message?: string;
	error?: string;
}

export async function getMenu(): Promise<ProductByCategory> {
	const data = await request<{ menu: ProductByCategory }>(`${env.API_URL}/menu`);
	return data.menu;
}

export async function importMenuFromFile(file: File): Promise<FetchResult> {
	const formData = new FormData();
	formData.append('data', file, file.name);

	return request<FetchResult>(`${env.API_URL}/menu/import-menu`, {
		method: 'POST',
		body: formData,
	});
}
