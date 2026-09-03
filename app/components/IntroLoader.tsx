"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { siteName } from "../content/site";
import logo from "../assets/images/logo.png";

const SESSION_KEY = "veswerk-intro-shown";
const HOLD_MS = 700;
const EXIT_MS = 450;

// SafariのCookieブロック設定等ではsessionStorageへのアクセス自体が例外を投げるため、
// 常にtry/catchで包む。読めない・書けない場合は演出なしで安全側に倒す。
function hasShownIntro() {
	try {
		return sessionStorage.getItem(SESSION_KEY) === "1";
	} catch {
		return true;
	}
}

function markIntroShown() {
	try {
		sessionStorage.setItem(SESSION_KEY, "1");
	} catch {
		// 書き込めなくても致命的ではない（次回アクセス時にまた表示されるだけ）
	}
}

/**
 * トップページを開いた直後に一度だけ表示する導入演出。ロゴが控えめにフェードイン→
 * 短く保持→画面全体がフェードアウトして本サイトへ切り替わる（FUSO等を参考にした
 * 導入演出を、VESWERKのミニマルなトーンで短く再構成したもの）。
 * - 下層ページには表示しない（検索から直接下層ページへ来た訪問者を待たせないため）
 * - 同一タブ内の2回目以降の訪問・リロードでは表示しない
 * - JSが実行されない環境ではnoscriptでオーバーレイ自体を無効化する
 */
export default function IntroLoader() {
	const pathname = usePathname();
	const overlayRef = useRef<HTMLDivElement>(null);
	const [state, setState] = useState<"pending" | "visible" | "exiting" | "done">(
		pathname === "/" ? "pending" : "done",
	);

	useEffect(() => {
		if (pathname !== "/") return;

		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (hasShownIntro() || reduceMotion) {
			markIntroShown();
			// eslint-disable-next-line react-hooks/set-state-in-effect -- sessionStorage（外部ストレージ）を読んでの初期化
			setState("done");
			return;
		}

		const overlay = overlayRef.current;
		const { style } = document.body;
		const prevOverflow = style.overflow;
		style.overflow = "hidden";

		// 背後のHeader等がTabキーでフォーカスされてしまわないよう、表示中は無効化する
		const siblings = overlay ? Array.from(document.body.children).filter((el) => el !== overlay) : [];
		siblings.forEach((el) => el.setAttribute("inert", ""));

		const restore = () => {
			style.overflow = prevOverflow;
			siblings.forEach((el) => el.removeAttribute("inert"));
		};

		setState("visible");
		const holdTimer = setTimeout(() => setState("exiting"), HOLD_MS);
		// 完了時に書き込む（StrictModeのmount→unmount→remountで、書き込みが
		// 1回目のeffectだけで先に済んでしまい2回目が「訪問済み」と誤判定するのを防ぐ）
		const doneTimer = setTimeout(() => {
			markIntroShown();
			setState("done");
			restore();
		}, HOLD_MS + EXIT_MS);

		return () => {
			clearTimeout(holdTimer);
			clearTimeout(doneTimer);
			restore();
		};
	}, [pathname]);

	if (state === "done") return null;

	return (
		<>
			{/* JS無効環境ではuseEffectが走らずstateが"pending"のまま固定されるため、
			    CSSだけで確実にオーバーレイを消して本文を隠さないようにする */}
			<noscript>
				<style>{".intro-loader { display: none !important; }"}</style>
			</noscript>
			<div
				ref={overlayRef}
				aria-hidden="true"
				className="intro-loader"
				data-visible={state === "visible" || state === "exiting"}
				data-exiting={state === "exiting"}
			>
				<span className="intro-loader-mark relative block h-11 w-11 sm:h-12 sm:w-12">
					<Image src={logo} alt="" fill sizes="48px" className="object-contain" />
				</span>
				<span className="intro-loader-label eyebrow">{siteName}</span>
			</div>
		</>
	);
}
