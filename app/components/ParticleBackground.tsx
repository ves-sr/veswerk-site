"use client";

import { useEffect, useRef } from "react";

// tech-drone.co.jp を参考にした、控えめに動く点と線のネットワーク背景。
// 軽量に保つため外部ライブラリは使わず、canvas + requestAnimationFrame のみで実装する。
export default function ParticleBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		let width = 0;
		let height = 0;
		let dpr = Math.min(window.devicePixelRatio || 1, 2);

		type Point = { x: number; y: number; vx: number; vy: number };
		let points: Point[] = [];

		const POINT_DENSITY = 14000; // 面積あたり1点。小さいほど密度が上がる
		const LINK_DISTANCE = 150;

		function resize() {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas!.width = width * dpr;
			canvas!.height = height * dpr;
			canvas!.style.width = `${width}px`;
			canvas!.style.height = `${height}px`;
			ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

			// 大画面でもO(n^2)の線描画が重くならないよう上限を設ける
			const count = Math.min(90, Math.max(18, Math.floor((width * height) / POINT_DENSITY)));
			points = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.15,
				vy: (Math.random() - 0.5) * 0.15,
			}));
		}

		function step() {
			ctx!.clearRect(0, 0, width, height);

			for (const p of points) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > width) p.vx *= -1;
				if (p.y < 0 || p.y > height) p.vy *= -1;
			}

			ctx!.fillStyle = "rgba(169, 138, 108, 0.6)";
			for (const p of points) {
				ctx!.beginPath();
				ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
				ctx!.fill();
			}

			for (let i = 0; i < points.length; i++) {
				for (let j = i + 1; j < points.length; j++) {
					const a = points[i];
					const b = points[j];
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < LINK_DISTANCE) {
						ctx!.strokeStyle = `rgba(169, 138, 108, ${0.22 * (1 - dist / LINK_DISTANCE)})`;
						ctx!.lineWidth = 1;
						ctx!.beginPath();
						ctx!.moveTo(a.x, a.y);
						ctx!.lineTo(b.x, b.y);
						ctx!.stroke();
					}
				}
			}
		}

		let raf = 0;
		function loop() {
			step();
			raf = requestAnimationFrame(loop);
		}

		resize();
		if (prefersReducedMotion) {
			step();
		} else {
			loop();
		}

		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen"
		/>
	);
}
