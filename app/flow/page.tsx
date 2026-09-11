import type { Metadata } from "next";
import { Fragment } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

// 長い一文がモバイル幅で折り返される際、単語の途中で強制分断されないよう、
// 意味の区切りごとに<wbr/>（改行してよい候補地点。<br/>と異なり強制ではない）を挟む。
function WithWbr({ chunks }: { chunks: string[] }) {
	return (
		<>
			{chunks.map((chunk, i) => (
				<Fragment key={i}>
					{i > 0 && <wbr />}
					{chunk}
				</Fragment>
			))}
		</>
	);
}

const pageTitle = "Webサイト制作の流れ";
const pageDescription =
	"モックアップのご確認からWebサイト公開まで、VESWERKがどのような流れで制作を進めるのか、標準的な制作期間の目安とあわせてご紹介します。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/flow" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/flow", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

const steps = [
	{
		no: "01",
		title: "モックアップのご確認・お打ち合わせ",
		body: [
			<WithWbr
				key="01"
				chunks={["実際の", "Webサイトのイメージを", "ご確認いただき、", "デザインや構成について", "ご希望を伺います。"]}
			/>,
		],
	},
	{
		no: "02",
		title: "デザイン・構成の方向性を確定",
		body: ["お打ち合わせや修正を重ねながら、Webサイト全体の方向性を決定します。"],
	},
	{
		no: "03",
		title: "お見積り・ご契約",
		body: [
			<WithWbr
				key="03"
				chunks={["制作内容と概算費用を", "ご確認いただき、", "内容にご納得いただいた", "うえで正式に", "ご契約いただきます。"]}
			/>,
		],
	},
	{
		no: "04",
		title: "要件定義・制作内容の詳細決定",
		body: [
			<WithWbr
				key="04-1"
				chunks={["ご契約後、", "ページ構成・掲載内容・機能・ドメインなど、", "Webサイト公開に", "必要な詳細を", "決定します。"]}
			/>,
			<WithWbr
				key="04-2"
				chunks={[
					"この段階で",
					"追加の制作や機能が",
					"必要となった場合は、",
					"内容と費用を",
					"ご説明したうえで、",
					"ご了承いただいてから",
					"進めます。",
				]}
			/>,
		],
	},
	{
		no: "05",
		title: "Webサイト制作",
		body: [
			"確定した内容をもとにWebサイトを制作します。",
			"制作に必要な文章・写真・ロゴ等については、お客様にご準備・ご提供をお願いいたします。",
		],
	},
	{
		no: "06",
		title: "完成サイトのご確認・最終修正",
		body: ["完成したWebサイトをご確認いただき、必要な修正を行います。", "最終的に内容をご確認いただき、公開のご了承をいただきます。"],
	},
	{
		no: "07",
		title: "ご請求・公開",
		body: ["制作費および保守・管理費をご請求します。", "お支払い等の確認後、Webサイトを公開します。"],
	},
] as const;

export default function FlowPage() {
	return (
		<>
			<section className="relative pt-28 pb-16 sm:pt-32 lg:pt-40">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">PROCESS</p>
					<h1 className="page-heading mt-4 max-w-xl" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
						Webサイト制作の<span className="whitespace-nowrap">流れ</span>
					</h1>
					<p className="section-body mt-6 max-w-lg text-sm sm:text-base">
						モックアップのご確認からWebサイト公開まで、以下の流れで進めていきます。
					</p>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24 lg:py-28">
				<div className="mx-auto max-w-5xl px-6">
					<div className="flex flex-col gap-16 sm:gap-20">
						{steps.map((s, i) => (
							<Reveal key={s.no} delay={i * 50}>
								<div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
									<span
										className="hero-heading shrink-0 text-4xl font-light text-border sm:w-28 sm:text-5xl"
										aria-hidden="true"
									>
										{s.no}
									</span>
									<div className="min-w-0">
										<p className="eyebrow">STEP {s.no}</p>
										<h2 className="section-heading mt-3 text-left">{s.title}</h2>
										<div className="section-body mt-4 flex flex-col gap-2 text-sm sm:text-base">
											{s.body.map((paragraph, j) => (
												<p key={j} style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
													{paragraph}
												</p>
											))}
										</div>
									</div>
								</div>
							</Reveal>
						))}
					</div>

					<Reveal>
						<div className="mt-16 border-t border-border pt-10 sm:mt-20 sm:pt-12">
							<p className="eyebrow">公開後</p>
							<p
								className="section-body mt-3 max-w-2xl text-sm sm:text-base"
								style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
							>
								<WithWbr
									chunks={["Webサイト公開後、", "保守・管理契約に基づき", "継続的なサイト運営を", "サポートします。"]}
								/>
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="border-t border-border bg-bg-sub py-24 sm:py-28">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="DURATION" ja="制作期間の目安" />
					<Reveal>
						<div className="mt-10 flex flex-col items-center rounded-[2rem] border border-border bg-bg p-8 text-center sm:mx-16 sm:rounded-[2.5rem] sm:p-14">
							<p className="eyebrow">標準的な制作期間</p>
							<p className="mt-3 text-4xl font-medium whitespace-nowrap text-ink sm:text-5xl">約3〜4週間程度</p>
							<p
								className="mt-2 max-w-[14rem] text-sm text-text-soft sm:max-w-none"
								style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
							>
								モックアップの方向性確定からWebサイト公開まで
							</p>
							<p
								className="mt-6 max-w-xl text-xs leading-relaxed text-text-soft sm:text-sm"
								style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
							>
								※上記は標準的な案件を想定した目安です。ページ数、機能、原稿・写真等の準備状況、確認・修正の状況などにより、制作期間は前後する場合があります。
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-2xl px-6 text-center">
					<h2 className="subsection-heading">気になることがあれば、お気軽にご相談ください。</h2>
					<a href="/contact" className="btn-fill mt-8 inline-flex">
						無料で相談する
					</a>
				</div>
			</section>
		</>
	);
}
