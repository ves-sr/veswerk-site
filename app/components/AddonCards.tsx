import { productionAddonItems, productionAddonNote } from "../content/plans";

export default function AddonCards() {
	return (
		<div className="mt-8 max-w-2xl">
			<dl className="divide-y divide-border">
				{productionAddonItems.map((item) => (
					<div key={item.name} className="flex items-baseline justify-between gap-4 py-4">
						<dt className="text-sm text-text">{item.name}</dt>
						<dd className="flex items-baseline gap-2 whitespace-nowrap">
							<span className="text-base font-medium text-ink">{item.price}</span>
							<span className="text-xs text-text-soft">{item.unit}</span>
						</dd>
					</div>
				))}
			</dl>
			<p className="mt-6 text-sm text-text-soft">{productionAddonNote}</p>
		</div>
	);
}
