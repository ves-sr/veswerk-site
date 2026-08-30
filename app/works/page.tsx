import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "実績｜VESWERK",
	description: "制作サンプルを公開準備中です。実績のある型をベースに、1件ずつ丁寧に仕上げています。",
};

export default function WorksPage() {
	return (
		<section className="py-32">
			<div className="mx-auto max-w-3xl px-6">
				<p className="eyebrow">実績</p>
				<h1 className="section-heading">WORKS</h1>

				<p className="mt-10 max-w-xl text-lg leading-loose text-ink">
					実績のあるデザインの型をベースに、お店ごとに丁寧に仕上げているため、
					制作サンプルの公開まで今しばらくお時間をいただいています。
				</p>

				<div className="mt-16 flex items-center gap-4 text-sm text-brown-light">
					<span className="h-px w-8 bg-border" />
					準備中
				</div>

				<p className="mt-6 max-w-xl text-brown">
					サンプルの公開をお待ちいただかなくても、まずはお話を伺うだけでも大丈夫です。
					お気軽にご相談ください。
				</p>

				<a
					href="/contact"
					className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink"
				>
					<span className="border-b border-accent pb-0.5">無料で相談する</span>
					<span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
				</a>
			</div>
		</section>
	);
}
