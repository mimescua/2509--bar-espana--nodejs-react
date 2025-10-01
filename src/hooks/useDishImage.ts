import { useEffect, useState } from 'react';
import { IMG_API_URL } from '../config/constants';

export function useDishImage() {
	const [imageUrl, setImageUrl] = useState();

	useEffect(() => {
		fetch(`${IMG_API_URL}/api/json/v1/1/filter.php?a=Spanish`)
			.then((res) => res.json())
			.then((data) => {
				const quantity = data.meals.length;
				const randomIndex = Math.floor(Math.random() * quantity);
				const item = data.meals[randomIndex];

				const { strMealThumb } = item;
				setImageUrl(strMealThumb);
			});
	}, []);

	return { imageUrl };
}
