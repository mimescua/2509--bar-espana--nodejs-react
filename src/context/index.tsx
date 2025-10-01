import React from 'react';
import type { Category, Product } from '../../types';

interface MenuContextProps {
	products: Array<Product>;
	setProducts: React.Dispatch<React.SetStateAction<Array<Product>>>;
	categories: Array<Category>;
	setCategories: React.Dispatch<React.SetStateAction<Array<Category>>>;
}

const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [products, setProducts] = React.useState<Array<Product>>([]);
	const [categories, setCategories] = React.useState<Array<Category>>([]);
	return (
		<MenuContext.Provider
			value={{
				products,
				setProducts,
				categories,
				setCategories,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

export { MenuContext, MenuProvider };
