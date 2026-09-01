import type { Metadata } from "next";
import { siteName, legalName } from "../content/site";

const pageTitle = "プライバシーポリシー";
const pageDescription = "VESWERKにおける個人情報の取得・利用目的・第三者提供の有無など、プライバシーポリシーについて説明します。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/privacy-policy" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/privacy-policy", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

export default function PrivacyPolicyPage() {
	return (
		<section className="pt-28 pb-24 sm:pt-32">
			<div className="mx-auto max-w-3xl px-6">
				<p className="eyebrow">プライバシーポリシー</p>
				<h1 className="page-heading mt-4">PRIVACY POLICY</h1>

				<div className="mt-10 flex flex-col gap-8 text-text">
					<p>
						{siteName}（以下「当方」といいます）は、お客様の個人情報を大切に取り扱います。
						本ページでは、当方が取得する個人情報の取り扱いについて説明します。
					</p>

					<div>
						<h2 className="text-lg font-medium text-ink">運営者情報</h2>
						<p className="mt-2">
							屋号：{legalName}（個人事業主として運営、サイト名「{siteName}」）
						</p>
					</div>

					<div>
						<h2 className="text-lg font-medium text-ink">取得する情報</h2>
						<p className="mt-2">お問い合わせフォームより、以下の情報をご入力いただく場合があります。</p>
						<ul className="mt-2 list-disc pl-5">
							<li>お名前</li>
							<li>お店・屋号名</li>
							<li>メールアドレス</li>
							<li>電話番号</li>
							<li>お問い合わせ内容</li>
						</ul>
					</div>

					<div>
						<h2 className="text-lg font-medium text-ink">利用目的</h2>
						<p className="mt-2">取得した情報は、以下の目的の範囲内で利用します。</p>
						<ul className="mt-2 list-disc pl-5">
							<li>お問い合わせ・ご相談への対応、お見積りのご案内</li>
							<li>ご契約後の制作・保守業務に関するご連絡</li>
							<li>制作サンプル・実績としてご案内する場合の事前確認（掲載前に必ずお客様の許可を得ます）</li>
						</ul>
					</div>

					<div>
						<h2 className="text-lg font-medium text-ink">第三者への提供</h2>
						<p className="mt-2">
							取得した個人情報は、お客様の同意がある場合、または法令に基づく場合を除き、第三者に提供することはありません。
						</p>
					</div>

					<div>
						<h2 className="text-lg font-medium text-ink">外部サービスの利用</h2>
						<p className="mt-2">
							お問い合わせフォームの送信・メールでのご連絡にあたり、外部の送信サービスを利用する場合があります。
							この場合、当該サービスの提供事業者にも情報が渡りますが、目的外の利用がないよう管理された事業者を選定します。
						</p>
					</div>

					<div>
						<h2 className="text-lg font-medium text-ink">アクセス解析について</h2>
						<p className="mt-2">
							サイトの利用状況を把握するため、Googleアナリティクス等のアクセス解析ツールを利用する場合があります。
							これらのツールはCookieを使用して個人を特定しない形で情報を収集しますが、
							ブラウザの設定によりCookieを無効にすることも可能です。
						</p>
					</div>

					<div>
						<h2 className="text-lg font-medium text-ink">開示・訂正・削除について</h2>
						<p className="mt-2">
							ご自身の個人情報の開示・訂正・削除をご希望の場合は、下記のお問い合わせ窓口までご連絡ください。
							内容を確認のうえ、合理的な範囲で速やかに対応いたします。
						</p>
					</div>

					<div>
						<h2 className="text-lg font-medium text-ink">お問い合わせ窓口</h2>
						<p className="mt-2">
							個人情報の取り扱いに関するお問い合わせは、
							<a href="/contact" className="text-accent underline underline-offset-2">
								お問い合わせフォーム
							</a>
							よりご連絡ください。
						</p>
					</div>

					<div>
						<h2 className="text-lg font-medium text-ink">本ポリシーの改定について</h2>
						<p className="mt-2">
							本ポリシーの内容は、法令の変更や事業内容の変化に応じて、予告なく改定する場合があります。
							改定後の内容は、本ページに掲載した時点で効力を生じるものとします。
						</p>
					</div>

					<p className="text-sm text-text-soft">制定日：2026年8月25日</p>
				</div>
			</div>
		</section>
	);
}
