"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { navItems, siteName, legalName, snsLinks } from "../content/site";

const noopSubscribe = () => () => {};

/** SSRではfalse、クライアントでのマウント後にtrueを返す（Portal描画のガード用） */
function useMounted() {
	return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

/**
 * Mobile用ハンバーガーメニュー。三本線→Xへの変形、フルスクリーンoverlay、
 * ナビ項目のstagger表示/退場まで作り込む（単純な開閉トグルにしない）。
 * フォーカストラップ・Escape閉じる・スクロールロックは既存実装のロジックを踏襲。
 */
export default function MobileMenu() {
	const [open, setOpen] = useState(false);
	const mounted = useMounted();
	const triggerRef = useRef<HTMLButtonElement>(null);
	const dialogRef = useRef<HTMLDivElement>(null);
	const firstLinkRef = useRef<HTMLAnchorElement>(null);
	const prevOpenRef = useRef(open);

	useEffect(() => {
		const prevOpen = prevOpenRef.current;
		prevOpenRef.current = open;
		if (prevOpen === open) return;

		if (open) {
			const timer = setTimeout(() => firstLinkRef.current?.focus(), 260);

			const onKeyDown = (e: KeyboardEvent) => {
				if (e.key === "Escape") {
					setOpen(false);
					return;
				}
				if (e.key === "Tab") {
					const dialog = dialogRef.current;
					if (!dialog) return;
					const focusable = dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
					if (focusable.length === 0) return;
					const first = focusable[0];
					const last = focusable[focusable.length - 1];
					if (e.shiftKey && document.activeElement === first) {
						e.preventDefault();
						last.focus();
					} else if (!e.shiftKey && document.activeElement === last) {
						e.preventDefault();
						first.focus();
					}
				}
			};

			document.addEventListener("keydown", onKeyDown);
			return () => {
				clearTimeout(timer);
				document.removeEventListener("keydown", onKeyDown);
			};
		}

		triggerRef.current?.focus();
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const scrollY = window.scrollY;
		const { style } = document.body;
		style.position = "fixed";
		style.top = `-${scrollY}px`;
		style.left = "0";
		style.right = "0";
		style.height = "100%";

		return () => {
			style.position = "";
			style.top = "";
			style.left = "";
			style.right = "";
			style.height = "";
			window.scrollTo(0, scrollY);
		};
	}, [open]);

	const overlay = (
		<div
			ref={dialogRef}
			id="mobile-menu-overlay"
			role="dialog"
			aria-modal="true"
			aria-label="サイト内メニュー"
			aria-hidden={!open}
			inert={!open}
			data-open={open}
			className="mobile-menu-overlay fixed inset-0 z-[70] flex h-dvh w-dvw flex-col bg-ink text-white lg:hidden"
			style={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden" }}
		>
			<div className="dot-pattern pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />

			<div className="relative flex shrink-0 items-center px-6 py-6">
				<span className="text-sm font-medium tracking-wide text-white/80">{siteName}</span>
			</div>

			<nav className="relative flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-7" aria-label="サイト内メインナビゲーション">
				{navItems.map((item, i) => (
					<a
						key={item.href}
						ref={i === 0 ? firstLinkRef : undefined}
						href={item.href}
						onClick={() => setOpen(false)}
						className="mobile-menu-item flex items-baseline gap-4 border-b border-white/10 py-4 outline-none [-webkit-tap-highlight-color:transparent]"
						style={{ transitionDelay: open ? `${140 + i * 55}ms` : "0ms" }}
					>
						<span className="text-xs font-normal text-white/35">{String(i + 1).padStart(2, "0")}</span>
						<span className="text-[1.7rem] font-medium tracking-wide">{item.label}</span>
					</a>
				))}
			</nav>

			<div className="relative flex shrink-0 flex-wrap items-center justify-between gap-4 px-7 py-6 text-xs text-white/50">
				<div className="flex items-center gap-3">
					<span className="tracking-widest text-white/30">SNS</span>
					{snsLinks.map((sns) => (
						<a
							key={sns.label}
							href={sns.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={sns.label}
							className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
						>
							<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
								<rect x="3" y="3" width="18" height="18" rx="5" />
								<circle cx="12" cy="12" r="4" />
								<circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
							</svg>
						</a>
					))}
				</div>
				<span>© {new Date().getFullYear()} {legalName}</span>
			</div>
		</div>
	);

	return (
		<>
			<button
				ref={triggerRef}
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-expanded={open}
				aria-controls="mobile-menu-overlay"
				aria-label={open ? "メニューを閉じる" : "メニューを開く"}
				className="fixed top-5 right-5 z-[80] flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-[0_8px_24px_-10px_rgba(51,49,45,0.4)] transition-transform duration-300 active:scale-90 sm:top-7 sm:right-7 lg:hidden"
			>
				<span className="relative block h-3.5 w-5">
					<span
						className="hamburger-line"
						style={{
							top: open ? "7px" : "0px",
							transform: open ? "translateX(-50%) rotate(45deg)" : "translateX(-50%) rotate(0deg)",
						}}
					/>
					<span
						className="hamburger-line"
						style={{ top: "7px", opacity: open ? 0 : 1 }}
					/>
					<span
						className="hamburger-line"
						style={{
							top: open ? "7px" : "14px",
							transform: open ? "translateX(-50%) rotate(-45deg)" : "translateX(-50%) rotate(0deg)",
						}}
					/>
				</span>
			</button>

			{mounted && createPortal(overlay, document.body)}
		</>
	);
}
