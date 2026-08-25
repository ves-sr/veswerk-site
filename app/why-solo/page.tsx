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
		title: "伝言ゲームがない",
		desc: "聞いた人が、そのまま作る人です。",
	},
	{
		no: "02",
		title: "意思決定が速い",
		desc: "社内稟議も、担当者の引き継ぎもありません。",
	},
	{
		no: "03",
		title: "柔軟に対応できる",
		desc: "お店の事情やペースに合わせて動けます。",
	},
	{
		no: "04",
		title: "適正な価格でご提供",
		desc: "オフィスや大人数の人件費がかからない分を、価格に還元しています。",
	},
];

export default function WhySoloPage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="eyebrow">なぜ、ひとりでやるのか</p>
				<h1 className="section-heading">WHY SOLO</h1>
				<p className="mt-6 max-w-2xl text-brown">
					「うちのお店、そろそろホームページを新しくしたいけど、
					何から頼めばいいのか分からない」——そんな声から生まれたのが、
					この活動です。仕事の中で&ldquo;きちんと話を聞いて、責任を持って形にする&rdquo;
					ことの大切さを実感し、その姿勢を、ひとつでも多くの小さなお店に
					届けたいと思い、ひとりでこの仕事をしています。
				</p>

				<ReasonCards items={soloReasons} />

				<div className="mt-10 flex flex-col gap-8 rounded-3xl border border-white/60 bg-white/55 p-8 shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md sm:flex-row sm:items-start">
					<div className="flex shrink-0 flex-col items-center gap-3 sm:items-start">
						<Image
							src={profilePhoto}
							alt="中井駿吾"
							width={140}
							height={140}
							className="rounded-full object-cover"
						/>
						<div className="text-center sm:text-left">
							<p className="font-semibold text-ink">中井駿吾</p>
							<p className="text-xs text-brown-light">20代</p>
						</div>
					</div>
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
