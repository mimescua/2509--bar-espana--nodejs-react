import { API_URL } from '../config/constants';

export function getMenu() {
	return fetch(`${API_URL}/menu`)
		.then((res) => res.json())
		.then((data) => {
			const { menu } = data;
			return menu;
		});
}

export function getCategories() {
	return fetch(`${API_URL}/categories`)
		.then((res) => res.json())
		.then((data) => {
			// const { category } = data;
			// return category;
			return data;
		});
}

export function getProducts() {
	return fetch(`${API_URL}/products`)
		.then((res) => res.json())
		.then((data) => {
			// const { category } = data;
			// return category;
			return data;
		});
}
