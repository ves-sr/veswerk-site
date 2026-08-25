type ReasonItem = {
	no: string;
	title: string;
	desc: string;
};

export default function ReasonCards({ items }: { items: ReasonItem[] }) {
	return (
		<div className="mt-14 grid gap-6 sm:grid-cols-2">
			{items.map((item) => (
				<div
					key={item.no}
					className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/45 p-8 shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_16px_40px_-14px_rgba(201,138,75,0.45)]"
				>
					<span
						aria-hidden="true"
						className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
					/>

					<span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent">
						{item.no}
					</span>
					<h3 className="relative mt-4 text-lg font-semibold text-ink">{item.title}</h3>
					<p className="relative mt-2 text-sm text-brown">{item.desc}</p>
				</div>
			))}
		</div>
	);
}
