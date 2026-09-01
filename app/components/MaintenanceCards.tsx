import { maintenanceHighlights, maintenanceBackground } from "../content/maintenance";
import Reveal from "./Reveal";

/**
 * 保守内容を「お客様が実感しやすい項目」と「裏側で継続している技術的な保守」の
 * 2段階に分け、視覚的な重みを変える。
 */
export default function MaintenanceCards() {
	return (
		<div className="mt-8">
			<div className="grid gap-6 sm:grid-cols-3">
				{maintenanceHighlights.map((item, i) => (
					<Reveal key={item.key} delay={i * 70}>
						<div className="h-full rounded-[1.5rem] border border-border bg-bg p-6">
							<h3 className="text-base font-medium text-ink">{item.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-text">{item.description}</p>
						</div>
					</Reveal>
				))}
			</div>

			<div className="mt-10 max-w-3xl">
				<p className="eyebrow">このほか、継続して見守っています</p>
				<dl className="mt-3 divide-y divide-border">
					{maintenanceBackground.map((item) => (
						<div key={item.key} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4">
							<dt className="shrink-0 text-sm font-medium text-ink sm:w-56">{item.title}</dt>
							<dd className="text-sm text-text-soft">{item.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
