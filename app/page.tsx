import ProblemCarousel from "./components/ProblemCarousel";
import HomePlanTeaser from "./components/HomePlanTeaser";
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
			<section className="relative pt-20 pb-28 sm:pt-28">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">HOMEPAGE PRODUCTION</p>
					<h1 className="section-heading section-heading--hero max-w-3xl">
						<span className="block text-lg font-medium text-brown sm:text-xl">
							吉祥寺・武蔵野で、
						</span>
						ホームページに、
						<br />
						お困りの方へ。
					</h1>
					<p className="mt-8 max-w-md text-brown">
						そんな悩みを、VESWERKが解決します。
					</p>
				</div>

				<div className="mt-16">
					<ProblemCarousel items={problemsWithIcons} />
				</div>

				<div className="mx-auto max-w-6xl px-6">
					<p className="mt-16 max-w-xl text-brown">
						吉祥寺・武蔵野を中心に、業種や規模を問わず、必要なものに絞ったホームページを制作。
						デザインだけでなく、検索で見つけてもらうための対策や、スマートフォンでの使いやすさ、
						公開後の保守まで考えて制作します。
					</p>

					<div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
						<a
							href="/contact"
							className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
						>
							<span className="border-b border-accent pb-0.5">無料で相談する</span>
							<span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
						</a>
						<a
							href="/works"
							className="group inline-flex items-center gap-2 text-sm text-brown"
						>
							<span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-brown">
								制作サンプルを見る
							</span>
						</a>
					</div>
				</div>
			</section>

			<section id="plan" className="border-t border-border py-24">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">ご利用料金</p>
					<h2 className="section-heading">
						費用も手間も、かけすぎない。
					</h2>

					<HomePlanTeaser />
				</div>
			</section>
		</>
	);
}
