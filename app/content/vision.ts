// 「今後の展望・技術領域の拡張」ページ（/vision）およびHomeのティザーセクションで共有するコンテンツ。

export type GrowthStage = {
	no: string;
	en: string;
	label: string;
	tag: string;
	desc: string;
	/** Web制作・システム開発など、すでに実践・蓄積している領域か（true=塗りつぶし表示、false=アウトライン表示） */
	established: boolean;
};

export const growthStages: readonly GrowthStage[] = [
	{
		no: "01",
		en: "WEB",
		label: "Web制作",
		tag: "現在",
		desc: "ホームページの企画・デザイン・開発。VESWERKの現在の中心事業です。",
		established: true,
	},
	{
		no: "02",
		en: "SYSTEM",
		label: "システム開発",
		tag: "技術基盤",
		desc: "現役ソフトウェアエンジニアとして、要件定義から開発・運用まで培ってきた技術基盤です。",
		established: true,
	},
	{
		no: "03",
		en: "AI / DATA",
		label: "AI・データ活用",
		tag: "次に広げる領域",
		desc: "Web・システム開発の技術を土台に、AIやデータ活用の領域へ広げていきます。",
		established: false,
	},
	{
		no: "04",
		en: "DRONE",
		label: "ドローン×AI",
		tag: "研究・検証中",
		desc: "ドローンから得られる画像・データをAIで解析する仕組みを、新たな技術領域として研究しています。",
		established: false,
	},
	{
		no: "05",
		en: "FUTURE",
		label: "この先へ",
		tag: "将来的な展望",
		desc: "企業や現場が抱えるさまざまな課題を、技術によって解決できる会社へ。",
		established: false,
	},
] as const;

export const droneSteps = [
	{
		no: "01",
		title: "ドローンでデータを取得",
		titleEn: "CAPTURE",
		desc: "ドローンによって、画像・映像・位置情報などのデータを取得します。",
	},
	{
		no: "02",
		title: "AIが変化・異常の候補を検出",
		titleEn: "ANALYZE",
		desc: "取得した画像をAIで解析し、異常や変化の可能性がある箇所を絞り込みます。",
	},
	{
		no: "03",
		title: "位置情報・過去データと照合",
		titleEn: "COMPARE",
		desc: "位置情報と組み合わせて対象箇所を特定し、過去のデータと比較して変化を捉えます。",
	},
	{
		no: "04",
		title: "Web上で可視化・レポート化",
		titleEn: "VISUALIZE",
		desc: "解析結果をWeb上で可視化し、必要に応じてレポート作成や継続的なモニタリングにつなげます。",
	},
] as const;
