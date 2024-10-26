import { useMemo, useState } from 'react';
import './BrandsCollection.css';
import { withTranslation } from 'react-i18next';
import { BsArrowRight } from 'react-icons/bs';
import { TbPerfume } from 'react-icons/tb';

export default withTranslation()(function BrandsCollection({ t, categories, brands }) {
	const [filteredBrands, setFilteredBrands] = useState([]);
	const [activeCategory, setActiveCategory] = useState(null);

	// Extract unique category IDs from brands data
	const categoryIds = useMemo(() => [...new Set(brands.map((brand) => brand.categoryId))], [brands]);

	const getUniqueBrands = (brandsArray) => {
		const uniqueBrands = [];
		const seenNames = new Set();

		for (const brand of brandsArray) {
			if (!seenNames.has(brand.name)) {
				seenNames.add(brand.name);
				uniqueBrands.push(brand);
			}
		}
		return uniqueBrands.sort((a, b) => a.name.localeCompare(b.name));
	};

	const handleCategoryClick = (categoryId) => {
		setActiveCategory(categoryId);
		setFilteredBrands(
			categoryId ? brands.filter((brand) => brand.categoryId === categoryId) : getUniqueBrands(brands)
		);
	};

	const handleBrandClick = (brand) => {
		window.location.href = brand.website;
	};

	// Initialize with unique brands
	useMemo(() => {
		setFilteredBrands(getUniqueBrands(brands));
	}, [brands]);

	return (
		<div className="brands-collection">
			<div className="categories">
				{categoryIds.map((id) => (
					<button
						key={id}
						onClick={() => handleCategoryClick(id === activeCategory ? null : id)}
						className={id === activeCategory ? 'active' : ''}
					>
						{/* {categories[id].icon} */}
						{t(categories[id].name)}
					</button>
				))}
			</div>
			<div className="brands">
				{filteredBrands.map((brand, index) => (
					<div key={index} className="brand" onClick={() => handleBrandClick(brand)}>
						<img src={brand.imageUrl} alt={brand.name} />
						<div className='brand-info'>
							<h3>{brand.name}</h3>
							{/* <BsArrowRight /> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
});

