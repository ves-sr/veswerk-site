import { plan } from "../content/plans";

export default function PlanCards() {
	return (
		<div className="mt-14">
			<div className="flex flex-col items-center rounded-3xl border border-white/60 bg-white/45 p-8 text-center shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md sm:mx-18.75 sm:p-12">
				<span className="inline-block rounded-sm border border-accent px-3 py-1 text-xs font-semibold tracking-[0.15em] text-accent">
					{plan.campaignLabel}
				</span>
				<p className="mt-5 text-sm text-brown">
					{plan.regularPriceLabel}：
					<span className="line-through decoration-brown-light">{plan.regularPrice}</span>
				</p>

				{/* 「初期制作費0円＋保守月9,800円」がワンセットの料金体系だと一目で分かるよう、
				   2つの価格を同じ文字サイズ・同じ高さで横並びにし、＋でつないでいる（左右に分散させない） */}
				<div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
					<div>
						<p className="text-sm font-medium tracking-wide text-brown-light">{plan.priceLabel}</p>
						<p className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{plan.price}</p>
					</div>

					<span className="text-xl font-light text-border sm:pt-9 sm:text-2xl">＋</span>

					<div>
						<p className="text-sm font-medium tracking-wide text-brown-light">保守費</p>
						<p className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
							{plan.maintenance.replace("保守：", "")}
						</p>
						<p className="mt-1 text-sm text-brown-light">{plan.maintenanceNote}</p>
					</div>
				</div>

				<p className="mt-8 max-w-2xl text-sm leading-relaxed text-brown-light">{plan.campaignNote}</p>

				<a
					href="/contact"
					className="btn-sweep mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white"
				>
					相談する
				</a>
			</div>

			<div className="mt-20 grid gap-8 border-t border-border pt-16 md:grid-cols-[20rem_minmax(0,1fr)] md:gap-16">
				<div>
					<p className="text-lg font-semibold text-ink">{plan.maintenanceHeading}</p>
					<p className="mt-3 text-sm leading-relaxed text-brown">{plan.maintenanceLead}</p>
				</div>

				<ul className="flex flex-col gap-8">
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
								<p className="mt-1.5 text-sm leading-relaxed text-brown">{f.text}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
