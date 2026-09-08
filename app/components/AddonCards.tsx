import { Fragment } from "react";
import { productionAddonItems, productionAddonNote } from "../content/plans";

export default function AddonCards() {
	return (
		<div className="mt-8 max-w-2xl">
			<dl className="grid grid-cols-[1fr_auto_auto] items-baseline gap-x-4">
				{productionAddonItems.map((item, i) => (
					<Fragment key={item.name}>
						{i > 0 && <div aria-hidden="true" className="col-span-3 border-t border-border" />}
						<dt className="col-start-1 py-4 text-sm text-text">{item.name}</dt>
						<dd className="col-start-2 py-4 text-right text-base font-medium whitespace-nowrap text-ink">{item.price}</dd>
						<dd className="col-start-3 py-4 pl-2 text-xs whitespace-nowrap text-text-soft">{item.unit}</dd>
					</Fragment>
				))}
			</dl>
			<p className="mt-6 text-sm text-text-soft">
				{productionAddonNote.slice(0, -10)}
				<span className="whitespace-nowrap">{productionAddonNote.slice(-10)}</span>
			</p>
		</div>
	);
}
