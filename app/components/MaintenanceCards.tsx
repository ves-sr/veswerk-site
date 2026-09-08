import { maintenanceHighlights, maintenanceBackground } from "../content/maintenance";
import Reveal from "./Reveal";

/**
 * 保守内容を「お客様が実感しやすい項目」と「裏側で継続している技術的な保守」の
 * 2段階に分け、視覚的な重みを変える。
 */
export default function MaintenanceCards() {
	return (
		<div className="mt-8">
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{maintenanceHighlights.map((item, i) => (
					<Reveal key={item.key} delay={i * 70} className="min-w-0">
						<div className="h-full rounded-[1.5rem] border border-border bg-bg p-6">
							<h3 className="text-base font-medium text-ink">{item.title}</h3>
							<p
								className="mt-2 text-sm leading-relaxed text-text"
								style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
							>
								{/* 390px幅で読点だけが行頭に孤立するため、「る、と」の3文字だけ分断されないようにする */}
								{item.description.includes("見つからなくなる、といった") ? (
									(() => {
										const [before, after] = item.description.split("見つからなくなる、と");
										return (
											<>
												{before}見つからなくな
												<span className="whitespace-nowrap">る、と</span>
												{after}
											</>
										);
									})()
								) : item.description.endsWith("（月2回まで）。") ? (
									<>
										{item.description.slice(0, -8)}
										<span className="whitespace-nowrap">（月2回まで）。</span>
									</>
								) : (
									item.description
								)}
							</p>
						</div>
					</Reveal>
				))}
			</div>

			<div className="mt-10 max-w-3xl">
				<p className="eyebrow">このほか、継続して見守っています</p>
				<dl className="mt-3 divide-y divide-border">
					{maintenanceBackground.map((item) => (
						<div key={item.key} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4">
							<dt className="shrink-0 text-sm font-medium text-ink sm:w-56">{item.title}</dt>
							{item.key === "backup" ? (
								// この文だけkeep-allだと320px幅で読点が単独行に孤立するため、
								// 自然な改行に任せつつ末尾の一文だけ分断されないようにする。
								<dd className="text-sm text-text-soft" style={{ wordBreak: "normal", overflowWrap: "break-word" }}>
									{item.description.slice(0, -14)}
									<span className="whitespace-nowrap">{item.description.slice(-14)}</span>
								</dd>
							) : (
								<dd
									className="text-sm text-text-soft"
									style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
								>
									{item.description}
								</dd>
							)}
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
