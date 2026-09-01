import thumbCafeD from "../assets/images/works/thumb-cafe-d.webp";
import thumbCafeE from "../assets/images/works/thumb-cafe-e.webp";
import thumbCafeF from "../assets/images/works/thumb-cafe-f.webp";
import thumbCramSchoolA from "../assets/images/works/thumb-cram-school-a.webp";
import thumbPlumbingB from "../assets/images/works/thumb-plumbing-b.webp";

export type WorkSample = {
	slug: string;
	no: string;
	category: string;
	name: string;
	concept: string;
	tags: string[];
	image: typeof thumbCafeD;
	imageAlt: string;
	url: string;
};

export const workSamples: WorkSample[] = [
	{
		slug: "toda-setsubi",
		no: "01",
		category: "LOCAL BUSINESS / SAMPLE",
		name: "戸田設備工業",
		concept: "地域に根ざした信頼を、実直な情報設計で伝える。",
		tags: ["地域密着型事業者", "多ページ構成", "施工事例訴求"],
		image: thumbPlumbingB,
		imageAlt: "緑豊かな渓流の写真を背景に「地元の水道屋だから、安心。」という見出しを掲げたトップページ",
		url: "https://plumbing-sample-b.pages.dev/",
	},
	{
		slug: "compass-academy",
		no: "02",
		category: "CRAM SCHOOL / SAMPLE",
		name: "COMPASS Academy",
		concept: "「結果」にこだわる指導姿勢を、実直な情報設計で伝える。",
		tags: ["学習塾・予備校", "コース紹介", "生徒の声"],
		image: thumbCramSchoolA,
		imageAlt: "タブレットで学習する生徒の写真を背景に「『結果』にこだわる、英語専門塾という選択。」という見出しを掲げたトップページ",
		url: "https://cram-school-sample-a.pages.dev/",
	},
	{
		slug: "petit-ciel",
		no: "03",
		category: "CAFE / SAMPLE",
		name: "Petit Ciel",
		concept: "軽やかな配色と写真で見せる、午後のひとやすみ。",
		tags: ["個人経営カフェ", "多言語対応", "ギャラリー訴求"],
		image: thumbCafeE,
		imageAlt: "レモンと緑を使った明るい料理写真の上に、英字コピーを添えたカードを重ねたトップページ",
		url: "https://cafe-sample-e.pages.dev/",
	},
	{
		slug: "mori-coffee-stand",
		no: "04",
		category: "CAFE / SAMPLE",
		name: "MORI coffee stand",
		concept: "木の匂いと緑に包まれた、街のコーヒースタンド。",
		tags: ["個人経営カフェ", "地図・経路案内", "SNS連携"],
		image: thumbCafeF,
		imageAlt: "観葉植物とラテアートのカップを配した、木の質感を活かした温かみのあるトップページ",
		url: "https://cafe-sample-f.pages.dev/",
	},
	{
		slug: "roastery-cafe",
		no: "05",
		category: "CAFE / SAMPLE",
		name: "ROASTERY & CAFE",
		concept: "自家焙煎の香りと余白を、静かな一杯とともに。",
		tags: ["個人経営カフェ", "ダークトーン", "予約導線"],
		image: thumbCafeD,
		imageAlt: "夕暮れの光が差し込む木目調の店内を背景に、大きな見出しコピーを重ねたダークトーンのトップページ",
		url: "https://cafe-sample-d.pages.dev/",
	},
];
