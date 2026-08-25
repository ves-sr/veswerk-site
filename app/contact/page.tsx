import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
	title: "お問い合わせ｜VESWERK",
	description: "ホームページ制作のご相談・お見積りは、こちらのフォームからお気軽にお問い合わせください。",
};

export default function ContactPage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-3xl px-6">
				<p className="eyebrow">お問い合わせ</p>
				<h1 className="section-heading">CONTACT</h1>
				<p className="mt-6 text-brown">
					お問い合わせ、ご相談を受け付けております。
					<br />
					入力フォームに必要事項をご記入の上、お気軽にお問い合わせください。
				</p>

				<div className="mt-14">
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
