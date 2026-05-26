import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/useInView";
import HeroBackground from "@/components/layout/HeroBackground";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Send,
	CheckCircle2,
	AlertCircle,
	Loader2,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
} from "lucide-react";

// ── Replace these with your EmailJS credentials ──
const EMAILJS_SERVICE_ID = "service_ory3cfk";
const EMAILJS_TEMPLATE_ID = "template_qnud4z7";
const EMAILJS_PUBLIC_KEY = "S0PirBaCzDOkmtXjj";

const contactDetails = [
	{
		icon: <MapPin size={22} />,
		label: "Our Office",
		lines: ["Plot 2157 B07 Cadastral Zone,", "Kamtape, Abuja FCT, Nigeria"],
	},
	{
		icon: <Phone size={22} />,
		label: "Phone",
		lines: ["+234 803 0724 271"],
		href: "tel:+2348030724271",
	},
	{
		icon: <Mail size={22} />,
		label: "Email",
		lines: ["info@sleecetechnologies.com.ng"],
		href: "mailto:info@sleecetechnologies.com.ng",
	},
	{
		icon: <Clock size={22} />,
		label: "Business Hours",
		lines: ["Monday – Friday: 8:00am – 6:00pm", "Saturday: 9:00am – 2:00pm"],
	},
];

const socials = [
	{ icon: <Facebook size={18} />, href: "#", label: "Facebook" },
	{ icon: <Twitter size={18} />, href: "#", label: "Twitter" },
	{ icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
	{ icon: <Instagram size={18} />, href: "#", label: "Instagram" },
];

const subjects = [
	"Software Development",
	"ICT Infrastructure",
	"Power Solutions",
	"Networking & Connectivity",
	"Security Systems",
	"ICT Consulting & Training",
	"General Enquiry",
];

export default function Contact() {
	const formRef = useRef(null);
	const [status, setStatus] = useState("idle"); // idle | sending | success | error
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const [heroRef, heroInView] = useInView();
	const [formSectionRef, formInView] = useInView();
	const [mapRef, mapInView] = useInView();

	const handleChange = (e) =>
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (status === "sending") return;
		setStatus("sending");
		try {
			await emailjs.sendForm(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				formRef.current,
				EMAILJS_PUBLIC_KEY,
			);
			setStatus("success");
			setForm({ name: "", email: "", phone: "", subject: "", message: "" });
		} catch {
			setStatus("error");
		}
	};

	return (
		<div className="min-h-screen">
			{/* ── Page Hero ── */}
			<HeroBackground className="py-24">
				<div ref={heroRef} className="max-w-4xl mx-auto px-6 text-center">
					<span
						className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${heroInView ? "animate-fade-in" : "opacity-0"}`}
					>
						Get In Touch
					</span>
					<h1
						className={`text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight ${heroInView ? "animate-fade-up delay-100" : "opacity-0"}`}
					>
						Contact Us
					</h1>
					<p
						className={`text-white/70 text-lg max-w-2xl mx-auto leading-relaxed ${heroInView ? "animate-fade-up delay-200" : "opacity-0"}`}
					>
						Have a project in mind or need a consultation? Reach out and our
						team will get back to you within one business day.
					</p>
				</div>
			</HeroBackground>

			{/* ── Form + Info ── */}
			<section className="py-20 bg-brand-light">
				<div ref={formSectionRef} className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
						{/* ── Contact Info sidebar ── */}
						<div
							className={`lg:col-span-2 space-y-6 ${formInView ? "animate-fade-left delay-100" : "opacity-0"}`}
						>
							<div>
								<h2 className="text-2xl font-bold text-brand-blue mb-2">
									Let's Talk
								</h2>
								<p className="text-gray-500 leading-relaxed">
									Whether you need a technical consultation, a project quote, or
									just want to learn more about what we do — we're happy to hear
									from you.
								</p>
							</div>

							{/* Contact detail cards */}
							<div className="space-y-4">
								{contactDetails.map(({ icon, label, lines, href }) => (
									<div
										key={label}
										className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-200"
									>
										<div className="w-11 h-11 rounded-lg bg-brand-blue flex items-center justify-center text-white shrink-0">
											{icon}
										</div>
										<div>
											<p className="text-xs font-semibold text-brand-green uppercase tracking-widest mb-1">
												{label}
											</p>
											{lines.map((line, i) =>
												href && i === 0 ? (
													<a
														key={line}
														href={href}
														className="block text-brand-blue font-medium hover:text-brand-green transition-colors"
													>
														{line}
													</a>
												) : (
													<p key={line} className="text-gray-600 text-sm">
														{line}
													</p>
												),
											)}
										</div>
									</div>
								))}
							</div>

							{/* Social links */}
							<div className="bg-brand-blue rounded-xl p-6">
								<p className="text-white font-semibold mb-4">Follow Us</p>
								<div className="flex gap-3">
									{socials.map(({ icon, href, label }) => (
										<a
											key={label}
											href={href}
											aria-label={label}
											className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-green hover:text-white transition-colors duration-200"
										>
											{icon}
										</a>
									))}
								</div>
							</div>
						</div>

						{/* ── Contact Form ── */}
						<div
							className={`lg:col-span-3 ${formInView ? "animate-fade-right delay-200" : "opacity-0"}`}
						>
							<div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8">
								<h2 className="text-2xl font-bold text-brand-blue mb-2">
									Send Us a Message
								</h2>
								<p className="text-gray-500 text-sm mb-8">
									All fields marked * are required.
								</p>

								{/* Success state */}
								{status === "success" && (
									<div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
										<CheckCircle2
											size={20}
											className="text-brand-green mt-0.5 shrink-0"
										/>
										<div>
											<p className="font-semibold text-green-800">
												Message sent successfully!
											</p>
											<p className="text-green-700 text-sm mt-0.5">
												We'll get back to you within one business day.
											</p>
										</div>
									</div>
								)}

								{/* Error state */}
								{status === "error" && (
									<div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
										<AlertCircle
											size={20}
											className="text-red-500 mt-0.5 shrink-0"
										/>
										<div>
											<p className="font-semibold text-red-800">
												Something went wrong.
											</p>
											<p className="text-red-700 text-sm mt-0.5">
												Please try again or email us directly.
											</p>
										</div>
									</div>
								)}

								<form
									ref={formRef}
									onSubmit={handleSubmit}
									className="space-y-5"
								>
									{/* Name + Email */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div className="space-y-1.5">
											<label
												className="text-sm font-medium text-brand-blue"
												htmlFor="name"
											>
												Full Name *
											</label>
											<Input
												id="name"
												name="name"
												placeholder="John Doe"
												value={form.name}
												onChange={handleChange}
												required
												className="border-gray-200 focus-visible:ring-brand-green h-11"
											/>
										</div>
										<div className="space-y-1.5">
											<label
												className="text-sm font-medium text-brand-blue"
												htmlFor="email"
											>
												Email Address *
											</label>
											<Input
												id="email"
												name="email"
												type="email"
												placeholder="john@example.com"
												value={form.email}
												onChange={handleChange}
												required
												className="border-gray-200 focus-visible:ring-brand-green h-11"
											/>
										</div>
									</div>

									{/* Phone + Subject */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div className="space-y-1.5">
											<label
												className="text-sm font-medium text-brand-blue"
												htmlFor="phone"
											>
												Phone Number
											</label>
											<Input
												id="phone"
												name="phone"
												type="tel"
												placeholder="+234 800 000 0000"
												value={form.phone}
												onChange={handleChange}
												className="border-gray-200 focus-visible:ring-brand-green h-11"
											/>
										</div>
										<div className="space-y-1.5">
											<label
												className="text-sm font-medium text-brand-blue"
												htmlFor="subject"
											>
												Subject *
											</label>
											<select
												id="subject"
												name="subject"
												value={form.subject}
												onChange={handleChange}
												required
												className="flex h-11 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green text-gray-700"
											>
												<option value="" disabled>
													Select a subject
												</option>
												{subjects.map((s) => (
													<option key={s} value={s}>
														{s}
													</option>
												))}
											</select>
										</div>
									</div>

									{/* Message */}
									<div className="space-y-1.5">
										<label
											className="text-sm font-medium text-brand-blue"
											htmlFor="message"
										>
											Message *
										</label>
										<Textarea
											id="message"
											name="message"
											placeholder="Tell us about your project or enquiry..."
											value={form.message}
											onChange={handleChange}
											required
											rows={6}
											className="border-gray-200 focus-visible:ring-brand-green resize-none"
										/>
									</div>

									<Button
										type="submit"
										disabled={status === "sending"}
										size="lg"
										className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold transition-transform duration-200 hover:scale-[1.02]"
									>
										{status === "sending" ? (
											<>
												<Loader2 size={18} className="animate-spin" /> Sending…
											</>
										) : (
											<>
												<Send size={18} /> Send Message
											</>
										)}
									</Button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Map ── */}
			<section className="bg-white">
				<div
					ref={mapRef}
					className={`${mapInView ? "animate-fade-up" : "opacity-0"}`}
				>
					{/* Map header */}
					<div className="max-w-7xl mx-auto px-6 py-10">
						<div className="flex items-center gap-3 mb-2">
							<MapPin size={20} className="text-brand-green" />
							<h3 className="text-xl font-bold text-brand-blue">Find Us</h3>
						</div>
						<p className="text-gray-500 text-sm">
							Plot 2157 B07 Cadastral Zone, Kamtape, Abuja FCT, Nigeria
						</p>
					</div>

					{/* Map embed */}
					<div className="w-full h-80 bg-brand-light border-t border-gray-100 overflow-hidden">
						<iframe
							title="Sleece Technologies Location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0!2d7.4!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDfCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
							width="100%"
							height="100%"
							style={{ border: 0, filter: "grayscale(20%)" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
