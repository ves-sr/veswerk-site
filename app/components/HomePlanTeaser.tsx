import Link from "next/link";
import { plan } from "../content/plans";

/**
 * Homeでは料金ページのカードを丸ごと転載せず、価格の核だけを大きく見せて
 * pricingページへ誘導する。詳細な保守内容の箇条書きはpricingページの役割とし、
 * Homeは「無料で始められる」という最重要メッセージだけに絞る。
 */
export default function HomePlanTeaser() {
	return (
		<div className="mt-14 rounded-[2rem] border border-border bg-bg-sub p-8 sm:rounded-[2.5rem] sm:p-12">
			<span className="inline-block rounded-full bg-ink px-4 py-1.5 text-xs font-medium tracking-wide text-white">
				{plan.campaignLabel}
			</span>
			<p className="mt-5 text-sm text-text-soft">
				{plan.regularPriceLabel}：<span className="line-through decoration-text-soft">{plan.regularPrice}</span>
			</p>

			<div className="mt-5 flex flex-col items-start gap-10 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="eyebrow">{plan.priceLabel}</p>
					<p className="mt-2 text-5xl font-medium text-ink sm:text-6xl">{plan.price}</p>
					<p className="mt-3 max-w-sm text-sm leading-relaxed text-text">
						<span className="font-semibold text-ink">{plan.campaignNote.split("。")[0]}。</span>
						{plan.campaignNote.split("。").slice(1).join("。")}
					</p>
				</div>

				<div className="flex flex-col items-start gap-6 sm:items-end">
					<p className="text-text">
						公開後の保守は
						<span className="mx-1 font-medium text-ink">{plan.maintenance}</span>
						<br className="hidden sm:block" />
						{plan.maintenanceNote}
					</p>
					<Link href="/pricing" className="group inline-flex items-center gap-2 text-sm font-medium text-ink">
						<span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
							料金・保守内容の詳細を見る
						</span>
						<span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
