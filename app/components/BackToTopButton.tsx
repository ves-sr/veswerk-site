"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// fixed配置のため、ページ最下部までスクロールするとFooterの著作権表記等と
		// 見た目上重なってしまう。ドキュメント最下部付近では非表示にして回避する。
		const onScroll = () => {
			const nearBottom =
				window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 160;
			setVisible(window.scrollY > 480 && !nearBottom);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	if (!visible) return null;

	return (
		<button
			type="button"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			aria-label="ページの先頭へ戻る"
			className="fixed right-6 bottom-24 z-30 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium tracking-wide text-white shadow-[0_10px_28px_-12px_rgba(51,49,45,0.5)] transition-transform hover:-translate-y-0.5 sm:right-10"
		>
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-3.5 w-3.5"
			>
				<path d="M12 19V5" />
				<path d="M5 12l7-7 7 7" />
			</svg>
			トップに戻る
		</button>
	);
}
