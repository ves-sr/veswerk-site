import {
	maintenanceAddonItems,
	maintenanceAddonNotePrefix,
	maintenanceAddonNoteEmphasis,
} from "../content/plans";

export default function MaintenanceAddonCards() {
	return (
		<>
			<div className="mt-8 grid gap-6 sm:grid-cols-3">
				{maintenanceAddonItems.map((item) => (
					<div
						key={item.name}
						className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md"
					>
						<div className="flex items-baseline justify-between gap-3">
							<p className="text-sm font-medium text-ink">{item.name}</p>
							<p className="text-lg font-bold text-accent">{item.price}</p>
						</div>
						<p className="mt-2 text-xs leading-relaxed text-brown-light">{item.description}</p>
					</div>
				))}
			</div>
			<p className="mt-6 max-w-2xl text-sm text-brown-light">
				{maintenanceAddonNotePrefix} <span className="whitespace-nowrap">{maintenanceAddonNoteEmphasis}</span>
			</p>
		</>
	);
}
