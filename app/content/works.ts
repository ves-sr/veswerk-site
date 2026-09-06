import thumbCafeD from "../assets/images/works/thumb-cafe-d.webp";
import thumbCramSchoolA from "../assets/images/works/thumb-cram-school-a.webp";
import thumbDayServiceA from "../assets/images/works/thumb-day-service-a.webp";
import thumbHousingA from "../assets/images/works/thumb-housing-a.webp";
import thumbConstructionA from "../assets/images/works/thumb-construction-a.webp";

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
		slug: "orihara-koumuten",
		no: "01",
		category: "LOCAL BUSINESS / SAMPLE",
		name: "折原工務店",
		concept: "半世紀の施工事例を、写真を軸にした構成でじっくり見せる。地域に根ざした信頼が伝わるサイトへ。",
		tags: ["地域密着型の工務店", "施工事例ギャラリー", "相談導線の設計"],
		image: thumbConstructionA,
		imageAlt: "石積みの壁と木の床が調和する、折原工務店施工のリビング空間",
		url: "https://orihara-koumuten-renewal-mockup.pages.dev/",
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
		slug: "ono-kensetsu",
		no: "03",
		category: "HOUSING / SAMPLE",
		name: "小野建設",
		concept: "狭小地に挑む設計力と、施工実績を大きな写真で見せる構成に。都市型住宅の強みが伝わるサイトへ。",
		tags: ["都市型住宅", "狭小地対応の実例", "施工実績ギャラリー"],
		image: thumbHousingA,
		imageAlt: "グレーのタイル外壁が印象的な、小野建設が手がけた都市型住宅の外観",
		url: "https://ono-kensetsu-renewal-mockup.veswerk.workers.dev/",
	},
	{
		slug: "dandan-day-service",
		no: "04",
		category: "DAY SERVICE / SAMPLE",
		name: "デイサービスだん・だん",
		concept: "施設の雰囲気や一日の流れを、見学を考えるご家族の視点で整理。安心感が伝わる構成に。",
		tags: ["地域密着型デイサービス", "見学・体験への導線", "一日の流れ紹介"],
		image: thumbDayServiceA,
		imageAlt: "山あいの緑に囲まれた、デイサービスだん・だんの建物外観",
		url: "https://dandan-day-service-renewal-mockup.pages.dev/",
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
