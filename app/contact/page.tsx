import type { Metadata } from "next";
import ContactForm from "./ContactForm";

const pageTitle = "お問い合わせ";
const pageDescription = "ホームページ制作のご相談・お見積りは、こちらのフォームからお気軽にお問い合わせください。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/contact" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/contact", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

export default function ContactPage() {
	return (
		<section className="relative pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-40">
			<div className="mx-auto max-w-2xl px-6">
				<div className="text-center">
					<p className="eyebrow">お問い合わせ</p>
					<h1 className="page-heading mt-4">CONTACT</h1>
					<p className="section-body mt-6 text-sm sm:text-base">
						お問い合わせ、ご相談を受け付けております。
						<br />
						入力フォームに必要事項をご記入の上、お気軽にお問い合わせください。
					</p>
				</div>

				<div className="mt-14 rounded-[2rem] border border-border bg-bg-sub p-6 sm:rounded-[2.5rem] sm:p-10">
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
