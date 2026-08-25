import { plans } from "../content/plans";

export default function PlanCards() {
	return (
		<div className="mt-14 grid gap-6 lg:grid-cols-3">
			{plans.map((plan) => (
				<div
					key={plan.key}
					className={`flex flex-col rounded-3xl border p-8 backdrop-blur-md ${
						plan.recommended
							? "border-accent bg-white/70 shadow-[0_16px_40px_-14px_rgba(201,138,75,0.5)] lg:-translate-y-3"
							: "border-white/60 bg-white/45 shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)]"
					}`}
				>
					{plan.recommended && (
						<span className="mb-4 inline-block w-fit rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
							おすすめ
						</span>
					)}

					<h3 className="text-3xl font-bold text-ink">{plan.name}</h3>
					<span className="mt-2 inline-block w-fit rounded-full border border-border bg-cream px-3 py-1 text-xs text-brown">
						{plan.badge}
					</span>

					<p className="mt-6 text-3xl font-bold text-ink">{plan.price}</p>
					<p className="mt-1 text-sm text-brown-light">{plan.maintenance}</p>

					<hr className="my-6 border-border" />

					<p className="mb-3 text-xs tracking-widest text-brown-light">
						{plan.name}プランの内容
					</p>
					<ul className="flex flex-1 flex-col gap-3">
						{plan.features.map((f) => (
							<li
								key={f.text}
								className={`flex items-start gap-2 text-sm ${
									f.highlighted ? "font-semibold text-accent" : "text-brown"
								}`}
							>
								<svg
									aria-hidden="true"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="mt-0.5 h-4 w-4 shrink-0"
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
						className={`btn-sweep mt-8 rounded-full px-6 py-3 text-center text-sm font-medium ${
							plan.recommended ? "bg-accent text-white" : "border border-accent text-accent"
						}`}
					>
						このプランで相談する
					</a>
				</div>
			))}
		</div>
	);
}
