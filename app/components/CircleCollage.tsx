import Image, { type StaticImageData } from "next/image";

export type CollageImage = {
	src: StaticImageData;
	alt: string;
	/** コンテナに対する位置・サイズ（%）。参考サイトのHero実測比率をもとにした値 */
	top: number;
	left: number;
	size: number;
	/** 視線誘導のための奥行き。数字が大きいほど手前 */
	z: number;
	/** LCP対策：Hero内で最も視認性の高い1枚のみtrueにする */
	priority?: boolean;
};

type CircleCollageProps = {
	images: CollageImage[];
	className?: string;
};

/**
 * 参考サイトのHero最大の特徴：5枚の円形クロップ画像を大小差をつけて
 * 非対称に重ね合わせるコラージュ。均等グリッドや一般的なギャラリーには
 * しない。位置・サイズは実測データ由来の%値を各ページから渡す。
 */
export default function CircleCollage({ images, className = "" }: CircleCollageProps) {
	return (
		<div className={`relative ${className}`}>
			{images.map((img, i) => (
				<div
					key={i}
					className="absolute overflow-hidden rounded-full shadow-[0_20px_60px_-24px_rgba(51,49,45,0.35)]"
					style={{
						top: `${img.top}%`,
						left: `${img.left}%`,
						width: `${img.size}%`,
						aspectRatio: "1 / 1",
						zIndex: img.z,
					}}
				>
					<Image
						src={img.src}
						alt={img.alt}
						fill
						sizes="(min-width: 1024px) 40vw, 60vw"
						className="object-cover brightness-[1.16] contrast-[0.94] saturate-[0.96]"
						priority={img.priority}
					/>
				</div>
			))}
		</div>
	);
}
