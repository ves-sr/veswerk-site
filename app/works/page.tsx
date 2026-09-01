import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import { workSamples } from "../content/works";

const pageTitle = "制作サンプル";
const pageDescription =
	"VESWERKが手がけるホームページの制作サンプルを掲載。カフェ・地域密着型事業者など、小さなお店・個人経営に向けたデザインの方向性をご覧いただけます。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/works" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/works", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

export default function WorksPage() {
	return (
		<>
			<section className="relative pt-28 pb-16 sm:pt-32 lg:pt-40">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">SAMPLE WORKS</p>
					<h1 className="page-heading mt-4 max-w-xl">
						VESWERKがつくる
						<br />
						Webサイト
					</h1>
					<p className="section-body mt-6 max-w-lg text-sm sm:text-base">
						吉祥寺・武蔵野エリアの小さなお店・個人経営店を想定した制作サンプルです。実際のご依頼をイメージしていただけるよう、デザインから情報設計まで、案件と同じ考え方で作り込んでいます。
					</p>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:gap-32">
					{workSamples.map((sample, i) => (
						<Reveal key={sample.slug}>
							<div className={`flex flex-col items-center gap-10 sm:gap-14 lg:flex-row lg:gap-20 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
								<div className="w-full lg:w-1/2">
									<a
										href={sample.url}
										target="_blank"
										rel="noopener noreferrer"
										className="group block"
										aria-label={`${sample.name}の制作サンプルサイトを新しいタブで見る`}
									>
										<div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
											<Image
												src={sample.image}
												alt={sample.imageAlt}
												fill
												sizes="(min-width: 1024px) 42vw, 90vw"
												className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
											/>
										</div>
									</a>
								</div>
								<div className="w-full lg:w-1/2">
									<span className="hero-heading text-4xl font-light text-border sm:text-5xl" aria-hidden="true">
										{sample.no}
									</span>
									<p className="eyebrow mt-3">{sample.category}</p>
									<h2 className="section-heading mt-3 text-left">{sample.name}</h2>
									<p className="section-body mt-4 text-sm sm:text-base">{sample.concept}</p>
									<div className="mt-6 flex flex-wrap gap-2">
										{sample.tags.map((tag) => (
											<span key={tag} className="rounded-full border border-border px-3 py-1.5 text-xs text-text-soft">
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			<section className="border-t border-border bg-bg-sub py-24 sm:py-28 lg:py-32">
				<Reveal>
					<div className="mx-auto max-w-2xl px-6 text-center">
						<h2 className="section-heading">自分のお店なら、どうなるだろう。</h2>
						<div className="section-body mx-auto mt-6 flex max-w-lg flex-col gap-4 text-sm sm:text-base">
							<p>ここでご紹介しているWebサイトは、VESWERKが考えるデザインの一例です。</p>
							<p>
								実際のご依頼では、気になるデザインをひとつの方向性として、お店の雰囲気やこだわり、伝えたいことに合わせて内容やデザインを整えていきます。
							</p>
							<p>
								「この雰囲気が好き」
								<br />
								「ここは自分のお店らしく変えたい」
								<br />
								そんなイメージからでも大丈夫です。
							</p>
							<p>掲載しているデザインを眺めながら、あなたのお店ならどんなWebサイトになるのか、一緒に形にしていきます。</p>
						</div>
						<a href="/contact" className="btn-fill mt-8 inline-flex">
							まずはお気軽にご相談ください
						</a>
					</div>
				</Reveal>
			</section>
		</>
	);
}
