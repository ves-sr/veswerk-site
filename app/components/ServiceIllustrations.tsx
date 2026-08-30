type IllustrationProps = {
	className?: string;
};

/**
 * 事業紹介ページの01〜04に添える、線画テイストの小さなビジュアル。
 * 色数を絞り（ink/accent/brown-lightの3色のみ）、既存のフロストガラス調
 * カードに自然に馴染むよう、装飾やグラデーションを避けたミニマルな構成にする。
 */

// 01 必要な情報を整理：バラバラな付箋を1つに整えているイメージ
export function OrganizeIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden="true">
			<rect x="16" y="14" width="24" height="22" rx="3" fill="#faf6ef" stroke="#a98a6c" strokeWidth="2" transform="rotate(-8 28 25)" />
			<rect x="54" y="18" width="24" height="22" rx="3" fill="#faf6ef" stroke="#a98a6c" strokeWidth="2" transform="rotate(6 66 29)" />
			<line x1="47" y1="46" x2="47" y2="60" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" />
			<path d="M40 53 L47 60 L54 53" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<rect x="24" y="64" width="48" height="20" rx="4" stroke="#2e2822" strokeWidth="2" />
			<line x1="32" y1="74" x2="64" y2="74" stroke="#2e2822" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

// 02 見やすく、使いやすいホームページへ：PC・スマホの画面
export function DesignIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden="true">
			<rect x="12" y="20" width="52" height="38" rx="3" stroke="#2e2822" strokeWidth="2" />
			<line x1="12" y1="52" x2="64" y2="52" stroke="#2e2822" strokeWidth="2" />
			<line x1="30" y1="62" x2="46" y2="62" stroke="#2e2822" strokeWidth="2" strokeLinecap="round" />
			<rect x="20" y="28" width="36" height="4" rx="2" fill="#a98a6c" />
			<rect x="20" y="36" width="24" height="4" rx="2" fill="#a98a6c" />
			<rect x="62" y="34" width="22" height="40" rx="5" fill="#faf6ef" stroke="#c98a4b" strokeWidth="2" />
			<line x1="68" y1="42" x2="78" y2="42" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" />
			<line x1="68" y1="50" x2="78" y2="50" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" />
			<line x1="68" y1="58" x2="74" y2="58" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

// 03 検索から見つけてもらう：検索窓＋ピン（マップ）
export function SearchIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden="true">
			<circle cx="38" cy="40" r="20" stroke="#2e2822" strokeWidth="2" />
			<line x1="52" y1="54" x2="68" y2="70" stroke="#2e2822" strokeWidth="2.4" strokeLinecap="round" />
			<path
				d="M66 46 C66 56, 76 64, 76 64 C76 64, 86 56, 86 46 C86 40.5, 81.5 36, 76 36 C70.5 36, 66 40.5, 66 46 Z"
				stroke="#c98a4b"
				strokeWidth="2"
			/>
			<circle cx="76" cy="46" r="4" fill="#c98a4b" />
		</svg>
	);
}

// 04 公開後も安心の保守・サポート：モニター＋点検マーク
export function SupportIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden="true">
			<rect x="14" y="22" width="50" height="34" rx="3" stroke="#2e2822" strokeWidth="2" />
			<line x1="30" y1="64" x2="48" y2="64" stroke="#2e2822" strokeWidth="2" strokeLinecap="round" />
			<line x1="39" y1="56" x2="39" y2="64" stroke="#2e2822" strokeWidth="2" />
			<circle cx="39" cy="39" r="10" stroke="#a98a6c" strokeWidth="2" />
			<path d="M39 34 v6 l4 3" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<circle cx="72" cy="58" r="16" fill="#faf6ef" stroke="#c98a4b" strokeWidth="2" />
			<path d="M64 58 l6 6 12 -12" stroke="#c98a4b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
