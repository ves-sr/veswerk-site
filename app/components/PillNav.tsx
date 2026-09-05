import { navItems } from "../content/site";

/**
 * 参考サイトの最大の特徴：画面下部中央に固定表示される、白背景・角丸pill型の
 * カプセルナビゲーション。Desktopはnavitems全項目＋CTAを横並びで常時表示する。
 * Mobileは項目数が多く収まらないため、CTAのみのピルボタンに簡略化し、
 * 残りの項目はMobileMenu（ハンバーガー）へ格納する（参考サイトも同じ構造）。
 */
export default function PillNav() {
	return (
		<>
			<nav
				aria-label="ページ内ナビゲーション"
				className="pointer-events-none fixed inset-x-0 bottom-[30px] z-40 hidden justify-center px-4 lg:flex"
			>
				<div className="pointer-events-auto flex items-center gap-0.5 rounded-full bg-white/95 p-[5px] shadow-[0_0_17.5px_1px_rgba(0,0,0,0.1)] backdrop-blur">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-full px-[10px] py-[9px] text-sm leading-4 font-medium tracking-wide text-text transition-colors duration-300 hover:bg-bg-sub hover:text-ink"
						>
							{item.shortLabel}
						</a>
					))}
					<a href="/contact" className="btn-fill ml-1 !px-5 !py-[9px] !text-sm !leading-4">
						無料で相談する
					</a>
				</div>
			</nav>

			<div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-6 lg:hidden">
				<a
					href="/contact"
					className="btn-fill pointer-events-auto w-full max-w-xs justify-center !py-3.5 shadow-[0_16px_40px_-14px_rgba(51,49,45,0.4)]"
				>
					無料で相談する
				</a>
			</div>
		</>
	);
}
