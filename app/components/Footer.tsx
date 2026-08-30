import Image from "next/image";
import { navItems, siteName, legalName, snsLinks } from "../content/site";
import BackToTopButton from "./BackToTopButton";
import logoWhite from "../assets/images/logo-white.png";

export default function Footer() {
	return (
		<footer className="border-t border-border bg-ink text-cream-deep">
			<div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:justify-between">
				<nav
					className="flex flex-col gap-4 text-base font-medium sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3"
					aria-label="フッターナビゲーション"
				>
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-cream-deep/85 transition-colors hover:text-accent"
						>
							{item.shortLabel}
						</a>
					))}
				</nav>

				<div className="md:text-right">
					<div className="flex items-center gap-2.5 text-base font-semibold text-white md:justify-end">
						<Image src={logoWhite} alt="" width={24} height={24} />
						{siteName}
					</div>
					<p className="mt-2 max-w-xs text-sm text-cream-deep/70 md:ml-auto">
						吉祥寺・武蔵野を中心に、ホームページを要件定義から保守まで
						一貫して制作しています。
					</p>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-cream-deep/60">
					<div className="flex flex-wrap items-center gap-4">
						<span className="tracking-widest text-cream-deep/40">SNS</span>
						{snsLinks.map((sns) => (
							<a
								key={sns.label}
								href={sns.href}
								aria-label={sns.label}
								className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/40 hover:text-white"
							>
								{sns.label === "Instagram" ? (
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
										<rect x="3" y="3" width="18" height="18" rx="5" />
										<circle cx="12" cy="12" r="4" />
										<circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
									</svg>
								) : (
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
										<path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.8l-5.3-6.9L5 22H1.9l8-9.2L1 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
									</svg>
								)}
							</a>
						))}
						<a href="/privacy-policy" className="hover:text-white">プライバシーポリシー</a>
						<a href="/tokushoho" className="hover:text-white">特定商取引法に基づく表記</a>
					</div>
					<span>© {new Date().getFullYear()} {legalName}. All rights reserved.</span>
				</div>
			</div>

			<BackToTopButton />
		</footer>
	);
}
