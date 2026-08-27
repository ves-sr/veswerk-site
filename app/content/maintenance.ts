export type MaintenanceItem = {
	key: string;
	title: string;
	description: string;
	featured?: boolean;
};

export const maintenanceItems: MaintenanceItem[] = [
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
		description: "サイトのコードやデータの変更履歴をすべて記録し、いつでも過去の状態に戻せる体制を維持しています。万が一の作業ミスやトラブルの際も、慌てず元通りに復旧できます。",
		featured: true,
	},
	{
		key: "update",
		title: "軽微な更新代行（月2回まで）",
		description: "営業時間や料金など、ちょっとした文章・写真の差し替えに対応します。",
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
		featured: true,
	},
];
