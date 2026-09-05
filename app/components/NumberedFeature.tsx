import Reveal from "./Reveal";

export type NumberedFeatureItem = {
	no: string;
	title?: string;
	/** 特定の見出しだけ改行を抑えたい場合などに、個別クラスを追加するための任意フィールド */
	titleClassName?: string;
	titleEn?: string;
	desc: string;
};

type NumberedFeatureProps = {
	items: readonly NumberedFeatureItem[];
	/** 参考サイトのfeature__section__headingに倣った縦書き装飾ラベル（Desktopのみ表示） */
	verticalLabel?: string;
};

/**
 * 参考サイトの「01/02/03」ナンバリング特徴パターン。正方形寄りのブロックに
 * 番号・見出し・説明文を積み、複数カラムのグリッドで並べる。
 * verticalLabelを渡すと、グリッド脇に縦書きの見出しを添えるEditorial的な構成になる。
 */
export default function NumberedFeature({ items, verticalLabel }: NumberedFeatureProps) {
	return (
		<div className="flex gap-10">
			{verticalLabel && (
				<div className="hidden shrink-0 pt-1 lg:block" aria-hidden="true">
					<span
						className="eyebrow inline-block text-text-soft/70"
						style={{ writingMode: "vertical-rl" }}
					>
						{verticalLabel}
					</span>
				</div>
			)}
			<div className="grid flex-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
				{items.map((item, i) => (
					<Reveal key={item.no} delay={i * 80}>
						<div className="flex flex-col">
							<span className="hero-heading text-4xl font-light text-border sm:text-5xl" aria-hidden="true">
								{item.no}
							</span>
							{item.title && (
								<h3 className={`subsection-heading mt-4 ${item.titleClassName ?? ""}`}>{item.title}</h3>
							)}
							{item.titleEn && <p className={`eyebrow ${item.title ? "mt-2" : "mt-4"}`}>{item.titleEn}</p>}
							<p className="section-body mt-4 text-sm leading-[1.9]">{item.desc}</p>
						</div>
					</Reveal>
				))}
			</div>
		</div>
	);
}
