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
		"吉祥寺・武蔵野エリアを中心に、業種や規模を問わず、必要なものに絞ったホームページを制作。デザイン・SEO・スマートフォン対応から公開後の保守まで、すべてをひとりで担当しています。",
};

const icons = [OrganizeIllustration, DesignIllustration, SearchIllustration, SupportIllustration];

const servicesWithIcons = services.map((item, i) => {
	const Icon = icons[i];
	return { ...item, icon: <Icon className="h-9 w-9" /> };
});

export default function ServicePage() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="eyebrow">事業紹介</p>
				<h1 className="section-heading">SERVICE</h1>

				<div className="mt-16 flex flex-col">
					{serviceLeads.map((lead, i) => (
						<div
							key={lead.heading}
							className="grid gap-4 border-t border-border py-12 first:border-t-0 first:pt-0 sm:grid-cols-[6rem_1fr] sm:gap-8"
						>
							<span
								aria-hidden="true"
								className="text-xs font-semibold tracking-[0.25em] text-brown-light sm:pt-1.5"
							>
								{lead.label}
							</span>
							<div className={`max-w-xl ${i % 2 === 1 ? "sm:ml-auto" : ""}`}>
								<h2 className="text-xl font-semibold text-ink sm:text-2xl">{lead.heading}</h2>
								<div className="mt-3 flex flex-col gap-3">
									{lead.body.map((p) => (
										<p key={p} className="text-brown">
											{p}
										</p>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<NumberedTimeline items={servicesWithIcons} />

				<div className="mt-20 rounded-3xl border border-white/60 bg-white/55 p-8 text-center shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md sm:p-10">
					<h2 className="text-xl font-semibold text-ink sm:text-2xl">{serviceClosing.heading}</h2>
					<p className="mt-3 text-brown">{serviceClosing.body}</p>
					<a
						href="/contact"
						className="btn-sweep mt-6 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-white"
					>
						無料で相談する
					</a>
				</div>
			</div>
		</section>
	);
}
