"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Problem } from "../content/home";

type ProblemCarouselItem = Problem & { icon: ReactNode };

type ProblemCarouselProps = {
	items: readonly ProblemCarouselItem[];
};

const AUTO_ADVANCE_MS = 3200;
const SCROLL_SETTLE_MS = 150;

/**
 * 7つの悩みを横方向に流すカルーセル。ネイティブのスクロールスナップで
 * 実装し、自動送り・Nextボタン・タッチスワイプいずれでも同じ挙動になる
 * ようにする（JSでtransformを動かす自作スライダーより、スクロール位置と
 * 見た目が常に一致し、アクセシビリティ・慣性スクロールとの相性も良い）。
 *
 * activeIndexは「現在向かっている先のインデックス」を指す唯一の管理値とし、
 * scrollイベント側はそれを上書きしない。scrollイベントによるactiveIndex更新は
 * 「ユーザーが指/マウスでトラックに触れている、またはその直後の慣性スクロール中」
 * だけに限定する（isUserInteracting）。isProgrammaticScroll単体では
 * scrollendの発火漏れ・慣性スクロールの遅延と競合しうるため、
 * 「ユーザーが実際に触れたか」を別軸のフラグとして持つ。
 */
export default function ProblemCarousel({ items }: ProblemCarouselProps) {
	const trackRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const isUserInteracting = useRef(false);
	const scrollSettleTimer = useRef<number | undefined>(undefined);
	const total = items.length;

	const scrollToIndex = useCallback((index: number) => {
		const track = trackRef.current;
		if (!track) return;
		const card = track.children[index] as HTMLElement | undefined;
		if (!card) return;
		track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
	}, []);

	const goToIndex = useCallback(
		(index: number) => {
			const next = ((index % total) + total) % total;
			setActiveIndex(next);
			scrollToIndex(next);
		},
		[scrollToIndex, total],
	);

	const handleNext = useCallback(() => {
		goToIndex(activeIndex + 1);
	}, [activeIndex, goToIndex]);

	// ユーザーが指/マウスでトラックに触れている間だけ、スクロール位置を
	// activeIndexに反映する対象にする。Nextボタンや自動送りによる
	// プログラム制御のスクロール中は、このフラグがfalseのままなので無視される。
	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const onPointerDown = () => {
			isUserInteracting.current = true;
		};
		const onPointerUp = () => {
			// 指を離した後も慣性スクロールが続くため、少し猶予を持たせてから
			// 「ユーザー操作」扱いを終える
			window.setTimeout(() => {
				isUserInteracting.current = false;
			}, 600);
		};

		track.addEventListener("pointerdown", onPointerDown);
		track.addEventListener("pointerup", onPointerUp);
		track.addEventListener("pointercancel", onPointerUp);
		return () => {
			track.removeEventListener("pointerdown", onPointerDown);
			track.removeEventListener("pointerup", onPointerUp);
			track.removeEventListener("pointercancel", onPointerUp);
		};
	}, []);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const onScroll = () => {
			if (!isUserInteracting.current) return;

			window.clearTimeout(scrollSettleTimer.current);
			scrollSettleTimer.current = window.setTimeout(() => {
				const cards = Array.from(track.children) as HTMLElement[];
				const trackCenter = track.scrollLeft + track.offsetWidth / 2;
				let closest = 0;
				let closestDist = Infinity;
				cards.forEach((card, i) => {
					const cardCenter = card.offsetLeft - track.offsetLeft + card.offsetWidth / 2;
					const dist = Math.abs(cardCenter - trackCenter);
					if (dist < closestDist) {
						closestDist = dist;
						closest = i;
					}
				});
				setActiveIndex(closest);
			}, SCROLL_SETTLE_MS);
		};

		track.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			track.removeEventListener("scroll", onScroll);
			window.clearTimeout(scrollSettleTimer.current);
		};
	}, []);

	// 自動送り。ホバー・タッチ中、またはprefers-reduced-motionでは停止する。
	// activeIndexが変わるたびにタイマーを仕切り直すことで、Nextボタン操作の
	// 直後にすぐ自動送りが重ねて発火することもない。
	useEffect(() => {
		if (paused) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const timer = window.setTimeout(() => {
			goToIndex(activeIndex + 1);
		}, AUTO_ADVANCE_MS);
		return () => window.clearTimeout(timer);
	}, [paused, activeIndex, goToIndex]);

	return (
		<div
			className="relative"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onTouchStart={() => setPaused(true)}
		>
			<div
				ref={trackRef}
				className="problem-carousel-track flex gap-4 overflow-x-auto pb-2"
				role="region"
				aria-label="ホームページに関するよくあるお悩み"
			>
				{items.map((item, i) => (
					<div key={item.label} className="problem-card shrink-0 snap-start">
						<div className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/50 p-6 shadow-[0_8px_30px_-14px_rgba(107,90,72,0.35)] backdrop-blur-md">
							<div className="flex items-center justify-between">
								<span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
									{item.icon}
								</span>
								<span className="text-xs font-semibold tracking-[0.2em] text-brown-light">
									{String(i + 1).padStart(2, "0")}
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

			<div className="mt-6 flex items-center justify-end gap-3">
				<span className="text-xs tracking-widest text-brown-light">
					{String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
				</span>
				<button
					type="button"
					onClick={handleNext}
					aria-label="次のお悩みを見る"
					className="flex h-11 w-11 items-center justify-center rounded-full border border-accent text-accent transition-colors hover:bg-accent hover:text-white"
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
						<path d="M4 12 L12 4 M12 4 H5 M12 4 V11" stroke="currentColor" strokeWidth="1.6" />
					</svg>
				</button>
			</div>
		</div>
	);
}
