import { productionAddonItems, productionAddonNote } from "../content/plans";

/**
 * オプション料金は主役ではないため、カードグリッドではなくシンプルな
 * 一覧行として並べる（FEEページ内でMaintenanceCards→ここ→
 * MaintenanceAddonCardsと3セクション連続でカードUIが続くと単調になるため、
 * ここでは視覚のトーンを変えて緩急をつける）。
 */
export default function AddonCards() {
	return (
		<div className="mt-8 max-w-2xl">
			<dl className="divide-y divide-border">
				{productionAddonItems.map((item) => (
					<div key={item.name} className="flex items-baseline justify-between gap-4 py-4">
						<dt className="text-sm text-brown">{item.name}</dt>
						<dd className="flex items-baseline gap-2 whitespace-nowrap">
							<span className="text-base font-semibold text-ink">{item.price}</span>
							<span className="text-xs text-brown-light">{item.unit}</span>
						</dd>
					</div>
				))}
			</dl>
			<p className="mt-6 text-sm text-brown-light">{productionAddonNote}</p>
		</div>
	);
}
