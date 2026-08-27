import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "VESWERK｜吉祥寺・武蔵野の小さなお店のためのホームページ制作",
	description:
		"吉祥寺・武蔵野エリアの個人経営カフェを中心に、小さなお店のホームページを専門に、要件定義から保守まで、ひとりで一貫して制作しています。",
	verification: {
		google: "kUfap1hsACbxei7rB2cPalQyMhwAtLt9NJFI3YEnSIQ",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
			<body className="flex min-h-full flex-col">
				<ParticleBackground />
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
