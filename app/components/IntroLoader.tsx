"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteName } from "../content/site";
import logo from "../assets/images/logo.png";

// 通常時の最低表示時間。読み込みが一瞬で終わってもチラつかないようにする下限。
// 下のバーが左から右まで到達する時間と一致させ、「到達し終わったら消える」体験にする。
const MIN_VISIBLE_MS = 1800;
// フェードアウトのCSS transitionと同じ長さ（.intro-loaderのopacity transition）。
const FADE_MS = 500;
// 何らかの理由でloadイベントが発火しない場合に備えた保険の最大表示時間。
const SAFETY_TIMEOUT_MS = 5000;

/**
 * ページ初回読み込み時に表示するブランドローディング画面。
 * 静的サイトのためページ遷移のたびに（フルリロードのたびに）表示される。
 * JSが無効な環境ではnoscriptで即非表示にし、画面を塞いだままにしない。
 */
export default function IntroLoader() {
	const [rendered, setRendered] = useState(true);
	const [fading, setFading] = useState(false);
	const [itemsVisible, setItemsVisible] = useState(false);

	useEffect(() => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const start = Date.now();
		let settled = false;

		function beginFadeOut() {
			if (settled) return;
			settled = true;
			const elapsed = Date.now() - start;
			window.setTimeout(
				() => {
					setFading(true);
					// ローディングが消えるのと同じタイミングで、サイト本体をふわっと表示する。
					document.getElementById("site-content")?.setAttribute("data-revealed", "true");
				},
				Math.max(MIN_VISIBLE_MS - elapsed, 0),
			);
		}

		if (document.readyState === "complete") {
			beginFadeOut();
		} else {
			window.addEventListener("load", beginFadeOut);
		}
		const safety = window.setTimeout(beginFadeOut, SAFETY_TIMEOUT_MS);
		const raf = requestAnimationFrame(() => setItemsVisible(true));

		return () => {
			window.removeEventListener("load", beginFadeOut);
			window.clearTimeout(safety);
			cancelAnimationFrame(raf);
			document.body.style.overflow = previousOverflow;
		};
	}, []);

	useEffect(() => {
		if (!fading) return;
		document.body.style.overflow = "";
		const t = window.setTimeout(() => setRendered(false), FADE_MS);
		return () => window.clearTimeout(t);
	}, [fading]);

	if (!rendered) return null;

	return (
		<>
			<noscript>
				<style>{".intro-loader{display:none} .site-content{opacity:1}"}</style>
			</noscript>
			<div className="intro-loader" data-fading={fading} aria-hidden="true">
				<span
					className="intro-loader-item relative block h-16 w-16 overflow-hidden rounded-full bg-white shadow-[0_10px_30px_-12px_rgba(51,49,45,0.3)] sm:h-20 sm:w-20"
					data-visible={itemsVisible}
				>
					<Image src={logo} alt="" fill sizes="80px" className="scale-[2.3] object-contain" priority />
				</span>
				<p
					className="intro-loader-item mt-5 text-lg font-medium tracking-wide text-ink"
					data-visible={itemsVisible}
					style={{ transitionDelay: "80ms" }}
				>
					{siteName}
				</p>
				<p
					className="intro-loader-item mt-2 max-w-xs px-6 text-center text-sm text-text-soft"
					data-visible={itemsVisible}
					style={{ transitionDelay: "160ms", wordBreak: "keep-all", overflowWrap: "break-word" }}
				>
					その魅力、伝わらないHPのままにしていませんか？
				</p>
				<div className="intro-loader-bar">
					<span
						className="intro-loader-bar-fill"
						data-visible={itemsVisible}
						style={{ transitionDuration: `${MIN_VISIBLE_MS}ms` }}
					/>
				</div>
			</div>
		</>
	);
}
