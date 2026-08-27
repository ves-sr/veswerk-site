import PlanCards from "./components/PlanCards";

export default function Home() {
	return (
		<>
			<section className="relative">
				<div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
					<p className="eyebrow">HOMEPAGE PRODUCTION</p>
					<h1 className="section-heading section-heading--hero max-w-2xl">
						吉祥寺・武蔵野の
						<br className="hidden sm:inline" />
						お店に、ちょうどいい
						<br className="hidden sm:inline" />
						ホームページを。
					</h1>
					<p className="mt-6 max-w-xl text-brown">
						吉祥寺・武蔵野エリアの個人経営カフェを中心に、小さなお店のホームページを専門に、
						要件定義から保守まで、ひとりで一貫して制作しています。
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<a
							href="/contact"
							className="btn-sweep rounded-full bg-accent px-7 py-3 text-sm font-medium text-white"
						>
							無料で相談する
						</a>
						<a
							href="/works"
							className="rounded-full border border-border bg-white/70 px-7 py-3 text-sm font-medium text-ink hover:bg-white"
						>
							制作サンプルを見る
						</a>
					</div>
				</div>
			</section>

			<section id="plan" className="border-t border-border bg-white/55 py-24">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">ご利用料金</p>
					<h2 className="section-heading">FEE</h2>
					<p className="mt-6 max-w-2xl text-brown">
						実績作りのため、現在は特別価格でホームページ制作を承っています。
					</p>

					<PlanCards />
				</div>
			</section>
		</>
	);
}
