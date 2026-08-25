export type PlanFeature = {
	text: string;
	highlighted?: boolean;
};

export type Plan = {
	key: string;
	name: string;
	badge: string;
	recommended?: boolean;
	price: string;
	maintenance: string;
	features: PlanFeature[];
};

export const plans: Plan[] = [
	{
		key: "light",
		name: "Light",
		badge: "まず試したい方に",
		price: "38,000円〜",
		maintenance: "保守：別途契約",
		features: [
			{ text: "テンプレートベースのデザイン" },
			{ text: "1〜3ページ" },
			{ text: "スマホの地図をタップしたら迷わずお店まで案内される仕組み" },
			{ text: "電話番号をタップしたらそのまま発信できる仕組み" },
			{ text: "Googleマップとサイトの情報を一致させ、検索やマップで見つけてもらいやすくする" },
		],
	},
	{
		key: "standard",
		name: "Standard",
		badge: "しっかり作り込みたい方に",
		recommended: true,
		price: "98,000円〜",
		maintenance: "保守：月15,000円〜（3ヶ月無料）",
		features: [
			{ text: "オーダーメイドデザイン", highlighted: true },
			{ text: "〜5ページ", highlighted: true },
			{ text: "スマホの地図をタップしたら迷わずお店まで案内される仕組み" },
			{ text: "電話番号をタップしたらそのまま発信できる仕組み" },
			{ text: "Googleマップとサイトの情報を一致させ、検索やマップで見つけてもらいやすくする" },
			{ text: "保守費3ヶ月無料", highlighted: true },
		],
	},
	{
		key: "premium",
		name: "Premium",
		badge: "こだわりたい方に",
		price: "198,000円〜",
		maintenance: "保守：月15,000円〜（6ヶ月無料）",
		features: [
			{ text: "オーダーメイドデザイン" },
			{ text: "〜6ページ以上", highlighted: true },
			{ text: "スマホの地図をタップしたら迷わずお店まで案内される仕組み" },
			{ text: "電話番号をタップしたらそのまま発信できる仕組み" },
			{ text: "Googleマップとサイトの情報を一致させ、検索やマップで見つけてもらいやすくする" },
			{ text: "写真撮影込み", highlighted: true },
			{ text: "ご自身でブログ・お知らせを更新できる仕組み込み", highlighted: true },
			{ text: "検索結果によりお店の情報が表示されやすくなるよう、サイトの中身を細かく整理", highlighted: true },
			{ text: "優先対応（通常より早い納期でご案内）", highlighted: true },
			{ text: "保守費6ヶ月無料", highlighted: true },
		],
	},
];
