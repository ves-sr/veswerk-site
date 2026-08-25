"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { navItems, siteName, legalName, snsLinks } from "../content/site";
import menuImage from "../assets/images/menu-overlay.jpg";
import logoWhite from "../assets/images/logo-white.png";

export default function MenuOverlay() {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const dialogRef = useRef<HTMLDivElement>(null);
	const firstLinkRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Escapeで閉じる／開いたら最初のリンクにフォーカス／閉じたらトリガーに戻す
	useEffect(() => {
		if (open) {
			firstLinkRef.current?.focus();

			const onKeyDown = (e: KeyboardEvent) => {
				if (e.key === "Escape") {
					setOpen(false);
					return;
				}
				if (e.key === "Tab") {
					const dialog = dialogRef.current;
					if (!dialog) return;
					const focusable = dialog.querySelectorAll<HTMLElement>(
						'a[href], button:not([disabled])',
					);
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
			return () => document.removeEventListener("keydown", onKeyDown);
		}

		triggerRef.current?.focus();
	}, [open]);

	// スクロールロック（iOS Safariのタッチスクロールにも効くよう body を fixed 化し、位置を保持する）
	useEffect(() => {
		if (!open) return;

		const scrollY = window.scrollY;
		const { style } = document.body;
		style.position = "fixed";
		style.top = `-${scrollY}px`;
		style.left = "0";
		style.right = "0";
		// bodyの高さがposition:fixedで折りたたまれないようにする
		// （fixed配置の子要素はビューポート基準で描画されるため実ブラウザでは問題ないが、
		// bodyの矩形をキャプチャ範囲の基準にするツール等での崩れを防ぐ）
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
			id="menu-overlay"
			role="dialog"
			aria-modal="true"
			aria-label="サイト内メニュー"
			aria-hidden={!open}
			inert={!open}
			className={`fixed inset-0 z-[60] flex h-dvh w-dvw transform flex-col bg-ink text-cream transition-transform duration-500 ease-in-out ${
				open ? "translate-x-0" : "translate-x-full"
			}`}
		>
			{/* 上部バー：Headerと同じコンテナ幅にして、トリガーボタンと閉じるボタンのX位置を一致させる */}
			<div className="flex w-full shrink-0 items-center justify-between px-6 py-4">
				<span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
					<Image src={logoWhite} alt="" width={20} height={20} />
					{siteName}
				</span>
				<button
					type="button"
					onClick={() => setOpen(false)}
					aria-label="メニューを閉じる"
					className="btn-sweep relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent text-cream"
				>
					<span className="absolute h-0.5 w-4 rotate-45 bg-current" />
					<span className="absolute h-0.5 w-4 -rotate-45 bg-current" />
				</button>
			</div>

			<div className="flex flex-1 overflow-hidden">
				{/* 左：画像（小さい画面では非表示） */}
				<div className="relative hidden w-2/5 shrink-0 lg:block">
					<Image
						src={menuImage}
						alt=""
						fill
						sizes="40vw"
						className="object-cover"
						priority={false}
					/>
					<div className="absolute inset-0 bg-ink/10" />
				</div>

				{/* 右：ナビゲーション本体 */}
				<div className="flex flex-1 flex-col overflow-y-auto px-6 pb-10 sm:px-10">
					<nav
						className="flex flex-col gap-4 py-10"
						aria-label="サイト内メインナビゲーション"
					>
						{navItems.map((item, i) => (
							<a
								key={item.href}
								ref={i === 0 ? firstLinkRef : undefined}
								href={item.href}
								onClick={() => setOpen(false)}
								className="flex items-baseline gap-4 text-3xl font-semibold text-white/90 transition-colors hover:text-accent md:text-5xl"
							>
								<span className="text-sm font-normal text-white/40">
									{String(i + 1).padStart(2, "0")}
								</span>
								{item.label}
							</a>
						))}
					</nav>

					<a
						href="/privacy-policy"
						onClick={() => setOpen(false)}
						className="text-sm text-white/50 underline underline-offset-2 hover:text-white"
					>
						プライバシーポリシー
					</a>
				</div>
			</div>

			<div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-5 text-xs text-white/50 sm:px-10">
				<div className="flex items-center gap-3">
					<span className="tracking-widest text-white/30">SNS</span>
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
				onClick={() => setOpen(true)}
				aria-expanded={open}
				aria-controls="menu-overlay"
				aria-label="メニューを開く"
				className="btn-sweep relative z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-ink text-cream"
			>
				<svg
					aria-hidden="true"
					viewBox="0 0 20 20"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
					className="h-4 w-4"
				>
					<path d="M2 5h16" />
					<path d="M2 10h16" />
					<path d="M2 15h16" />
				</svg>
			</button>

			{mounted && createPortal(overlay, document.body)}
		</>
	);
}
