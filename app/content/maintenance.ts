export type MaintenanceItem = {
	key: string;
	title: string;
	description: string;
};

/**
 * お客様が実際に「頼める」「助かる」と感じる項目。カード形式で主役として見せる。
 */
export const maintenanceHighlights: MaintenanceItem[] = [
	{
		key: "update",
		title: "軽微な更新",
		description:
			"文章や写真など、軽微な変更に対応します（月2回まで）。具体的な対象範囲や条件は、ご契約内容に従います。",
	},
	{
		key: "trouble",
		title: "表示トラブルへの対応",
		description:
			"ホームページが正常に表示されないなどの問題について、原因の確認・切り分けを行い、必要な対応を行います。",
	},
	{
		key: "search",
		title: "Google検索での表示状況確認",
		description:
			"Google検索でホームページが正常に表示されているか、検索結果からアクセスできる状態が保たれているかを確認します。",
	},
];

/**
 * 裏側で継続的に行っている、地味だが欠かせない保守作業。一覧行として控えめに見せる。
 */
export const maintenanceBackground: MaintenanceItem[] = [
	{
		key: "server",
		title: "サーバー・ドメイン管理",
		description: "ホームページが正常に公開され続けるよう、サーバーやドメインの管理・確認を行います。",
	},
	{
		key: "ssl",
		title: "SSL・安全な通信環境の確認",
		description: "SSLなど、ホームページの安全な通信環境が正常に維持されているか確認します。",
	},
	{
		key: "form",
		title: "お問い合わせフォームの動作確認",
		description: "お問い合わせフォームが正常に動作し、通知が届く状態になっているか確認します。",
	},
	{
		key: "backup",
		title: "バックアップ・変更履歴",
		description: "必要に応じて復旧できるよう、バックアップや変更履歴を管理します。",
	},
];

export const maintenanceExclusionNote =
	"新しいページの追加、大幅なデザイン変更、新しい機能の追加など、通常の軽微な更新を超える作業は、内容を確認したうえで別途お見積りします。";

export const maintenanceExternalCostNote = "外部サービスをご利用の場合、その利用料はお客様のご負担となります。";

export const maintenanceResponseTimeNote =
	"通常のご依頼は5営業日以内を目安に初回対応します。表示できないなど緊急性の高い不具合には、可能な限り速やかに対応します。";

export const maintenanceContractNote =
	"保守・管理は別途契約書を締結のうえでのご提供となり、最低契約期間は1年間（以降は1か月単位で自動更新）です。開始はサイト公開月からとなります。";
