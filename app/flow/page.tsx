import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const pageTitle = "Webサイト制作ロードマップ";
const pageDescription =
	"モックアップのご確認からWebサイト公開、公開後の保守・管理まで、VESWERKがどのような流れで進めるのか、標準的な制作期間の目安とあわせてご紹介します。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/flow" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/flow", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

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

const KEEP_ALL: React.CSSProperties = { wordBreak: "keep-all", overflowWrap: "break-word" };

function P({ children }: { children: ReactNode }) {
	return <p style={KEEP_ALL}>{children}</p>;
}

// STEP4・公開後の確認項目一覧。PlanCardsの機能リストと同じチェックマークアイコンを再利用する。
function Checklist({ items }: { items: string[] }) {
	return (
		<ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
			{items.map((item) => (
				<li key={item} className="flex items-start gap-3">
					<svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-1 h-4 w-4 shrink-0 text-accent">
						<path
							fillRule="evenodd"
							d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
							clipRule="evenodd"
						/>
					</svg>
					<span style={KEEP_ALL}>{item}</span>
				</li>
			))}
		</ul>
	);
}

const steps = [
	{
		no: "01",
		title: "モックアップの確認・お打ち合わせ",
		body: [
			<P key="1">
				<WithWbr chunks={["実際の完成イメージを", "確認していただくため、", "事前にモックアップを", "ご用意します。"]} />
			</P>,
			<P key="2">
				<WithWbr chunks={["デザインや構成を", "ご確認いただき、", "ご希望や修正点を", "お伺いします。"]} />
			</P>,
			<P key="3">
				<WithWbr chunks={["必要に応じて、", "モックアップの", "修正・再作成を", "行います。"]} />
			</P>,
		],
	},
	{
		no: "02",
		title: <WithWbr chunks={["制作する", "Webサイトの", "方向性を", "確定"]} />,
		body: [
			<P key="1">
				<WithWbr
					chunks={["デザイン、ページ構成、掲載内容などを確認し、", "制作するWebサイトの", "方向性を決定します。"]}
				/>
			</P>,
			<P key="2">
				<WithWbr chunks={["モックアップの段階で、", "方向性が大きく異なる場合は、", "内容を確認したうえで", "再調整します。"]} />
			</P>,
		],
	},
	{
		no: "03",
		title: "制作内容・お見積り・ご契約",
		body: [
			<P key="1">
				<WithWbr chunks={["制作するページ数、機能、オプションなどを確認し、", "正式なお見積りを作成します。"]} />
			</P>,
			<P key="2">
				<WithWbr chunks={["内容・金額をご確認いただき、", "双方で合意したうえで", "制作業務委託契約を締結します。"]} />
			</P>,
		],
	},
	{
		no: "04",
		title: "要件定義",
		body: [
			<P key="1">
				<WithWbr chunks={["ご契約後、", "実際の制作に必要な詳細を", "確認します。"]} />
			</P>,
			<P key="2">主に以下の内容を確認します。</P>,
			<Checklist
				key="list"
				items={[
					"各ページの掲載内容",
					"文章・画像等の素材",
					"ページ構成",
					"Webサイトの機能",
					"お問い合わせフォーム",
					"ドメイン",
					"サーバー・公開環境",
					"外部サービス",
					"Google関連サービス",
					"その他必要な設定",
				]}
			/>,
			<P key="3">
				<WithWbr
					chunks={[
						"制作開始後に、",
						"追加のページ・機能・外部サービス等が",
						"必要となった場合は、",
						"内容、追加費用および",
						"制作スケジュールへの影響を",
						"ご説明します。",
					]}
				/>
			</P>,
			<P key="4">
				<WithWbr chunks={["追加作業は、", "事前に内容・金額をご確認いただき、", "ご了承をいただいたうえで実施します。"]} />
			</P>,
		],
	},
	{
		no: "05",
		title: "制作",
		body: [
			<P key="1">
				<WithWbr chunks={["確定した要件・仕様に基づき、", "Webサイトを制作します。"]} />
			</P>,
			<P key="2">
				<WithWbr chunks={["制作中に確認が必要となった事項については、", "随時ご相談します。"]} />
			</P>,
		],
	},
	{
		no: "06",
		title: "完成版の確認・最終修正",
		body: [
			<P key="1">
				<WithWbr chunks={["完成したWebサイトを", "ご確認いただきます。"]} />
			</P>,
			<P key="2">
				<WithWbr chunks={["契約・仕様で定めた内容について修正が必要な場合は、", "内容を確認したうえで対応します。"]} />
			</P>,
			<P key="3">
				<WithWbr
					chunks={[
						"新しいページの追加、",
						"当初の仕様に含まれていない機能の追加、",
						"大幅な内容変更などは、",
						"追加作業として別途お見積りとなる場合があります。",
					]}
				/>
			</P>,
		],
	},
	{
		no: "07",
		title: "請求・公開",
		body: [
			<P key="1">
				<WithWbr
					chunks={[
						"完成版をご確認いただき、",
						"公開するWebサイトの内容が確定した後、",
						"制作費および保守・管理費に関する",
						"請求書を発行します。",
					]}
				/>
			</P>,
			<P key="2">
				<WithWbr chunks={["Webサイト公開前に", "保守・管理契約を締結し、", "公開作業を行います。"]} />
			</P>,
			<P key="3">
				<WithWbr
					chunks={[
						"制作費および保守・管理費については、",
						"それぞれ契約書および請求書に定める",
						"支払期日までにお支払いいただきます。",
					]}
				/>
			</P>,
		],
	},
] as const;

export default function FlowPage() {
	return (
		<>
			<section className="relative pt-28 pb-16 sm:pt-32 lg:pt-40">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">PROCESS</p>
					<h1 className="page-heading mt-4 max-w-xl">
						Webサイト制作
						<br />
						ロードマップ
					</h1>
					<p className="section-body mt-6 max-w-lg text-sm sm:text-base" style={KEEP_ALL}>
						合同会社VESWERKでは、Webサイトの制作から公開後の保守・管理まで、以下の流れで進めます。
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
										<h2 className="section-heading mt-3 text-left" style={KEEP_ALL}>
											{s.title}
										</h2>
										<div className="section-body mt-4 flex flex-col gap-3 text-sm sm:text-base">{s.body}</div>
									</div>
								</div>
							</Reveal>
						))}
					</div>

					<Reveal>
						<div className="mt-16 border-t border-border pt-10 sm:mt-20 sm:pt-12">
							<div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
								<span className="hero-heading shrink-0 text-4xl font-light text-border sm:w-28 sm:text-5xl" aria-hidden="true">
									—
								</span>
								<div className="min-w-0">
									<p className="eyebrow">公開後</p>
									<h2 className="section-heading mt-3 text-left" style={KEEP_ALL}>
										保守・管理
									</h2>
									<div className="section-body mt-4 flex flex-col gap-3 text-sm sm:text-base">
										<P>
											<WithWbr
												chunks={["公開後は、", "保守・管理契約に基づき", "Webサイトを継続的に管理します。"]}
											/>
										</P>
										<P>主な対応内容は以下のとおりです。</P>
										<Checklist
											items={[
												"軽微な文章・写真の差し替え（月2回まで）",
												"表示不具合の一次対応",
												"Google検索における表示状況の確認",
												"公開環境の管理",
												"ドメイン管理",
												"SSLの確認",
												"お問い合わせフォームの動作確認",
												"バックアップ・変更履歴の管理",
											]}
										/>
										<P>
											<WithWbr chunks={["大幅なデザイン変更、", "新規ページ制作、", "新機能追加などは、", "別途お見積りとなります。"]} />
										</P>
									</div>
								</div>
							</div>
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
							<p className="mt-3 max-w-[15rem] text-sm text-text-soft sm:max-w-none" style={KEEP_ALL}>
								モックアップの方向性が確定してからWebサイト公開まで、
							</p>
							<p className="mt-2 text-4xl font-medium whitespace-nowrap text-ink sm:text-5xl">約3〜4週間程度</p>
							<p className="mt-2 text-sm text-text-soft">を目安としています。</p>
							<p className="mt-6 max-w-xl text-xs leading-relaxed text-text-soft sm:text-sm" style={KEEP_ALL}>
								<WithWbr
									chunks={[
										"ただし、ページ数、",
										"掲載素材の準備状況、",
										"機能、",
										"確認・修正の内容、",
										"外部サービスの設定などによって",
										"前後する場合があります。",
									]}
								/>
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-3xl px-6">
					<SectionHeading en="ADDITIONAL WORK" ja="追加作業について" align="left" />
					<Reveal>
						<div className="section-body mt-6 flex flex-col gap-3 text-sm sm:text-base">
							<P>
								<WithWbr
									chunks={[
										"制作途中で、",
										"当初の合意内容からページ数、機能、掲載内容、外部サービス等に",
										"変更・追加が生じる場合があります。",
									]}
								/>
							</P>
							<P>
								<WithWbr
									chunks={[
										"その場合は、",
										"追加となる内容、費用および制作期間への影響を",
										"事前にご説明し、",
										"お客様のご了承をいただいたうえで対応します。",
									]}
								/>
							</P>
							<p className="font-medium text-ink" style={KEEP_ALL}>
								<WithWbr chunks={["事前のご了承なく追加作業を行い、", "追加費用を請求することはありません。"]} />
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
