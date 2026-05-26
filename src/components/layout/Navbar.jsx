import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
	{ label: "Home", to: "/" },
	{ label: "About Us", to: "/about" },
	{ label: "Services", to: "/services" },
	{ label: "Our Team", to: "/team" },
	{ label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleLinkClick = () => setMenuOpen(false);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-300 ${
				scrolled ? "shadow-md" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link
						to="/"
						onClick={handleLinkClick}
						className="flex items-center gap-1 no-underline"
					>
						<img
							src={logo}
							alt="Sleece Technologies Logo"
							className="h-20 w-auto object-contain"
						/>
						<div className="flex flex-col leading-none">
							<span className="text-brand-blue font-bold text-lg tracking-wide">
								SLEECE
							</span>
							<span className="text-brand-green text-sm tracking-widest font-bold">
								TECHNOLOGIES
							</span>
						</div>
					</Link>

					{/* Desktop links */}
					<div className="hidden md:flex items-center gap-1">
						{navLinks.map(({ label, to }) => (
							<NavLink
								key={to}
								to={to}
								end={to === "/"}
								onClick={handleLinkClick}
								className={({ isActive }) =>
									`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b-2 ${
										isActive
											? "text-brand-blue border-brand-green"
											: "text-gray-500 border-transparent hover:text-brand-blue hover:bg-brand-blue/5"
									}`
								}
							>
								{label}
							</NavLink>
						))}
					</div>

					{/* Mobile hamburger */}
					<button
						className="md:hidden text-brand-blue p-2 rounded-md hover:bg-brand-blue/5 transition-colors"
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle navigation menu"
					>
						{menuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>

			{/* Mobile dropdown */}
			{menuOpen && (
				<div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2">
					{navLinks.map(({ label, to }) => (
						<NavLink
							key={to}
							to={to}
							end={to === "/"}
							onClick={handleLinkClick}
							className={({ isActive }) =>
								`block px-3 py-2.5 rounded-md text-sm font-medium mb-1 transition-colors duration-200 border-l-2 ${
									isActive
										? "text-brand-blue bg-brand-blue/5 border-brand-green"
										: "text-gray-500 border-transparent hover:text-brand-blue hover:bg-brand-blue/5"
								}`
							}
						>
							{label}
						</NavLink>
					))}
				</div>
			)}
		</nav>
	);
}
