export type PlanFeature = {
	title: string;
	text: string;
};

export const plan = {
	priceLabel: "制作費",
	price: "98,000円〜",
	priceNote: "1〜6ページの場合",
	maintenanceLabel: "保守・管理費",
	maintenance: "24,000円／月",
	maintenanceNote: "税込・サイト公開月から毎月のお支払いです。",
	maintenanceHeading: "ホームページを作った後も、継続してサポートします。",
	maintenanceLead:
		"ホームページは、公開して終わりではありません。情報が正しく伝わり、必要なときにすぐ連絡できる状態を、公開後も継続してサポートします。",
	features: [
		{
			title: "地図をタップするだけで、道順がすぐ分かる。",
			text: "Googleマップが開き、そのまま目的地までのルートを確認できます。",
		},
		{
			title: "電話も、タップするだけ。",
			text: "お問い合わせをしたい方が、すぐに連絡できます。",
		},
		{
			title: "検索やマップから、見つけてもらいやすく。",
			text: "ホームページとGoogleのビジネス情報を正確に揃え、検索エンジンに事業内容を正しく理解してもらいやすい状態を整えます。",
		},
		{
			title: "公開後も、困ったときはお任せください。",
			text: "内容の変更やお知らせの追加、サイトの不具合など、月2回までの更新代行と障害対応で継続サポートします。",
		},
	] satisfies PlanFeature[],
};

export type PricingTier = {
	pages: string;
	price: string;
};

export const pricingTiers: PricingTier[] = [
	{ pages: "1〜6ページ", price: "98,000円〜" },
	{ pages: "7〜10ページ", price: "148,000円〜" },
	{ pages: "11〜15ページ", price: "198,000円〜" },
	{ pages: "16ページ以上", price: "個別見積" },
];

export const pricingTiersNote =
	"独立したWebページを1ページとして数え、ページ内のセクションは含みません。制作費はページ数だけで決まるものではなく、掲載内容・必要な機能・制作内容などによって変動します。詳しい内容を確認したうえで正式なお見積りを作成します。";

export const additionalWorkNote =
	"制作内容の追加、新しい機能の追加、外部サービスとの連携など、標準内容にない対応をご希望の場合は、内容を確認したうえで個別にお見積りします。保守・管理をご契約の場合も、新しいページの追加や大幅なデザイン変更、新機能の追加など、通常の軽微な更新を超える作業は、同様に内容を確認したうえで別途お見積りします。";
