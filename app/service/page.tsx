import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import NumberedFeature from "../components/NumberedFeature";
import Reveal from "../components/Reveal";
import { serviceLeads, serviceClosing } from "../content/service";
import { services } from "../content/services";

const [about, ...situations] = serviceLeads;

const serviceItems = services.map((s) => ({
	no: s.no,
	title: s.title,
	titleEn: s.titleEn,
	desc: s.desc,
}));

const pageTitle = "事業紹介";
const pageDescription =
	"吉祥寺・武蔵野エリアを中心に、業種や規模を問わず、必要なものに絞ったホームページを制作。デザイン・SEO・スマートフォン対応から公開後の保守まで、一貫して対応しています。";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	alternates: { canonical: "/service" },
	openGraph: { title: `${pageTitle}｜VESWERK`, description: pageDescription, url: "/service", images: ["/opengraph-image.jpg"] },
	twitter: { title: `${pageTitle}｜VESWERK`, description: pageDescription },
};

export default function ServicePage() {
	return (
		<>
			<section className="relative pt-28 pb-16 sm:pt-32 lg:pt-40">
				<div className="mx-auto max-w-6xl px-6">
					<p className="eyebrow">事業紹介</p>
					<h1 className="page-heading mt-4 max-w-xl">
						ホームページを作る。
						<br />
						その先まで考える。
					</h1>
					<div className="section-body mt-6 flex max-w-lg flex-col gap-4 text-sm sm:text-base">
						{about.body.map((p, i) => (
							<p key={i}>{p}</p>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-border py-20 sm:py-24">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
						{situations.map((lead, i) => (
							<Reveal key={lead.label} delay={i * 80}>
								<p className="eyebrow">{lead.label}</p>
								<h2 className="subsection-heading mt-3">{lead.heading}</h2>
								<div className="section-body mt-3 flex flex-col gap-3 text-sm">
									{lead.body.map((p, j) => (
										<p key={j}>{p}</p>
									))}
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-border py-24 sm:py-28 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading en="WHAT WE DO" ja="4つのステップで進めます" />
					<div className="mt-16">
						<NumberedFeature items={serviceItems} verticalLabel="制作の流れ" />
					</div>
				</div>
			</section>

			<section className="border-t border-border bg-bg-sub py-24 sm:py-28">
				<Reveal>
					<div className="mx-auto max-w-2xl px-6 text-center">
						<h2 className="section-heading sm:whitespace-nowrap sm:text-[1.75rem]!">{serviceClosing.heading}</h2>
						<p className="section-body mt-4 text-sm sm:text-base">{serviceClosing.body}</p>
						<a href="/contact" className="btn-fill mt-8 inline-flex">
							無料で相談する
						</a>
					</div>
				</Reveal>
			</section>
		</>
	);
}
