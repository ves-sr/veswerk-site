export type PlanFeature = {
	text: string;
};

export const plan = {
	price: "初期制作費 無料",
	priceNote: "実績作りのための特別価格です（9月末までのお申し込み限定）。",
	maintenance: "保守：月1,980円",
	maintenanceNote: "サイト公開月から、毎月お支払いいただきます。",
	features: [
		{ text: "スマホの地図をタップしたら迷わずお店まで案内される仕組み" },
		{ text: "電話番号をタップしたらそのまま発信できる仕組み" },
		{ text: "Googleマップとサイトの情報を一致させ、検索やマップで見つけてもらいやすくする" },
		{ text: "障害対応・月2回までの更新代行など、公開後も保守で継続サポート" },
	] satisfies PlanFeature[],
};

export type ProductionAddonItem = {
	name: string;
	price: string;
	unit: string;
};

export const productionAddonItems: ProductionAddonItem[] = [
	{ name: "色の追加・変更", price: "500円", unit: "1色ごと" },
	{ name: "フォントの追加", price: "500円", unit: "1種類ごと" },
	{ name: "お写真の追加", price: "500円", unit: "1枚ごと" },
];

export const productionAddonNote =
	"最初にご提案するデザイン（色・フォント・お写真）は制作費に含まれます。そこから追加・変更したい項目がある場合、上記の費用を項目ごとにいただいております。";

export type MaintenanceAddonItem = {
	name: string;
	price: string;
	description: string;
};

export const maintenanceAddonItems: MaintenanceAddonItem[] = [
	{
		name: "Instagram連携",
		price: "月1,000円",
		description: "InstagramのURLをサイトに連携し、正しく表示され続けているか継続的に確認します（ご希望の方のみ）。",
	},
	{
		name: "X（Twitter）連携",
		price: "月1,000円",
		description: "XのURLをサイトに連携し、正しく表示され続けているか継続的に確認します（ご希望の方のみ）。",
	},
	{
		name: "Facebook連携",
		price: "月1,000円",
		description: "FacebookのURLをサイトに連携し、正しく表示され続けているか継続的に確認します（ご希望の方のみ）。",
	},
];

export const maintenanceAddonNotePrefix =
	"複数のSNS連携をご希望の場合、連携数に応じて費用を合算いたします（例：2つご希望の場合は";
export const maintenanceAddonNoteEmphasis = "月2,000円）。";

export const notIncludedItems = [
	"ブログ機能",
	"LINE通知連携",
	"多言語対応",
];
