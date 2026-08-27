import { maintenanceItems } from "../content/maintenance";

export default function MaintenanceCards() {
	return (
		<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{maintenanceItems.map((item) => (
				<div
					key={item.key}
					className={`rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_8px_30px_-12px_rgba(107,90,72,0.35)] backdrop-blur-md ${
						item.featured ? "sm:col-span-2 lg:col-span-2" : ""
					}`}
				>
					<h3 className="text-lg font-bold text-ink">{item.title}</h3>
					<p className="mt-2 text-sm text-brown">{item.description}</p>
				</div>
			))}
		</div>
	);
}
