import { useEffect, useState } from 'react';
import { env } from '../config/env';

export function useDishImage() {
	const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

	useEffect(() => {
		const controller = new AbortController();
		const url = `${env.IMG_API_URL}/api/json/v1/1/filter.php?a=Spanish`;
		(async () => {
			try {
				const res = await fetch(url, { signal: controller.signal });
				if (!res.ok) return;
				const data = await res.json();
				const quantity = Array.isArray(data?.meals) ? data.meals.length : 0;
				if (quantity === 0) return;
				const randomIndex = Math.floor(Math.random() * quantity);
				const item = data.meals[randomIndex];
				const { strMealThumb } = item ?? {};
				if (typeof strMealThumb === 'string') setImageUrl(strMealThumb);
			} catch (err) {
				console.log(err);
			}
		})();
		return () => controller.abort();
	}, []);

	return { imageUrl };
}
