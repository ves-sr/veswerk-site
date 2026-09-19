import type { Metadata } from "next";
import type { ReactNode } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const pageTitle = "Webサイト制作ロードマップ";
const pageDescription =
	"初回のお打ち合わせから契約、要件定義、制作、検収、公開、そして公開後の保守・管理まで、VESWERKがどのような流れで進めるのかをご紹介します。";

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
			<P key="1">Webサイト制作をご検討いただくにあたり、まずお客様のご希望や現在のWebサイトについてお伺いします。</P>,
			<P key="2">主に以下の内容を確認します。</P>,
			<Checklist
				key="list"
				items={[
					"現在のWebサイトの状況",
					"Webサイトを制作・リニューアルする目的",
					"希望するデザインや雰囲気",
					"必要となるページ",
					"必要となる機能",
					"掲載する情報や素材",
					"公開後の保守・管理の希望",
					"その他、制作に関するご希望",
				]}
			/>,
			<P key="3">お打ち合わせの内容をもとに、現時点で想定される制作内容を整理し、制作費・保守費等について概算の金額をお伝えします。</P>,
			<P key="4">この段階では、制作内容やページ数、必要な機能等が確定していないため、提示する金額はあくまで概算となります。</P>,
			<P key="5">概算費用および制作の方向性をご確認いただき、VESWERKへの制作依頼をご希望の場合は、詳細な制作内容の確定へ進みます。</P>,
		],
	},
	{
		no: "02",
		title: "Webサイト制作業務委託契約の締結",
		body: [
			<P key="1">
				初回のお打ち合わせにおいて、概算費用および制作の方向性についてご確認いただき、VESWERKへ制作を依頼する意思を確認した後、Webサイト制作業務委託契約を締結します。
			</P>,
			<P key="2">④ Webサイト制作業務委託契約書にて、Webサイト制作に関する基本的な契約条件を定めます。契約書には、主に以下の内容を定めます。</P>,
			<Checklist
				key="list"
				items={[
					"制作業務の内容",
					"制作の進め方",
					"制作期間",
					"制作費・支払条件",
					"要件・仕様の確定方法",
					"検収",
					"著作権・知的財産権",
					"修正・追加作業",
					"契約の解除",
					"秘密保持",
					"個人情報・セキュリティ",
					"損害賠償",
					"その他の契約条件",
				]}
			/>,
			<P key="3">なお、この時点ではWebサイトのページ数、機能、掲載内容等の詳細が確定していないため、正式な制作費は確定していません。</P>,
			<P key="4">契約締結後、モックアップの作成、要件定義、制作仕様の整理等を行い、制作するWebサイトの詳細を具体化します。</P>,
			<P key="5">契約締結には、原則として電子契約・電子署名等の方法を使用します。</P>,
		],
	},
	{
		no: "03",
		title: "モックアップ・要件・制作仕様の確定",
		body: [
			<P key="1">契約締結後、実際に制作するWebサイトの詳細な内容を具体化します。まず、初回のお打ち合わせで確認した内容をもとにモックアップを作成します。</P>,
			<P key="2">モックアップを確認していただきながら、デザインや構成、情報の見せ方、ページ構成等についてご希望や修正点をお伺いします。必要に応じてモックアップを修正し、お客様とWebサイトの方向性を調整します。</P>,
			<p key="note" className="text-xs text-text-soft sm:text-sm" style={KEEP_ALL}>
				※モックアップは完成版ではなく、制作するWebサイトのデザイン・構成・情報設計等を確認するためのものです。
			</p>,
			<P key="3">モックアップの方向性が固まった後、以下の内容を具体的に整理します。</P>,
			<Checklist
				key="list1"
				items={[
					"Webサイト全体のデザイン・方向性",
					"ページ構成",
					"各ページの内容",
					"掲載する文章・画像等の素材",
					"必要となる機能",
					"お問い合わせフォーム",
					"ドメイン",
					"サーバー・公開環境",
					"外部サービス",
					"Google関連サービス",
					"その他必要な設定",
				]}
			/>,
			<P key="4">これらの内容を整理し、⑤ Webサイト制作 要件定義書を作成します。さらに、要件定義をもとに、Webサイトをどのように制作するかを具体化し、⑥ Webサイト制作 制作仕様書を作成します。制作仕様書では、主に以下の内容を整理します。</P>,
			<Checklist
				key="list2"
				items={[
					"デザイン仕様",
					"レイアウト",
					"ヘッダー・フッター等の共通要素",
					"画像・写真の扱い",
					"PC・スマートフォン等への対応",
					"アニメーション・インタラクション",
					"機能仕様",
					"SEO・メタ情報",
					"URL構成",
					"技術仕様",
					"セキュリティ",
					"テスト・品質確認",
					"公開方法",
				]}
			/>,
			<P key="5">要件定義および制作仕様についてお客様に確認・承認をいただき、制作するWebサイトの内容・要件・仕様を確定します。</P>,
		],
	},
	{
		no: "04",
		title: "正式なお見積り",
		body: [
			<P key="1">要件定義および制作仕様が確定した段階で、実際に制作するページ数、機能、オプション、その他必要となる作業等をもとに正式な制作費を算出します。</P>,
			<P key="2">③ Webサイト制作 御見積書にて、以下の内容等を提示します。</P>,
			<Checklist
				key="list"
				items={["制作費", "保守・管理費", "オプション費用", "外部サービス等に必要となる費用", "その他必要となる費用", "制作条件"]}
			/>,
			<P key="3">正式なお見積りの内容・金額についてお客様にご確認いただき、承認をいただいたうえで制作を開始します。</P>,
			<P key="4">初回のお打ち合わせでお伝えした概算費用から金額が変更となる場合は、要件定義・制作仕様等の確定による変更内容についてご説明します。</P>,
		],
	},
	{
		no: "05",
		title: "Webサイト制作",
		body: [
			<P key="1">確定した要件定義書・制作仕様書および承認済みの見積内容に基づき、Webサイトを制作します。</P>,
			<P key="2">制作中に、当初の要件・仕様では判断できない事項や確認が必要な事項が発生した場合は、お客様へご相談します。</P>,
			<P key="3">制作途中で、ページ、機能、掲載内容、外部サービス等の追加・変更が必要となった場合は、内容・追加費用・制作期間への影響をご説明します。</P>,
			<P key="4">追加作業については、事前に内容・金額をご確認いただき、ご了承をいただいたうえで実施します。</P>,
			<P key="5" emphasis>
				事前のご了承なく追加作業を行い、追加費用を請求することはありません。
			</P>,
		],
	},
	{
		no: "06",
		title: "完成版の確認・検収",
		body: [
			<P key="1">Webサイトの制作が完了したら、完成版をご確認いただきます。契約および承認済みの要件・仕様に基づき、以下の内容等を確認します。</P>,
			<Checklist
				key="list1"
				items={["ページ内容", "デザイン", "画像・文章", "リンク", "お問い合わせフォーム", "スマートフォン等での表示", "その他、契約・仕様で定めた内容"]}
			/>,
			<P key="2">契約・仕様の範囲内で修正が必要な場合は、内容を確認したうえで対応します。一方、以下のような変更は、当初の合意内容を超えるため、追加作業として別途お見積りとなる場合があります。</P>,
			<Checklist
				key="list2"
				items={[
					"新しいページの追加",
					"新しい機能の追加",
					"大幅なデザイン変更",
					<>当初の仕様に含まれていない<wbr />内容の追加</>,
					"大幅な掲載内容の変更",
				]}
			/>,
			<P key="3">完成版についてお客様の確認が完了し、契約上の検収条件を満たした時点で、制作物の検収を完了します。</P>,
		],
	},
	{
		no: "07",
		title: "制作費の請求",
		body: [
			<P key="1">検収完了後、制作業務委託契約の内容に基づき、⑦ 請求書を発行します。</P>,
			<P key="2">制作費は、契約書および請求書に記載された支払期日までにお支払いいただきます。</P>,
			<P key="3">追加作業が発生した場合は、事前に合意した追加費用を請求します。</P>,
		],
	},
	{
		no: "08",
		title: "保守・管理契約の締結",
		body: [
			<P key="1">Webサイト公開後の保守・管理を行う場合は、制作契約とは別に、⑧ 保守・管理契約書を締結します。保守・管理契約では、主に以下の内容を定めます。</P>,
			<Checklist
				key="list"
				items={[
					"保守・管理の対象Webサイト",
					"月額保守・管理費",
					"軽微な更新の範囲",
					"対応範囲・対象外業務",
					"第三者サービスの扱い",
					"ドメイン・公開環境の管理",
					"バックアップ・変更履歴",
					"契約期間",
					"解約・更新",
					"引き継ぎ",
					"秘密保持・セキュリティ",
					"損害賠償",
					"その他の契約条件",
				]}
			/>,
			<P key="2">保守・管理契約の最低契約期間は1年間とし、最低契約期間満了後は1か月単位で自動更新します。</P>,
			<P key="3">保守・管理契約についても、原則として電子契約・電子署名等の方法で締結します。</P>,
		],
	},
	{
		no: "09",
		title: "Webサイト公開",
		body: [
			<P key="1">制作内容の最終確認、検収、必要な支払い手続きおよび公開に必要な契約・設定等が完了した後、Webサイトを公開します。</P>,
			<P key="2">公開に必要となる基本的な設定については、見積書・要件定義書・制作仕様書等に定めた内容に基づいて対応します。</P>,
			<P key="3">
				なお、ドメイン、サーバー、外部サービス等について、お客様が契約・所有するアカウントが必要な場合は、原則としてお客様に所有・契約していただき、VESWERKに制作・保守に必要な権限を付与していただく形で管理します。
			</P>,
		],
	},
] as const;

const documents = [
	{ no: "①", name: "制作・保守料金表", desc: "料金・サービス内容を確認するための案内資料" },
	{ no: "②", name: "概算見積書", desc: "初期段階でのおおよその費用・制作内容を共有するための資料" },
	{ no: "③", name: "Webサイト制作 御見積書", desc: "要件・仕様確定後に、正式な制作費・保守費等を提示するための見積書" },
	{ no: "④", name: "Webサイト制作業務委託契約書", desc: "Webサイト制作に関する契約条件を定める契約書" },
	{ no: "⑤", name: "要件定義書", desc: "制作するWebサイトの内容・要件を確定するための書類" },
	{ no: "⑥", name: "制作仕様書", desc: "確定した要件をもとに、デザイン・機能・技術等の具体的な仕様を定める書類" },
	{ no: "⑦", name: "請求書", desc: "契約・合意した費用を請求するための書類" },
	{ no: "⑧", name: "保守・管理契約書", desc: "Webサイト公開後の保守・管理に関する契約条件を定める契約書" },
] as const;

const approvals = [
	{ doc: "② 概算見積書", action: "内容・概算金額を確認" },
	{ doc: "④ Webサイト制作業務委託契約書", action: "契約締結" },
	{ doc: "⑤ 要件定義書", action: "内容を確認・承認" },
	{ doc: "⑥ 制作仕様書", action: "内容を確認・承認" },
	{ doc: "③ 御見積書", action: "内容・正式金額を確認・承認" },
	{ doc: "完成版", action: "最終確認・検収" },
	{ doc: "⑧ 保守・管理契約書", action: "契約締結" },
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
						<p>合同会社VESWERKでは、Webサイトの制作から公開後の保守・管理まで、以下の流れで進めます。</p>
						<p>お客様との認識の違いを防ぐため、制作内容・金額・契約条件・要件・仕様等について、各段階で確認・承認をいただきながら進行します。</p>
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
												"Google検索における表示状況の確認",
												"公開環境の管理",
												"ドメイン管理",
												"SSLの確認",
												"お問い合わせフォームの動作確認",
												"バックアップ・変更履歴の管理",
											]}
										/>
										<P>大幅なデザイン変更、新規ページ制作、新機能追加、外部サービスの大幅な変更、アカウント・環境の移管等については、保守・管理費の対象外となり、別途お見積りとなります。</P>
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
								ただし、ページ数、掲載素材の準備状況、必要な機能、確認・修正の回数や内容、外部サービスの設定、お客様による確認・承認に要する期間、その他制作に必要な作業などによって、制作期間は前後する場合があります。
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
							<P>制作途中で、当初の合意内容からページ数、機能、掲載内容、外部サービス等に変更・追加が生じる場合があります。</P>
							<P>その場合は、追加・変更となる内容、追加費用、制作期間への影響について、事前にご説明します。</P>
							<P>お客様に内容をご確認いただき、ご了承をいただいたうえで追加作業を実施します。</P>
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
