import Image from "next/image";
import Link from "next/link";
import { workSamples } from "../content/works";
import Reveal from "./Reveal";

/**
 * 参考サイトの商品カード（縦長画像＋価格＋ボタン）パターンを、
 * 制作サンプルの縦長サムネイル＋カテゴリ＋名前＋コンセプトへ置き換えて再現する。
 */
// Home（トップページ）は従来どおり4件のみを表示し、既存の見た目・レイアウトを変更しない。
// works一覧ページ（/works）にのみ追加された制作サンプルは、ここでは表示対象から除外する。
const homeSamples = workSamples.filter((sample) => sample.slug !== "compass-academy").slice(0, 4);

export default function WorksPreview() {
	return (
		<div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{homeSamples.map((sample, i) => (
				<Reveal key={sample.slug} delay={i * 70}>
					<Link href="/works" className="group block">
						<div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem]">
							<Image
								src={sample.image}
								alt={sample.imageAlt}
								fill
								sizes="(min-width: 1024px) 24vw, 45vw"
								className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
							/>
						</div>
						<p className="eyebrow mt-4">{sample.category}</p>
						<h3 className="mt-2 text-base font-medium text-ink">{sample.name}</h3>
						<p className="mt-1 text-sm text-text-soft">{sample.concept}</p>
					</Link>
				</Reveal>
			))}
		</div>
	);
}
