import CircleCollage, { type CollageImage } from "./CircleCollage";
import DotPattern from "./DotPattern";
import heroCafeExterior from "../assets/images/hero/hero-1.jpg";
import heroCafeInterior from "../assets/images/hero/hero-2.jpg";
import heroIcedCoffee from "../assets/images/hero/hero-3.jpg";
import heroStorefront from "../assets/images/hero/hero-4.jpg";
import heroOutdoorSeat from "../assets/images/hero/hero-5.jpg";

// 参考サイトHeroの実測DOM座標（5枚の円形画像の位置・サイズ）を、
// コンテナに対する相対%へ換算した値。均等配置や一般的なギャラリーには
// せず、大小差のある非対称なコラージュとして再現する。
const desktopImages: CollageImage[] = [
	{ src: heroCafeExterior, alt: "窓とドアのあるカフェの外観", top: -6, left: 55, size: 19, z: 2 },
	{ src: heroCafeInterior, alt: "木の温かみのあるカフェの内装", top: 6, left: 8, size: 49, z: 1, priority: true },
	{ src: heroIcedCoffee, alt: "窓際の木製テーブルに置かれたアイスコーヒー", top: 25, left: 70, size: 27, z: 3 },
	{ src: heroStorefront, alt: "植物とコーヒーの看板が並ぶ趣のある店先", top: 47, left: 4, size: 19, z: 2 },
	{ src: heroOutdoorSeat, alt: "木製スツールの素朴な屋外座席", top: 52, left: 23, size: 49, z: 1 },
];

const mobileImages: CollageImage[] = [
	{ src: heroCafeInterior, alt: "木の温かみのあるカフェの内装", top: 2, left: 8, size: 60, z: 1, priority: true },
	{ src: heroCafeExterior, alt: "窓とドアのあるカフェの外観", top: -4, left: 64, size: 30, z: 2 },
	{ src: heroOutdoorSeat, alt: "木製スツールの素朴な屋外座席", top: 60, left: 30, size: 46, z: 2 },
];

export default function Hero() {
	return (
		<section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40">
			<DotPattern />
			<div className="relative mx-auto max-w-6xl px-6">
				<div className="grid gap-14 lg:grid-cols-[1.05fr_0.85fr] lg:items-start lg:gap-10">
					<div className="relative order-1">
						<div className="relative hidden lg:block" style={{ aspectRatio: "1 / 1.28" }}>
							<CircleCollage images={desktopImages} className="h-full w-full" />
						</div>
						<div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:hidden lg:max-w-none" style={{ aspectRatio: "1 / 1.05" }}>
							<CircleCollage images={mobileImages} className="h-full w-full" />
						</div>
					</div>

					<div className="relative z-10 order-2 lg:pt-6 lg:pl-4">
						<p className="eyebrow">HOMEPAGE FOR SMALL SHOPS</p>
						<h1 className="hero-heading mt-4">
							お店の魅力は、
							<br />
							まだ伝えられる。
						</h1>
						<p className="section-body mt-6 max-w-sm text-sm sm:text-base">
							吉祥寺・武蔵野で、
							<br className="sm:hidden" />
							ホームページに、お困りの方へ。
							<br />
							そんな悩みを、VESWERKが解決します。
						</p>
						<div className="mt-9 flex flex-wrap gap-4">
							<a href="/contact" className="btn-fill">
								無料で相談する
							</a>
							<a href="/works" className="btn-outline">
								制作サンプルを見る
							</a>
						</div>
					</div>
				</div>

				<div className="mt-20 hidden justify-center lg:flex" aria-hidden="true">
					<span className="flex flex-col items-center gap-3 text-[0.65rem] tracking-[0.3em] text-text-soft">
						SCROLL
						<span className="relative h-10 w-px overflow-hidden bg-border">
							<span className="absolute inset-x-0 top-0 h-full w-full origin-top animate-[scrollline_1.8s_ease-in-out_infinite] bg-ink" />
						</span>
					</span>
				</div>
			</div>
		</section>
	);
}
