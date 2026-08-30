"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

const SESSION_KEY = "veswerk-intro-seen";

// このモジュールが読み込まれている間（＝1回のページロード中）に、
// イントロの起動処理が実行済みかどうかを覚えておくフラグ。
// コンポーネントのstate/refではなくモジュールスコープに置くことで、
// 開発モード（StrictMode）がuseEffectを意図的に2回連続実行しても、
// タイマー起動やsessionStorageへの書き込みは1回目でのみ行われる。
let hasStartedThisPageLoad = false;

/**
 * サイトを開いた瞬間のブランドイントロダクション。
 * ロゴ→コピー→流れるライン→短い余韻→フェードアウトの順に静かに展開し、
 * Homeへ自然に溶け込むように終える。同一セッション内の再訪では表示しない。
 *
 * 初期状態は常に「表示する」で描画する（サーバーはブラウザのsessionStorageを
 * 知り得ないため、SSR/初回ペイントの一瞬だけHomeが透けて見えるチラつきを
 * 防ぐには常時表示側に倒す必要がある）。useEffect内でsessionStorageを見て、
 * 既読なら即座に非表示へ切り替える。
 */
export default function IntroLoader() {
	const [visible, setVisible] = useState(true);
	const [mounted, setMounted] = useState(false);
	const [exiting, setExiting] = useState(false);

	useEffect(() => {
		if (hasStartedThisPageLoad) return;
		hasStartedThisPageLoad = true;

		if (sessionStorage.getItem(SESSION_KEY)) {
			setVisible(false);
			return;
		}
		sessionStorage.setItem(SESSION_KEY, "1");

		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		document.body.style.overflow = "hidden";

		window.setTimeout(() => setMounted(true), 30);
		const exitDelay = reduced ? 400 : 2600;
		window.setTimeout(() => setExiting(true), exitDelay);
		window.setTimeout(
			() => {
				setVisible(false);
				document.body.style.overflow = "";
			},
			exitDelay + (reduced ? 200 : 900),
		);

		// クリーンアップでタイマーを解除しない：開発モード（StrictMode）の
		// mount→cleanup→remountサイクルでタイマーが解除されると、
		// 一度きりの起動ガード（hasStartedThisPageLoad）と噛み合わず
		// 2回目のmountでタイマーが再設定されないまま終わってしまうため。
		// このコンポーネントはページ全体に1つだけ存在し、通常のページ遷移で
		// アンマウントされる想定がないため実害はない。
	}, []);

	if (!visible) return null;

	return (
		<div className="intro-loader" data-exiting={exiting} aria-hidden="true">
			<div className="intro-loader__lines" data-mounted={mounted}>
				<span className="intro-loader__line intro-loader__line--1" />
				<span className="intro-loader__line intro-loader__line--2" />
				<span className="intro-loader__line intro-loader__line--3" />
			</div>

			<div className="intro-loader__content">
				<div className="intro-loader__mark" data-mounted={mounted}>
					<Image src={logo} alt="" width={72} height={72} priority />
				</div>
				<p className="intro-loader__copy" data-mounted={mounted}>
					お店の魅力は、まだ伝えられる。
				</p>
			</div>
		</div>
	);
}
