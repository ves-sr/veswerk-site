import { sample01 } from "../../sample/sample-01/data";
import { sample02 } from "../../sample/sample-02/data";
import { sample03 } from "../../sample/sample-03/data";
import { sample04 } from "../../sample/sample-04/data";

export type WorkSample = {
	slug: string;
	no: string;
	category: string;
	name: string;
	concept: string;
	tags: string[];
	image: typeof sample01.image;
	imageAlt: string;
	url: string;
};

// Sample 01〜04はVESWERKが営業用に制作した架空のSample（sample/配下で管理）。
// 実在企業の情報は含まず、リンク先のみ実在企業の情報を匿名化した複製サイトを使用する。
// Home（トップページ）と/worksページは、このworkSamples配列のみを共通のデータソースとして
// 参照するため、表示内容が食い違うことはない。
export const workSamples: WorkSample[] = [
	{ ...sample01, no: "01" },
	{ ...sample02, no: "02" },
	{ ...sample03, no: "03" },
	{ ...sample04, no: "04" },
];
