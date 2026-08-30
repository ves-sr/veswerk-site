import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profilePhoto from "../assets/images/profile.jpg";

export const metadata: Metadata = {
	title: "WHY VESWERK｜VESWERK",
	description:
		"吉祥寺・武蔵野エリアの小さなお店に向けて、VESWERKがどのような考え方でホームページを設計しているのか。目的から組み立てるデザインの姿勢を紹介します。",
};

const pillars = [
	{
		no: "01",
		eyebrow: "DESIGN WITH PURPOSE",
		heading: "目的から、デザインする。",
		body: "何を伝えたいのか。誰に来てほしいのか。どんな印象を持ってほしいのか。どんな行動につなげたいのか。見た目をつくる前に、その目的を整理することから始めます。ホームページは完成させることが目的ではなく、目的を達成するための手段だと考えています。",
	},
	{
		no: "02",
		eyebrow: "LOCAL BUSINESS",
		heading: "小さなお店に、本当に必要なホームページを。",
		body: "吉祥寺・武蔵野エリアで営むお店・地域密着型の事業者を主な対象にしています。大企業のように情報を詰め込むのではなく、お店の雰囲気、商品・サービス、営業時間、アクセス、予約・問い合わせ、お店の想い——本当に必要な情報を、必要な人にきちんと届けることを大切にしています。",
	},
	{
		no: "03",
		eyebrow: "DESIGN × FUNCTION",
		heading: "見た目だけでは、終わらせない。",
		body: "お店の雰囲気が伝わること。初めて訪れる人でも安心できること。必要な情報がすぐ見つかること。スマートフォンでも快適に使えること。そして、予約や問い合わせにつながること。デザイン性と使いやすさ、そして目的、そのバランスを考えて設計します。",
	},
	{
		no: "04",
		eyebrow: "LONG TERM",
		heading: "公開した、その先まで。",
		body: "ホームページは公開した瞬間がゴールではありません。営業時間の変更やお知らせの更新、ちょっとした修正、公開後に見えてくる改善点——長く使われていくことを前提に、運用しやすい形で設計します。",
		showCta: true,
	},
];

export default function WhyVeswerkPage() {
	return (
		<section className="py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<p className="eyebrow">WHY VESWERK</p>
				<h1 className="section-heading max-w-2xl">
					お店の魅力を、
					<br />
					Webで伝わるかたちに。
				</h1>
				<p className="mt-6 max-w-xl text-brown">
					VESWERKがホームページ制作で大切にしている考え方について。
				</p>
			</div>

			<div className="mx-auto mt-24 max-w-6xl px-6 sm:mt-32">
				<div className="flex flex-col">
					{pillars.map((pillar, i) => (
						<div
							key={pillar.no}
							className={`flex flex-col gap-6 border-t border-border py-14 first:border-t-0 first:pt-0 sm:gap-10 sm:py-20 ${
								i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row"
							}`}
						>
							<span className="text-3xl font-light text-border sm:shrink-0 sm:text-4xl">
								{pillar.no}
							</span>
							<div className="max-w-xl sm:ml-auto">
								<p className="text-xs font-semibold tracking-[0.3em] text-accent">
									{pillar.eyebrow}
								</p>
								<h2 className="subsection-heading mt-3">{pillar.heading}</h2>
								<p className="mt-4 text-sm leading-relaxed text-brown">{pillar.body}</p>
								{pillar.showCta && (
									<Link
										href="/pricing"
										className={`group mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink ${
											i % 2 === 1 ? "sm:flex-row-reverse" : ""
										}`}
									>
										<span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
											保守・運用プランを見る
										</span>
										<span className="transition-transform duration-300 group-hover:translate-x-1">
											→
										</span>
									</Link>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-20 sm:mt-32 sm:pt-28">
				<div className="grid gap-12 sm:grid-cols-[18rem_minmax(0,1fr)] sm:items-start sm:gap-16">
					<div className="sm:pt-2">
						<div className="aspect-3/4 overflow-hidden rounded-2xl">
							<Image
								src={profilePhoto}
								alt="中井駿吾"
								priority
								className="h-full w-full object-cover"
							/>
						</div>
						<p className="mt-4 font-semibold text-ink">中井駿吾</p>
						<p className="text-sm text-brown-light">VESWERK</p>
					</div>

					<div>
						<p className="text-xs font-semibold tracking-[0.3em] text-accent">
							ENGINEERING EXPERIENCE
						</p>
						<h2 className="subsection-heading mt-3 max-w-lg">
							実際のプロダクト開発の現場で培った経験を、Web制作へ。
						</h2>
						<p className="mt-5 max-w-xl text-brown">
							普段は東証プライム上場企業グループで自社開発に携わる、現役のソフトウェアエンジニアです。
							要件定義、設計、開発、テスト、運用、保守——ソフトウェア開発の一連の工程に、日々携わっています。
						</p>
						<p className="mt-4 max-w-xl text-brown">
							この経験を活かし、VESWERKでも「見た目がきれいなホームページ」だけで終わらせず、
							実際に使われ、運用され続けるホームページを考えて設計することを強みにしています。
						</p>

						<ul className="mt-8 flex flex-wrap gap-3">
							<li className="rounded-full border border-border px-4 py-1.5 text-xs text-brown">
								東証プライム上場企業グループ
							</li>
							<li className="rounded-full border border-border px-4 py-1.5 text-xs text-brown">
								自社開発
							</li>
							<li className="rounded-full border border-border px-4 py-1.5 text-xs text-brown">
								現役ソフトウェアエンジニア
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-20 sm:mt-32 sm:pt-28">
				<div className="mx-auto max-w-2xl text-center">
					<p className="eyebrow justify-center">VESWERK&apos;S PHILOSOPHY</p>
					<p className="section-heading text-2xl leading-[1.9] sm:text-3xl">
						ホームページは、ただ存在するだけでは意味がない。
						<br />
						お店を知ってもらい、魅力を伝え、
						<br />
						初めて訪れる人の不安をなくし、
						<br />
						予約や問い合わせにつなげ、長く使ってもらう。
					</p>
					<p className="mt-8 text-brown">
						デザインと技術、そしてお店そのものへの理解を組み合わせて、
						ホームページをつくっています。
					</p>
				</div>
			</div>

			<div className="mx-auto mt-24 max-w-6xl px-6 sm:mt-32">
				<div className="border-t border-border pt-16 text-center">
					<h2 className="subsection-heading">
						この考え方に共感いただけたら、お気軽にご相談ください。
					</h2>
					<a
						href="/contact"
						className="btn-sweep mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white"
					>
						無料で相談する
					</a>
				</div>
			</div>
		</section>
	);
}
