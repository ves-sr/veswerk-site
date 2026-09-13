"use client";

import { useSyncExternalStore } from "react";

type ObfuscatedEmailProps = {
	user: string;
	domain: string;
	className?: string;
	/** true: mailtoリンクとして表示する（既定）。false: 単なるテキストとして表示する。 */
	link?: boolean;
};

// マウント後（ブラウザでのハイドレーション完了後）かどうかを判定する。
// useEffect内でのsetStateを使わず、Reactの外部ストア購読APIで安全に
// SSR初期値（false）とクライアント値（true）を切り替える標準的な方法。
function subscribe() {
	return () => {};
}
function getSnapshot() {
	return true;
}
function getServerSnapshot() {
	return false;
}
function useMounted() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * メールアドレス収集Bot対策。
 * ビルド時（静的HTML）には完全な「user@domain」の形を出力せず、
 * ブラウザでのハイドレーション完了後にのみ組み立てて表示する。
 * 単純にHTMLソースを読み取るタイプの収集Botを避けつつ、実際の閲覧者には
 * ほぼ一瞬で通常どおりのクリック可能なメールアドレスとして表示される。
 */
export default function ObfuscatedEmail({ user, domain, className, link = true }: ObfuscatedEmailProps) {
	const mounted = useMounted();

	if (!mounted) {
		return (
			<span className={className}>
				{user} (at) {domain}
			</span>
		);
	}

	const email = `${user}@${domain}`;

	if (!link) {
		return <span className={className}>{email}</span>;
	}

	return (
		<a href={`mailto:${email}`} className={className}>
			{email}
		</a>
	);
}
