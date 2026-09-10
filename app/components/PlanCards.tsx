import { Fragment } from "react";
import { plan, pricingTiers, pricingTiersNote } from "../content/plans";
import Reveal from "./Reveal";

export default function PlanCards() {
	return (
		<div className="mt-14">
			<Reveal>
				<div className="flex flex-col items-center rounded-[2rem] border border-border bg-bg-sub p-8 text-center sm:mx-16 sm:rounded-[2.5rem] sm:p-14">
					<p className="eyebrow">PLAN</p>

					<div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
						<div>
							<p className="eyebrow">{plan.priceLabel}</p>
							<p className="mt-2 text-3xl font-medium whitespace-nowrap text-ink sm:text-4xl">{plan.price}</p>
							<p className="mt-1 text-sm whitespace-nowrap text-text-soft">{plan.priceNote}</p>
						</div>

						<span className="text-xl font-light text-border sm:pt-9 sm:text-2xl">＋</span>

						<div>
							<p className="eyebrow">保守費</p>
							<p className="mt-2 text-3xl font-medium whitespace-nowrap text-ink sm:text-4xl">
								{plan.maintenance.replace("保守：", "")}
							</p>
							<p
								className="mt-1 text-sm text-text-soft"
								style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
							>
								{plan.maintenanceNote}
							</p>
						</div>
					</div>

					<div className="mt-8 w-full max-w-xs">
						<p className="eyebrow">制作料金の目安（税込）</p>
						<dl className="mt-3 grid grid-cols-[1fr_auto] gap-x-4">
							{pricingTiers.map((tier, i) => (
								<Fragment key={tier.pages}>
									{i > 0 && <div aria-hidden="true" className="col-span-2 border-t border-border" />}
									<dt className="col-start-1 py-2 text-left text-sm text-text">{tier.pages}</dt>
									<dd className="col-start-2 py-2 text-right text-sm font-medium whitespace-nowrap text-ink">
										{tier.price}
									</dd>
								</Fragment>
							))}
						</dl>
						<p
							className="mt-4 text-xs leading-relaxed text-text-soft"
							style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
						>
							{pricingTiersNote}
						</p>
					</div>

					<p
						className="mt-8 max-w-2xl text-sm leading-relaxed text-text-soft"
						style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
					>
						ヒアリングから公開後の保守まで、
						<br />
						一貫してご依頼いただけます。
					</p>

					<a href="/contact" className="btn-fill mt-8">
						相談する
					</a>
				</div>
			</Reveal>

			<div className="mt-20 grid min-w-0 gap-8 border-t border-border pt-16 md:grid-cols-[20rem_minmax(0,1fr)] md:gap-16">
				<div className="min-w-0">
					<p className="subsection-heading text-balance">{plan.maintenanceHeading}</p>
					<p
						className="mt-3 text-sm leading-relaxed text-text"
						style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
					>
						{plan.maintenanceLead}
					</p>
				</div>

				<ul className="flex min-w-0 flex-col gap-8">
					{plan.features.map((f, i) => (
						<Reveal key={f.title} as="li" className="min-w-0" delay={i * 60}>
							<div className="flex items-start gap-3">
								<svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-1 h-4 w-4 shrink-0 text-accent">
									<path
										fillRule="evenodd"
										d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
										clipRule="evenodd"
									/>
								</svg>
								<div className="min-w-0">
									<p
										className="text-sm font-medium text-ink"
										style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
									>
										{f.title}
									</p>
									<p
										className="mt-1.5 text-sm leading-relaxed text-text"
										style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
									>
										{/* 430px幅で末尾の句点だけが孤立するため、最後の一文だけ分断されないようにする */}
										{f.text.endsWith("継続サポートします。") ? (
											<>
												{f.text.slice(0, -15)}
												<span className="whitespace-nowrap">{f.text.slice(-15)}</span>
											</>
										) : (
											f.text
										)}
									</p>
								</div>
							</div>
						</Reveal>
					))}
				</ul>
			</div>
		</div>
	);
}
