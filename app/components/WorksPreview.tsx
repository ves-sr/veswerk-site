import Image from "next/image";
import Link from "next/link";
import { workSamples } from "../content/works";
import Reveal from "./Reveal";
import thumbCramSchoolA from "../assets/images/works/thumb-cram-school-a.webp";

/**
 * 参考サイトの商品カード（縦長画像＋価格＋ボタン）パターンを、
 * 制作サンプルの縦長サムネイル＋カテゴリ＋名前＋コンセプトへ置き換えて再現する。
 */
// Home（トップページ）は従来どおり4件のみを表示し、既存の見た目・レイアウトを変更しない。
// works一覧ページ（/works）にのみ追加された制作サンプルは、ここでは表示対象から除外する。
const homeSamples = workSamples.filter((sample) => sample.slug !== "compass-academy").slice(0, 4);

// Home縦長カード（aspect-[4/5]）用の画像調整。
// works.ts側のデータ（画像ファイル・alt・リンク先等）は変更せず、Home表示時のみ
// ・3番目のカード（mori-coffee-stand）の画像をCOMPASS Academyのスクリーンショットに差し替え
// ・各サイトのロゴ／見出しが縦長クロップでも視認できるよう、画像ごとにobject-positionを調整
// する。/worksページ（横長4:3カード）には影響しない。
const homeImageOverrides: Record<string, { image?: typeof thumbCramSchoolA; objectPosition: string }> = {
	"toda-setsubi": { objectPosition: "50% center" },
	"petit-ciel": { objectPosition: "50% center" },
	"mori-coffee-stand": { image: thumbCramSchoolA, objectPosition: "0% center" },
	"roastery-cafe": { objectPosition: "15% center" },
};

export default function WorksPreview() {
	return (
		<div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{homeSamples.map((sample, i) => {
				const override = homeImageOverrides[sample.slug];
				const image = override?.image ?? sample.image;
				const objectPosition = override?.objectPosition ?? "50% center";
				return (
					<Reveal key={sample.slug} delay={i * 70}>
						<Link href="/works" className="group block">
							<div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
								<Image
									src={image}
									alt={sample.imageAlt}
									fill
									sizes="(min-width: 1024px) 24vw, 45vw"
									style={{ objectPosition }}
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
								/>
							</div>
							<p className="eyebrow mt-4">{sample.category}</p>
							<h3 className="mt-2 text-base font-medium text-ink">{sample.name}</h3>
							<p className="mt-1 text-sm text-text-soft">{sample.concept}</p>
						</Link>
					</Reveal>
				);
			})}
		</div>
	);
}
