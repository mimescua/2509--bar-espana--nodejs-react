import type { Product } from '../../../types';

const CategoryCard: React.FC<Product> = (props) => {
	const { name, description, price } = props;

	return (
		<li className="p-2">
			<a
				href="#"
				className="block text-left text-lg font-semibold leading-tight justify-start text-yellow-950 hover:underline"
			>
				{name}
			</a>
			<div className="mt-1 flex items-center text-start">
				<p className="text-md text-yellow-950">{description}</p>
			</div>
			<div className="flex items-center justify-end">
				<p className="text-xl font-extrabold leading-tight text-yellow-950">
					{`${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}`}
				</p>
			</div>
		</li>
	);
};

export default CategoryCard;
