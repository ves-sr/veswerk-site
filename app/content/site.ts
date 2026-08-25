// サイト全体で共有する情報。ナビ項目・屋号など、複数コンポーネントで重複させない。
// 案件ごとに使い回すテンプレートのため、将来的にはここを差し替えるだけで済む構成にしていく。

export const siteName = "VESWERK";
// 特定商取引法上の正式な屋号。著作権表記やプライバシーポリシー等、法的な文脈ではこちらを使う
export const legalName = "N-Tech";

// SNSは未開設。開設したら実際のURLに差し替える
export const snsLinks = [
	{ label: "Instagram", href: "#" },
	{ label: "X", href: "#" },
] as const;

export const navItems = [
	{ href: "/service", label: "事業紹介", shortLabel: "事業紹介" },
	{ href: "/why-solo", label: "なぜ、ひとりでやるのか", shortLabel: "こだわり" },
	{ href: "/works", label: "実績", shortLabel: "実績" },
	{ href: "/pricing", label: "料金プラン", shortLabel: "料金プラン" },
	{ href: "/contact", label: "お問い合わせ", shortLabel: "お問い合わせ" },
] as const;
