export type PlanFeature = {
	title: string;
	text: string;
};

export const plan = {
	planNote: "ヒアリングから公開後の保守まで、一貫してご依頼いただけます。",
	priceLabel: "初期制作費",
	price: "50,000円〜",
	priceNote: "1〜5ページの場合",
	maintenance: "保守：月19,800円",
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

export type PricingTier = {
	pages: string;
	price: string;
};

export const pricingTiers: PricingTier[] = [
	{ pages: "1〜5ページ", price: "50,000円〜" },
	{ pages: "6〜10ページ", price: "80,000円〜" },
	{ pages: "11〜15ページ", price: "120,000円〜" },
	{ pages: "16ページ以上", price: "個別見積" },
];

export const pricingTiersNote =
	"独立したWebページを1ページとして数え、ページ内のセクションは含みません。ブログ・コラム等のCMS機能は、別途ご相談ください。";

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
		description: "InstagramのURL連携が正しく表示され続けているか、継続的に確認します（ご希望の方のみ）。",
	},
	{
		name: "X（Twitter）連携",
		price: "月1,000円",
		description: "XのURL連携が正しく表示され続けているか、継続的に確認します（ご希望の方のみ）。",
	},
	{
		name: "Facebook連携",
		price: "月1,000円",
		description: "FacebookのURL連携が正しく表示され続けているか、継続的に確認します（ご希望の方のみ）。",
	},
];

export const maintenanceAddonNotePrefix =
	"複数のSNS連携をご希望の場合、連携数に応じて費用を合算いたします（例：2つご希望の場合は";
export const maintenanceAddonNoteEmphasis = "月2,000円）。";

export const notIncludedItems = [
	"ブログ・コラム等のCMS機能",
	"予約システム",
	"EC・オンラインショップ",
	"決済機能",
	"会員機能",
	"LINE連携",
	"多言語対応",
	"高度な検索機能",
	"API連携",
	"Googleビジネスプロフィール等の高度な連携",
	"Googleカレンダー等の外部連携",
];
