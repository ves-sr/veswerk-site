export type Problem = {
	label: string;
	text: string;
};

export const heroProblems: readonly Problem[] = [
	{
		label: "OLD SITE",
		text: "ホームページが古くなってしまったけど、作り直すのは高そう。",
	},
	{
		label: "WHO TO ASK",
		text: "必要なのは分かっているけど、どこに頼めばいいか分からない。",
	},
	{
		label: "DIY",
		text: "自分で作ろうとしても、思ったようにならない。",
	},
	{
		label: "SEO",
		text: "せっかく作っても、検索で見つけてもらえるか不安。",
	},
	{
		label: "COST",
		text: "公開した後も、高い保守費用を払い続けるのはちょっと……。",
	},
	{
		label: "RESPONSIVE",
		text: "スマートフォンでも見やすいホームページにしたい。",
	},
	{
		label: "MAINTENANCE",
		text: "作った後も、更新や管理を誰かに任せたい。",
	},
] as const;
