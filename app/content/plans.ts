export type PlanFeature = {
	title: string;
	text: string;
};

export const plan = {
	campaignLabel: "期間限定モニターキャンペーン",
	campaignNote:
		"9月末までにお申し込みの先着5名様限定。実績（事例）としての掲載を条件に、初期制作費を無料、保守費も月9,800円でご提供します。",
	regularPriceLabel: "本来の価格",
	regularPrice: "初期制作費 50,000円／保守 月19,800円",
	priceLabel: "初期制作費",
	price: "無料",
	maintenance: "保守：月9,800円",
	maintenanceNote: "サイト公開月から、毎月お支払いいただきます。",
	maintenanceHeading: "ホームページを作った後も、ずっとお店の味方で。",
	maintenanceLead:
		"ホームページは、作って終わりではありません。お客様が見つけやすく、迷わず来店でき、必要なときにすぐ連絡できる状態を、公開後も継続してサポートします。",
	features: [
		{
			title: "地図をタップするだけ。初めてのお客様も、迷わずお店へ。",
			text: "Googleマップが開き、そのままお店までのルートを確認できます。",
		},
		{
			title: "電話も、タップするだけ。",
			text: "予約や問い合わせをしたいお客様が、すぐお店へ連絡できます。",
		},
		{
			title: "検索やマップから、お店を見つけてもらいやすく。",
			text: "ホームページとGoogleマップの店舗情報を正確に揃え、検索エンジンにお店の情報を正しく理解してもらいやすい状態を整えます。",
		},
		{
			title: "公開後も、困ったときはお任せください。",
			text: "営業時間の変更やお知らせの追加、サイトの不具合など、月2回までの更新代行と障害対応で継続サポートします。",
		},
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
