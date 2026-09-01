import type { Metadata } from "next";
import ImageTextRow from "../components/ImageTextRow";
import Reveal from "../components/Reveal";
import { legalName } from "../content/site";
import profilePhoto from "../assets/images/profile.jpg";

const pageTitle = "WHY VESWERK";
const pageDescription =
	"吉祥寺・武蔵野エリアの小さなお店に向けて、VESWERKがどのような考え方でホームページを設計しているのか。目的から組み立てるデザインの姿勢を紹介します。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/why-veswerk" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/why-veswerk", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

const pillars = [
	{
		no: "01",
		en: "DESIGN WITH PURPOSE",
		heading: "目的から、デザインする。",
		body: "何を伝えたいのか。誰に来てほしいのか。どんな印象を持ってほしいのか。どんな行動につなげたいのか。見た目をつくる前に、その目的を整理することから始めます。ホームページは完成させることが目的ではなく、目的を達成するための手段だと考えています。",
	},
	{
		no: "02",
		en: "LOCAL BUSINESS",
		heading: "小さなお店に、本当に必要なホームページを。",
		body: "吉祥寺・武蔵野エリアで営むお店・地域密着型の事業者を主な対象にしています。大企業のように情報を詰め込むのではなく、お店の雰囲気、商品・サービス、営業時間、アクセス、予約・問い合わせ、お店の想い——本当に必要な情報を、必要な人にきちんと届けることを大切にしています。",
	},
	{
		no: "03",
		en: "DESIGN × FUNCTION",
		heading: "見た目だけでは、終わらせない。",
		body: "お店の雰囲気が伝わること。初めて訪れる人でも安心できること。必要な情報がすぐ見つかること。スマートフォンでも快適に使えること。そして、予約や問い合わせにつながること。デザイン性と使いやすさ、そして目的、そのバランスを考えて設計します。",
	},
	{
		no: "04",
		en: "LONG TERM",
		heading: "公開した、その先まで。",
		body: "ホームページは公開した瞬間がゴールではありません。営業時間の変更やお知らせの更新、ちょっとした修正、公開後に見えてくる改善点——長く使われていくことを前提に、運用しやすい形で設計します。",
		cta: { label: "保守・運用プランを見る", href: "/pricing" },
	},
] as const;

export default function WhyVeswerkPage() {
	return (
		<>
			<section className="relative pt-28 pb-16 sm:pt-32 lg:pt-40">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">WHY VESWERK</p>
					<h1 className="page-heading mt-4 max-w-xl">
						お店の魅力を、
						<br />
						Webで伝わるかたちに。
					</h1>
					<p className="section-body mt-6 max-w-lg text-sm sm:text-base">
						VESWERKがホームページ制作で大切にしている考え方について。
					</p>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24 lg:py-28">
				<div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 sm:gap-28">
					{pillars.map((p, i) => (
						<Reveal key={p.no}>
							<div className={`flex flex-col gap-6 sm:flex-row sm:gap-10 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
								<span className="hero-heading shrink-0 text-4xl font-light text-border sm:w-28 sm:text-5xl" aria-hidden="true">
									{p.no}
								</span>
								<div>
									<p className="eyebrow">{p.en}</p>
									<h2 className="section-heading mt-3 text-left">{p.heading}</h2>
									<p className="section-body mt-4 max-w-2xl text-sm sm:text-base">{p.body}</p>
									{"cta" in p && p.cta && (
										<a href={p.cta.href} className="btn-outline mt-6 inline-flex">
											{p.cta.label}
										</a>
									)}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			<section className="border-t border-border bg-bg-sub py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<ImageTextRow
						image={profilePhoto}
						imageAlt="中井駿吾"
						eyebrow="ENGINEERING EXPERIENCE"
						heading="実際のプロダクト開発の現場で培った経験を、Web制作へ。"
						body={[
							"普段は東証プライム上場企業グループで自社開発に携わる、現役のソフトウェアエンジニアです。要件定義、設計、開発、テスト、運用、保守——ソフトウェア開発の一連の工程に、日々携わっています。",
							"この経験を活かし、VESWERKでも「見た目がきれいなホームページ」だけで終わらせず、実際に使われ、運用され続けるホームページを考えて設計することを強みにしています。",
						]}
					/>
					<div className="mt-12 text-center">
						<p className="text-base font-medium text-ink">中井駿吾</p>
						<p className="mt-1 text-sm text-text-soft">{legalName} 代表</p>
						<div className="mt-6 flex flex-wrap justify-center gap-3">
							{["東証プライム上場企業グループ", "自社開発", "現役ソフトウェアエンジニア"].map((badge) => (
								<span key={badge} className="rounded-full border border-border bg-bg px-4 py-2 text-xs font-medium tracking-wide text-text">
									{badge}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="border-t border-border py-28 sm:py-32 lg:py-40">
				<Reveal>
					<div className="mx-auto max-w-3xl px-6 text-center">
						<p className="eyebrow">VESWERK&apos;S PHILOSOPHY</p>
						<h2
							className="mt-8 text-[1.25rem] leading-[1.9] font-medium tracking-[0.01em] text-ink sm:mt-10 sm:text-2xl sm:leading-[2.05] lg:text-[1.75rem] lg:leading-[2.15]"
							style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
						>
							<span className="block">ホームページは、ただ存在するだけでは意味がない。</span>
							<span className="mt-6 block sm:mt-8">
								お店を知ってもらい、魅力を伝え、初めて訪れる人の不安をなくし、予約や問い合わせにつなげ、長く使ってもらう。
							</span>
						</h2>
						<p className="section-body mt-10 text-sm sm:mt-12 sm:text-base">
							デザインと技術、そしてお店そのものへの理解を組み合わせて、ホームページをつくっています。
						</p>
					</div>
				</Reveal>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-2xl px-6 text-center">
					<h2 className="subsection-heading">気になることがあれば、お気軽にご相談ください。</h2>
					<a href="/contact" className="btn-fill mt-8 inline-flex">
						無料で相談する
					</a>
				</div>
			</section>
		</>
	);
}
