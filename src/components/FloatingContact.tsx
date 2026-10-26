import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const FloatingContact: React.FC = () => {
  return (
    <aside
      aria-label="Kênh liên hệ nhanh Tuyến Hoa"
      className="fixed bottom-19 right-5 z-40 flex flex-col items-end gap-2"
    >
      {/* Zalo Button */}
      <a
        href={STORE_INFO.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#FAF2E1] text-[#1C1917] border-2 border-[#D8C5A3] rounded-full shadow-md transition-transform hover:scale-103 text-xs sm:text-sm font-extrabold"
        title="Chat Zalo với cửa hàng Tuyến Hoa"
      >
        <MessageCircle className="w-4 h-4 text-[#8A5A14]" />
        <span>Zalo</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${STORE_INFO.hotline}`}
        className="flex items-center gap-1.5 px-3.5 py-2 bg-[#FAF2E1] hover:bg-[#F3DFB8] text-[#1C1917] border-2 border-[#C69C4E] rounded-full shadow-md transition-transform hover:scale-103 text-xs sm:text-sm font-extrabold"
        title="Gọi hotline cửa hàng Tuyến Hoa"
      >
        <Phone className="w-4 h-4 text-[#7A4E0E]" />
        <span className="font-mono">{STORE_INFO.hotlineDisplay}</span>
      </a>
    </aside>
  );
};
