import { plan } from "../content/plans";
import Reveal from "./Reveal";

export default function PlanCards() {
	return (
		<div className="mt-14">
			<Reveal>
				<div className="flex flex-col items-center rounded-[2rem] border border-border bg-bg-sub p-8 text-center sm:mx-16 sm:rounded-[2.5rem] sm:p-14">
					<span className="inline-block rounded-full bg-ink px-4 py-1.5 text-xs font-medium tracking-wide text-white">
						{plan.campaignLabel}
					</span>
					<p className="mt-5 text-sm text-text-soft">
						{plan.regularPriceLabel}：
						<span className="line-through decoration-text-soft">{plan.regularPrice}</span>
					</p>

					<div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
						<div>
							<p className="eyebrow">{plan.priceLabel}</p>
							<p className="mt-2 text-3xl font-medium text-ink sm:text-4xl">{plan.price}</p>
						</div>

						<span className="text-xl font-light text-border sm:pt-9 sm:text-2xl">＋</span>

						<div>
							<p className="eyebrow">保守費</p>
							<p className="mt-2 text-3xl font-medium text-ink sm:text-4xl">
								{plan.maintenance.replace("保守：", "")}
							</p>
							<p className="mt-1 text-sm text-text-soft">{plan.maintenanceNote}</p>
						</div>
					</div>

					<p className="mt-8 max-w-2xl text-sm leading-relaxed text-text-soft">
						<span className="font-semibold text-ink">{plan.campaignNote.split("。")[0]}。</span>
						{plan.campaignNote.split("。").slice(1).join("。")}
					</p>

					<a href="/contact" className="btn-fill mt-8">
						相談する
					</a>
				</div>
			</Reveal>

			<div className="mt-20 grid gap-8 border-t border-border pt-16 md:grid-cols-[20rem_minmax(0,1fr)] md:gap-16">
				<div>
					<p className="subsection-heading text-balance">{plan.maintenanceHeading}</p>
					<p className="mt-3 text-sm leading-relaxed text-text">{plan.maintenanceLead}</p>
				</div>

				<ul className="flex flex-col gap-8">
					{plan.features.map((f, i) => (
						<Reveal key={f.title} as="li" delay={i * 60}>
							<div className="flex items-start gap-3">
								<svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-1 h-4 w-4 shrink-0 text-accent">
									<path
										fillRule="evenodd"
										d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
										clipRule="evenodd"
									/>
								</svg>
								<div>
									<p className="text-sm font-medium text-ink">{f.title}</p>
									<p className="mt-1.5 text-sm leading-relaxed text-text">{f.text}</p>
								</div>
							</div>
						</Reveal>
					))}
				</ul>
			</div>
		</div>
	);
}
