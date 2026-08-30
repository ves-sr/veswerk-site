import PlanCards from "./components/PlanCards";
import ProblemCarousel from "./components/ProblemCarousel";
import { heroProblems } from "./content/home";
import {
	OldSiteIllustration,
	ConfusedIllustration,
	DIYIllustration,
	SearchWorryIllustration,
	CostIllustration,
	ResponsiveIllustration,
	MaintainIllustration,
} from "./components/ProblemIllustrations";

const problemIcons = [
	OldSiteIllustration,
	ConfusedIllustration,
	DIYIllustration,
	SearchWorryIllustration,
	CostIllustration,
	ResponsiveIllustration,
	MaintainIllustration,
];

const problemsWithIcons = heroProblems.map((item, i) => {
	const Icon = problemIcons[i];
	return { ...item, icon: <Icon className="h-6 w-6" /> };
});

export default function Home() {
	return (
		<>
			<section className="relative pt-24 pb-16">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">HOMEPAGE PRODUCTION</p>
					<h1 className="section-heading section-heading--hero max-w-2xl">
						吉祥寺・武蔵野で、
						<br className="hidden sm:inline" />
						ホームページに
						<br className="hidden sm:inline" />
						お困りの方へ。
					</h1>
				</div>

				<div className="mt-10">
					<ProblemCarousel items={problemsWithIcons} />
				</div>

				<div className="mx-auto max-w-6xl px-6">
					<p className="mt-10 max-w-xl text-brown">
						そんなホームページの悩みを、VESWERKが解決します。
						<br />
						吉祥寺・武蔵野を中心に、業種や規模を問わず、必要なものに絞ったホームページを制作。
						デザインだけでなく、検索で見つけてもらうための対策や、スマートフォンでの使いやすさ、
						公開後の保守まで考えて制作します。
					</p>
					<p className="mt-4 max-w-xl font-medium text-ink">
						「ホームページを作りたいけど、費用も手間もかけすぎたくない。」
						<br />
						そんな方に、無理なく続けられるホームページを。
					</p>

					<div className="mt-8 flex flex-wrap gap-4">
						<a
							href="/contact"
							className="btn-sweep rounded-full bg-accent px-7 py-3 text-sm font-medium text-white"
						>
							無料で相談する
						</a>
						<a
							href="/works"
							className="rounded-full border border-border bg-white/70 px-7 py-3 text-sm font-medium text-ink hover:bg-white"
						>
							制作サンプルを見る
						</a>
					</div>
				</div>
			</section>

			<section id="plan" className="border-t border-border bg-white/55 py-24">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">ご利用料金</p>
					<h2 className="section-heading">FEE</h2>
					<p className="mt-6 max-w-2xl text-brown">
						実績作りのため、現在は特別価格でホームページ制作を承っています。
					</p>

					<PlanCards />
				</div>
			</section>
		</>
	);
}
