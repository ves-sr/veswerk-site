import type { Metadata } from "next";
import type { ReactNode } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const pageTitle = "Webサイト制作ロードマップ";
const pageDescription =
	"初回のお打ち合わせから契約、制作、検収、公開、そして公開後の保守・管理まで、VESWERKがどのような流れで進めるのかをご紹介します。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/flow" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/flow", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

const KEEP_ALL: React.CSSProperties = { wordBreak: "keep-all", overflowWrap: "break-word" };

function P({ children, emphasis = false }: { children: ReactNode; emphasis?: boolean }) {
	return <p className={emphasis ? "font-medium text-ink" : undefined} style={KEEP_ALL}>{children}</p>;
}

// 確認項目・整理項目の一覧。PlanCardsの機能リストと同じチェックマークアイコンを再利用する。
function Checklist({ items }: { items: (string | ReactNode)[] }) {
	return (
		<ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
			{items.map((item, i) => (
				<li key={typeof item === "string" ? item : i} className="flex items-start gap-3">
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
		title: "初回お打ち合わせ・概算費用の提示",
		body: [
			<P key="1">現在のWebサイトの状況や制作のご希望を伺い、想定される制作内容をもとに制作費・保守費の概算をお伝えします。</P>,
			<P key="2">この段階ではページ数や機能等が確定していないため、金額はあくまで概算となります。ご確認いただき、制作をご希望の場合は次のステップへ進みます。</P>,
		],
	},
	{
		no: "02",
		title: "Webサイト制作業務委託契約の締結",
		body: [
			<P key="1">概算費用・制作の方向性をご確認いただいた後、④ Webサイト制作業務委託契約書にて、制作費・支払条件・検収・著作権等の基本的な契約条件を定めます。</P>,
			<P key="2">契約締結には、原則として電子契約・電子署名等の方法を使用します。</P>,
		],
	},
	{
		no: "03",
		title: "モックアップ・要件の確定",
		body: [
			<P key="1">契約締結後、まずモックアップを作成し、デザインや構成についてご希望や修正点をお伺いしながら方向性を調整します。</P>,
			<p key="note" className="text-xs text-text-soft sm:text-sm" style={KEEP_ALL}>
				※モックアップは完成版ではなく、方向性を確認するためのものです。
			</p>,
			<P key="2">方向性が固まった後、ページ構成・掲載内容・必要な機能・ドメインや公開環境など制作に必要な内容を整理し、⑤ 要件定義書としてまとめます。内容についてお客様に確認・承認をいただきます。</P>,
		],
	},
	{
		no: "04",
		title: "正式なお見積り",
		body: [
			<P key="1">確定した要件をもとに、③ Webサイト制作 御見積書にて正式な制作費・保守費・オプション費用等を提示します。</P>,
			<P key="2">ご確認・承認をいただいたうえで制作を開始します。初回の概算から金額が変わる場合は、その理由をご説明します。</P>,
		],
	},
	{
		no: "05",
		title: "Webサイト制作",
		body: [
			<P key="1">確定した要件定義書および見積内容に基づき、Webサイトを制作します。</P>,
			<P key="2" emphasis>
				制作途中でページや機能の追加・変更が必要になった場合は、内容・追加費用・期間への影響を事前にご説明し、ご了承をいただいたうえで実施します。
			</P>,
		],
	},
	{
		no: "06",
		title: "完成版の確認・検収",
		body: [
			<P key="1">Webサイトの制作が完了したら、完成版をご確認いただきます。契約範囲内の修正が必要な場合は内容を確認のうえ対応します。</P>,
			<P key="2">新しいページ・機能の追加や大幅なデザイン変更など、当初の合意内容を超える変更は追加作業として別途お見積りとなる場合があります。</P>,
			<P key="3">お客様の確認が完了し、検収条件を満たした時点で検収を完了します。</P>,
		],
	},
	{
		no: "07",
		title: "制作費の請求",
		body: [
			<P key="1">検収完了後、契約内容に基づき⑦ 請求書を発行します。制作費は記載の支払期日までにお支払いいただきます。</P>,
		],
	},
	{
		no: "08",
		title: "保守・管理契約の締結",
		body: [
			<P key="1">公開後の保守・管理を行う場合は、制作契約とは別に⑧ 保守・管理契約書を締結します。最低契約期間は1年間とし、以降は1か月単位で自動更新します。</P>,
		],
	},
	{
		no: "09",
		title: "Webサイト公開",
		body: [
			<P key="1">制作内容の最終確認・検収、必要な契約・支払い手続きが完了した後、Webサイトを公開します。</P>,
			<P key="2">
				ドメインやサーバー等でお客様が契約・所有するアカウントが必要な場合は、原則としてお客様に所有・契約していただき、VESWERKに制作・保守に必要な権限を付与していただく形で管理します。
			</P>,
		],
	},
] as const;

const documents = [
	{ no: "①", name: "制作・保守料金表", desc: "料金・サービス内容を確認するための案内資料" },
	{ no: "②", name: "概算見積書", desc: "初期段階でのおおよその費用・制作内容を共有するための資料" },
	{ no: "③", name: "Webサイト制作 御見積書", desc: "正式な制作費・保守費等を提示するための見積書" },
	{ no: "④", name: "Webサイト制作業務委託契約書", desc: "Webサイト制作に関する契約条件を定める契約書" },
	{ no: "⑤", name: "要件定義書", desc: "制作するWebサイトの内容・要件を確定するための書類" },
	{ no: "⑥", name: "請求書", desc: "契約・合意した費用を請求するための書類" },
	{ no: "⑦", name: "保守・管理契約書", desc: "Webサイト公開後の保守・管理に関する契約条件を定める契約書" },
] as const;

const approvals = [
	{ doc: "② 概算見積書", action: "内容・概算金額を確認" },
	{ doc: "④ Webサイト制作業務委託契約書", action: "契約締結" },
	{ doc: "⑤ 要件定義書", action: "内容を確認・承認" },
	{ doc: "③ 御見積書", action: "内容・正式金額を確認・承認" },
	{ doc: "完成版", action: "最終確認・検収" },
	{ doc: "⑦ 保守・管理契約書", action: "契約締結" },
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
					<div className="section-body mt-6 flex max-w-lg flex-col gap-3 text-sm sm:text-base" style={KEEP_ALL}>
						<p>VESWERKでは、Webサイトの制作から公開後の保守・管理まで、以下の流れで進めます。</p>
						<p>お客様との認識の違いを防ぐため、制作内容・金額・契約条件等について、各段階で確認・承認をいただきながら進行します。</p>
					</div>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24 lg:py-28">
				<div className="mx-auto max-w-5xl px-6">
					<div className="flex flex-col gap-16 sm:gap-20">
						{steps.map((s, i) => (
							<Reveal key={s.no} delay={i * 40}>
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
										<P>保守・管理契約の締結後は、契約内容に基づきWebサイトを継続的に管理します。主な対応内容は以下のとおりです。</P>
										<Checklist
											items={[
												"軽微な文章・写真の差し替え（月2回まで）",
												"表示不具合の一次対応",
												"公開環境・ドメインの管理",
												"お問い合わせフォームの動作確認",
											]}
										/>
										<P>大幅なデザイン変更、新規ページ制作、新機能追加等については、保守・管理費の対象外となり、別途お見積りとなります。</P>
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
							<p className="mt-3 max-w-xs text-sm text-text-soft sm:max-w-none" style={KEEP_ALL}>
								契約締結後、モックアップの方向性を確定し、制作に必要な情報・素材等が揃ってからWebサイト公開まで、
							</p>
							<p className="mt-2 text-4xl font-medium whitespace-nowrap text-ink sm:text-5xl">約3〜4週間程度</p>
							<p className="mt-2 text-sm text-text-soft">を目安としています。</p>
							<p className="mt-6 max-w-xl text-xs leading-relaxed text-text-soft sm:text-sm" style={KEEP_ALL}>
								ただし、ページ数、掲載素材の準備状況、必要な機能、確認・修正の回数などによって、制作期間は前後する場合があります。
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-3xl px-6">
					<SectionHeading en="ADDITIONAL WORK" ja="追加作業・内容変更について" align="left" />
					<Reveal>
						<div className="section-body mt-6 flex flex-col gap-3 text-sm sm:text-base">
							<P>制作途中で、当初の合意内容からページ数、機能、掲載内容等に変更・追加が生じる場合があります。</P>
							<P>その場合は、追加・変更となる内容、追加費用、制作期間への影響について、事前にご説明します。</P>
							<P emphasis>事前のご了承なく追加作業を行い、追加費用を請求することはありません。</P>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-3xl px-6">
					<SectionHeading en="DOCUMENTS" ja="各書類の位置づけ" align="left" />
					<Reveal>
						<p className="section-body mt-5 text-sm sm:text-base" style={KEEP_ALL}>
							Webサイト制作では、以下の書類を使用します。
						</p>
						<dl className="mt-6 divide-y divide-border">
							{documents.map((doc) => (
								<div key={doc.no} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
									<dt className="shrink-0 text-sm font-medium text-ink sm:w-72" style={KEEP_ALL}>
										{doc.no} {doc.name}
									</dt>
									<dd className="text-sm text-text-soft" style={KEEP_ALL}>
										{doc.desc}
									</dd>
								</div>
							))}
						</dl>
					</Reveal>
				</div>
			</section>

			<section className="border-t border-border bg-bg-sub py-20 sm:py-24">
				<div className="mx-auto max-w-3xl px-6">
					<SectionHeading en="APPROVAL" ja="承認・確認について" align="left" />
					<Reveal>
						<p className="section-body mt-5 text-sm sm:text-base" style={KEEP_ALL}>
							各書類について、必要に応じてお客様に確認・承認をいただきます。
						</p>
						<dl className="mt-6 divide-y divide-border">
							{approvals.map((a) => (
								<div key={a.doc} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-6">
									<dt className="shrink-0 text-sm font-medium text-ink sm:w-72" style={KEEP_ALL}>
										{a.doc}
									</dt>
									<dd className="text-sm text-text-soft" style={KEEP_ALL}>
										→ {a.action}
									</dd>
								</div>
							))}
						</dl>
						<div className="section-body mt-8 flex flex-col gap-3 text-sm sm:text-base">
							<P>電子契約・電子署名を使用しない書類については、原則としてメール等の記録が残る方法により確認・承認をいただきます。</P>
							<P>承認後に内容を変更する場合は、変更内容を確認のうえ、必要に応じて改めて承認をいただきます。</P>
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
