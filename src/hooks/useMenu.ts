import { useEffect, useState } from 'react';
import type { ProductByCategory } from '../../types';
import { getMenu } from '../services/http';

export const useMenu = () => {
	const [menu, setMenu] = useState<ProductByCategory>({});

	const refreshMenu = () => {
		getMenu().then((menu) => setMenu(menu));
	};

	useEffect(refreshMenu, []);

	return { menu, setMenu };
};
