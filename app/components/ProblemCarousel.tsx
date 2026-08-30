"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { Problem } from "../content/home";

type ProblemCarouselItem = Problem & { icon: ReactNode };

type ProblemCarouselProps = {
	items: readonly ProblemCarouselItem[];
};

/**
 * 7つの悩みが右から左へ常時流れ続けるマーキーカルーセル。
 * アイテムを2セット連結してCSSアニメーション（globals.cssの
 * .problem-carousel-track）で動かすことで、7→1のループも途切れず流れる。
 *
 * 一時停止は2通りの手段を用意する：
 * 1. 右下の一時停止ボタン（クリックで再生/一時停止をトグル）
 * 2. カルーセルにカーソルを乗せている間は自動的に一時停止
 * どちらの状態も同じ`paused`ステートに集約し、アニメーションの
 * play-stateだけで制御する（スクロール位置やインデックス管理は不要）。
 */
export default function ProblemCarousel({ items }: ProblemCarouselProps) {
	const [manuallyPaused, setManuallyPaused] = useState(false);
	const [hovering, setHovering] = useState(false);
	const paused = manuallyPaused || hovering;

	// 継ぎ目なくループさせるため、アイテムを2セット連結して描画する
	const loopedItems = [...items, ...items];

	return (
		<div className="relative">
			<div
				className="problem-carousel-viewport"
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				<div
					className="problem-carousel-track"
					data-paused={paused}
					role="region"
					aria-label="ホームページに関するよくあるお悩み"
				>
					{loopedItems.map((item, i) => (
						<div key={`${item.label}-${i}`} className="problem-card shrink-0" aria-hidden={i >= items.length}>
							<div className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/50 p-6 shadow-[0_8px_30px_-14px_rgba(107,90,72,0.35)] backdrop-blur-md">
								<div className="flex items-center justify-between">
									<span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
										{item.icon}
									</span>
									<span className="text-xs font-semibold tracking-[0.2em] text-brown-light">
										{String((i % items.length) + 1).padStart(2, "0")}
									</span>
								</div>
								<span className="mt-4 text-[0.65rem] font-semibold tracking-[0.2em] text-accent">
									{item.label}
								</span>
								<p className="mt-2 text-sm leading-relaxed text-ink">{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mt-8 flex items-center justify-center">
				<button
					type="button"
					onClick={() => setManuallyPaused((prev) => !prev)}
					aria-label={manuallyPaused ? "スライドを再生する" : "スライドを一時停止する"}
					aria-pressed={manuallyPaused}
					className="flex h-14 w-14 items-center justify-center rounded-full border border-accent text-accent transition-colors hover:bg-accent hover:text-white"
				>
					{manuallyPaused ? (
						<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<path d="M4 3 L13 8 L4 13 Z" fill="currentColor" />
						</svg>
					) : (
						<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<rect x="4" y="3" width="3" height="10" rx="1" fill="currentColor" />
							<rect x="9" y="3" width="3" height="10" rx="1" fill="currentColor" />
						</svg>
					)}
				</button>
			</div>
		</div>
	);
}
