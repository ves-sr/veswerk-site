import Reveal from "./Reveal";
import type { GrowthStage } from "../content/vision";

type GrowthPathProps = {
	items: readonly GrowthStage[];
};

/**
 * Web→System→AI/Data→Drone→Futureと技術領域が広がっていく様子を、
 * ノード＋接続線のタイムライン状に見せる。すでに実践・蓄積している領域（established）は
 * 塗りつぶし、これから広げていく領域はアウトラインで区別する。
 *
 * 接続線は各ノードの内側に1本ずつ持たせ、そのノードの中心から次のノードの中心まで
 * 伸ばす（区間ごとに独立させることで、モバイルで行の高さが説明文の長さによって
 * バラついても、線が次のノードの中心からズレたり通り越したりしない）。
 * ノードは h-14 w-14（56px）固定のため、中心オフセットの top-7/left-7（28px）は
 * ノードのサイズと対で変更する必要がある。
 */
export default function GrowthPath({ items }: GrowthPathProps) {
	return (
		<div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
			{items.map((stage, i) => (
				<Reveal
					key={stage.no}
					delay={i * 80}
					className="relative flex gap-5 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:px-2 lg:text-center"
				>
					{i < items.length - 1 && (
						<span
							aria-hidden="true"
							className="absolute top-7 left-7 h-[calc(100%+2.5rem)] w-px bg-border lg:top-7 lg:left-1/2 lg:h-px lg:w-full"
						/>
					)}
					<span
						className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-sm font-medium ${
							stage.established ? "border-ink bg-ink text-white" : "border-border bg-bg text-text-soft"
						}`}
						aria-hidden="true"
					>
						{stage.no}
					</span>
					<div className="lg:mt-5">
						<p className="eyebrow">{stage.en}</p>
						<p className="mt-1 text-base font-medium text-ink">{stage.label}</p>
						<span className="mt-2 inline-block rounded-full border border-border px-3 py-1 text-xs text-text-soft">
							{stage.tag}
						</span>
						<p className="section-body mt-3 text-sm lg:mx-auto lg:max-w-[13rem]">{stage.desc}</p>
					</div>
				</Reveal>
			))}
		</div>
	);
}
