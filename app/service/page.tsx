import type { Metadata } from "next";
import NumberedTimeline from "../components/NumberedTimeline";
import { services } from "../content/services";
import { serviceLeads, serviceClosing } from "../content/service";
import {
	OrganizeIllustration,
	DesignIllustration,
	SearchIllustration,
	SupportIllustration,
} from "../components/ServiceIllustrations";

export const metadata: Metadata = {
	title: "事業紹介｜VESWERK",
	description:
		"吉祥寺・武蔵野エリアを中心に、業種や規模を問わず、必要なものに絞ったホームページを制作。デザイン・SEO・スマートフォン対応から公開後の保守まで、一貫して対応しています。",
};

const icons = [OrganizeIllustration, DesignIllustration, SearchIllustration, SupportIllustration];

const servicesWithIcons = services.map((item, i) => {
	const Icon = icons[i];
	return { ...item, icon: <Icon className="h-9 w-9" /> };
});

const [about, ...situations] = serviceLeads;

export default function ServicePage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="eyebrow">事業紹介</p>
				<h1 className="section-heading max-w-2xl">
					ホームページを作る。
					<br />
					その先まで考える。
				</h1>
				<div className="mt-6 flex max-w-xl flex-col gap-3">
					{about.body.map((p) => (
						<p key={p} className="text-brown">
							{p}
						</p>
					))}
				</div>
			</div>

			<div className="mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-24">
				<div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
					{situations.map((lead) => (
						<div key={lead.heading}>
							<span className="text-xs font-semibold tracking-[0.25em] text-brown-light">
								{lead.label}
							</span>
							<h2 className="subsection-heading mt-3">{lead.heading}</h2>
							<div className="mt-3 flex flex-col gap-2">
								{lead.body.map((p) => (
									<p key={p} className="text-sm leading-relaxed text-brown">
										{p}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-24">
				<p className="eyebrow">具体的にできること</p>
				<h2 className="subsection-heading">4つのステップで進めます</h2>
				<NumberedTimeline items={servicesWithIcons} />
			</div>

			<div className="mx-auto mt-24 max-w-6xl px-6">
				<div className="border-t border-border pt-16 text-center">
					<h2 className="subsection-heading">{serviceClosing.heading}</h2>
					<p className="mt-3 text-brown">{serviceClosing.body}</p>
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
