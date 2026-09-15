import Link from "next/link";
import { plan } from "../content/plans";

/**
 * Homeでは料金ページのカードを丸ごと転載せず、価格の核だけを大きく見せて
 * pricingページへ誘導する。詳細な保守内容の箇条書きはpricingページの役割とし、
 * Homeは「制作費」「保守・管理費」という価格の核だけに絞る。
 * 情報のまとまりが分かりやすいよう、縦一列に読める構成にする。
 */
export default function HomePlanTeaser() {
	return (
		<div className="mx-auto mt-14 flex max-w-sm flex-col items-center rounded-[2rem] border border-border bg-bg-sub p-8 text-center sm:max-w-md sm:rounded-[2.5rem] sm:p-10">
			<p className="eyebrow">PLAN</p>

			<p className="eyebrow mt-7">{plan.priceLabel}</p>
			<p className="mt-2 text-4xl font-medium text-ink sm:text-5xl">{plan.price}</p>
			<p className="mt-1 text-xs text-text-soft sm:text-sm">{plan.priceNote}</p>

			<p
				className="mt-4 max-w-xs text-xs leading-relaxed text-text sm:text-sm"
				style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
			>
				ヒアリングから公開後の保守まで、
				<br />
				一貫してご依頼いただけます。
			</p>

			<div className="mt-7 w-full border-t border-border pt-6">
				<p className="text-sm text-text sm:text-base" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
					公開後の保守・管理は
					<span className="mx-1 font-medium text-ink">{plan.maintenance}</span>
				</p>
				<p className="mt-1 text-xs text-text-soft sm:text-sm">{plan.maintenanceNote}</p>
			</div>

			<Link href="/pricing" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
				<span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
					料金・保守内容の詳細を見る
				</span>
				<span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
			</Link>
		</div>
	);
}
