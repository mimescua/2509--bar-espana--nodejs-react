import { useMenu } from '../../hooks/useMenu';
import CategoryCard from '../CategoryCard';

const Menu: React.FC = () => {
	const { menu } = useMenu();

	return (
		<ul className="toppy px-10 columns-1 sm:columns-2 xl:columns-2 gap-4">
			{Object.entries(menu).map(([categoryName, products]) => (
				<section
					key={categoryName}
					// className="rounded-lg border border-gray-200 p-6 shadow-sm w-full h-auto"
					className="mb-4 break-inside-avoid rounded-lg border border-gray-200 p-6 shadow-sm"
				>
					<div className="mt-2 flex items-center">
						<p className="text-2xl font-extrabold leading-tight text-orange-800">{categoryName}</p>
					</div>
					<ul className="pt-4">
						{products.map((product) => (
							<CategoryCard key={product.id} {...product} />
						))}
					</ul>
				</section>
			))}
		</ul>
	);
};

export default Menu;
