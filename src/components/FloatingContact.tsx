import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const FloatingContact: React.FC = () => {
  return (
    <aside
      aria-label="Kênh liên hệ nhanh Tuyến Hoa"
      className="fixed bottom-18 right-5 z-40 flex flex-col items-end gap-1.5"
    >
      {/* Zalo Button */}
      <a
        href={STORE_INFO.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 px-3 py-2 bg-white/95 backdrop-blur-md hover:bg-[#FAF7F2] text-[#1C1917] border border-[#D8C8AC] rounded-full shadow-sm transition-transform hover:scale-103 text-xs font-bold"
        title="Chat Zalo với cửa hàng Tuyến Hoa"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#9A6F2E]" />
        <span>Zalo</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${STORE_INFO.hotline}`}
        className="flex items-center gap-1.5 px-3 py-2 bg-[#1C1917]/95 backdrop-blur-md hover:bg-[#2E2924] text-[#F5E6C8] border border-[#D4AF37]/50 rounded-full shadow-sm transition-transform hover:scale-103 text-xs font-bold"
        title="Gọi hotline cửa hàng Tuyến Hoa"
      >
        <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="font-mono">{STORE_INFO.hotlineDisplay}</span>
      </a>
    </aside>
  );
};
