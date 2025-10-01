import type { ProductByCategory } from '../../types';
import { API_URL } from '../config/constants';

export interface FecthResult {
	message?: string;
	error?: string;
}

export function getMenu(): Promise<ProductByCategory> {
	return fetch(`${API_URL}/menu`)
		.then((res) => res.json())
		.then((data) => {
			const { menu } = data;
			return menu as ProductByCategory;
		});
}

export async function importMenuFromFile(file: File): Promise<FecthResult> {
	const formData = new FormData();
	formData.append('data', file, file.name);

	const res = await fetch(`${API_URL}/menu/import-menu`, {
		method: 'POST',
		body: formData,
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Error ${res.status}: ${text}`);
	}

	return res.json() as Promise<FecthResult>;
}
