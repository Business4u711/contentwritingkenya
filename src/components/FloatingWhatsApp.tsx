import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254715855361"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
      <div className="relative w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7" fill="currentColor" />
      </div>
    </a>
  );
}
