import type { Metadata } from "next";
import Image from "next/image";
import { workSamples } from "../content/works";

export const metadata: Metadata = {
	title: "制作サンプル｜VESWERK",
	description:
		"VESWERKが手がけるホームページの制作サンプルを掲載。カフェ・地域密着型事業者など、小さなお店・個人経営に向けたデザインの方向性をご覧いただけます。",
};

export default function WorksPage() {
	return (
		<section className="py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<p className="eyebrow">SAMPLE WORKS</p>
				<h1 className="section-heading max-w-2xl">VESWERKがつくるWebサイト</h1>
				<p className="mt-6 max-w-xl text-brown">
					吉祥寺・武蔵野エリアの小さなお店・個人経営店を想定した制作サンプルです。
					実際のご依頼をイメージしていただけるよう、デザインから情報設計まで、
					案件と同じ考え方で作り込んでいます。
				</p>
			</div>

			<div className="mt-24 flex flex-col gap-28 sm:mt-32 sm:gap-40">
				{workSamples.map((sample, i) => (
					<article key={sample.name} className="mx-auto w-full max-w-6xl px-6">
						<div
							className={`flex flex-col gap-6 sm:items-end sm:gap-10 ${
								i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
							}`}
						>
							<div className="relative aspect-4/3 w-full overflow-hidden rounded-sm sm:w-[68%]">
								<Image
									src={sample.image}
									alt={sample.imageAlt}
									fill
									sizes="(min-width: 640px) 68vw, 100vw"
									className="object-cover"
									priority={i === 0}
								/>
							</div>

							<div className="sm:w-[32%]">
								<span className="text-xs font-semibold tracking-[0.3em] text-brown-light">
									{sample.no}
								</span>
								<p className="mt-3 text-xs font-medium tracking-[0.2em] text-accent">
									{sample.category}
								</p>
								<h2 className="subsection-heading mt-3">{sample.name}</h2>
								<p className="mt-4 max-w-sm text-sm leading-relaxed text-brown">
									{sample.concept}
								</p>
								<ul className="mt-6 flex flex-wrap gap-2">
									{sample.tags.map((tag) => (
										<li
											key={tag}
											className="rounded-full border border-border px-3 py-1 text-xs text-brown-light"
										>
											{tag}
										</li>
									))}
								</ul>
							</div>
						</div>
					</article>
				))}
			</div>

			<div className="mx-auto mt-28 max-w-6xl border-t border-border px-6 pt-16 sm:mt-40">
				<div className="max-w-2xl">
					<h2 className="subsection-heading">自分のお店なら、どうなるだろう。</h2>
					<div className="mt-6 flex flex-col gap-4 text-brown">
						<p>ここでご紹介しているWebサイトは、VESWERKが考えるデザインの一例です。</p>
						<p>
							実際のご依頼では、気になるデザインをひとつの方向性として、
							お店の雰囲気やこだわり、伝えたいことに合わせて内容やデザインを整えていきます。
						</p>
						<p className="text-ink">
							「この雰囲気が好き」
							<br />
							「ここは自分のお店らしく変えたい」
						</p>
						<p>そんなイメージからでも大丈夫です。</p>
						<p>
							掲載しているデザインを眺めながら、あなたのお店ならどんなWebサイトになるのか、
							一緒に形にしていきます。
						</p>
					</div>
					<a
						href="/contact"
						className="btn-sweep mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white"
					>
						まずはお気軽にご相談ください
					</a>
				</div>
			</div>
		</section>
	);
}
