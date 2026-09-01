import Link from "next/link";
import Image from "next/image";
import { siteName } from "../content/site";
import logo from "../assets/images/logo.png";

/**
 * 参考サイトの左上固定ロゴのみのヘッダー。ナビゲーションは
 * PillNav（Desktop：下部固定ピル）／MobileMenu（Mobile：ハンバーガー）が担う。
 */
export default function Header() {
	return (
		<div className="fixed top-5 left-5 z-40 sm:top-7 sm:left-7">
			<Link href="/" className="flex items-center gap-2 text-sm font-medium tracking-wide text-ink">
				<span className="relative block h-8 w-8 overflow-hidden rounded-full bg-white shadow-[0_4px_16px_-6px_rgba(51,49,45,0.35)]">
					<Image
						src={logo}
						alt=""
						fill
						sizes="32px"
						className="scale-[2.3] object-contain"
						priority
					/>
				</span>
				<span className="hidden sm:inline">{siteName}</span>
			</Link>
		</div>
	);
}
