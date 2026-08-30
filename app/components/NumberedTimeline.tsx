import type { ReactNode } from "react";

type TimelineItem = {
	no: string;
	title: string;
	desc: string;
	icon?: ReactNode;
};

export default function NumberedTimeline({ items }: { items: readonly TimelineItem[] }) {
	return (
		<ol className="relative mt-14 flex flex-col gap-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
			{/* 縦の接続線（lg未満：1カラムのあいだ、途切れず表示） */}
			<span
				aria-hidden="true"
				className="absolute top-2 bottom-2 left-[0.6rem] w-px bg-border lg:hidden"
			/>
			{/* 横の接続線（lg以上：4カラム横並び） */}
			<span
				aria-hidden="true"
				className="absolute top-[0.6rem] right-0 left-0 hidden h-px bg-border lg:block"
			/>

			{items.map((item) => (
				<li key={item.no} className="relative pl-8 lg:pl-0">
					<span
						aria-hidden="true"
						className="absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 border-accent bg-cream lg:static lg:mb-4 lg:block"
					/>
					{item.icon && (
						<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/60 bg-white/55 shadow-[0_8px_24px_-14px_rgba(107,90,72,0.4)] backdrop-blur-md">
							{item.icon}
						</div>
					)}
					<span className="text-sm font-semibold text-brown-light">{item.no}</span>
					<h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
					<p className="mt-2 text-sm text-brown">{item.desc}</p>
				</li>
			))}
		</ol>
	);
}
