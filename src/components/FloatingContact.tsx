import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const FloatingContact: React.FC = () => {
  return (
    <aside
      aria-label="Kênh liên hệ nhanh Tuyến Hoa"
      className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Zalo Button */}
      <a
        href={STORE_INFO.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 pl-3.5 pr-4 py-2.5 bg-white/95 backdrop-blur-md hover:bg-[#FAF7F2] text-[#1C1917] border border-[#D8C8AC] rounded-full shadow-md transition-transform hover:scale-103 text-xs font-bold min-h-[40px]"
        title="Chat Zalo với cửa hàng Tuyến Hoa"
      >
        <MessageCircle className="w-4 h-4 text-[#9A6F2E]" />
        <span className="hidden sm:inline">Zalo Tuyến Hoa</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${STORE_INFO.hotline}`}
        className="flex items-center gap-2 pl-3.5 pr-4 py-2.5 bg-[#1C1917]/95 backdrop-blur-md hover:bg-[#2E2924] text-[#F5E6C8] border border-[#D4AF37]/50 rounded-full shadow-md transition-transform hover:scale-103 text-xs font-bold min-h-[40px]"
        title="Gọi hotline cửa hàng Tuyến Hoa"
      >
        <Phone className="w-4 h-4 text-[#D4AF37]" />
        <span className="font-mono">{STORE_INFO.hotlineDisplay}</span>
      </a>
    </aside>
  );
};
