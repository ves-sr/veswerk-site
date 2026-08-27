import { productionAddonItems, productionAddonNote } from "../content/plans";

export default function AddonCards() {
	return (
		<>
			<div className="mt-8 grid gap-6 sm:grid-cols-3">
				{productionAddonItems.map((item) => (
					<div
						key={item.name}
						className="rounded-3xl border border-white/60 bg-white/45 p-6 text-center shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md"
					>
						<p className="text-sm font-medium text-ink">{item.name}</p>
						<p className="mt-2 text-lg font-bold text-accent">{item.price}</p>
						<p className="mt-1 text-xs text-brown-light">{item.unit}</p>
					</div>
				))}
			</div>
			<p className="mt-6 max-w-2xl text-sm text-brown-light">{productionAddonNote}</p>
		</>
	);
}
