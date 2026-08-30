type ReasonItem = {
	no: string;
	title: string;
	desc: string;
};

/**
 * カードグリッドではなく、番号付きの縦リストにする。5項目という奇数個を
 * 2カラムグリッドに収めようとすると必ず端数が出て意図しないジグザグに
 * なるため、縦積み＋区切り線という「個数に依存しない」構成にした。
 */
export default function ReasonCards({ items }: { items: ReasonItem[] }) {
	return (
		<div className="mt-14 flex flex-col">
			{items.map((item) => (
				<div
					key={item.no}
					className="grid gap-3 border-t border-border py-10 first:border-t-0 first:pt-0 sm:grid-cols-[5rem_1fr] sm:gap-8"
				>
					<span className="text-3xl font-light text-border sm:text-4xl">{item.no}</span>
					<div className="max-w-xl">
						<h3 className="text-lg font-semibold text-ink">{item.title}</h3>
						<p className="mt-2 text-sm leading-relaxed text-brown">{item.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
}
