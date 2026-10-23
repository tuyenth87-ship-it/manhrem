import React from 'react';
import { LayoutGrid, Sparkles, Video, Palette, PhoneCall } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface MobileBottomNavProps {
  activeTab: string;
  onSelectTab: (tab: any) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenCall: () => void;
  onOpenChat: () => void;
  forceVisible?: boolean;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenCall,
  forceVisible = false,
}) => {
  return (
    <nav
      aria-label="Thanh điều hướng di động Tuyến Hoa"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-stone-200 shadow-[0_-6px_24px_rgba(0,0,0,0.08)] pb-safe ${
        forceVisible ? 'max-w-[430px] mx-auto rounded-b-3xl' : 'md:hidden'
      }`}
    >
      <div className="grid grid-cols-5 items-center h-[60px] px-1">
        {/* Tab 1: Trang chủ / Sản phẩm */}
        <button
          type="button"
          onClick={() => onSelectTab('catalog')}
          className={`flex flex-col items-center justify-center min-h-[48px] transition-all active:scale-95 cursor-pointer ${
            activeTab === 'catalog' ? 'text-amber-900 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <div className="relative">
            <LayoutGrid className="w-5 h-5" />
            {activeTab === 'catalog' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-800" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1 whitespace-nowrap">Trang chủ</span>
        </button>

        {/* Tab 2: Rèm Vải 600k/m */}
        <button
          type="button"
          onClick={() => onSelectTab('fabric-600k')}
          className={`flex flex-col items-center justify-center min-h-[48px] transition-all active:scale-95 cursor-pointer ${
            activeTab === 'fabric-600k' ? 'text-amber-900 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="absolute -top-1.5 -right-3 px-1 py-0.2 rounded bg-amber-400 text-stone-950 text-[8px] font-extrabold font-mono">
              600k
            </span>
          </div>
          <span className="text-[10px] tracking-tight mt-1 whitespace-nowrap">Rèm Vải</span>
        </button>

        {/* Tab 3: Rèm Tự Động 4.0 (Center Highlight) */}
        <button
          type="button"
          onClick={() => onSelectTab('motorized-curtains')}
          className={`flex flex-col items-center justify-center min-h-[48px] transition-all active:scale-95 cursor-pointer ${
            activeTab === 'motorized-curtains' ? 'text-emerald-900 font-bold' : 'text-stone-700 hover:text-emerald-900'
          }`}
        >
          <div className="relative">
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-xs border transition-colors ${
                activeTab === 'motorized-curtains'
                  ? 'bg-emerald-700 text-white border-emerald-600'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300'
              }`}
            >
              <Video className="w-4 h-4" />
            </div>
            <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-emerald-500 border border-white animate-pulse" />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5 whitespace-nowrap">Rèm Tự Động</span>
        </button>

        {/* Tab 4: 38 Mành Tre Tranh Phong Thủy */}
        <button
          type="button"
          onClick={() => onSelectTab('bamboo-artworks')}
          className={`flex flex-col items-center justify-center min-h-[48px] transition-all active:scale-95 cursor-pointer ${
            activeTab === 'bamboo-artworks' ? 'text-amber-900 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <div className="relative">
            <Palette className="w-5 h-5 text-amber-700" />
            <span className="absolute -top-1.5 -right-2.5 px-1 py-0.2 rounded bg-stone-900 text-amber-300 text-[8px] font-bold font-mono">
              38
            </span>
          </div>
          <span className="text-[10px] tracking-tight mt-1 whitespace-nowrap">Mành Tre</span>
        </button>

        {/* Tab 5: Direct Hotline Call 0344.727.528 */}
        <button
          type="button"
          onClick={onOpenCall}
          title={`Gọi ngay ${STORE_INFO.hotlineDisplay}`}
          className="flex flex-col items-center justify-center min-h-[48px] transition-all active:scale-95 text-emerald-800 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
            <PhoneCall className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold font-mono tracking-tighter mt-0.5 whitespace-nowrap text-emerald-950">
            0344.727.528
          </span>
        </button>
      </div>
    </nav>
  );
};

