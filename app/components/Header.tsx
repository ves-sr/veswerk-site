import Link from "next/link";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";
import { navItems, siteName } from "../content/site";
import logo from "../assets/images/logo.png";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/80 bg-cream/90 backdrop-blur">
			<div className="flex w-full items-center justify-between gap-6 px-6 py-4">
				<Link href="/" className="flex items-center gap-2.5 text-base font-semibold tracking-wide text-ink">
					<Image src={logo} alt="" width={28} height={28} priority />
					{siteName}
				</Link>

				<nav className="hidden items-center gap-6 whitespace-nowrap lg:flex" aria-label="ページ内ナビゲーション">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm text-brown transition-colors hover:text-ink"
						>
							{item.shortLabel}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<a
						href="/contact"
						className="btn-sweep whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white"
					>
						無料で相談する
					</a>
					<MenuOverlay />
				</div>
			</div>
		</header>
	);
}
