import image from "./image.jpg";

// VESWERKが営業用に制作した架空のSample。実在企業の情報は一切含まない。
// リンク先（url）のみ、既に完成している制作用モックアップサイトを使用する。
// カード画像はSampleサイト自体のファーストビューのスクリーンショット。
//
// Sample 01〜03は既にデプロイ済みの本番URLを直接指定しているが、
// Sample 04は本番URL（https://veswerk-sample-04.pages.dev）が未デプロイのため、
// 開発時（`next dev`）はローカルのSample 04サーバー（localhost:3104）へ向ける。
// `next build`時はNODE_ENVが自動的に"production"になるため、本番URLに切り替わる。
const sample04Url =
	process.env.NODE_ENV === "development" ? "http://localhost:3104" : "https://veswerk-sample-04.pages.dev";

export const sample04 = {
	slug: "sample-04",
	category: "SCHOOL / SAMPLE",
	name: "Sample 04｜塾・スクールサイト",
	concept: "学びの内容と教室の雰囲気を分かりやすく整理し、初めて訪れる方にも安心感が伝わるスクールサイト。",
	tags: ["塾・スクール", "情報設計", "入塾導線"],
	image,
	imageAlt: "Sample 04｜塾・スクールサイトの制作サンプル",
	url: sample04Url,
};
