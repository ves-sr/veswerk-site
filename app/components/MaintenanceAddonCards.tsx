import {
	maintenanceAddonItems,
	maintenanceAddonNotePrefix,
	maintenanceAddonNoteEmphasis,
} from "../content/plans";

/**
 * AddonCardsと同様、補助的なオプション情報のためカードグリッドをやめて
 * 一覧行にする（FEEページ内でカードUIが連続しすぎないようにするため）。
 */
export default function MaintenanceAddonCards() {
	return (
		<div className="mt-8 max-w-2xl">
			<dl className="divide-y divide-border">
				{maintenanceAddonItems.map((item) => (
					<div key={item.name} className="py-4">
						<div className="flex items-baseline justify-between gap-4">
							<dt className="text-sm text-brown">{item.name}</dt>
							<dd className="text-base font-semibold text-ink">{item.price}</dd>
						</div>
						<p className="mt-1 text-xs leading-relaxed text-brown-light">{item.description}</p>
					</div>
				))}
			</dl>
			<p className="mt-6 text-sm text-brown-light">
				{maintenanceAddonNotePrefix} <span className="whitespace-nowrap">{maintenanceAddonNoteEmphasis}</span>
			</p>
		</div>
	);
}
