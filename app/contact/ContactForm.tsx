"use client";

import { useState } from "react";

// 静的サイトのためバックエンドを持たず、FormSubmit（外部の代行送信サービス）経由でメールに転送する。
// 初回送信のみ、宛先メールアドレスに届く有効化リンクのクリックが必要。
const FORM_ENDPOINT = "https://formsubmit.co/ajax/veswerk@gmail.com";

const inquiryTypes = [
	"新規のご相談",
	"ホームページ制作について",
	"保守・運用について",
	"料金について",
	"取材・提携のご相談",
	"その他",
];

const inputClass =
	"w-full rounded-2xl border border-border bg-bg px-5 py-3.5 text-ink placeholder:text-text-soft/70 outline-none transition-colors focus:border-accent";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [sending, setSending] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(false);
		setSending(true);

		const formData = new FormData(e.currentTarget);
		const payload = Object.fromEntries(formData.entries());

		try {
			const res = await fetch(FORM_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify(payload),
			});
			if (!res.ok) throw new Error("送信に失敗しました");
			setSubmitted(true);
		} catch {
			setError(true);
		} finally {
			setSending(false);
		}
	}

	if (submitted) {
		return (
			<div className="rounded-3xl border border-border bg-bg p-10 text-center">
				<p className="text-lg font-medium text-ink">お問い合わせありがとうございます</p>
				<p className="mt-3 text-text">内容を確認の上、通常1〜2営業日以内にご返信いたします。</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-8">
			<div>
				<label htmlFor="name" className="mb-2 block font-medium text-ink">
					お名前<span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 align-middle text-[0.65rem] font-medium text-accent">必須</span>
				</label>
				<input id="name" name="name" type="text" required placeholder="山田 太郎" className={inputClass} />
			</div>

			<div>
				<label htmlFor="shop" className="mb-2 block font-medium text-ink">
					お店・屋号名
				</label>
				<input id="shop" name="shop" type="text" placeholder="例）カフェ○○" className={inputClass} />
			</div>

			<div>
				<label htmlFor="email" className="mb-2 block font-medium text-ink">
					メールアドレス<span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 align-middle text-[0.65rem] font-medium text-accent">必須</span>
				</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					placeholder="例）xxxx@xxxx.co.jp"
					className={inputClass}
				/>
			</div>

			<div>
				<label htmlFor="phone" className="mb-2 block font-medium text-ink">
					電話番号
				</label>
				<input id="phone" name="phone" type="tel" placeholder="例）000-0000-0000" className={inputClass} />
			</div>

			<fieldset>
				<legend className="mb-3 font-medium text-ink">
					お問い合わせの種類<span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 align-middle text-[0.65rem] font-medium text-accent">必須</span>
				</legend>
				<div className="grid gap-3 sm:grid-cols-2">
					{inquiryTypes.map((type) => (
						<label
							key={type}
							className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-ink transition-colors has-checked:border-accent has-checked:bg-accent-soft"
						>
							<input type="radio" name="inquiryType" value={type} required className="h-4 w-4 accent-[var(--accent)]" />
							{type}
						</label>
					))}
				</div>
			</fieldset>

			<div>
				<label htmlFor="message" className="mb-2 block font-medium text-ink">
					お問い合わせ内容<span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 align-middle text-[0.65rem] font-medium text-accent">必須</span>
				</label>
				<textarea
					id="message"
					name="message"
					required
					rows={6}
					placeholder="お問い合わせ内容をご記入ください"
					className={inputClass}
				/>
			</div>

			<label className="flex cursor-pointer items-start gap-3 text-sm text-text">
				<input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--accent)]" />
				<span>
					<a href="/privacy-policy" target="_blank" rel="noopener" className="text-accent underline underline-offset-2">
						プライバシーポリシー
					</a>
					に同意する
				</span>
			</label>

			{error && (
				<p className="text-sm text-red-600">
					送信に失敗しました。時間を置いて再度お⁠試しいただくか、直接{" "}
					<a href="mailto:veswerk@gmail.com" className="underline underline-offset-2">
						veswerk@gmail.com
					</a>{" "}
					までご連絡ください。
				</p>
			)}

			<button type="submit" disabled={sending} className="btn-fill self-start disabled:opacity-60">
				{sending ? "送信中…" : "送信する"}
			</button>
		</form>
	);
}
