"use client";

import { useState } from "react";
import { faqItems } from "../content/faq";
import Reveal from "./Reveal";

/**
 * 参考サイトのQ&Aセクションに倣ったアコーディオン。1件ずつ開閉し、
 * 開いた項目のみ回答が展開される（複数同時展開はしない、静かな挙動）。
 */
export default function FaqAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="mx-auto flex max-w-3xl flex-col divide-y divide-border">
			{faqItems.map((item, i) => {
				const isOpen = openIndex === i;
				return (
					<Reveal key={item.q} delay={i * 40}>
						<div>
							<button
								type="button"
								onClick={() => setOpenIndex(isOpen ? null : i)}
								aria-expanded={isOpen}
								className="flex w-full items-start gap-5 py-6 text-left"
							>
								<span className="eyebrow !text-ink shrink-0 text-base">Q{i + 1}</span>
								<span className="subsection-heading min-w-0 flex-1 !text-base font-medium">{item.q}</span>
								<span
									aria-hidden="true"
									className="relative mt-1 h-4 w-4 shrink-0 text-text-soft transition-transform duration-300"
									style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
								>
									<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
										<path d="M3 6l5 5 5-5" />
									</svg>
								</span>
							</button>
							<div
								className="grid transition-[grid-template-rows] duration-400 ease-out"
								style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
							>
								<div className="overflow-hidden">
									<p className="section-body pb-6 pl-9 text-sm sm:text-base">{item.a}</p>
								</div>
							</div>
						</div>
					</Reveal>
				);
			})}
		</div>
	);
}
