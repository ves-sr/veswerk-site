type ProblemListProps = {
	items: readonly string[];
};

/**
 * Homeのヒーロー直下に置く「よくあるお悩み」リスト。
 * ReasonCards等と同じフロストガラス調のトーンを踏襲しつつ、
 * 1項目ずつ独立したミニカードにして視覚的な訴求力を持たせる
 * （1枚の大カードに箇条書きを詰め込むと単調になるため）。
 */
export default function ProblemList({ items }: ProblemListProps) {
	return (
		<ul className="mt-10 grid gap-3 sm:grid-cols-2">
			{items.map((item, i) => (
				<li
					key={item}
					className={`flex items-start gap-3 rounded-2xl border border-white/60 bg-white/45 p-4 shadow-[0_8px_24px_-16px_rgba(107,90,72,0.35)] backdrop-blur-md ${
						items.length % 2 === 1 && i === items.length - 1 ? "sm:col-span-2 sm:max-w-md" : ""
					}`}
				>
					<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent">
						{i + 1}
					</span>
					<span className="text-sm leading-relaxed text-brown">{item}</span>
				</li>
			))}
		</ul>
	);
}
