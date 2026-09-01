import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";

type ImageTextRowProps = {
	image: StaticImageData;
	imageAlt: string;
	eyebrow: string;
	heading: string;
	body: string[];
	reverse?: boolean;
	cta?: { label: string; href: string };
};

/**
 * 参考サイトのfeature__habitパターン：正方形画像とテキストを左右交互に
 * 並べるジグザグ構成。大きな余白と正方形クロップで写真を主役として見せる。
 */
export default function ImageTextRow({ image, imageAlt, eyebrow, heading, body, reverse = false, cta }: ImageTextRowProps) {
	return (
		<div className={`flex flex-col items-center gap-10 sm:gap-14 lg:flex-row lg:gap-20 ${reverse ? "lg:flex-row-reverse" : ""}`}>
			<Reveal className="w-full lg:w-1/2">
				<div className="relative aspect-square w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
					<Image
						src={image}
						alt={imageAlt}
						fill
						sizes="(min-width: 1024px) 42vw, 88vw"
						className="object-cover"
					/>
				</div>
			</Reveal>
			<Reveal className="w-full lg:w-1/2" delay={120}>
				<p className="eyebrow">{eyebrow}</p>
				<h3 className="section-heading mt-3 text-left">{heading}</h3>
				<div className="section-body mt-5 flex flex-col gap-4 text-sm sm:text-base">
					{body.map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</div>
				{cta && (
					<a href={cta.href} className="btn-outline mt-8 inline-flex">
						{cta.label}
					</a>
				)}
			</Reveal>
		</div>
	);
}
