import { plan } from "../content/plans";

export default function PlanCards() {
	return (
		<div className="mt-14 mx-auto max-w-2xl rounded-3xl border border-accent bg-white/70 p-10 text-center shadow-[0_16px_40px_-14px_rgba(201,138,75,0.5)] backdrop-blur-md">
			<p className="text-4xl font-bold text-ink">{plan.price}</p>
			<p className="mt-1 text-sm text-brown-light">{plan.priceNote}</p>

			<hr className="my-6 border-border" />

			<p className="text-lg font-semibold text-ink">{plan.maintenance}</p>
			<p className="mt-1 text-sm text-brown-light">{plan.maintenanceNote}</p>

			<hr className="my-6 border-border" />

			<ul className="flex flex-col gap-3 text-left">
				{plan.features.map((f) => (
					<li key={f.text} className="flex items-start gap-2 text-sm text-brown">
						<svg
							aria-hidden="true"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="mt-0.5 h-4 w-4 shrink-0 text-accent"
						>
							<path
								fillRule="evenodd"
								d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
								clipRule="evenodd"
							/>
						</svg>
						{f.text}
					</li>
				))}
			</ul>

			<a
				href="/contact"
				className="btn-sweep mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white"
			>
				相談する
			</a>
		</div>
	);
}
