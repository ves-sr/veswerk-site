import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import PillNav from "./components/PillNav";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import { siteName, siteUrl, legalName, snsLinks } from "./content/site";

const zenKakuGothic = Zen_Kaku_Gothic_New({
	variable: "--font-zen-kaku",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

const defaultTitle = "VESWERK｜吉祥寺・武蔵野のホームページ制作";
const defaultDescription =
	"吉祥寺・武蔵野エリアを中心に、業種や規模を問わず、必要なものに絞ったホームページを制作。デザインだけでなく、検索対策・スマートフォン対応・公開後の保守まで、一貫して手がけています。";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: defaultTitle,
		template: `%s｜${siteName}`,
	},
	description: defaultDescription,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "ja_JP",
		siteName,
		title: defaultTitle,
		description: defaultDescription,
		url: siteUrl,
	},
	twitter: {
		card: "summary_large_image",
		title: defaultTitle,
		description: defaultDescription,
	},
	verification: {
		google: "kUfap1hsACbxei7rB2cPalQyMhwAtLt9NJFI3YEnSIQ",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: siteName,
	legalName,
	url: siteUrl,
	description: defaultDescription,
	address: {
		"@type": "PostalAddress",
		addressLocality: "武蔵野市",
		addressRegion: "東京都",
		addressCountry: "JP",
	},
	areaServed: ["吉祥寺", "武蔵野市", "東京都"],
	sameAs: snsLinks.map((sns) => sns.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ja" className={`${zenKakuGothic.variable} h-full antialiased`}>
			<body className="flex min-h-full flex-col">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<Header />
				<MobileMenu />
				<main className="flex-1">{children}</main>
				<PillNav />
				<Footer />
			</body>
		</html>
	);
}
