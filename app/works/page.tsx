import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "実績｜VESWERK",
	description: "制作サンプルを公開準備中です。テンプレートを使わず、1件ずつ丁寧に作り込んでいます。",
};

export default function WorksPage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-3xl px-6">
				<p className="eyebrow">実績</p>
				<h1 className="section-heading">WORKS</h1>

				<div className="mt-10 rounded-3xl border border-white/60 bg-white/55 p-10 shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md">
					<span className="inline-block w-fit rounded-full border border-border bg-cream px-3 py-1 text-xs text-brown">
						準備中
					</span>
					<p className="mt-6 text-lg font-semibold text-ink">
						1件ずつ丁寧に仕上げているところです。
					</p>
					<p className="mt-4 text-brown">
						テンプレートを流用せず、お店ごとにオーダーメイドで設計しているため、
						制作サンプルの公開まで今しばらくお時間をいただいています。
						近日中に、実際の制作サンプルをこちらでご覧いただけるようになる予定です。
					</p>
					<p className="mt-4 text-brown">
						サンプルの公開をお待ちいただかなくても、まずはお話を伺うだけでも大丈夫です。
						お気軽にご相談ください。
					</p>

					<a
						href="/contact"
						className="btn-sweep mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-white"
					>
						無料で相談する
					</a>
				</div>
			</div>
		</section>
	);
}
