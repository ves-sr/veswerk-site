import {
	maintenanceAddonItems,
	maintenanceAddonNotePrefix,
	maintenanceAddonNoteEmphasis,
} from "../content/plans";

export default function MaintenanceAddonCards() {
	return (
		<div className="mt-8 max-w-2xl">
			<dl className="divide-y divide-border">
				{maintenanceAddonItems.map((item) => (
					<div key={item.name} className="py-4">
						<div className="flex items-baseline justify-between gap-4">
							<dt className="text-sm text-text">{item.name}</dt>
							<dd className="text-base font-medium text-ink">{item.price}</dd>
						</div>
						<p className="mt-1 text-xs leading-relaxed text-text-soft">{item.description}</p>
					</div>
				))}
			</dl>
			<p className="mt-6 text-sm text-text-soft">
				{maintenanceAddonNotePrefix} <span className="whitespace-nowrap">{maintenanceAddonNoteEmphasis}</span>
			</p>
		</div>
	);
}
