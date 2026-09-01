import type { MetadataRoute } from "next";
import { siteUrl } from "./content/site";

export const dynamic = "force-static";

const routes = ["", "/service", "/why-veswerk", "/works", "/pricing", "/contact", "/privacy-policy", "/tokushoho"];

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map((route) => ({
		url: `${siteUrl}${route}`,
		lastModified: new Date(),
	}));
}
