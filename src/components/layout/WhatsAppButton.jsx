import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348030724271"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
