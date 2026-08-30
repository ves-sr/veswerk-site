import { plan } from "../content/plans";

export default function PlanCards() {
	return (
		<div className="mt-14 mx-auto max-w-2xl rounded-3xl border border-accent bg-white/70 p-10 text-center shadow-[0_16px_40px_-14px_rgba(201,138,75,0.5)] backdrop-blur-md">
			<span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
				{plan.campaignLabel}
			</span>

			<p className="mt-4 text-xs text-brown-light">
				{plan.regularPriceLabel}：<span className="line-through">{plan.regularPrice}</span>
			</p>

			<p className="mt-4 text-sm font-medium tracking-wide text-ink">{plan.priceLabel}</p>
			<p className="mt-1 text-2xl font-bold text-ink sm:text-3xl">{plan.price}</p>
			<p className="mt-3 max-w-sm text-xs leading-relaxed text-brown-light mx-auto">{plan.campaignNote}</p>

			<hr className="my-6 border-border" />

			<p className="text-xl font-bold text-ink">{plan.maintenance}</p>
			<p className="mt-1 text-sm text-brown-light">{plan.maintenanceNote}</p>

			<hr className="my-6 border-border" />

			<div className="text-left">
				<p className="text-base font-semibold text-ink">{plan.maintenanceHeading}</p>
				<p className="mt-2 text-sm leading-relaxed text-brown">{plan.maintenanceLead}</p>

				<ul className="mt-6 flex flex-col gap-4">
					{plan.features.map((f) => (
						<li key={f.title} className="flex items-start gap-2">
							<svg
								aria-hidden="true"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="mt-1 h-4 w-4 shrink-0 text-accent"
							>
								<path
									fillRule="evenodd"
									d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
									clipRule="evenodd"
								/>
							</svg>
							<div>
								<p className="text-sm font-semibold text-ink">{f.title}</p>
								<p className="mt-0.5 text-sm leading-relaxed text-brown">{f.text}</p>
							</div>
						</li>
					))}
				</ul>
			</div>

			<a
				href="/contact"
				className="btn-sweep mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white"
			>
				相談する
			</a>
		</div>
	);
}
