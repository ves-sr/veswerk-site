import type { Metadata } from "next";
import PlanCards from "../components/PlanCards";
import MaintenanceCards from "../components/MaintenanceCards";
import AddonCards from "../components/AddonCards";
import MaintenanceAddonCards from "../components/MaintenanceAddonCards";
import { notIncludedItems } from "../content/plans";

export const metadata: Metadata = {
	title: "ご利用料金｜VESWERK",
	description: "実績作りのための特別価格プラン。ヒアリングから公開後の保守まで、一貫して制作します。",
};

export default function PricingPage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="eyebrow">ご利用料金</p>
				<h1 className="section-heading">FEE</h1>
				<p className="mt-6 max-w-2xl text-brown">
					実績作りのため、現在は特別価格でホームページ制作を承っています。
				</p>

				<PlanCards />
			</div>

			<div className="mx-auto mt-28 max-w-6xl border-t border-border px-6 pt-20">
				<p className="eyebrow">保守プランの内容</p>
				<h2 className="subsection-heading">公開後も、継続して見守ります</h2>
				<p className="mt-4 max-w-2xl text-sm text-brown">
					公開後も、サイトが正常に動き続けるように継続的に見守ります。保守契約には以下の内容が含まれます。
				</p>
				<MaintenanceCards />
			</div>

			<div className="mx-auto mt-20 max-w-6xl px-6">
				<div className="grid gap-16 border-t border-border pt-16 sm:grid-cols-2">
					<div>
						<p className="eyebrow">制作時の追加オプション</p>
						<h2 className="subsection-heading">CUSTOMIZE</h2>
						<p className="mt-3 text-sm text-brown">
							最初にご提案する内容から、色・フォント・お写真を追加したい場合は、項目ごとに以下の費用をいただいております。
						</p>
						<AddonCards />
					</div>

					<div>
						<p className="eyebrow">保守の追加オプション</p>
						<h2 className="subsection-heading">MAINTENANCE ADD-ON</h2>
						<p className="mt-3 text-sm text-brown">
							ご希望の方のみ、保守費に追加してご案内しているオプションです。
						</p>
						<MaintenanceAddonCards />
					</div>
				</div>
			</div>

			<div className="mx-auto mt-20 max-w-6xl px-6">
				<div className="border-t border-border pt-16">
					<p className="eyebrow">含まれないもの</p>
					<h2 className="subsection-heading">NOT INCLUDED</h2>
					<p className="mt-3 max-w-2xl text-sm text-brown">
						実績作りを目的とした特別価格プランのため、以下の機能は今回のサイトには含まれません。
						ご契約期間（1年間）終了後にご希望される場合は、正式なご依頼として別途お見積もりいたします。
					</p>
					<ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
						{notIncludedItems.map((item) => (
							<li key={item} className="text-sm text-brown-light">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
