import type { ReactNode } from "react";

type TimelineItem = {
	no: string;
	title: string;
	desc: string;
	icon?: ReactNode;
};

/**
 * アイコンボックス自体がすでに視覚的なアンカーとして機能するため、
 * 接続線・丸ドットといった補助装飾は設けない（意味を持たない線や図形の
 * 追加を避け、アイコン＋番号＋見出し＋本文というシンプルな縦積みにする）。
 */
export default function NumberedTimeline({ items }: { items: readonly TimelineItem[] }) {
	return (
		<ol className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
			{items.map((item) => (
				<li key={item.no}>
					{item.icon && (
						<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white/55">
							{item.icon}
						</div>
					)}
					<span className="mt-4 block text-sm font-semibold text-brown-light">{item.no}</span>
					<h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
					<p className="mt-2 text-sm leading-relaxed text-brown">{item.desc}</p>
				</li>
			))}
		</ol>
	);
}
