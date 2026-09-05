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
		title: "軽微な更新代行",
		description: "営業時間や料金など、ち⁠ょ⁠っ⁠と⁠した文章・写真の差し替えに対応します（月2回まで）。",
	},
	{
		key: "trouble",
		title: "表示不具合の一次対応",
		description: "「サイトが見られない」等のご連絡時に、原因の切り分け・対応を行います。",
	},
	{
		key: "search",
		title: "検索状況の確認",
		description: "Googleでの表示に異常がないか、検索結果からきちんとアクセスできる状態が保たれているかを月次で確認します。気づかないうちに検索から見つからなくなる、といった事態を防ぎます。",
	},
];

/**
 * 裏側で継続的に行っている、地味だが欠かせない保守作業。一覧行として控えめに見せる。
 */
export const maintenanceBackground: MaintenanceItem[] = [
	{
		key: "server",
		title: "サーバー・ドメイン管理",
		description: "サイトが正常に公開され続けているか、月次で確認します。",
	},
	{
		key: "ssl",
		title: "SSL証明書の管理",
		description: "サイトの安全な通信（鍵マーク表示）が保たれているか確認します。",
	},
	{
		key: "form",
		title: "お問い合わせフォームの動作確認",
		description: "実際にテスト送信を行い、通知が届くかを確認します。",
	},
	{
		key: "backup",
		title: "サイトのバックアップ",
		description: "コードやデータの変更履歴をすべて記録し、いつでも過去の状態に戻せる体制を維持しています。",
	},
];
