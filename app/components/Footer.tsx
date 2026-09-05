import Image from "next/image";
import { navItems, siteName, legalName, snsLinks } from "../content/site";
import BackToTopButton from "./BackToTopButton";
import DotPattern from "./DotPattern";
import logo from "../assets/images/logo.png";

/**
 * 参考サイトのFooter：ベージュ＋ドット背景、中央に大きなロゴ、丸型SNSアイコン、
 * pill型の「トップへ戻る」ボタンという構成をVESWERKの掲載必須情報で再構築する。
 */
export default function Footer() {
	return (
		<footer className="relative overflow-hidden rounded-t-[2.5rem] bg-bg-sub pt-20 pb-24 sm:rounded-t-[3.5rem] lg:pb-28">
			<DotPattern />

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
				<span className="relative block h-16 w-16 overflow-hidden rounded-full bg-white shadow-[0_10px_30px_-12px_rgba(51,49,45,0.3)] sm:h-20 sm:w-20">
					<Image src={logo} alt="" fill sizes="80px" className="scale-[2.3] object-contain" />
				</span>
				<p className="mt-6 text-lg font-medium tracking-wide text-ink">{siteName}</p>
				<p
					className="mt-3 max-w-xs text-sm text-text-soft"
					style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
				>
					吉祥寺・武蔵野を中心に、ホームページを要件定義から保守まで一貫して​制作しています。
				</p>

				<nav
					className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-text"
					aria-label="フッターナビゲーション"
				>
					{navItems.map((item) => (
						<a key={item.href} href={item.href} className="transition-colors hover:text-ink">
							{item.shortLabel}
						</a>
					))}
				</nav>

				<div className="mt-8 flex items-center gap-3">
					{snsLinks.map((sns) => (
						<a
							key={sns.label}
							href={sns.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={sns.label}
							className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-text shadow-[0_4px_14px_-6px_rgba(51,49,45,0.25)] transition-colors hover:text-ink"
						>
							<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
								<rect x="3" y="3" width="18" height="18" rx="5" />
								<circle cx="12" cy="12" r="4" />
								<circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
							</svg>
						</a>
					))}
				</div>
			</div>

			<div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center gap-3 border-t border-border/70 px-6 pt-8 text-xs text-text-soft sm:flex-row sm:justify-between">
				<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
					<a href="/privacy-policy" className="hover:text-ink">プライバシーポリシー</a>
					<a href="/tokushoho" className="hover:text-ink">特定商取引法に基づく表記</a>
				</div>
				<span>© {new Date().getFullYear()} {legalName}. All rights reserved.</span>
			</div>

			<BackToTopButton />
		</footer>
	);
}
