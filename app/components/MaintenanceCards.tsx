import { maintenanceHighlights, maintenanceBackground } from "../content/maintenance";

/**
 * 保守内容を「お客様が実感しやすい項目」と「裏側で継続している技術的な保守」の
 * 2段階に分け、視覚的な重みを変える。全項目を同じ大きさのカードで均等に
 * 並べると重要度がフラット化してしまうため。
 */
export default function MaintenanceCards() {
	return (
		<div className="mt-8">
			<div className="grid gap-6 sm:grid-cols-3">
				{maintenanceHighlights.map((item) => (
					<div
						key={item.key}
						className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md"
					>
						<h3 className="text-base font-semibold text-ink">{item.title}</h3>
						<p className="mt-2 text-sm leading-relaxed text-brown">{item.description}</p>
					</div>
				))}
			</div>

			<div className="mt-10 max-w-3xl">
				<p className="text-xs font-medium tracking-wide text-brown-light">
					このほか、継続して見守っています
				</p>
				<dl className="mt-3 divide-y divide-border">
					{maintenanceBackground.map((item) => (
						<div key={item.key} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4">
							<dt className="shrink-0 text-sm font-medium text-ink sm:w-56">{item.title}</dt>
							<dd className="text-sm text-brown-light">{item.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
