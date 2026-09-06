import thumbCafeD from "../assets/images/works/thumb-cafe-d.webp";
import thumbCramSchoolA from "../assets/images/works/thumb-cram-school-a.webp";
import { sample01 } from "../../sample/sample-01/data";
import { sample02 } from "../../sample/sample-02/data";
import { sample03 } from "../../sample/sample-03/data";

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

// sample-01〜03はVESWERKが営業用に制作した架空のSample（sample/配下で管理）。
// 実在企業の情報は含まず、リンク先のみ既存の完成済みモックアップサイトを使用する。
export const workSamples: WorkSample[] = [
	{ ...sample01, no: "01" },
	{ ...sample02, no: "02" },
	{ ...sample03, no: "03" },
	{
		slug: "compass-academy",
		no: "04",
		category: "CRAM SCHOOL / SAMPLE",
		name: "COMPASS Academy",
		concept: "「結果」にこだわる指導姿勢を、実直な情報設計で伝える。",
		tags: ["学習塾・予備校", "コース紹介", "生徒の声"],
		image: thumbCramSchoolA,
		imageAlt: "タブレットで学習する生徒の写真を背景に「『結果』にこだわる、英語専門塾という選択。」という見出しを掲げたトップページ",
		url: "https://cram-school-sample-a.pages.dev/",
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
