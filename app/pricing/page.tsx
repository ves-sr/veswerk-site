import type { Metadata } from "next";
import PlanCards from "../components/PlanCards";
import MaintenanceCards from "../components/MaintenanceCards";
import SectionHeading from "../components/SectionHeading";
import { additionalWorkNote } from "../content/plans";

const pageTitle = "ご利用料金";
const pageDescription =
	"ホームページ制作98,000円〜（1〜6ページ）。公開後の保守・管理は月24,000円（税込）。ヒアリングから公開後の保守まで、一貫して制作します。";

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
					<p
						className="section-body mt-4 max-w-xl text-sm sm:text-base"
						style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
					>
						現在のホームページの内容や事業内容を確認したうえで、必要なページ・機能・デザインを整理し、正式なお見積りを作成します。
					</p>
					<PlanCards />
				</div>
			</section>

			<section className="border-t border-border py-24 sm:py-28">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="MAINTENANCE" ja="公開後も、継続して見守ります" align="left" />
					<p
						className="section-body mt-5 max-w-lg text-sm sm:text-base"
						style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
					>
						公開後は、月24,000円（税込）の保守・管理費で、以下の内容を継続してサポートします。
					</p>
					<MaintenanceCards />
				</div>
			</section>

			<section className="border-t border-border bg-bg-sub py-24 sm:py-28">
				<div className="mx-auto max-w-3xl px-6">
					<SectionHeading en="ADDITIONAL WORK" ja="追加費用について" align="left" />
					<p
						className="section-body mt-5 text-sm sm:text-base"
						style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
					>
						{additionalWorkNote}
					</p>
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
