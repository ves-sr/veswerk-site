import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import NumberedFeature from "./components/NumberedFeature";
import ImageTextRow from "./components/ImageTextRow";
import WorksPreview from "./components/WorksPreview";
import HomePlanTeaser from "./components/HomePlanTeaser";
import FaqAccordion from "./components/FaqAccordion";
import Reveal from "./components/Reveal";
import { heroProblems } from "./content/home";
import { services } from "./content/services";
import workCode from "./assets/images/content/work-code.jpg";

const problemItems = heroProblems.map((p, i) => ({
	no: String(i + 1).padStart(2, "0"),
	titleEn: p.label,
	desc: p.text,
}));

const serviceItems = services.map((s) => ({
	no: s.no,
	title: s.title,
	titleEn: s.titleEn,
	desc: s.desc,
}));

export default function Home() {
	return (
		<>
			<Hero />

			{/* 顧客の悩み／共感 */}
			<section className="border-t border-border py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="COMMON CONCERNS" ja="こんなお悩み、ありませんか。" />
					<div className="mt-16">
						<NumberedFeature items={problemItems} verticalLabel="お悩み" />
					</div>
				</div>
			</section>

			{/* VESWERKが提供する価値 */}
			<section className="border-t border-border py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="WHAT WE DO" ja="VESWERKが提供する価値。" />
					<div className="mt-16">
						<NumberedFeature items={serviceItems} verticalLabel="提供価値" />
					</div>
				</div>
			</section>

			{/* VESWERKという考え方 */}
			<section className="border-t border-border bg-bg-sub py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="OUR PHILOSOPHY" ja="VESWERKという考え方。" />
					<div className="mt-16">
						<ImageTextRow
							image={workCode}
							imageAlt="コードが表示されたノートパソコン"
							eyebrow="ENGINEERING EXPERIENCE"
							heading="目的から、デザインする。"
							body={[
								"何を伝えたいのか。誰に来てほしいのか。見た目をつくる前に、その目的を整理することから始めます。ホームページは完成させることが目的ではなく、目的を達成するための手段だと考えています。",
								"普段は東証プライム上場企業グループで自社開発に携わる、現役のソフトウェアエンジニアです。設計・開発・運用・保守まで一連の工程に日々携わっている経験を、Web制作にも活かしています。",
							]}
							cta={{ label: "VESWERKのこだわりを見る", href: "/why-veswerk" }}
						/>
					</div>
					<div className="mt-14 flex flex-wrap justify-center gap-3">
						{["東証プライム上場企業グループ", "自社開発", "現役ソフトウェアエンジニア"].map((badge) => (
							<span
								key={badge}
								className="rounded-full border border-border bg-bg px-4 py-2 text-xs font-medium tracking-wide text-text"
							>
								{badge}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* 制作実績 */}
			<section className="border-t border-border py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="SAMPLE WORKS" ja="制作サンプル。" />
					<WorksPreview />
					<div className="mt-14 flex justify-center">
						<a href="/works" className="btn-outline">
							制作サンプルをもっと見る
						</a>
					</div>
				</div>
			</section>

			{/* 料金 */}
			<section id="plan" className="border-t border-border py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="FEE" ja="費用も手間も、かけすぎない。" />
					<HomePlanTeaser />
				</div>
			</section>

			{/* FAQ */}
			<section className="border-t border-border py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="FAQ" ja="よくあるご質問。" />
					<div className="mt-16">
						<FaqAccordion />
					</div>
				</div>
			</section>

			{/* 締めCTA */}
			<section className="border-t border-border py-24 sm:py-28 lg:py-32">
				<Reveal>
					<div className="mx-auto max-w-2xl px-6 text-center">
						<h2 className="section-heading">
							気になることがあれば、
							<br />
							お気軽にご相談ください。
						</h2>
						<a href="/contact" className="btn-fill mt-10 inline-flex">
							無料で相談する
						</a>
					</div>
				</Reveal>
			</section>
		</>
	);
}
