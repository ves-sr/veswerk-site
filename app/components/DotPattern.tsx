type DotPatternProps = {
	className?: string;
};

/**
 * 参考サイトのHero/Footerに見られる、丸い水玉を敷き詰めた背景装飾。
 * 中心から外側にかけてフェードさせ、単調なタイル感を抑える。
 */
export default function DotPattern({ className = "" }: DotPatternProps) {
	return (
		<div
			aria-hidden="true"
			className={`dot-pattern pointer-events-none absolute inset-0 ${className}`}
			style={{
				maskImage: "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 85%)",
				WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 85%)",
			}}
		/>
	);
}
