import Image from "next/image";
import Link from "next/link";
import { workSamples } from "../content/works";
import Reveal from "./Reveal";

/**
 * 参考サイトの商品カード（縦長画像＋価格＋ボタン）パターンを、
 * 制作サンプルの縦長サムネイル＋カテゴリ＋名前＋コンセプトへ置き換えて再現する。
 */
// Home（トップページ）は/worksと同じ4件（Sample 01〜04）をすべて表示する。
// 表示内容はworkSamples（Home/works共通のデータソース）のみに依存するため、
// 今後Sampleを追加・変更してもHomeと/worksの表示がズレることはない。

// Home縦長カード（aspect-[4/5]）で、各Sampleサイトのスクリーンショットのうち
// 見せたい部分（ロゴ・見出し側）がクロップで欠けないよう、object-positionだけ調整する。
// /worksページ（横長4:3カード）は既定の中央クロップのままで影響しない。
const homeImageOverrides: Record<string, { objectPosition: string }> = {
	"sample-01": { objectPosition: "0% 30%" },
	"sample-02": { objectPosition: "0% 30%" },
	"sample-03": { objectPosition: "0% 30%" },
	"sample-04": { objectPosition: "0% 40%" },
};

export default function WorksPreview() {
	return (
		<div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{workSamples.map((sample, i) => {
				const objectPosition = homeImageOverrides[sample.slug]?.objectPosition ?? "50% center";
				return (
					<Reveal key={sample.slug} delay={i * 70}>
						<Link href="/works" className="group block">
							<div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
								<Image
									src={sample.image}
									alt={sample.imageAlt}
									fill
									sizes="(min-width: 1024px) 24vw, 45vw"
									style={{ objectPosition }}
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
								/>
							</div>
							<p className="eyebrow mt-4">{sample.category}</p>
							<h3 className="mt-2 text-base font-medium text-ink">{sample.name}</h3>
							<p
								className="mt-1 text-sm text-text-soft"
								style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
							>
								{sample.concept}
							</p>
						</Link>
					</Reveal>
				);
			})}
		</div>
	);
}
