import React from 'react';
import { ShoppingBag, PhoneCall } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onSelectCategory,
  activeCategory,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand title, one line */}
          <a
            href="/"
            className="text-xl md:text-2xl font-display font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-amber-900 transition-colors"
          >
            Tuyến Hoa
          </a>

          {/* Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'all' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Tất Cả
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('dem')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'dem' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Đệm Cao Cấp
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('rem-cua')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'rem-cua' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Mành Rèm
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('manh-chieu')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'manh-chieu' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Chiếu Trúc & Mây
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('chan-ga-goi')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'chan-ga-goi' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Chăn Ga Gối
            </button>
            <a
              href="#du-toan-rem"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 text-amber-900 font-semibold"
            >
              Tính Giá Rèm
            </a>
          </nav>

          {/* Zone 3: 1 primary action (Cart & Hotline) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:text-stone-950 hover:bg-stone-50 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-800" />
              <span>{STORE_INFO.hotlineDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Giỏ Hàng</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 text-[11px] font-bold font-mono flex items-center justify-center -mr-1">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
