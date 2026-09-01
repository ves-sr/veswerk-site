type SectionHeadingProps = {
	en: string;
	ja: string;
	align?: "center" | "left";
	className?: string;
};

/**
 * 参考サイトの見出しパターン：日本語見出し（大）の下に英字ラベル（小・uppercase）を添える。
 * セクション冒頭で中央揃え、コンポーネント内の局所見出しでは左揃えとして使う。
 */
export default function SectionHeading({ en, ja, align = "center", className = "" }: SectionHeadingProps) {
	return (
		<div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
			<h2 className="section-heading">{ja}</h2>
			<p className="eyebrow mt-3">{en}</p>
		</div>
	);
}
