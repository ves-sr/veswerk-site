import type { Metadata } from "next";
import PlanCards from "../components/PlanCards";
import MaintenanceCards from "../components/MaintenanceCards";
import AddonCards from "../components/AddonCards";
import MaintenanceAddonCards from "../components/MaintenanceAddonCards";
import SectionHeading from "../components/SectionHeading";
import { notIncludedItems } from "../content/plans";

const pageTitle = "ご利用料金";
const pageDescription = "初期制作費50,000円・保守費月19,800円。ヒアリングから公開後の保守まで、一貫して制作します。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/pricing" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/pricing", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

export default function PricingPage() {
	return (
		<>
			<section className="relative pt-28 pb-16 sm:pt-32 lg:pt-40">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">ご利用料金</p>
					<h1 className="page-heading mt-4">FEE</h1>
					<p className="section-body mt-6 max-w-lg text-sm sm:text-base">
						ヒアリングから公開後の保守まで、一貫してホームページ制作を承っています。
					</p>
					<PlanCards />
				</div>
			</section>

			<section className="border-t border-border py-24 sm:py-28">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="MAINTENANCE" ja="公開後も、継続して見守ります" align="left" />
					<p className="section-body mt-5 max-w-lg text-sm sm:text-base">
						公開後も、サイトが正常に動き続けるように継続的に見守ります。保守契約には以下の内容が含まれます。
					</p>
					<MaintenanceCards />
				</div>
			</section>

			<section className="border-t border-border py-24 sm:py-28">
				<div className="mx-auto grid max-w-6xl gap-16 px-6 sm:grid-cols-2 sm:gap-12">
					<div>
						<SectionHeading en="CUSTOMIZE" ja="制作時の追加オプション" align="left" />
						<p className="section-body mt-5 text-sm sm:text-base">
							最初にご提案する内容から、色・フォント・お写真を追加したい場合は、項目ごとに以下の費用を
							<span className="whitespace-nowrap">いただいております。</span>
						</p>
						<AddonCards />
					</div>
					<div>
						<SectionHeading en="MAINTENANCE ADD-ON" ja="保守の追加オプション" align="left" />
						<p className="section-body mt-5 text-sm sm:text-base">ご希望の方のみ、保守費に追加してご案内しているオプションです。</p>
						<MaintenanceAddonCards />
					</div>
				</div>
			</section>

			<section className="border-t border-border bg-bg-sub py-24 sm:py-28">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="NOT INCLUDED" ja="含まれないもの" align="left" />
					<p className="section-body mt-5 max-w-2xl text-sm sm:text-base">
						標準プランには、以下の機能は含まれません。ご希望の場合は、<span className="whitespace-nowrap">別途お見積もりいたします。</span>
					</p>
					<ul className="mt-8 flex flex-wrap gap-3">
						{notIncludedItems.map((item) => (
							<li key={item} className="rounded-full border border-border bg-bg px-4 py-2 text-sm text-text">
								{item}
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-2xl px-6 text-center">
					<h2 className="subsection-heading max-sm:text-[1rem] lg:whitespace-nowrap lg:text-[1.3125rem]!">
						料金について、気になる点があればお気軽に<span className="whitespace-nowrap">ご相談ください。</span>
					</h2>
					<a href="/contact" className="btn-fill mt-8 inline-flex">
						無料で相談する
					</a>
				</div>
			</section>
		</>
	);
}
