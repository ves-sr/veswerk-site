import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "特定商取引法に基づく表記｜VESWERK",
	description: "特定商取引法に基づく表記。",
};

const rows: { label: string; value: React.ReactNode }[] = [
	{ label: "販売業者", value: "N-Tech（屋号）" },
	{ label: "運営統括責任者", value: "中井駿吾" },
	{
		label: "所在地",
		value: "ご請求をいただいた場合、遅滞なく開示いたします。お問い合わせフォームよりご請求ください。",
	},
	{
		label: "電話番号",
		value: "ご請求をいただいた場合、遅滞なく開示いたします。お問い合わせフォームよりご請求ください。",
	},
	{
		label: "メールアドレス",
		value: "veswerk@gmail.com",
	},
	{
		label: "お問い合わせ方法",
		value: (
			<>
				<a href="/contact" className="text-accent underline underline-offset-2">
					お問い合わせフォーム
				</a>
				よりご連絡ください。
			</>
		),
	},
	{
		label: "販売価格",
		value: (
			<>
				<a href="/pricing" className="text-accent underline underline-offset-2">
					料金プランページ
				</a>
				に記載の金額（表示価格は税込です）。追加オプションをご希望の場合は、内容に応じて別途お見積りいたします。
			</>
		),
	},
	{
		label: "販売価格以外に必要な料金",
		value: "銀行振込の振込手数料はお客様のご負担となります。追加のご要望・オプションについては、事前にお見積りをご提示したうえで進めます。",
	},
	{
		label: "お支払方法",
		value: "銀行振込（三菱UFJ銀行）。振込先口座は、ご契約時に別途お伝えいたします。",
	},
	{
		label: "お支払時期",
		value: "ご契約時に制作費の50%を着手金としてお支払いいただき、納品時に残り50%をお支払いいただきます。",
	},
	{
		label: "役務の提供時期",
		value: "ヒアリング完了後、通常2〜4週間程度で納品いたします（案件の内容により前後します）。",
	},
	{
		label: "キャンセル・返品について",
		value:
			"ホームページ制作は形のないサービス（役務）のため、ご契約成立後のキャンセル・返品は原則としてお受けできません。ご契約成立後、制作着手前にキャンセルされる場合も、既にお支払いいただいた着手金（制作費の50%）は返金いたしません。保守契約の途中解約については、最低契約期間（1年間）に満たない場合、残期間分の実費相当額を精算のうえ解約いただけます。",
	},
	{
		label: "動作環境",
		value: "特にございません。納品するサイトは主要なブラウザ（Google Chrome、Safari等）でご覧いただけます。",
	},
];

export default function TokushohoPage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-3xl px-6">
				<p className="eyebrow">特定商取引法に基づく表記</p>
				<h1 className="section-heading">LEGAL NOTICE</h1>
				<p className="mt-6 text-brown">
					特定商取引法に基づき、以下のとおり表記いたします。
				</p>

				<div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-white/60 bg-white/55 backdrop-blur-md">
					{rows.map((row) => (
						<div key={row.label} className="grid gap-1 p-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
							<dt className="text-sm font-semibold text-ink">{row.label}</dt>
							<dd className="text-sm text-brown">{row.value}</dd>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
