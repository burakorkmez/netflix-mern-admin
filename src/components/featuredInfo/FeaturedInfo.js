import './featuredInfo.css';
import FeaturedItem from './FeaturedItem';

export default function FeaturedInfo() {
	return (
		<div className="featured">
			<FeaturedItem
				sign={'negative'}
				title="Revanue"
				price={'2,415'}
				percentage={'-11,4'}
			/>
			<FeaturedItem
				sign={'negative'}
				title="Sales"
				price={'4,415'}
				percentage={'-1,4'}
			/>
			<FeaturedItem title="Cost" price={'2,205'} percentage={'3,4'} />
		</div>
	);
}
