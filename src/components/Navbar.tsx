import React from 'react';
import { ShoppingBag, PhoneCall, Menu } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenMobileMenu: () => void;
  onOpenChat?: () => void;
  onOpenInstallModal?: () => void;
  onOpenLogoModal?: () => void;
  onSelectCategory: (category: string) => void;
  onSelectTab?: (tab: string) => void;
  activeCategory: string;
  isMobileFrameMode?: boolean;
  onToggleMobileFrameMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenMobileMenu,
  onOpenLogoModal,
  onSelectCategory,
  onSelectTab,
  activeCategory,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E5DEC9] shadow-[0_4px_20px_-10px_rgba(140,98,36,0.08)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-18 sm:h-22">
          {/* Mobile Left: Hamburger Menu Button & Mobile Brand Logo */}
          <div className="flex items-center gap-2.5 md:hidden min-w-0">
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="min-w-[44px] min-h-[44px] -ml-1 flex items-center justify-center rounded-xl text-[#1C1917] bg-[#FAF6EE] border border-[#E5D8C1] hover:bg-[#F3E9D6] transition-all shrink-0 cursor-pointer"
              aria-label="Mở menu danh mục"
            >
              <Menu className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={onOpenLogoModal ? onOpenLogoModal : undefined}
              className="hover:opacity-90 transition-opacity text-left cursor-pointer shrink-0"
              title="Bấm để xem logo thương hiệu Tuyến Hoa"
            >
              <BrandLogo variant="nav-mobile" />
            </button>
          </div>

          {/* Desktop Zone 1: Brand Logo */}
          <button
            type="button"
            onClick={onOpenLogoModal ? onOpenLogoModal : undefined}
            className="hidden md:inline-block shrink-0 hover:opacity-95 transition-opacity text-left cursor-pointer"
            title="Bấm để xem & tải logo thương hiệu Tuyến Hoa"
          >
            <BrandLogo variant="nav" />
          </button>

          {/* Desktop Zone 2: Clear, Large Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base font-bold text-stone-700">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b-2 ${
                activeCategory === 'all'
                  ? 'text-[#1C1917] font-extrabold border-[#B4833E]'
                  : 'border-transparent hover:text-[#1C1917] hover:border-[#D5C5A8]'
              }`}
            >
              Bộ Sưu Tập Chính
            </button>
            {onSelectTab && (
              <>
                <button
                  type="button"
                  onClick={() => onSelectTab('man-khung-1tr')}
                  className="py-2 text-stone-700 hover:text-[#1C1917] border-b-2 border-transparent hover:border-[#D5C5A8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Đệm, Chiếu Mây &amp; Màn Khung
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('fabric-600k')}
                  className="py-2 text-stone-700 hover:text-[#1C1917] border-b-2 border-transparent hover:border-[#D5C5A8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Rèm Vải 600k/m
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('awning-350k')}
                  className="py-2 text-stone-700 hover:text-[#1C1917] border-b-2 border-transparent hover:border-[#D5C5A8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Bạt Xếp 350k/m²
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('real-projects')}
                  className="hidden xl:inline-block py-2 text-stone-700 hover:text-[#1C1917] border-b-2 border-transparent hover:border-[#D5C5A8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Công Trình Thực Tế
                </button>
              </>
            )}
          </nav>

          {/* Zone 3: Bright Champagne Gold Actions (Hotline & Cart) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 rounded-xl border border-[#D8C5A3] bg-[#FAF6EE] hover:bg-[#F3E9D6] text-[#1C1917] text-sm sm:text-base font-extrabold whitespace-nowrap shrink-0 transition-all"
              title="Gọi Hotline Tuyến Hoa 0344.727.528"
            >
              <PhoneCall className="w-4 h-4 text-[#8A5A14] shrink-0" />
              <span className="hidden sm:inline ml-2 font-mono tabular-nums tracking-tight">
                {STORE_INFO.hotlineDisplay}
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-5 py-2.5 text-sm sm:text-base font-extrabold text-[#1C1917] bg-gradient-to-r from-[#F4E3C1] to-[#EBD19E] hover:from-[#EDD8AE] hover:to-[#E2C285] border border-[#C69C4E] rounded-xl active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-2xs"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4 text-[#7A4E0E]" />
              <span className="hidden sm:inline">Giỏ Hàng</span>
              {cartCount > 0 && (
                <span className="min-w-5 h-5 px-1.5 rounded-full bg-[#8A5A14] text-white text-xs font-extrabold font-mono flex items-center justify-center">
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
