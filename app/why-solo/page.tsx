import type { Metadata } from "next";
import Image from "next/image";
import ReasonCards from "../components/ReasonCards";
import profilePhoto from "../assets/images/profile.jpg";

export const metadata: Metadata = {
	title: "なぜ、ひとりでやるのか｜VESWERK",
	description:
		"個人経営の小さなお店のホームページを、ひとりで一貫して手がける理由について。",
};

const soloReasons = [
	{
		no: "01",
		title: "要望がそのまま形になる",
		desc: "ヒアリングした本人が設計から制作まで一貫して担当するため、営業や別担当者を挟みません。「伝えたことが違う形で仕上がる」心配がなく、イメージのズレも早い段階で解消できます。",
	},
	{
		no: "02",
		title: "意思決定が速い",
		desc: "社内承認や複数部署への確認が不要なため、ご相談から回答まで日をまたがずお応えできます。ちょっとした修正でも、そのつど打ち合わせを設定する必要はありません。",
	},
	{
		no: "03",
		title: "柔軟に対応できる",
		desc: "営業時間外のご相談や、お店の繁忙期を避けたスケジュール調整など、画一的なルールではなくお店ごとの事情に合わせて進め方を調整します。",
	},
	{
		no: "04",
		title: "適正な価格でご提供",
		desc: "オフィスの家賃や複数人分の人件費、営業担当を挟む中間コストがかからない分を、そのまま制作費に反映しています。少人数のお店でも無理なく依頼できる価格帯を意識しています。",
	},
	{
		no: "05",
		title: "地元の視点でも検証できる",
		desc: "吉祥寺・武蔵野エリアに住む知人にデザイン案を見てもらい、率直な感想を伺うことができます。作り手の主観だけでなく、実際にそのエリアで暮らす人の目線を交えてご提案できるのは、地元に根ざしているからこそです。",
	},
];

export default function WhySoloPage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid gap-12 sm:grid-cols-[minmax(0,1fr)_18rem] sm:items-start sm:gap-16">
					<div>
						<p className="eyebrow">なぜ、ひとりでやるのか</p>
						<h1 className="section-heading">WHY SOLO</h1>
						<p className="mt-6 max-w-xl text-brown">
							ホームページ制作は、大手・中堅の制作会社に頼めば50万円以上かかることも珍しくありません。
							同じくらいの規模感でフリーランスに依頼する場合でも、要件のヒアリングと実際の制作を
							別の担当者が分担しているケースがあり、公開後の運用・保守まで対応してもらえるかどうかは、
							事前の確認が必要なことも多いようです。
						</p>
						<p className="mt-4 max-w-xl text-brown">
							私は、吉祥寺・武蔵野エリアを拠点に、ヒアリングから制作、公開後の保守まで、
							すべてひとりで担当しています。本業でシステムの要件定義から保守・運用まで
							携わってきた経験を活かし、見た目のデザインだけでなく、裏側の仕組みまで
							理解したうえでご提案します。
						</p>
					</div>

					<div className="sm:pt-2">
						<div className="aspect-3/4 overflow-hidden rounded-2xl">
							<Image
								src={profilePhoto}
								alt="中井駿吾"
								className="h-full w-full object-cover"
							/>
						</div>
						<p className="mt-4 font-semibold text-ink">中井駿吾</p>
						<p className="text-sm text-brown-light">23歳・N-Tech代表</p>
					</div>
				</div>

				<ReasonCards items={soloReasons} />

				<div className="mt-20 max-w-3xl border-t border-border pt-16">
					<p className="text-brown">
						普段は会社員としてシステムの要件定義から保守・運用まで携わっており、
						その経験を活かして、ホームページ制作でもお客様の要望を丁寧に
						ヒアリングする要件定義から、公開後の保守まで一気通貫でサポートします。
						大きな組織の中で「何を作るべきか」を整理する仕事をしてきたからこそ、
						お店ごとに違う事情や要望を、思い込みで進めず一つひとつ確認しながら
						形にすることを大切にしています。まだ実績は少ない段階ですが、
						その分、一件一件に向き合う時間を惜しまずに対応します。
					</p>
				</div>
			</div>
		</section>
	);
}
