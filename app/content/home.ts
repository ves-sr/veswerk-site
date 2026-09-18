export type Problem = {
	label: string;
	text: string;
};

export const heroProblems: readonly Problem[] = [
	{
		label: "OLD INFO",
		text: "ホームページに、昔の情報が残っている。",
	},
	{
		label: "STRENGTH",
		text: "会社の良さや強みが、うまく伝わらない。",
	},
	{
		label: "RESPONSIVE",
		text: "スマートフォンでは、見づらい。",
	},
	{
		label: "FIND INFO",
		text: "情報が多く、必要な情報を見つけにくい。",
	},
	{
		label: "DIY",
		text: "直したいけれど、自分たちでは難しい。",
	},
	{
		label: "MANAGEMENT",
		text: "作った後の管理も、任せたい。",
	},
] as const;
