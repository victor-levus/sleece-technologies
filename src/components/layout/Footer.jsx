import { Link } from "react-router-dom";
import {
	MapPin,
	Phone,
	Mail,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
} from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
	{ label: "Home", to: "/" },
	{ label: "About Us", to: "/about" },
	{ label: "Services", to: "/services" },
	{ label: "Our Team", to: "/team" },
	{ label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
	{ label: "Software Development", to: "/services" },
	{ label: "ICT Infrastructure", to: "/services" },
	{ label: "Power Solutions", to: "/services" },
	{ label: "Networking & Connectivity", to: "/services" },
	{ label: "Security Systems", to: "/services" },
	{ label: "ICT Consulting", to: "/services" },
];

const socials = [
	{ icon: <Facebook size={18} />, href: "#", label: "Facebook" },
	{ icon: <Twitter size={18} />, href: "#", label: "Twitter" },
	{ icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
	{ icon: <Instagram size={18} />, href: "#", label: "Instagram" },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-brand-blue text-white">
			{/* Main footer content */}
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand column */}
					<div className="lg:col-span-1">
						{/* Logo */}
						<Link to="/#" className="flex items-center gap-2 no-underline mb-4">
							<img
								src={logo}
								alt="Sleece Technologies Logo"
								className="h-14 w-auto object-contain"
							/>
							<div className="flex flex-col leading-none">
								<span className="text-gray-400 font-bold text-lg tracking-wide">
									SLEECE
								</span>
								<span className="text-brand-green text-sm tracking-widest font-bold">
									TECHNOLOGIES
								</span>
							</div>
						</Link>

						<p className="text-white/60 text-sm leading-relaxed mb-6">
							Delivering cutting-edge ICT infrastructure, power solutions,
							networking, and security systems across Nigeria and beyond.
						</p>

						{/* Social icons */}
						<div className="flex items-center gap-3">
							{socials.map(({ icon, href, label }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-green hover:text-white transition-colors duration-200"
								>
									{icon}
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
							Quick Links
						</h4>
						<ul className="space-y-2.5">
							{quickLinks.map(({ label, to }) => (
								<li key={label}>
									<Link
										to={to}
										className="text-white/60 text-sm hover:text-brand-green transition-colors duration-200 flex items-center gap-1.5 group"
									>
										<span className="w-1 h-1 rounded-full bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
							Our Services
						</h4>
						<ul className="space-y-2.5">
							{serviceLinks.map(({ label, to }) => (
								<li key={label}>
									<Link
										to={to}
										className="text-white/60 text-sm hover:text-brand-green transition-colors duration-200 flex items-center gap-1.5 group"
									>
										<span className="w-1 h-1 rounded-full bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
							Contact Us
						</h4>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<MapPin
									size={16}
									className="text-brand-green mt-0.5 shrink-0"
								/>
								<span className="text-white/60 text-sm leading-relaxed">
									Plot 2157 B07 Cadastral Zone,
									<br />
									Kamtape, Abuja FCT, Nigeria
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone size={16} className="text-brand-green shrink-0" />
								<a
									href="tel:+2348030724271"
									className="text-white/60 text-sm hover:text-brand-green transition-colors"
								>
									+234 803 0724 271
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail size={16} className="text-brand-green shrink-0" />
								<a
									href="mailto:info@sleecetechnologies.com.ng"
									className="text-white/60 text-sm hover:text-brand-green transition-colors"
								>
									info@sleecetechnologies.com.ng
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
					<p className="text-white/40 text-sm text-center sm:text-left">
						&copy; {year} Sleece Technologies Limited. All rights reserved.
					</p>
					<p className="text-white/30 text-xs">
						Built with excellence &mdash; Powered by innovation.
					</p>
				</div>
			</div>
		</footer>
	);
}
