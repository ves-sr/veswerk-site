type IllustrationProps = {
	className?: string;
};

/**
 * Homeの「悩みカルーセル」7項目に添える、線画テイストの小さなビジュアル。
 * ServiceIllustrations.tsxと同じ配色ルール（ink/accent/brown-lightの3色のみ、
 * グラデーション・装飾なし）で統一する。
 */

// 01 古いホームページ：時代遅れのモニター
export function OldSiteIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
			<rect x="8" y="10" width="32" height="22" rx="2" stroke="#2e2822" strokeWidth="2" />
			<line x1="18" y1="38" x2="30" y2="38" stroke="#2e2822" strokeWidth="2" strokeLinecap="round" />
			<line x1="24" y1="32" x2="24" y2="38" stroke="#2e2822" strokeWidth="2" />
			<line x1="14" y1="17" x2="28" y2="17" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<line x1="14" y1="23" x2="22" y2="23" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<path d="M32 6 L36 10 M36 6 L32 10" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

// 02 どこに頼めばいいか分からない：分岐する矢印
export function ConfusedIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
			<circle cx="24" cy="12" r="4" stroke="#2e2822" strokeWidth="2" />
			<path d="M24 16 V22" stroke="#2e2822" strokeWidth="2" />
			<path d="M24 22 L14 34" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<path d="M24 22 L24 34" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<path d="M24 22 L34 34" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" />
			<circle cx="14" cy="37" r="2.4" fill="#a98a6c" />
			<circle cx="24" cy="37" r="2.4" fill="#a98a6c" />
			<circle cx="34" cy="37" r="2.4" fill="#c98a4b" />
		</svg>
	);
}

// 03 自分で作っても思ったようにならない：調整ノブ・スライダー
export function DIYIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
			<rect x="8" y="8" width="32" height="24" rx="3" stroke="#2e2822" strokeWidth="2" />
			<line x1="14" y1="16" x2="30" y2="16" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<circle cx="24" cy="16" r="2.6" fill="#faf6ef" stroke="#c98a4b" strokeWidth="2" />
			<line x1="14" y1="24" x2="30" y2="24" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<circle cx="18" cy="24" r="2.6" fill="#faf6ef" stroke="#c98a4b" strokeWidth="2" />
			<line x1="16" y1="38" x2="32" y2="38" stroke="#2e2822" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

// 04 検索で見つけてもらえるか不安：虫眼鏡
export function SearchWorryIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
			<circle cx="20" cy="20" r="11" stroke="#2e2822" strokeWidth="2" />
			<line x1="28" y1="28" x2="38" y2="38" stroke="#2e2822" strokeWidth="2.4" strokeLinecap="round" />
			<path d="M20 24 v-8 M20 24 l-2.5 -2.5 M20 24 l2.5 -2.5" stroke="#c98a4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
			<circle cx="20" cy="14" r="1.4" fill="#a98a6c" />
		</svg>
	);
}

// 05 保守費用が高い：請求書と上向き矢印
export function CostIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
			<rect x="12" y="8" width="24" height="32" rx="3" stroke="#2e2822" strokeWidth="2" />
			<line x1="18" y1="16" x2="30" y2="16" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<line x1="18" y1="22" x2="30" y2="22" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<line x1="18" y1="28" x2="24" y2="28" stroke="#a98a6c" strokeWidth="2" strokeLinecap="round" />
			<path d="M30 30 L36 24 M36 24 h-5 M36 24 v5" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

// 06 スマホでも見やすく：PC＋スマホ
export function ResponsiveIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
			<rect x="6" y="10" width="26" height="18" rx="2" stroke="#2e2822" strokeWidth="2" />
			<line x1="14" y1="32" x2="24" y2="32" stroke="#2e2822" strokeWidth="2" strokeLinecap="round" />
			<line x1="19" y1="28" x2="19" y2="32" stroke="#2e2822" strokeWidth="2" />
			<rect x="30" y="18" width="12" height="20" rx="3" stroke="#c98a4b" strokeWidth="2" fill="#faf6ef" />
			<line x1="34" y1="24" x2="38" y2="24" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" />
			<line x1="34" y1="29" x2="38" y2="29" stroke="#c98a4b" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

// 07 更新・管理も任せたい：レンチと通知
export function MaintainIllustration({ className }: IllustrationProps) {
	return (
		<svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
			<path
				d="M28 12 a6 6 0 1 0 -8 8 L10 30 l4 4 l10 -10 a6 6 0 0 0 4 -12 Z"
				stroke="#2e2822"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<circle cx="34" cy="14" r="7" fill="#faf6ef" stroke="#c98a4b" strokeWidth="2" />
			<path d="M34 11 v3 l2.2 2.2" stroke="#c98a4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
