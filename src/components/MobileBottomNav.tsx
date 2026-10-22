import React from 'react';
import { LayoutGrid, BookOpen, ShoppingBag, PhoneCall, Bot } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface MobileBottomNavProps {
  activeTab: string;
  onSelectTab: (tab: any) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenCall: () => void;
  onOpenChat: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  onOpenCall,
  onOpenChat,
}) => {
  return (
    <nav
      aria-label="Thanh điều hướng di động cao cấp"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-t border-stone-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] md:hidden pb-safe"
    >
      <div className="grid grid-cols-5 items-center h-16 px-1">
        {/* Tab 1: Catalog */}
        <button
          type="button"
          onClick={() => onSelectTab('catalog')}
          className={`flex flex-col items-center justify-center py-1 min-h-[48px] transition-all active:scale-95 ${
            activeTab === 'catalog' ? 'text-amber-950 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <div className="relative">
            <LayoutGrid className="w-5 h-5" />
            {activeTab === 'catalog' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-900" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1 truncate">Sản phẩm</span>
        </button>

        {/* Tab 2: Curtain Guides & Articles */}
        <button
          type="button"
          onClick={() => onSelectTab('curtain-articles')}
          className={`flex flex-col items-center justify-center py-1 min-h-[48px] transition-all active:scale-95 ${
            activeTab === 'curtain-articles' ? 'text-amber-950 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <div className="relative">
            <BookOpen className="w-5 h-5" />
            {activeTab === 'curtain-articles' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-900" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1 truncate">Cẩm nang</span>
        </button>

        {/* Tab 3: Chatbot AI Advisor Tuyến Hoa */}
        <button
          type="button"
          onClick={onOpenChat}
          className="flex flex-col items-center justify-center py-1 min-h-[48px] transition-all active:scale-95 text-stone-700 hover:text-amber-900"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-amber-100/90 text-amber-950 flex items-center justify-center shadow-xs border border-amber-300">
              <Bot className="w-4.5 h-4.5 text-amber-900" />
            </div>
            {/* Live blinking green status */}
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-amber-950 mt-0.5 truncate">
            Tư vấn
          </span>
        </button>

        {/* Tab 4: Cart */}
        <button
          type="button"
          onClick={onOpenCart}
          className="flex flex-col items-center justify-center py-1 min-h-[48px] text-stone-600 hover:text-stone-900 transition-all active:scale-95 relative"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-stone-800" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 min-w-4 h-4 px-1 rounded-full bg-amber-700 text-white text-[9px] font-bold font-mono flex items-center justify-center shadow-sm">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1 truncate">Giỏ hàng</span>
        </button>

        {/* Tab 5: Direct Hotline Call */}
        <button
          type="button"
          onClick={onOpenCall}
          className="flex flex-col items-center justify-center py-1 min-h-[48px] transition-all active:scale-95 text-emerald-800"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md animate-bounce [animation-duration:3s]">
            <PhoneCall className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5 truncate text-emerald-950">
            Gọi ngay
          </span>
        </button>
      </div>
    </nav>
  );
};
