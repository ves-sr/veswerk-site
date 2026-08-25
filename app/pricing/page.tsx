import type { Metadata } from "next";
import PlanCards from "../components/PlanCards";

export const metadata: Metadata = {
	title: "料金プラン｜VESWERK",
	description: "お店の規模やご希望に合わせた3つの料金プラン。ヒアリングから公開後の保守まで、ひとりで一貫して制作します。",
};

export default function PricingPage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="eyebrow">料金プラン</p>
				<h1 className="section-heading">PLAN</h1>
				<p className="mt-6 max-w-2xl text-brown">
					お店の規模やご希望に合わせて、3つのプランをご用意しています。
					迷ったら、多くの方に選ばれている「Standard」プランがおすすめです。
				</p>

				<PlanCards />

				<p className="mt-8 text-sm text-brown-light">
					※実績作りのため、一部案件では特別価格でご案内しています。詳しくはお問い合わせください。
				</p>
			</div>
		</section>
	);
}
