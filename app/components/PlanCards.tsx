import { plan } from "../content/plans";

export default function PlanCards() {
	return (
		<div className="mt-14">
			<div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_22rem] md:gap-16">
				<div>
					<span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
						{plan.campaignLabel}
					</span>
					<p className="mt-5 text-sm text-brown">
						{plan.regularPriceLabel}：
						<span className="line-through decoration-brown-light">{plan.regularPrice}</span>
					</p>

					<p className="mt-8 text-sm font-medium tracking-wide text-brown-light">{plan.priceLabel}</p>
					<p className="mt-2 text-6xl font-semibold text-ink sm:text-7xl">{plan.price}</p>

					<p className="mt-6 max-w-md text-sm leading-relaxed text-brown-light">{plan.campaignNote}</p>

					<a
						href="/contact"
						className="btn-sweep mt-10 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white"
					>
						相談する
					</a>
				</div>

				<div className="h-fit rounded-3xl border border-white/60 bg-white/45 p-7 shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md md:mt-2">
					<p className="text-xs font-medium tracking-[0.2em] text-brown-light">MAINTENANCE</p>
					<p className="mt-3 text-2xl font-semibold text-ink">{plan.maintenance}</p>
					<p className="mt-2 text-sm text-brown-light">{plan.maintenanceNote}</p>
				</div>
			</div>

			{/* maintenanceHeading/Leadはcontent/plans.tsではMAINTENANCE価格と隣接しているが、
			   ここではfeatures一覧の導入文として使うため意図的に離して配置している */}
			<div className="mt-20 grid gap-8 border-t border-border pt-16 md:grid-cols-[20rem_minmax(0,1fr)] md:gap-16">
				<div>
					<p className="text-lg font-semibold text-ink">{plan.maintenanceHeading}</p>
					<p className="mt-3 text-sm leading-relaxed text-brown">{plan.maintenanceLead}</p>
				</div>

				<ul className="grid gap-x-8 gap-y-7 md:grid-cols-2">
					{plan.features.map((f) => (
						<li key={f.title} className="flex items-start gap-3">
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
		</div>
	);
}
