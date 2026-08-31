import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";
import ParticleBackground from "./components/ParticleBackground";

const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "VESWERK｜吉祥寺・武蔵野のホームページ制作",
	description:
		"吉祥寺・武蔵野エリアを中心に、業種や規模を問わず、必要なものに絞ったホームページを制作。デザインだけでなく、検索対策・スマートフォン対応・公開後の保守まで、一貫して手がけています。",
	verification: {
		google: "kUfap1hsACbxei7rB2cPalQyMhwAtLt9NJFI3YEnSIQ",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
			<body className="flex min-h-full flex-col">
				<IntroLoader />
				<ParticleBackground />
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
