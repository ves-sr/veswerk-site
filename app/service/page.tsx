import type { Metadata } from "next";
import NumberedTimeline from "../components/NumberedTimeline";
import { services } from "../content/services";

export const metadata: Metadata = {
	title: "事業紹介｜VESWERK",
	description: "吉祥寺・武蔵野エリアの個人経営カフェを中心に、小さなお店のホームページを専門に、要件定義・設計・デザイン・実装、そして公開後の保守運用まで、すべてをひとりで担当しています。",
};

export default function ServicePage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="eyebrow">事業紹介</p>
				<h1 className="section-heading">SERVICE</h1>
				<p className="mt-6 max-w-2xl text-brown">
					吉祥寺・武蔵野エリアの個人経営カフェを中心に、小さなお店の
					ホームページを専門に、要件定義・設計・デザイン・実装、
					そして公開後の保守運用まで、すべてをひとりで担当しています。
					誰かに任せきりにせず、最初にお話を伺った人間が最後まで
					責任を持って形にする——そのシンプルな一貫性を大切にしています。
				</p>

				<NumberedTimeline items={services} />
			</div>
		</section>
	);
}
