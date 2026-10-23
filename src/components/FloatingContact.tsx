import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const FloatingContact: React.FC = () => {
  return (
    <aside aria-label="Kênh liên hệ nhanh Tuyến Hoa" className="fixed bottom-22 right-6 z-40 flex flex-col items-end gap-2">
      {/* Zalo Button */}
      <a
        href={STORE_INFO.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 pl-3 pr-3.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 text-xs font-semibold min-h-[40px]"
        title="Chat Zalo với cửa hàng Tuyến Hoa"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Zalo Tuyến Hoa</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${STORE_INFO.hotline}`}
        className="flex items-center gap-2 pl-3 pr-3.5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-full shadow-lg transition-transform hover:scale-105 text-xs font-semibold min-h-[40px]"
        title="Gọi hotline cửa hàng Tuyến Hoa"
      >
        <Phone className="w-4 h-4" />
        <span className="font-mono">{STORE_INFO.hotlineDisplay}</span>
      </a>
    </aside>
  );
};

