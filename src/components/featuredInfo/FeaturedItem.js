import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedItem({ sign, title, price, percentage }) {
	return (
		<div className="featuredItem">
			<span className="featuredTitle">{title}</span>
			<div className="featuredMoneyContainer">
				<span className="featuredMoney">{price}</span>
				<span className="featuredMoneyRate">
					{percentage}{' '}
					{sign === 'negative' ? (
						<ArrowDownward className="featuredIcon negative" />
					) : (
						<ArrowUpward className="featuredIcon" />
					)}
				</span>
			</div>
			<span className="featuredSub">Compared to last month</span>
		</div>
	);
}
