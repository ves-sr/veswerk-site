import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import NumberedFeature from "../components/NumberedFeature";
import ImageTextRow from "../components/ImageTextRow";
import GrowthPath from "../components/GrowthPath";
import Reveal from "../components/Reveal";
import { growthStages, droneSteps } from "../content/vision";
import profilePhoto from "../assets/images/profile.jpg";

const pageTitle = "今後の展望";
const pageDescription =
	"VESWERKは現在ホームページ制作を中心に活動しながら、Web・システム開発で培った技術をAI・データ活用、そしてドローン×AIの研究へと少しずつ広げています。今後の技術領域の拡張についてご紹介します。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/vision" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/vision", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

export default function VisionPage() {
	return (
		<>
			<section className="relative pt-28 pb-16 sm:pt-32 lg:pt-40">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">VISION</p>
					<h1 className="page-heading mt-4 max-w-xl">
						Webのその先へ。
						<br />
						技術の幅を、少しずつ広げていく。
					</h1>
					<p
						className="section-body mt-6 max-w-lg text-sm sm:text-base"
						style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
					>
						VESWERKは現在、ホームページ制作を中心に活動しています。しかし、それを最終的なゴールとは考えていません。培った技術を少しずつ広げ、企業や現場が抱える課題を技術で解決できる会社へ成長していくことを目指しています。
					</p>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24 lg:py-28">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="OUR GROWTH" ja="技術領域を、少しずつ広げていく。" />
					<div className="mt-16 sm:mt-20">
						<GrowthPath items={growthStages} />
					</div>
				</div>
			</section>

			<section className="border-t border-border bg-bg-sub py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<ImageTextRow
						image={profilePhoto}
						imageAlt="中井駿吾"
						eyebrow="WHY WE'RE TAKING THIS ON"
						heading="なぜ、Web制作の会社が技術の幅を広げるのか。"
						body={[
							"VESWERKは、ホームページ制作を通じてWebの技術を提供していますが、それを最終的なゴールとは考えていません。",
							"普段は東証プライム上場企業グループで自社開発に携わる、現役のソフトウェアエンジニアとして、要件定義・設計・開発・運用まで一連の工程に日々携わっています。この技術基盤を土台に、AIやデータ活用など、これまで培ってきた領域の延長線上にある技術へ、少しずつ挑戦の幅を広げていきます。",
						]}
						cta={{ label: "VESWERKのこだわりを見る", href: "/why-veswerk" }}
					/>
				</div>
			</section>

			<section className="border-t border-border py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="DRONE × AI" ja="ドローン×AIで、現場の確認・点検を支援する仕組みへ。" />
					<div
						className="section-body mx-auto mt-8 flex max-w-2xl flex-col gap-4 text-center text-sm sm:text-base"
						style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
					>
						<p>
							広い範囲を人が目視で確認している点検・巡視・モニタリングなどの業務に対して、ドローンから得られる画像・映像・位置情報などのデータと、AIによる画像解析を組み合わせることで、確認業務を効率化できないか研究・開発を進めています。
						</p>
						<p>
							目指しているのは、人の作業を置き換えることではなく、AIが変化や異常の可能性がある箇所を絞り込み、最終的な判断は人が行う——そうした「人の判断を支援する仕組み」です。
						</p>
					</div>
					<div className="mt-16">
						<NumberedFeature items={droneSteps} verticalLabel="取り組みの流れ" />
					</div>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-3xl px-6">
					<Reveal>
						<div className="rounded-[2rem] border border-border bg-bg-sub px-8 py-10 text-center sm:rounded-[2.5rem] sm:px-14 sm:py-12">
							<p className="eyebrow">現在の状況</p>
							<p
								className="section-body mt-4 text-sm sm:text-base"
								style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
							>
								現時点では、ドローンを活用したサービスをすでに提供しているわけではありません。今後1年ほどを目安に、実際のドローンを用いたデータ取得・画像解析・AI活用・Webシステム開発などの検証を進め、企業や現場の課題解決につながる用途を見つけていく段階です。
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-2xl px-6 text-center">
					<h2 className="subsection-heading">技術に関するご相談も、お気軽に。</h2>
					<a href="/contact" className="btn-fill mt-8 inline-flex">
						無料で相談する
					</a>
				</div>
			</section>
		</>
	);
}
