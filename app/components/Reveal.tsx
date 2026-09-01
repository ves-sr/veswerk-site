"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	as?: "div" | "li";
};

export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
	const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const Tag = as;

	return (
		<Tag
			ref={ref}
			data-visible={visible}
			className={`reveal ${className}`}
			style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
		>
			{children}
		</Tag>
	);
}
