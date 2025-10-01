export interface BarMenu {
	menu: Menu;
	categories: Category[];
}

export interface Category {
	id: number;
	name: string;
	description: string;
	sort_order: number;
	active: boolean;
	products: Product[];
}

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	active: boolean;
	image_url: string;
}

export interface Menu {
	version: string;
	generated_at: Date;
	currency: string;
}

export type CategoryName = string;

export type ProductByCategory = Record<CategoryName, Product[]>;
